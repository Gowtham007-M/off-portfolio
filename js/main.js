(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  const gsapOk = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  const ST = typeof window.ScrollTrigger !== 'undefined' ? window.ScrollTrigger : null;

  /* ============================================================
     THREE.JS — NEURAL NET TRAINS ALONG YOUR STORY
     Nodes appear and connections draw as you scroll; data
     pulses flow through active links. train ∈ [0,1] = scroll.
     ============================================================ */
  function initThree() {
    const canvas = document.getElementById('bg3d');
    if (!canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 120);
    camera.position.set(0, 0, 30);

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const group = new THREE.Group();
    scene.add(group);

    /* ---- network architecture [input .. hidden .. output] ---- */
    const layerSizes = [4, 6, 8, 6, 5, 4, 3];
    const L = layerSizes.length;
    const spacingX = 3.1;
    const dy = 1.35;
    const totalX = (L - 1) * spacingX;

    const cA = new THREE.Color('#6ea8ff');
    const cB = new THREE.Color('#b18cff');
    const cC = new THREE.Color('#5fe6c8');
    const dim = new THREE.Color('#141b33');
    const tmp = new THREE.Color();

    const nodePos = [];
    const nodeColor = [];
    const nodeLayer = [];
    for (let i = 0; i < L; i++) {
      const n = layerSizes[i];
      const t = i / (L - 1);
      if (t < 0.5) tmp.copy(cA).lerp(cB, t * 2);
      else tmp.copy(cB).lerp(cC, (t - 0.5) * 2);
      for (let j = 0; j < n; j++) {
        nodePos.push(new THREE.Vector3(
          i * spacingX - totalX / 2,
          (j - (n - 1) / 2) * dy,
          (Math.random() - 0.5) * 0.8
        ));
        nodeColor.push(tmp.clone());
        nodeLayer.push(i);
      }
    }
    const nodeCount = nodePos.length;

    /* ---- glow instanced nodes ---- */
    const core = new THREE.InstancedMesh(
      new THREE.IcosahedronGeometry(0.17, 0),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }),
      nodeCount
    );
    const halo = new THREE.InstancedMesh(
      new THREE.IcosahedronGeometry(0.17, 0),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.13, blending: THREE.AdditiveBlending, depthWrite: false }),
      nodeCount
    );
    core.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    halo.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    core.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(nodeCount * 3), 3);
    halo.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(nodeCount * 3), 3);
    group.add(core);
    group.add(halo);

    /* ---- connections between consecutive layers ---- */
    const edges = [];
    let a0 = 0;
    for (let i = 0; i < L - 1; i++) {
      const b0 = a0 + layerSizes[i];
      for (let j = 0; j < layerSizes[i]; j++) {
        for (let k = 0; k < layerSizes[i + 1]; k++) {
          edges.push({ a: a0 + j, b: b0 + k, layer: i });
        }
      }
      a0 = b0;
    }
    const eCount = edges.length;
    const ePos = new Float32Array(eCount * 6);
    const eGeo = new THREE.BufferGeometry();
    eGeo.setAttribute('position', new THREE.BufferAttribute(ePos, 3));
    const lines = new THREE.LineSegments(eGeo, new THREE.LineBasicMaterial({
      color: 0x7fb3ff, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false
    }));
    group.add(lines);

    const eDraw = new Float32Array(eCount);

    /* ---- data pulses ---- */
    const PULSES = 26;
    const pulsePos = new Float32Array(PULSES * 3);
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pulsePos, 3));
    const pulses = new THREE.Points(pGeo, new THREE.PointsMaterial({
      size: 0.14, color: 0xdceaff, transparent: true, opacity: 0.9,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
    }));
    group.add(pulses);
    const pEdge = new Array(PULSES).fill(-1);
    const pT = new Float32Array(PULSES);

    /* ---- scroll → training progress ---- */
    let trainTarget = reduceMotion ? 1 : 0.05;
    let trainCur = reduceMotion ? 1 : 0;

    function layerLv(i, tr) {
      const t = i / (L - 1);
      const lo = t * 0.72;
      const hi = lo + 0.09;
      if (tr <= lo) return 0;
      if (tr >= hi) return 1;
      const x = (tr - lo) / (hi - lo);
      return x * x * (3 - 2 * x);
    }

    if (ST && !reduceMotion) {
      ScrollTrigger.create({
        start: 0,
        end: function () { return document.documentElement.scrollHeight - window.innerHeight; },
        onUpdate: function (self) { trainTarget = self.progress; }
      });
    } else if (!reduceMotion) {
      window.addEventListener('scroll', function () {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        trainTarget = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 1;
      }, { passive: true });
    }

    /* ---- interaction ---- */
    let mouseX = 0, mouseY = 0;
    window.addEventListener('pointermove', function (e) {
      mouseX = e.clientX / window.innerWidth - 0.5;
      mouseY = e.clientY / window.innerHeight - 0.5;
    }, { passive: true });

    const matrix = new THREE.Matrix4();
    const scaleV = new THREE.Vector3();
    const quat = new THREE.Quaternion();
    const col = new THREE.Color();
    const edgeSrc = new THREE.Vector3();
    const edgeDst = new THREE.Vector3();
    const pulseV = new THREE.Vector3();
    let autoY = 0;

    const pctEl = document.getElementById('trainPct');
    let lastPct = -1;

    const clock = new THREE.Clock();

    function render() {
      renderer.render(scene, camera);
    }

    function applyNodes(tr) {
      for (let n = 0; n < nodeCount; n++) {
        const lv = layerLv(nodeLayer[n], tr);
        const s = 0.35 + 1.65 * lv;
        scaleV.set(s, s, s);
        matrix.compose(nodePos[n], quat, scaleV);
        core.setMatrixAt(n, matrix);
        halo.setMatrixAt(n, matrix);
        col.copy(dim).lerp(nodeColor[n], lv);
        core.setColorAt(n, col);
        halo.setColorAt(n, col);
      }
      core.instanceMatrix.needsUpdate = true;
      halo.instanceMatrix.needsUpdate = true;
      if (core.instanceColor) core.instanceColor.needsUpdate = true;
      if (halo.instanceColor) halo.instanceColor.needsUpdate = true;
    }

    function applyEdges(tr) {
      for (let e = 0; e < eCount; e++) {
        const ed = edges[e];
        const nxt = layerLv(ed.layer + 1, tr);
        const desire = Math.max(0, Math.min(1, (nxt - 0.06) / 0.94));
        eDraw[e] += (desire - eDraw[e]) * 0.15;
        edgeSrc.copy(nodePos[ed.a]);
        edgeDst.copy(nodePos[ed.b]);
        ePos[e * 6] = edgeSrc.x;
        ePos[e * 6 + 1] = edgeSrc.y;
        ePos[e * 6 + 2] = edgeSrc.z;
        ePos[e * 6 + 3] = edgeSrc.x + (edgeDst.x - edgeSrc.x) * eDraw[e];
        ePos[e * 6 + 4] = edgeSrc.y + (edgeDst.y - edgeSrc.y) * eDraw[e];
        ePos[e * 6 + 5] = edgeSrc.z + (edgeDst.z - edgeSrc.z) * eDraw[e];
      }
      eGeo.attributes.position.needsUpdate = true;
    }

    function applyPulses(delta) {
      for (let p = 0; p < PULSES; p++) {
        if (pEdge[p] < 0) {
          for (let t = 0; t < 40; t++) {
            const cand = (Math.random() * eCount) | 0;
            if (eDraw[cand] >= 0.98) { pEdge[p] = cand; pT[p] = Math.random(); break; }
          }
        }
        if (pEdge[p] >= 0) {
          pT[p] += delta * 0.55;
          if (pT[p] >= 1) {
            pEdge[p] = -1;
            pulsePos[p * 3] = 100; pulsePos[p * 3 + 1] = 100; pulsePos[p * 3 + 2] = 100;
          } else {
            const ed = edges[pEdge[p]];
            edgeSrc.copy(nodePos[ed.a]);
            edgeDst.copy(nodePos[ed.b]);
            pulseV.lerpVectors(edgeSrc, edgeDst, pT[p]);
            pulsePos[p * 3] = pulseV.x;
            pulsePos[p * 3 + 1] = pulseV.y;
            pulsePos[p * 3 + 2] = pulseV.z;
          }
        }
      }
      pGeo.attributes.position.needsUpdate = true;
    }

    function updateLabel(tr) {
      const pct = Math.round(tr * 100);
      if (pct !== lastPct) {
        lastPct = pct;
        if (pctEl) pctEl.textContent = pct + '%';
      }
    }

    function frame() {
      requestAnimationFrame(frame);
      const delta = Math.min(clock.getDelta(), 0.1);
      trainCur += (trainTarget - trainCur) * (1 - Math.pow(0.002, delta));
      autoY += delta * 0.04;

      const finale = Math.max(0, Math.min(1, (trainCur - 0.9) / 0.1));
      const gs = 1 + finale * 0.34;
      group.scale.set(gs, gs, gs);
      group.rotation.y = (-0.12 + autoY + mouseX * 0.35) * (1 - finale * 0.92);
      group.rotation.x = (0.05 - mouseY * 0.3) * (1 - finale * 0.92);
      camera.position.x += (mouseX * 0.8 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 0.8 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      applyNodes(trainCur);
      applyEdges(trainCur);
      applyPulses(delta);
      updateLabel(trainCur);
      render();
    }

    /* static full network for reduced motion */
    function renderFull() {
      for (let e = 0; e < eCount; e++) {
        const ed = edges[e];
        eDraw[e] = 1;
        edgeSrc.copy(nodePos[ed.a]);
        edgeDst.copy(nodePos[ed.b]);
        ePos[e * 6] = edgeSrc.x; ePos[e * 6 + 1] = edgeSrc.y; ePos[e * 6 + 2] = edgeSrc.z;
        ePos[e * 6 + 3] = edgeDst.x; ePos[e * 6 + 4] = edgeDst.y; ePos[e * 6 + 5] = edgeDst.z;
      }
      eGeo.attributes.position.needsUpdate = true;
      for (let p = 0; p < PULSES; p++) { pulsePos[p * 3] = 100; pulsePos[p * 3 + 1] = 100; pulsePos[p * 3 + 2] = 100; }
      pGeo.attributes.position.needsUpdate = true;
      applyNodes(1);
      updateLabel(1);
      render();
    }

    if (reduceMotion) { renderFull(); }
    else { applyNodes(trainCur); applyEdges(trainCur); frame(); }

    document.addEventListener('visibilitychange', function () {
      if (reduceMotion) return;
      if (!document.hidden) frame();
    });

    window.addEventListener('resize', function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (reduceMotion) render();
    });
  }

  /* ============================================================
     PRELOADER + HERO INTRO
     ============================================================ */
  function hidePreloader() {
    const pre = document.getElementById('preloader');
    if (!pre) return;
    if (reduceMotion || !gsapOk) { pre.style.display = 'none'; return; }
    gsap.to('.pre-logo', { opacity: 0, duration: 0.3, ease: 'power2.in' });
    gsap.to(pre, { yPercent: -100, duration: 0.85, ease: 'power4.inOut', delay: 0.15, onComplete: function () { pre.style.display = 'none'; } });
  }

  function initHeroIntro() {
    const els = document.querySelectorAll('[data-hero]');
    if (!els.length) return;
    if (reduceMotion || !gsapOk) {
      els.forEach(function (el) { el.style.opacity = 1; });
      return;
    }
    gsap.fromTo(els,
      { opacity: 0, y: 46, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.15, ease: 'power3.out', stagger: 0.13, delay: 0.15 });
  }

  /* ============================================================
     SCROLL REVEALS — animejs-style stagger + soft blur
     ============================================================ */
  function initReveals() {
    const items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;
    if (reduceMotion || !gsapOk) {
      items.forEach(function (el) { el.style.opacity = 1; });
      return;
    }
    items.forEach(function (el) {
      gsap.fromTo(el,
        { opacity: 0, y: 46, filter: 'blur(8px)' },
        {
          opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.0, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
        });
    });

    document.querySelectorAll('.bar-track i').forEach(function (i) {
      const w = i.style.getPropertyValue('--w') || '0%';
      gsap.fromTo(i, { width: '0%' }, {
        width: w, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: i, start: 'top 92%' }
      });
    });
  }

  /* ============================================================
     COUNTERS
     ============================================================ */
  function initCounters() {
    const els = document.querySelectorAll('.stat-num');
    if (!els.length) return;
    if (reduceMotion || !gsapOk) {
      els.forEach(function (el) { el.textContent = el.dataset.count; });
      return;
    }
    els.forEach(function (el) {
      const target = parseInt(el.dataset.count, 10) || 0;
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target, duration: 1.6, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%' },
        onUpdate: function () { el.textContent = Math.round(obj.v); }
      });
    });
  }

  /* ============================================================
     NAV — hide/show, active link, mobile menu
     ============================================================ */
  function initNav() {
    const nav = document.getElementById('nav');
    const burger = document.getElementById('navBurger');
    const menu = document.getElementById('mobileMenu');
    let lastY = window.scrollY;

    if (nav) {
      window.addEventListener('scroll', function () {
        const y = window.scrollY;
        if (y > 140 && y > lastY) nav.classList.add('hidden');
        else nav.classList.remove('hidden');
        lastY = y;
      }, { passive: true });
    }

    if (burger && menu) {
      burger.addEventListener('click', function () {
        const open = menu.classList.toggle('open');
        burger.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', String(open));
        menu.setAttribute('aria-hidden', String(!open));
        document.body.style.overflow = open ? 'hidden' : '';
      });
      menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          menu.classList.remove('open');
          burger.classList.remove('open');
          menu.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        });
      });
    }

    const links = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));
    if ('IntersectionObserver' in window && links.length) {
      const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            links.forEach(function (l) {
              l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id);
            });
          }
        });
      }, { rootMargin: '-40% 0px -55% 0px' });
      links.forEach(function (l) {
        const s = document.querySelector(l.getAttribute('href'));
        if (s) io.observe(s);
      });
    }
  }

  /* ============================================================
     MINIMAL CUSTOM CURSOR
     ============================================================ */
  function initCursor() {
    if (reduceMotion || !finePointer || !gsapOk) return;
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;
    document.body.classList.add('has-cursor');

    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let rx = x, ry = y;
    dot.style.opacity = 0; ring.style.opacity = 0;

    window.addEventListener('pointermove', function (e) {
      x = e.clientX; y = e.clientY;
      dot.style.opacity = 1; ring.style.opacity = 1;
      dot.style.transform = 'translate(' + (x - 3.5) + 'px,' + (y - 3.5) + 'px)';
      const t = e.target;
      const interactive = t && t.closest && t.closest('a, button');
      ring.classList.toggle('hover', !!interactive);
    }, { passive: true });

    document.addEventListener('pointerleave', function () {
      dot.style.opacity = 0; ring.style.opacity = 0;
    });

    (function loop() {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      ring.style.transform = 'translate(' + (rx - 17) + 'px,' + (ry - 17) + 'px)';
      requestAnimationFrame(loop);
    })();
  }

  /* ============================================================
     BOOT
     ============================================================ */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  function boot() {
    initThree();
    initNav();
    initCursor();
    initReveals();
    initCounters();

    const start = function () {
      document.body.classList.add('ready');
      hidePreloader();
      initHeroIntro();
      if (ST) ST.refresh();
    };

    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start);

    if (reduceMotion) start();
  }

  document.addEventListener('DOMContentLoaded', boot);
})();

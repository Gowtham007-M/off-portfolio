import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// ---------------------------------------------------------------
// 1. Load LinkedIn Profile Badge script (once, in <head>)
// ---------------------------------------------------------------
const linkedinScript = document.createElement('script');
linkedinScript.src = 'https://platform.linkedin.com/badges/js/profile.js';
linkedinScript.async = true;
linkedinScript.defer = true;
document.head.appendChild(linkedinScript);

// Clean-up on page unload / HMR (prevents duplicates)
const removeLinkedInScript = () => {
  if (document.head.contains(linkedinScript)) {
    document.head.removeChild(linkedinScript);
  }
};
window.addEventListener('beforeunload', removeLinkedInScript);

// ---------------------------------------------------------------
// 2. Render the React app
// ---------------------------------------------------------------
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element (#root) not found in index.html');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ---------------------------------------------------------------
// 3. Performance measuring (optional)
// ---------------------------------------------------------------
reportWebVitals();
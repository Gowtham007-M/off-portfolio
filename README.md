# Gowtham M - Professional Portfolio

A responsive, dark-themed portfolio website showcasing Machine Learning and AI expertise, built with React and Bootstrap.

## Features

- **Professional Design**: Dark theme with teal accent colors optimized for technical professionals
- **Fully Responsive**: Adapts seamlessly across desktop, tablet, and mobile devices
- **Modern Stack**: Built with React 18 and Bootstrap 5 for optimal performance
- **SEO Optimized**: Includes meta tags and structured content for search engine visibility
- **Print Ready**: Optimized styles for professional printing
- **Accessibility**: Follows best practices for screen readers and keyboard navigation

## Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Initialize Project**
   ```bash
   npx create-react-app gowtham-portfolio
   cd gowtham-portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install bootstrap react-bootstrap
   ```

3. **Replace Default Files**
   Replace the content of the following files with the provided code:
   - `package.json`
   - `public/index.html`
   - `src/App.js`
   - `src/App.css`
   - `src/index.js`
   - `src/index.css`
   - `src/reportWebVitals.js`

4. **Create Components Directory**
   ```bash
   mkdir src/components
   ```

5. **Add Portfolio Component**
   Create `src/components/Portfolio.js` with the provided component code

6. **Start Development Server**
   ```bash
   npm start
   ```

## Project Structure

```
gowtham-portfolio/
├── public/
│   ├── index.html          # Main HTML file with SEO meta tags
│   ├── favicon.ico         # Website favicon
│   └── manifest.json       # PWA manifest (auto-generated)
├── src/
│   ├── components/
│   │   └── Portfolio.js    # Main portfolio component
│   ├── App.js              # Root application component
│   ├── App.css             # Application-specific styles
│   ├── index.js            # React DOM rendering entry point
│   ├── index.css           # Global styles and CSS variables
│   └── reportWebVitals.js  # Performance monitoring
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## Customization Guide

### Adding Your Profile Image

1. **Create Images Directory**
   ```bash
   mkdir public/images
   ```

2. **Add Your Photo**
   Place your professional photo (e.g., `profile.jpg`) in the `public/images/` directory

3. **Update Portfolio Component**
   In `src/components/Portfolio.js`, replace the profile placeholder:
   ```jsx
   // Replace this section:
   <div className="profile-image-placeholder">
     <div>
       <i className="fas fa-user fa-3x mb-2"></i>
       <div>Add Your Photo Here</div>
     </div>
   </div>
   
   // With:
   <img 
     src="/images/profile.jpg" 
     alt="Gowtham M - Professional Photo"
     className="img-fluid rounded-circle"
     style={{
       width: '250px',
       height: '250px',
       objectFit: 'cover',
       border: '3px solid #00d4aa'
     }}
   />
   ```

### Customizing Content

#### Personal Information
Update the following sections in `src/components/Portfolio.js`:
- Contact details (phone, email, LinkedIn)
- Professional summary
- Skills and technologies
- Project descriptions

#### Color Theme
Modify the color scheme by updating CSS variables in `src/index.css`:
```css
:root {
  --accent-teal: #00d4aa;        /* Primary accent color */
  --accent-teal-hover: #00b896;  /* Hover state color */
  --primary-dark: #000000;       /* Main background */
  --secondary-dark: #1a1a1a;     /* Section backgrounds */
}
```

#### Typography
The portfolio uses Inter font family. To change fonts, update the Google Fonts link in `public/index.html` and modify the font-family in `src/index.css`.

## Available Scripts

### Development
```bash
npm start          # Start development server (localhost:3000)
npm test           # Run test suite
npm run build      # Create production build
npm run eject      # Eject from Create React App (irreversible)
```

### Production Deployment

#### Build for Production
```bash
npm run build
```

#### Deploy to GitHub Pages
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/gowtham-portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

#### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify's deployment area
3. Configure custom domain if needed

#### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Follow the deployment prompts

## Performance Optimization

The portfolio includes several performance optimizations:
- **Lazy Loading**: Images and components load as needed
- **CSS Variables**: Consistent theming with minimal CSS
- **Bootstrap CDN**: Fast loading of UI components
- **Font Optimization**: Google Fonts with display=swap
- **Web Vitals**: Performance monitoring built-in

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO Features

- Meta descriptions and keywords
- Open Graph tags for social media
- Semantic HTML structure
- Fast loading times
- Mobile-responsive design

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Gowtham M**
- Email: 40eecgowtham@gmail.com
- LinkedIn: gowtham-off
- Location: Chennai, Tamil Nadu

---

Built with ❤️ using React and Bootstrap
# CIT PG E-Library - React Conversion

This is a React-based conversion of the Computer Science Department's e-library website. The project uses **React** with **React Router** for navigation and Bootstrap-inspired CSS for styling.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header component
│   └── Footer.jsx          # Footer component
├── pages/
│   ├── Home.jsx            # Home page
│   ├── Books.jsx           # Books listing page
│   ├── About.jsx           # About/Programmes page
│   ├── Programmes.jsx      # Programmes overview
│   ├── Categories.jsx      # E-library categories
│   ├── PGD.jsx             # Postgraduate Diploma page
│   ├── MSC.jsx             # Master of Science page
│   ├── PHD.jsx             # Doctor of Philosophy page
│   ├── AI.jsx              # Artificial Intelligence resources
│   ├── DataScience.jsx     # Data Science resources
│   ├── Cybersecurity.jsx   # Cybersecurity resources
│   └── Journal.jsx         # Journals & Publications
├── styles/
│   ├── header.css          # Header component styles
│   ├── footer.css          # Footer component styles
│   └── home.css            # Home page specific styles
├── App.jsx                 # Main App component with routing
├── App.css                 # App-wide styles
├── index.jsx               # React entry point
└── index.css               # Global styles
public/
└── index.html              # HTML entry point
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

## Available Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with programmes overview |
| `/books` | Books | Books and resources listing |
| `/about` | About | About the programmes |
| `/programmes` | Programmes | Graduate programmes overview |
| `/categories` | Categories | E-library categories |
| `/pgd` | PGD | Postgraduate Diploma details |
| `/msc` | MSC | Master of Science details |
| `/phd` | PHD | Doctor of Philosophy details |
| `/ai` | AI | Artificial Intelligence resources |
| `/data-science` | Data Science | Data Science resources |
| `/cybersecurity` | Cybersecurity | Cybersecurity resources |
| `/journal` | Journal | Journals & Publications |

## Features

✅ **React Components** - Modular, reusable components  
✅ **React Router** - Client-side routing with navigation  
✅ **Responsive Design** - Mobile-friendly layout  
✅ **Bootstrap-inspired** - Grid system and styling  
✅ **Modern CSS** - No jQuery or external dependencies  

## Key Changes from Original

- Removed jQuery dependencies
- Converted HTML pages to React components
- Implemented React Router for navigation
- Replaced jQuery event handlers with React hooks
- Created reusable Header and Footer components
- Modern CSS without jQuery plugins
- Clean component structure

## Technologies Used

- **React 18** - UI library
- **React Router 6** - Client-side routing
- **CSS3** - Styling
- **Bootstrap Grid Concepts** - Layout

## Customization

### Adding a New Page

1. Create a new file in `src/pages/NewPage.jsx`
2. Import Header, Footer, and use the standard layout
3. Add route in `src/App.jsx`:
   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```
4. Update navigation in `src/components/Header.jsx`

### Styling

- Global styles: `src/index.css` and `src/App.css`
- Component-specific styles: `src/styles/*.css`
- Use CSS custom properties for theming

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The app uses:
- Code splitting with React Router
- Lazy loading for route components
- Optimized images
- Minified CSS and JavaScript

## Future Enhancements

- Add state management (Redux/Context API) for global data
- Integrate with backend API for dynamic content
- Add search functionality
- Implement user authentication
- Add download functionality for resources
- Analytics integration

## Support

For issues or questions, please contact the Computer Science Department at:
- Email: cs@veritas.edu.ng
- Phone: +234-8107396043

## License

Copyright © 2024 Veritas University Abuja - Computer Science Department

---

**Converted to React by v0**  
Original static HTML project converted to modern React application

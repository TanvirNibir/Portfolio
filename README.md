# Portfolio Website

A modern, professional portfolio website built with React, Vite, and custom CSS. Features a sleek black and violet theme with smooth animations and responsive design.

## 🌐 Live Demo

**Visit the live website:** [https://portfolio-pied-xi-xl1k3y25ca.vercel.app/](https://portfolio-pied-xi-xl1k3y25ca.vercel.app/)

## ✨ Features

- 🎨 Modern and professional UI with black and violet theme
- 📱 Fully responsive layout for all devices
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 🧭 Multi-page navigation with React Router
- 🎯 Glassmorphism effects and modern design patterns
- 📧 Contact form with email integration

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TanvirNibir/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Update Personal Information

1. **Header & Footer**: Edit `src/components/Header.jsx` and `src/components/Footer.jsx`
2. **Hero Section**: Update `src/components/sections/Hero.jsx` with your name and tagline
3. **About Section**: Modify `src/components/sections/About.jsx` with your bio and education
4. **Skills**: Update skills in `src/components/sections/Skills.jsx`
5. **Projects**: Add your projects in `src/components/sections/Projects.jsx`
6. **Contact**: Update email and social links in `src/components/sections/Contact.jsx` and `src/components/Footer.jsx`

### Styling

The project uses component-specific CSS files located in `src/styles/`. Each component has its own CSS file for easy customization:
- `Header.css` - Navigation styling
- `Hero.css` - Hero section styling
- `About.css` - About section styling
- `Skills.css` - Skills section styling
- `Projects.css` - Projects section styling
- `Contact.css` - Contact form styling

## 📁 Project Structure

```
├── public/
│   └── images/
│       ├── about/
│       └── projects/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── IntroSection.jsx
│   │   │   ├── QuickStats.jsx
│   │   │   ├── FeaturedProjects.jsx
│   │   │   └── Tools.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AboutPage.jsx
│   │   ├── SkillsPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── NotFound.jsx
│   ├── styles/
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Contact.css
│   │   └── ...
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Custom CSS** - Component-specific styling with glassmorphism effects

## 📦 Deployment

This project is deployed on [Vercel](https://vercel.com). The deployment is configured via `vercel.json`.

To deploy:
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on every push to the main branch

## 📝 License

MIT

## 👤 Author

**Tanvir Nibir**
- GitHub: [@TanvirNibir](https://github.com/TanvirNibir)
- LinkedIn: [tanvirnibir](https://www.linkedin.com/in/tanvirnibir/)
- Email: tanvir.nibir@metropolia.fi

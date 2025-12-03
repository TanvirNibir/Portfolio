# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 🎨 Styled with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Header & Footer**: Edit `src/components/Header.tsx` and `src/components/Footer.tsx`
2. **Hero Section**: Update `src/components/sections/Hero.tsx` with your name and tagline
3. **About Section**: Modify `src/components/sections/About.tsx` with your bio
4. **Skills**: Update skills and proficiency levels in `src/components/sections/Skills.tsx`
5. **Projects**: Add your projects in `src/components/sections/Projects.tsx`
6. **Contact**: Update email and social links in `src/components/sections/Contact.tsx` and `src/components/Footer.tsx`

### Styling

The project uses Tailwind CSS. You can customize colors, spacing, and other design tokens in `tailwind.config.ts`.

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Contact.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## License

MIT


# Portfolio

A modern, premium-quality portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. This website showcases my skills, projects, education, and achievements as a Computer Science & Data Science student.

## 🎨 Design Features

- **Modern UI/UX**: Inspired by Apple, Linear, and Vercel aesthetics
- **Light Theme**: Clean white, soft grey, and pastel blue color palette
- **Smooth Animations**: Fade-in, slide-in, and floating animations
- **Glassmorphism Effects**: Premium glass-like UI elements
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Navigation**: Smooth scrolling and active section tracking
- **Premium Components**: Professional cards, timelines, and form designs

## 🚀 Sections

1. **Hero Section** - Introduction with animated elements and CTA buttons
2. **About Me** - Personal introduction and contact information
3. **Skills** - Categorized technical skills with icons
4. **Projects** - Featured projects with tech stack and links
5. **Experience** - Timeline of activities and involvement
6. **Achievements** - Certifications and hackathon participation
7. **Education** - Academic qualifications with scores
8. **Contact** - Contact form and social media links
9. **Footer** - Clean footer with links

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool
- **Lucide React** - Beautiful icons

## 📦 Installation

1. **Clone the repository**:
```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run development server**:
```bash
npm run dev
```

4. **Build for production**:
```bash
npm run build
```

5. **Preview production build**:
```bash
npm run preview
```

## 🎯 Usage

### Development
The development server will start at `http://localhost:5173` by default. The page will automatically reload when you make changes.

### Production Build
The production build will be created in the `dist` folder. You can deploy this folder to any static hosting service.

## 📝 Customization

### Add Your Profile Photo
1. Add your professional photo as `/public/profile.jpg`
2. Recommended: Square image, minimum 800x800px
3. Formats supported: JPG, PNG, WebP
4. The site will show a placeholder with your initials until you add your photo

### Colors
Modify the color palette in [tailwind.config.js](tailwind.config.js):
```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Content
Update personal information in [src/App.tsx](src/App.tsx) - search for text content and replace with your own details.

### Resume
Place your resume PDF file as `resume.pdf` in the `public` folder for the download button to work.

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Deploy: `npm run deploy`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Design System

### Typography
- **Font Family**: Inter, -apple-system, system-ui
- **Headings**: Bold, gradient text effects
- **Body**: Regular weight, comfortable line-height

### Color Palette
- **Primary Blue**: #0ea5e9 (sky-500)
- **Background**: White, Soft Grey (#f9fafb), Blue tints
- **Text**: Dark Grey (#111827) for primary text
- **Accents**: Pastel blues and purples

### Spacing
- Section Padding: 16-24 units (responsive)
- Component Gaps: 4-8 units
- Container Max Width: 1280px

## 📄 License

This project is open source and available under the MIT License.

## 👤 Contact

**Rakshitha J**
- Email: jvnrs125@gmail.com | raj23csds@cmrit.ac.in
- LinkedIn: [linkedin.com/in/rakshitha-j-3b5b97352](http://www.linkedin.com/in/rakshitha-j-3b5b97352)
- GitHub: [github.com/raj23csds-lab](https://github.com/raj23csds-lab)
- LeetCode: [leetcode.com/u/Rakshitha_J__/](https://leetcode.com/u/Rakshitha_J__/)

---

Built with ❤️ using React, TypeScript & Tailwind CSS

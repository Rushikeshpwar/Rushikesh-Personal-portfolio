# Rushikesh Pawar — Full-Stack MERN Developer Portfolio

A modern, high-performance personal portfolio built with **React 19**, **Vite**, **Tailwind CSS**, and **Framer Motion**, mirroring the exact architecture and design system of the reference portfolio.

## ✨ Features

- **Hero Section**: Dynamic typing animation for roles, glowing profile photo, resume download, and social links.
- **About Me**: Bio summary, key full-stack capabilities, and interactive milestone timeline.
- **Skills Matrix**: Categorized tech stacks across Frontend, Backend, Databases & DevOps.
- **Experience & Education**: Timeline covering the 7-month internship at Edso Services, industrial training at KiranAcademy, and B.Tech degree.
- **Featured Projects**: Filter by category (`MERN`, `React.js`, `Socket.IO`, etc.), live text search, tech stack pills, and case study detail routes.
- **Certifications & Activities**: Interactive cards with direct links to view verified PDF/image certificates.
- **GitHub Analytics**: Live integration with GitHub API (`@Rushikeshpwar`), animated counters, language breakdown, and live streak cards.
- **Services ("What I Build")**: 6 full-stack capability cards with Lucide icons.
- **Contact Form**: EmailJS integration with fallback direct email protocol and Toastify notifications.
- **Utilities**: Reading scroll progress bar, back-to-top floating button, and loader animation.

## 🚀 Getting Started

### 1. Install dependencies:
```bash
npm install
```

### 2. Run locally in development mode:
```bash
npm run dev
```

### 3. Build for production:
```bash
npm run build
```

### 4. Preview production build:
```bash
npm run preview
```

## 📬 Contact Form Setup (EmailJS - Optional)
To receive emails directly through the contact form, create a free account at [EmailJS](https://www.emailjs.com/) and update your `.env` file:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
If left blank, the form automatically uses the `mailto:` fallback to open the visitor's default email client prefilled with their subject and message.

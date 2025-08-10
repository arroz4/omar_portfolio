# Omar Barrera - Portfolio Website

A professional portfolio website showcasing my experience as a Software Engineer and Data Engineer specializing in Azure technologies.

## 🌐 Live Demo

Visit the live portfolio: [https://arroz4.github.io/omar_portfolio/](https://arroz4.github.io/omar_portfolio/)

## 📋 Features

- **Landing Page**: Introduction with image carousel and skills overview
- **Resume Page**: Professional experience, education, and downloadable CV
- **Projects Page**: Showcase of development projects (ready for future content)
- **About Me Page**: Personal information and background (ready for future content)
- **Gallery Page**: Photo gallery featuring personal images
- **Responsive Design**: Mobile-friendly layout using Bootstrap
- **Modern UI**: Clean, professional styling with interactive elements

## 🛠️ Technologies Used

- **Frontend**: React 19.1.1 with TypeScript
- **Routing**: React Router DOM with Hash Router for GitHub Pages compatibility
- **Styling**: Bootstrap 5.3.7 with Bootstrap Icons
- **Deployment**: GitHub Pages
- **Build Tool**: Create React App

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arroz4/omar_portfolio.git
   cd omar_portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Build and Deploy

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── cats/          # Gallery images
│   │   └── omar/          # Carousel images
│   ├── files/
│   │   └── OmarBarrera_CV2025.pdf
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── LandingPage.tsx
│   │   ├── Resume.tsx
│   │   ├── Projects.tsx
│   │   ├── AboutMe.tsx
│   │   └── Gallery.tsx
│   ├── App.tsx
│   └── index.tsx
└── package.json
```

## 🎨 Key Components

- **Navigation**: Bootstrap navbar with responsive design
- **Image Carousel**: Bootstrap carousel with auto-rotation
- **Skills Grid**: Interactive skill categories with hover effects
- **CV Download**: Programmatic file download functionality
- **Responsive Gallery**: Bootstrap grid layout for images

## 📝 Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to GitHub Pages
- `npm test` - Launches the test runner

## 🔧 Configuration

The project is configured for GitHub Pages deployment with:
- `homepage` field set in package.json
- HashRouter for client-side routing
- Proper asset path handling with `process.env.PUBLIC_URL`

## 📞 Contact

- **LinkedIn**: [omar-barrera-swe](https://www.linkedin.com/in/omar-barrera-swe)
- **GitHub**: [arroz4](https://github.com/arroz4)
- **Email**: omarb22@gmail.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Omar Barrera

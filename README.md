# 🌊 Ocean Dreams - 3D Water Website

An immersive 3D ocean experience built with modern web technologies. Dive into a mesmerizing underwater world with realistic water simulation, custom GLSL shaders, and smooth animations.

## ✨ Features

- **Real-time Water Simulation** - Custom GLSL shaders for realistic water effects
- **3D Island Paradise** - Procedurally generated islands and landscapes
- **Atmospheric Effects** - Floating clouds and dynamic lighting
- **Smooth Animations** - Framer Motion powered UI transitions
- **Responsive Design** - Optimized for all screen sizes
- **Scroll-based Navigation** - Immersive scroll-controlled camera movement

## 🛠️ Technology Stack

- **React** - Component-based UI framework
- **React Three Fiber** - React bindings for Three.js
- **@react-three/drei** - Useful helpers and components
- **Three.js** - 3D graphics library
- **GLSL** - Custom shaders for water effects
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vite** - Fast build tool and dev server

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/3d-water-website.git
cd 3d-water-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Customization

### Water Shader
The water effects are controlled by the custom GLSL shader in `src/shaders/WaterShader.js`. You can modify:
- Wave patterns and frequency
- Water color and transparency
- Foam and caustic effects
- Animation speed

### 3D Scene
The main 3D scene is defined in `src/components/Scene.jsx`. Customize:
- Island positions and sizes
- Cloud density and movement
- Lighting setup
- Camera behavior

### UI Components
The user interface is built with TailwindCSS and Framer Motion in `src/components/UI.jsx`. Easily modify:
- Text content and styling
- Animation timings
- Color schemes
- Layout structure

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

The project includes all necessary Vercel configuration.

## 🎯 Performance

- Optimized 3D rendering with efficient shaders
- Lazy loading and code splitting
- Responsive design for all devices
- Smooth 60fps animations

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

WebGL support is required for the 3D effects.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Three.js community for excellent documentation
- React Three Fiber for seamless React integration
- Framer Motion for smooth animations
- TailwindCSS for rapid styling

---

Built with ❤️ using React Three Fiber & GLSL
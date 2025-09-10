import { motion } from 'framer-motion'
import { useScroll } from '@react-three/drei'

function HeroSection() {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <div className="text-center z-10 max-w-4xl mx-auto px-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl"
        >
          Ocean Dreams
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg"
        >
          Dive into a mesmerizing 3D ocean experience
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300"
          >
            Explore Now
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-white/50 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
            About the
            <span className="block text-cyan-300 drop-shadow-lg">
              Experience
            </span>
          </h2>
          
          <p className="text-lg text-white mb-6 leading-relaxed drop-shadow-lg">
            This immersive 3D ocean experience combines cutting-edge web technologies 
            with stunning visual effects. Built with React Three Fiber and custom GLSL 
            shaders, every wave and ripple is rendered in real-time.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-white">Real-time water simulation</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-white">Custom GLSL shaders</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-white">Responsive design</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-white">Smooth animations</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Technology Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl mb-2">⚛️</div>
                <div className="text-white">React</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎨</div>
                <div className="text-white">Three.js</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌊</div>
                <div className="text-white">GLSL</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎭</div>
                <div className="text-white">Framer Motion</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: "🌊",
      title: "Dynamic Water",
      description: "Real-time water simulation with custom shaders"
    },
    {
      icon: "🏝️",
      title: "Island Paradise",
      description: "Procedurally generated islands and landscapes"
    },
    {
      icon: "☁️",
      title: "Atmospheric Clouds",
      description: "Floating clouds with realistic movement"
    },
    {
      icon: "✨",
      title: "Visual Effects",
      description: "Caustics, foam, and sparkling water effects"
    }
  ]

  return (
    <div className="h-screen flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
            Features
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-lg">
            Experience the power of modern web technologies in this immersive 3D environment
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ContactSection() {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
            Get in Touch
          </h2>
          
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto drop-shadow-lg">
            Ready to create your own immersive 3D experiences? 
            Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full text-white font-bold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg"
            >
              Start Your Project
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-transparent border-2 border-white/50 rounded-full text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              View Portfolio
            </motion.button>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-white drop-shadow-lg"
          >
            <p>Built with ❤️ using React Three Fiber & GLSL</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

function UI() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ContactSection />
    </div>
  )
}

export default UI

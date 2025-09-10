import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll, useScroll } from '@react-three/drei'
import { Suspense } from 'react'
import Scene from './components/Scene'
import UI from './components/UI'
import LoadingScreen from './components/LoadingScreen'

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Suspense fallback={<LoadingScreen />}>
        <Canvas
          camera={{ position: [0, 5, 10], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ScrollControls pages={4} damping={0.1}>
            <Scene />
            <Scroll html>
              <UI />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </Suspense>
    </div>
  )
}

export default App

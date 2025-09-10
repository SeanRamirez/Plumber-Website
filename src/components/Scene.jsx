import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, Sky, Environment } from '@react-three/drei'
import * as THREE from 'three'
import { WaterShader } from '../shaders/WaterShader'

function Water() {
  const meshRef = useRef()
  const { camera, clock } = useThree()
  
  const waterGeometry = useMemo(() => {
    const geometry = new THREE.PlaneGeometry(50, 50, 128, 128)
    // Add some displacement to the vertices for more realistic water
    const positions = geometry.attributes.position.array
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 2] = Math.random() * 0.1 - 0.05 // Random height variation
    }
    geometry.attributes.position.needsUpdate = true
    geometry.computeVertexNormals()
    return geometry
  }, [])

  const waterMaterial = useMemo(() => {
    const material = new THREE.ShaderMaterial({
      uniforms: {
        ...WaterShader.uniforms,
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        cameraPosition: { value: camera.position }
      },
      vertexShader: WaterShader.vertexShader,
      fragmentShader: WaterShader.fragmentShader,
      transparent: true,
      side: THREE.DoubleSide
    })
    return material
  }, [camera.position])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.time.value = state.clock.elapsedTime
      meshRef.current.material.uniforms.cameraPosition.value.copy(camera.position)
    }
  })

  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.1}>
      <mesh
        ref={meshRef}
        geometry={waterGeometry}
        material={waterMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2, 0]}
      />
    </Float>
  )
}

function Islands() {
  const islandGeometry = useMemo(() => {
    const geometry = new THREE.ConeGeometry(3, 2, 8)
    return geometry
  }, [])

  const islandMaterial = useMemo(() => {
    return new THREE.MeshLambertMaterial({ 
      color: '#2d5016',
      transparent: true,
      opacity: 0.8
    })
  }, [])

  return (
    <group>
      {/* Main island */}
      <mesh
        geometry={islandGeometry}
        material={islandMaterial}
        position={[0, -1, 0]}
        scale={[1, 1, 1]}
      />
      
      {/* Smaller islands */}
      <mesh
        geometry={islandGeometry}
        material={islandMaterial}
        position={[8, -1.5, 5]}
        scale={[0.6, 0.6, 0.6]}
      />
      
      <mesh
        geometry={islandGeometry}
        material={islandMaterial}
        position={[-6, -1.3, 3]}
        scale={[0.4, 0.4, 0.4]}
      />
      
      <mesh
        geometry={islandGeometry}
        material={islandMaterial}
        position={[4, -1.8, -8]}
        scale={[0.8, 0.8, 0.8]}
      />
    </group>
  )
}

function Clouds() {
  const cloudGeometry = useMemo(() => {
    return new THREE.SphereGeometry(1, 8, 6)
  }, [])

  const cloudMaterial = useMemo(() => {
    return new THREE.MeshLambertMaterial({ 
      color: '#ffffff',
      transparent: true,
      opacity: 0.6
    })
  }, [])

  return (
    <group>
      {Array.from({ length: 15 }, (_, i) => (
        <Float
          key={i}
          speed={0.2 + Math.random() * 0.3}
          rotationIntensity={0.1}
          floatIntensity={0.2}
        >
          <mesh
            geometry={cloudGeometry}
            material={cloudMaterial}
            position={[
              (Math.random() - 0.5) * 100,
              Math.random() * 10 + 5,
              (Math.random() - 0.5) * 100
            ]}
            scale={[
              1 + Math.random() * 2,
              0.5 + Math.random() * 0.5,
              1 + Math.random() * 2
            ]}
          />
        </Float>
      ))}
    </group>
  )
}

function Scene() {
  const { camera } = useThree()

  useFrame((state) => {
    // Gentle camera movement
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 2
    camera.position.z = 10 + Math.cos(state.clock.elapsedTime * 0.1) * 2
    camera.lookAt(0, 0, 0)
  })

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, 5, -10]} intensity={0.5} color="#4a90e2" />
      
      {/* Environment */}
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
        turbidity={10}
        rayleigh={2}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
      />
      
      {/* Water */}
      <Water />
      
      {/* Islands */}
      <Islands />
      
      {/* Clouds */}
      <Clouds />
      
      {/* Environment reflections */}
      <Environment preset="sunset" />
    </>
  )
}

export default Scene

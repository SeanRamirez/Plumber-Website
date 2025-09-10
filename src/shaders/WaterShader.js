import * as THREE from 'three'

export const WaterShader = {
  uniforms: {
    time: { value: 0.0 },
    resolution: { value: new THREE.Vector2() },
    waterColor: { value: new THREE.Color(0x006994) },
    foamColor: { value: new THREE.Color(0xffffff) },
    sunDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
    cameraPosition: { value: new THREE.Vector3() },
  },

  vertexShader: `
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    
    void main() {
      vUv = uv;
      vPosition = position;
      vNormal = normal;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  fragmentShader: `
    uniform float time;
    uniform vec2 resolution;
    uniform vec3 waterColor;
    uniform vec3 foamColor;
    uniform vec3 sunDirection;
    uniform vec3 cameraPosition;
    
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    
    // Noise function
    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }
    
    // Smooth noise
    float smoothNoise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float a = noise(i);
      float b = noise(i + vec2(1.0, 0.0));
      float c = noise(i + vec2(0.0, 1.0));
      float d = noise(i + vec2(1.0, 1.0));
      
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }
    
    // Fractal noise
    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;
      
      for (int i = 0; i < 4; i++) {
        value += amplitude * smoothNoise(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
      }
      
      return value;
    }
    
    // Wave function
    float wave(vec2 p, float time) {
      return sin(p.x * 2.0 + time) * 0.1 + 
             sin(p.y * 3.0 + time * 1.5) * 0.05 +
             sin(p.x * 5.0 + p.y * 2.0 + time * 2.0) * 0.02;
    }
    
    void main() {
      vec2 uv = vUv;
      vec2 p = vWorldPosition.xz * 0.1;
      
      // Animated waves
      float wave1 = wave(p, time);
      float wave2 = wave(p * 2.0, time * 1.3);
      float wave3 = wave(p * 4.0, time * 0.7);
      
      float totalWave = wave1 + wave2 * 0.5 + wave3 * 0.25;
      
      // Foam based on wave height
      float foam = smoothstep(0.1, 0.2, totalWave);
      
      // Fresnel effect
      vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
      float fresnel = 1.0 - max(dot(normalize(vNormal), viewDirection), 0.0);
      fresnel = pow(fresnel, 2.0);
      
      // Caustics
      vec2 causticUV = p + totalWave * 0.5;
      float caustics = fbm(causticUV * 3.0 + time * 0.5);
      caustics = pow(caustics, 2.0);
      
      // Color mixing
      vec3 color = mix(waterColor, waterColor * 1.2, caustics);
      color = mix(color, foamColor, foam * 0.8);
      
      // Add some sparkle
      float sparkle = smoothNoise(p * 20.0 + time * 3.0);
      sparkle = pow(sparkle, 10.0);
      color += sparkle * 0.3;
      
      // Apply fresnel for transparency
      float alpha = 0.7 + fresnel * 0.3;
      
      gl_FragColor = vec4(color, alpha);
    }
  `
}

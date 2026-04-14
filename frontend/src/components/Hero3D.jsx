import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Points, PointMaterial } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function TechSphere() {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.y += 0.004
    ref.current.rotation.x = state.mouse.y * 0.2
    ref.current.rotation.z = state.mouse.x * 0.15
  })

  return (
    <Float speed={1.8} rotationIntensity={1.4} floatIntensity={1.8}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshStandardMaterial color="#5eead4" wireframe emissive="#8b5cf6" emissiveIntensity={0.8} />
      </mesh>
    </Float>
  )
}

function StarField() {
  const points = useMemo(() => {
    const p = new Float32Array(1200)
    for (let i = 0; i < 1200; i++) p[i] = THREE.MathUtils.randFloatSpread(12)
    return p
  }, [])

  return (
    <Points positions={points} stride={3} frustumCulled>
      <PointMaterial transparent color="#c4b5fd" size={0.02} sizeAttenuation depthWrite={false} />
    </Points>
  )
}

export default function Hero3D() {
  return (
    <div className="h-[55vh] md:h-[70vh]">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1.1} />
        <pointLight position={[3, 3, 3]} intensity={2} color="#5eead4" />
        <StarField />
        <TechSphere />
      </Canvas>
    </div>
  )
}

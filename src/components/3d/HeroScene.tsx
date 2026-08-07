"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import type * as THREE from "three";

function PointerRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y += (x * 0.6 - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (-y * 0.35 - group.current.rotation.x) * 0.04;
  });

  return <group ref={group}>{children}</group>;
}

function Centerpiece({ animated }: { animated: boolean }) {
  const mesh = (
    <mesh>
      <icosahedronGeometry args={[1.6, 1]} />
      <MeshDistortMaterial
        color="#8b5cf6"
        emissive="#22d3ee"
        emissiveIntensity={0.12}
        roughness={0.15}
        metalness={0.65}
        distort={animated ? 0.35 : 0.1}
        speed={animated ? 1.6 : 0}
      />
    </mesh>
  );

  if (!animated) return mesh;

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.1}>
      {mesh}
    </Float>
  );
}

interface HeroSceneProps {
  reducedMotion: boolean;
  lowPower: boolean;
}

export function HeroScene({ reducedMotion, lowPower }: HeroSceneProps) {
  const animated = !reducedMotion;

  const scene = (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={1.4} color="#8b5cf6" />
      <pointLight position={[-4, -2, -3]} intensity={0.9} color="#22d3ee" />
      <Suspense fallback={null}>
        <Centerpiece animated={animated} />
        {animated && !lowPower && (
          <Sparkles count={100} scale={[8, 6, 6]} size={2} speed={0.25} color="#a78bfa" />
        )}
      </Suspense>
    </>
  );

  return (
    <Canvas
      dpr={[1, lowPower ? 1.25 : 2]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      {animated ? <PointerRig>{scene}</PointerRig> : scene}
    </Canvas>
  );
}

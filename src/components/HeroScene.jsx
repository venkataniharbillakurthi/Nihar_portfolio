import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Icosahedron, Torus, Octahedron } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const FloatingIcosahedron = () => {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <Icosahedron ref={meshRef} args={[1.4, 1]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#2dd4bf"
          wireframe
          distort={0.3}
          speed={2}
          roughness={0.2}
        />
      </Icosahedron>
    </Float>
  );
};

const OrbitingTorus = () => {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.position.x = Math.cos(t * 0.5) * 3;
    meshRef.current.position.z = Math.sin(t * 0.5) * 3;
    meshRef.current.position.y = Math.sin(t * 0.8) * 0.5;
    meshRef.current.rotation.x = t * 0.4;
    meshRef.current.rotation.z = t * 0.3;
  });

  return (
    <Torus ref={meshRef} args={[0.4, 0.15, 16, 32]}>
      <MeshWobbleMaterial
        color="#5eead4"
        factor={0.4}
        speed={2}
        transparent
        opacity={0.6}
      />
    </Torus>
  );
};

const FloatingOctahedron = () => {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.position.x = Math.sin(t * 0.3) * 2.5;
    meshRef.current.position.z = Math.cos(t * 0.3) * 2;
    meshRef.current.position.y = Math.cos(t * 0.6) * 0.8 + 1;
    meshRef.current.rotation.y = t * 0.5;
  });

  return (
    <Octahedron ref={meshRef} args={[0.5]}>
      <MeshDistortMaterial
        color="#99f6e4"
        wireframe
        distort={0.2}
        speed={3}
        transparent
        opacity={0.5}
      />
    </Octahedron>
  );
};

const Particles = () => {
  const points = useRef(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    points.current.rotation.y = clock.getElapsedTime() * 0.03;
    points.current.rotation.x = clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={200}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#2dd4bf" size={0.03} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#2dd4bf" />
        <pointLight position={[-5, -5, 5]} intensity={0.4} color="#5eead4" />
        <FloatingIcosahedron />
        <OrbitingTorus />
        <FloatingOctahedron />
        <Particles />
      </Canvas>
    </div>
  );
};

export default HeroScene;

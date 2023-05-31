import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, useGLTF, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const StarsCanvas = () => {
  const Sphere = random.inSphere(new Float32Array(7000), { radius: 1.1 });

  const Stars = () => {
    const ref = React.useRef();

    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    });

    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={Sphere} stride={3} frustumCulled>
          <PointMaterial transparent color="#f272c8" size={0.002} sizeAttenuation depthWrite={false} />
        </Points>
      </group>
    );
  };

  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;

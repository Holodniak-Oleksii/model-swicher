import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useCursor } from "@react-three/drei";

export const LoadGLTF = ({ url }) => {
  const mesh = useRef();
  const [hovered, set] = useState();
  // useCursor(hovered /*'pointer', 'auto'*/);
  useFrame((state, delta) => {
    if (hovered) mesh.current.rotation.y += 0.01;
  });
  const gltf = useLoader(GLTFLoader, url);
  return (
    <>
      <mesh castShadow position={[0, 0, 0]} ref={mesh}>
        <primitive
          position={[0, 0, 0]}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
          object={gltf.scene}
        />
      </mesh>
    </>
  );
};

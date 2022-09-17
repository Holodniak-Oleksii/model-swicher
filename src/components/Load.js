import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

export const LoadGLTF = ({ url }) => {
  const mesh = useRef();
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01));
  const gltf = useLoader(GLTFLoader, url);
  return (
    <mesh castShadow position={[0, 0, 0]} ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

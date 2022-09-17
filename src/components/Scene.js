import { Bounds, Center, Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { LoadGLTF } from "./Load";

export const Scene = ({ url }) => {
  return (
    <Canvas shadows>
      <OrbitControls makeDefault />
      <ambientLight intensity={0.6} />
      {/* to gray color set intensity = ~80*/}
      <directionalLight intensity={0.5} />
      <Suspense fallback={<Html center>loading...</Html>}>
        {/* scaling and alignment of the model in the center */}
        <Bounds fit clip observe damping={6} margin={1.2}>
          <Center center>
            {/* add coordinate axes */}
            {/* <primitive object={new THREE.AxesHelper(10)} /> */}
            {/* {scene} */}

            <LoadGLTF url={url} />
          </Center>
        </Bounds>
      </Suspense>
    </Canvas>
  );
};

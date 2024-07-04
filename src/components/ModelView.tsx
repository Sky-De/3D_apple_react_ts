import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./Lights";
import { Suspense } from "react";
import { IPhoneModel } from "./IPhoneModel";
import * as THREE from "three";
import Loader from "./Loader";

type ModelViewProps = {
  index: number;
  groupRef: React.MutableRefObject<THREE.Group<THREE.Object3DEventMap>>;
  gsapType: string;
  controlRef: React.MutableRefObject<null>;
  setRotationState: React.Dispatch<React.SetStateAction<number>>;
  item: {
    title: string;
    color: string[];
    img: string;
  };
  size: string;
};
//FIX - replace this type with better type check
type temperaryType = {
  getAzimuthalAngle: () => number;
};

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}: ModelViewProps) => {
  const handleOnEnd = () => {
    if (controlRef.current) {
      console.log(controlRef.current);
      setRotationState(
        (controlRef.current as temperaryType).getAzimuthalAngle()
      );
    }
  };

  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      {/* camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      {/* lights */}
      <Lights />
      {/* FIX--error with fallback */}
      {/* <Suspense fallback={<p>Loading...</p>}> */}
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.8}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={handleOnEnd}
      />
      <group
        ref={groupRef}
        name={index === 1 ? "small" : "large"}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <IPhoneModel
            item={item}
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;

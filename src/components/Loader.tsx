import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div
        data-testid="loaderCon"
        className="absolute top-0 left-0 w-full h-full"
      >
        <div
          data-testid="loader"
          className="w-6 h-6 rounded-full border-4 border-t-orange-500 animate-spin"
        ></div>
      </div>
    </Html>
  );
};

export default Loader;

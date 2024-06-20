import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Model = () => {
  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);
  return (
    <section className="common-padding" data-testid="modelSection">
      <div className="screen-max-width">
        <h2 id="heading" className="section-heading">
          Take a closer look
        </h2>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            {/* add 3d model here via ModelView component */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;

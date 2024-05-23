import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useVideoSrc } from "../hooks/useVideoSrc";

export const Hero = () => {
  const { videoSrc } = useVideoSrc();
  useGSAP(() => {
    gsap.to(".hero-title", {
      opacity: 1,
      delay: 2.5,
    });
    gsap.to("#cta", {
      opacity: 1,
      translateY: -50,
      delay: 2.5,
    });
  }, []);
  return (
    <section
      data-testid="heroSection"
      className="w-full nav-height bg-black relative"
    >
      <div className="h-5/6 w-full flex flex-center flex-col">
        <p className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video
            data-testid="heroVideo"
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        data-testid="ctaCon"
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a data-testid="ctaLink" href="#highlights" className="btn">
          Buy
        </a>
        <p data-testid="ctaP" className="font-normal text-xl">
          From $199/month or $999
        </p>
      </div>
    </section>
  );
};

import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

export const useVideoSrc = () => {
  const [videoSrc, setVideoSrc] = useState<string>(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) setVideoSrc(smallHeroVideo);
    else setVideoSrc(heroVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => window.removeEventListener("resize", handleVideoSrcSet);
  }, []);

  return { videoSrc };
};

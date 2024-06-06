import { useEffect, useRef, useState } from "react";
import { highlightsSlides } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type HandleProcessProps = {
  type: "video-last" | "video-end" | "video-reset" | "play";
  i: number;
};

type VideoState = {
  isEnd: boolean;
  startPlay: boolean;
  videoId: number;
  isLastVideo: boolean;
  isPlaying: boolean;
};
const InitailVideoState: VideoState = {
  isEnd: false,
  startPlay: false,
  videoId: 0,
  isLastVideo: false,
  isPlaying: false,
};

export const useVideoAnimation = () => {
  const videoRef = useRef<HTMLVideoElement[]>([]);
  const videoSpanRef = useRef<HTMLSpanElement[]>([]);
  const videoDivRef = useRef<HTMLSpanElement[]>([]);
  const [video, setVideo] = useState<VideoState>(InitailVideoState);
  const { startPlay, videoId, isLastVideo, isPlaying } = video;
  const [loadedData, setLoadedData] = useState([]);

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((pre) => ({ ...pre, startPlay: true, isPlaying: true }));
      },
    });

    // after last video brings first video to view
    if (isLastVideo) {
      gsap.to("#slider", {
        transform: `translateX(0)`,
        duration: 2,
        ease: "power2.inOut",
      });
    }
  }, [videoId, isLastVideo]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) videoRef.current[videoId].pause();
      else startPlay && videoRef.current[videoId].play();
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleLoadedMetadata = (i, e) => setLoadedData((pre) => [...pre, e]);

  useEffect(() => {
    let currentProgress = 0;
    const span = videoSpanRef.current;
    if (span[videoId]) {
      // animate the progress of the video
      const anime = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anime.progress() * 100);
          if (progress !== currentProgress) {
            currentProgress = progress;
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], { width: "12px" });
            gsap.to(span[videoId], { backgroundColor: "#afafaf" });
          }
        },
      });
      if (videoId === 0) {
        anime.restart();
      }
      const animeUpdate = () => {
        anime.progress(
          videoRef.current[videoId].currentTime /
            highlightsSlides[videoId].videoDuration
        );
      };
      if (isPlaying) {
        gsap.ticker.add(animeUpdate);
      } else {
        gsap.ticker.remove(animeUpdate);
      }
    }
  }, [videoId, startPlay]);

  const handleProcess = ({ type, i }: HandleProcessProps) => {
    switch (type) {
      case "video-end":
        setVideo((preVideo) => ({ ...preVideo, isEnd: true, videoId: i + 1 }));
        break;
      case "video-last":
        setVideo((preVideo) => ({ ...preVideo, isLastVideo: true }));
        break;
      case "video-reset":
        setVideo((preVideo) => ({
          ...preVideo,
          isLastVideo: false,
          videoId: 0,
        }));
        break;
      case "play":
        setVideo((preVideo) => ({
          ...preVideo,
          isPlaying: !preVideo.isPlaying,
        }));
        break;

      default:
        return video;
    }
  };

  const handleElementRef = ({
    el,
    ref,
    i,
  }: {
    el: HTMLVideoElement | HTMLSpanElement | null;
    ref: React.MutableRefObject<HTMLSpanElement[] | HTMLVideoElement[]>;
    i: number;
  }) => {
    if (el !== null) ref.current[i] = el;
  };

  return {
    videoRef,
    videoSpanRef,
    videoDivRef,
    startPlay,
    isLastVideo,
    isPlaying,
    handleProcess,
    handleElementRef,
    handleLoadedMetadata,
    // fix-create handler for setting video
    setVideo,
  };
};

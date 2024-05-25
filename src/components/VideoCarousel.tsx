import React, { useEffect, useRef, useState } from "react";
import { highlightsSlides } from "../constants";
import gsap from "gsap";
import { pauseImg, playImg, replayImg } from "../utils";
import { useGSAP } from "@gsap/react";

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

const VideoCarousel = () => {
  const videoRef = useRef<HTMLVideoElement[]>([]);
  const videoSpanRef = useRef<HTMLSpanElement[]>([]);
  const videoDivRef = useRef<HTMLSpanElement[]>([]);
  const [video, setVideo] = useState<VideoState>(InitailVideoState);
  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;
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
  }, []);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) videoRef.current[videoId].pause();
      else startPlay && videoRef.current[videoId].play();
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleLoadedMetadata = (i, e) => setLoadedData((pre) => [...pre, e]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;
    if (span[videoId]) {
      // animate the progress of the video
      let anime = gsap.to(span[videoId], {
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

  type HandleProcessProps = {
    type: "video-last" | "video-end" | "video-reset" | "play";
    i: number;
  };

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
  return (
    <>
      <div className="flex items-center">
        {highlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  onEnded={() =>
                    i !== 3
                      ? handleProcess({ type: "video-end", i })
                      : handleProcess({ type: "video-last", i })
                  }
                  onLoadedMetadata={(e) => handleLoadedMetadata(i, e)}
                  ref={(el) => {
                    if (el !== null) videoRef.current[i] = el;
                  }}
                  onPlay={() => {
                    setVideo((preVideo) => ({ ...preVideo, isPlaying: true }));
                  }}
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  className={`${
                    list.id === 2 && "translate-x-44"
                  } pointer-events-none`}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text) => (
                  <p className="md:text-2xl text-xl font-medium" key={text}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={(el) => {
                if (el !== null) videoDivRef.current[i] = el;
              }}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => {
                  if (el !== null) videoSpanRef.current[i] = el;
                }}
              />
            </span>
          ))}
        </div>
        <button
          onClick={
            isLastVideo
              ? () => handleProcess({ type: "video-reset", i: 1 })
              : !isPlaying
              ? () => handleProcess({ type: "play", i: 1 })
              : () => handleProcess({ type: "play", i: 1 })
          }
          className="control-btn"
        >
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;

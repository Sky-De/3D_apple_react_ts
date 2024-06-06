import { highlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";
import { useVideoAnimation } from "../hooks/useVideoAnimation";
// -------------- ------------------------- ----------------------------- ----------------------------- -------------------
const VideoCarousel = () => {
  const {
    videoRef,
    isPlaying,
    videoDivRef,
    isLastVideo,
    videoSpanRef,
    setVideo,
    handleProcess,
    handleLoadedMetadata,
  } = useVideoAnimation();

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

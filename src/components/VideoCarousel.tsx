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
    handleElementRef,
    handleLoadedMetadata,
  } = useVideoAnimation();

  return (
    <>
      <div data-testid="Carousel__Container" className="flex items-center">
        {highlightsSlides.map((list, i) => (
          <div
            data-testid="Carousel__Slider"
            key={list.id}
            id="slider"
            className="sm:pr-20 pr-10"
          >
            <div
              data-testid="Carousel__Slider--item"
              className="video-carousel_container"
            >
              <div
                data-testid="Carousel__Slider--videoCon"
                className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black"
              >
                <video
                  data-testid="Carousel__Slider--video"
                  onEnded={() =>
                    i !== 3
                      ? handleProcess({ type: "video-end", i })
                      : handleProcess({ type: "video-last", i })
                  }
                  onLoadedMetadata={(e) => handleLoadedMetadata(i, e)}
                  ref={(el) => handleElementRef({ el, i, ref: videoRef })}
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
                  src={list.video}
                />
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
      <div
        data-testid="Carousel__Actions"
        className="relative flex-center mt-10"
      >
        <div
          data-testid="Carousel__Actions--con"
          className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full"
        >
          {videoRef.current.map((_, i) => (
            <span
              data-testid="Carousel__Actions--loading"
              key={i}
              ref={(el) => handleElementRef({ el, i, ref: videoDivRef })}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => handleElementRef({ el, i, ref: videoSpanRef })}
              />
            </span>
          ))}
        </div>
        <button
          data-testid="Carousel__Actions--btn"
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

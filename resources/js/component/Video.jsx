import { useEffect } from "react";
import video from "../../../public/assets/video/video.mp4";
function Video() {
  useEffect(() => {
    const video = document.getElementById("background-video");
    video.play();

    return () => {
      video.pause();
    };
  }, []);

  return (
    <>
      <div className="min-h-full">
        <div className="mx-auto max-w-full  py-0 sm:px-0 lg:px-0">
          <video id="background-video" autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}

export default Video;

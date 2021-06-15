import React from "react";
import "./Video.css";
function Video() {
  return (
    <div className="video">
      <video
        className="video__player"
        src="https://takatak.s.llnwi.net/web-short-video/video/20000iEM06/download/1/h264_high_540.mp4?e=1621826524&h=b1cf715eb7efe267cd86349ab3876b42"
      ></video>
      {/* <VideoFooter /> */}
      {/* <videoSidebar /> */}
    </div>
  );
}

export default Video;

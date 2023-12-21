import React from "react";
import "../style/MainVideo.css";
import placeholder from "../assets/placeholder.jpg";

const MainVideo = () => {
  return (
    <div className="mainvideo">
      <img src={placeholder} className="video" />
      <h1>He Got Revenge On s1mple</h1>
    </div>
  );
};

export default MainVideo;

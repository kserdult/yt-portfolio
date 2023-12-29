import React, { useState } from "react";
import "../style/MainVideo.css";
import placeholder from "../assets/placeholder.jpg";
import Description from "./Description";
import VideoInfo from "./VideoInfo";
import { data } from "../assets/projects";

const MainVideo = ({ currProj }) => {
  return (
    <div className="mainvideo">
      <img
        src={data[currProj].image}
        className="video"
        alt={data[currProj].title}
      />
      <h1>{data[currProj].title}</h1>
      <VideoInfo project={data[currProj]} />
      <Description projectText={data[currProj].description} />
    </div>
  );
};

export default MainVideo;

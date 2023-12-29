import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MainVideo from "../components/MainVideo";
import VideoInfo from "../components/VideoInfo";
import SideVideos from "../components/SideVideos";
import "../style/main.css";
import Comments from "../components/Comments";

export const Main = () => {
  const [currProj, setcurrProj] = useState(0);
  return (
    <div className="main">
      <div className="main-left">
        <Navbar />
        <MainVideo currProj={currProj} />
        <div className="small-sidevideos">
          <SideVideos setCurrProj={setcurrProj} />
        </div>
        <Comments />
      </div>
      <div className="main-right">
        <SideVideos setCurrProj={setcurrProj} />
      </div>
    </div>
  );
};

export default Main;

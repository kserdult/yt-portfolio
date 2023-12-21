import React from "react";
import Navbar from "../components/Navbar";
import MainVideo from "../components/MainVideo";
import VideoInfo from "../components/VideoInfo";

export const Main = () => {
  return (
    <div>
      <Navbar />
      <MainVideo />
      <VideoInfo />
      <div>Description</div>
      <div>Comments</div>
      <div>SideVideoList</div>
    </div>
  );
};

export default Main;

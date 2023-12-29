import React, { useState } from "react";
import Video from "./Video";
import { data } from "../assets/projects";

const SideVideos = ({ setCurrProj }) => {
  return (
    <div>
      {data.map((proj) => {
        return <Video project={proj} key={proj.id} setCurrProj={setCurrProj} />;
      })}
    </div>
  );
};

export default SideVideos;

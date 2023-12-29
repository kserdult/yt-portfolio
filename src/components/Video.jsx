import React from "react";
import "../style/video.css";

const Video = ({ project, setCurrProj }) => {
  return (
    <div className="video-card" onClick={() => setCurrProj(project.id - 1)}>
      <img src={project.image} alt={project.title} />
      <div>
        <h1>
          {project.title.length < 50
            ? project.title
            : project.title.substring(0, 57) + "..."}
        </h1>
        <p>{project.channel}</p>
      </div>
    </div>
  );
};

export default Video;

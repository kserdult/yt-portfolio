import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";

import "../style/videoInfo.css";

const VideoInfo = ({ project }) => {
  return (
    <div>
      <div className="videoInfo">
        <div className="info-left">
          <MdAccountCircle className="info-icon" />
          <div>
            <div>Serdült Károly</div>
            <div className="subscribers">Customer Service Agent</div>
          </div>
          <button
            className="subscribe"
            onClick={() =>
              project.sourceCode !== ""
                ? window.open(project.sourceCode, "_blank")
                : ""
            }
          >
            Source Code
          </button>
        </div>
        <div className="info-right">
          <button className="like">
            <AiOutlineLike className="like-icon" />
          </button>
          <button className="dislike">
            <AiOutlineDislike className="dislike-icon" />
          </button>
          <button
            className="share"
            onClick={() =>
              project.link !== "" ? window.open(project.link, "_blank") : ""
            }
          >
            <RiShareForwardLine className="share-icon" /> Open
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;

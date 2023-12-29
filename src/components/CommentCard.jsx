import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const CommentCard = ({ comm, Icon }) => {
  return (
    <div className="comment-card">
      <div>
        <Icon className="comment-icon" />
      </div>
      <div className="comment">
        <div className="comment-text">
          <h2>@{comm.title}</h2>
          <p>{comm.date}</p>
        </div>
        <pre className="comment-description">{comm.description}</pre>
        <AiOutlineLike className="comment-like" />
        <AiOutlineDislike className="comment-like" />
      </div>
    </div>
  );
};

export default CommentCard;

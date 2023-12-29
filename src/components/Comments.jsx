import React from "react";
import "../style/comments.css";
import { commentsData } from "../assets/projects";
import CommentCard from "./CommentCard";
import {
  IoMdSchool,
  IoMdContact,
  IoLogoHtml5,
  IoLogoPython,
} from "react-icons/io";
import { BsMicrosoftTeams } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";

const Comments = () => {
  const icons = [
    IoMdContact,
    IoLogoHtml5,
    IoLogoPython,
    BsMicrosoftTeams,
    MdWork,
    IoMdSchool,
    BiSolidSchool,
    FaSchool,
  ];
  return (
    <div>
      <h1 className="comment-title">Comments</h1>
      {commentsData.map((comm) => {
        return <CommentCard key={comm.id} comm={comm} Icon={icons[comm.id]} />;
      })}
    </div>
  );
};

export default Comments;

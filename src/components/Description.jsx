import React, { useState } from "react";

const Description = ({ projectText }) => {
  const [isExpanded, setIsExpanded] = useState();
  return isExpanded || projectText.length < 400 ? (
    <div className="description">
      <p>{projectText}</p>
      {projectText.length > 400 ? (
        <button onClick={() => setIsExpanded(!isExpanded)}>Show less</button>
      ) : (
        ""
      )}
    </div>
  ) : (
    <div className="description shrt">
      <p onClick={() => setIsExpanded(!isExpanded)}>
        {projectText.substring(0, 397) + "..."}
      </p>
    </div>
  );
};

export default Description;

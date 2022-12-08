import React, { useState } from "react";

const FollowButton = () => {
  const [follow, setFollow] = useState(false);
  return (
    <button
      onClick={() => setFollow(!follow)}
      className={`btn btn-sm rounded-pill ${follow ? "btn-dark" : "btn-light"}`}
    >
      {follow ? "Followed" : "Follow"}
    </button>
  );
};

export default FollowButton;

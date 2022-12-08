import React from "react";
import group1 from "../../assets/images/group1.png";
import group2 from "../../assets/images/group2.png";
import group3 from "../../assets/images/group3.png";
import group4 from "../../assets/images/group4.png";
import like from "../../assets/images/like.png";
import FollowButton from "./FollowButton";

const RecommendedGroups = () => {
  const groups = [
    { name: "Leisure", img: group1 },
    { name: "Activism", img: group2 },
    { name: "MBA", img: group3 },
    { name: "Philosophy", img: group4 },
  ];
  return (
    <div>
      <h6 className='mt-2'>
        <span>
          <img className='me-2 ' src={like} alt='' />
        </span>
        RECOMMENDED GROUPS
      </h6>
      <div>
        {groups.map((group, i) => (
          <div key={i} className='d-flex justify-content-between mb-3'>
            <div>
              <img className='me-3' src={group.img} alt='' />
              {group.name}
            </div>
            <div>
              <FollowButton></FollowButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedGroups;

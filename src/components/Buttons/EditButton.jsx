import React from "react";
import editWhite from "../../assets/images/edit-white.png";

const EditButton = () => {
  return (
    <div className='d-flex sticky-bottom justify-content-end pe-4 pb-4 d-md-none'>
      <div
        className=' rounded-5 d-flex justify-content-center align-items-center'
        style={{
          width: "54px",
          height: "54px",
          background:
            "linear-gradient(45deg, rgba(255,92,92,1) 0%, rgba(240,86,138,1) 100%)",
        }}
      >
        <img src={editWhite} alt='' />
      </div>
    </div>
  );
};

export default EditButton;

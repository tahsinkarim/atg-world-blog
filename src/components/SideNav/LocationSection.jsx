import React from "react";
import edit from "../../assets/images/edit-icon.png";
import location from "../../assets/images/location.png";

const LocationSection = () => {
  return (
    <div className='d-flex justify-content-between pt-5'>
      <div className='d-flex gap-2 align-items-center'>
        <img src={location} alt='' />
        <span className='fw-semibold'>Noida, India</span>
      </div>
      <div>
        <img src={edit} alt='' />
      </div>
    </div>
  );
};

export default LocationSection;

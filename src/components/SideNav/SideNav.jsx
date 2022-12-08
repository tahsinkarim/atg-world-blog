import React from "react";
import LocationSection from "./LocationSection";

const SideNav = () => {
  return (
    <div className='col-4 ps-5'>
      <div className='sticky-top pt-5'>
        <LocationSection></LocationSection>
        <hr />
      </div>
    </div>
  );
};

export default SideNav;

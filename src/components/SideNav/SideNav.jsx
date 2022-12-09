import React, { useContext } from "react";
import info from "../../assets/images/info-icon.png";
import { AuthContext } from "../../contexts/AuthProvider";
import LocationSection from "./LocationSection";
import RecommendedGroups from "./RecommendedGroups";

const SideNav = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className='col-4 ps-5 d-none d-lg-block'>
      <div className='sticky-top pt-5'>
        <LocationSection></LocationSection>
        <hr />
        <div className='text-muted py-4'>
          <span>
            <img src={info} alt='' />
          </span>
          Your location will help us serve better and extend a personalised
          experience.
        </div>

        {user && <RecommendedGroups></RecommendedGroups>}
      </div>
    </div>
  );
};

export default SideNav;

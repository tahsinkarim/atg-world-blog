import React, { useContext } from "react";
import img from "../../assets/images/large-hero.png";
import img2 from "../../assets/images/small-hero.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Banner = () => {
  const { join, toggleJoin } = useContext(AuthContext);
  return (
    <div className='position-relative'>
      <div className='card text-bg-dark rounded-0 border-0'>
        <picture>
          <source media='(min-width:650px)' srcSet={img} />
          <source media='(min-width:465px)' srcSet={img2} />
          <img
            style={{ filter: "brightness(50%)" }}
            src={img2}
            alt='Flowers'
            className='w-100 img-fluid'
          ></img>
        </picture>
        <div className='card-img-overlay container d-flex flex-column justify-content-end mb-5'>
          <div>
            <h1 className='card-title'>Computer Engineering</h1>
            <p className='card-text'>142,765 Computer Engineers follow this</p>
          </div>
          <div className='position-absolute top-0 end-0 mt-4 d-md-none'>
            {join ? (
              <button
                onClick={() => toggleJoin()}
                className='btn btn-outline-light me-2'
              >
                Leave Group
              </button>
            ) : (
              <button
                onClick={() => toggleJoin()}
                className='btn btn-outline-light me-2'
              >
                Join Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

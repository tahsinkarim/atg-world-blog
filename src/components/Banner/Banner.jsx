import React from "react";
import img from "../../assets/images/large-hero.png";
import img2 from "../../assets/images/small-hero.png";

const Banner = () => {
  return (
    <div className=''>
      <div className='card text-bg-dark rounded-0 border-0'>
        <picture>
          <source media='(min-width:650px)' srcSet={img} />
          <source media='(min-width:465px)' srcSet={img2} />
          <img
            style={{ filter: "brightness(50%)" }}
            src={img}
            alt='Flowers'
            className='w-100 img-fluid'
          ></img>
        </picture>
        <div className='card-img-overlay container d-flex flex-column justify-content-end mb-5'>
          <h1 className='card-title'>Computer Engineering</h1>
          <p className='card-text fs-5'>
            <small>142,765 Computer Engineers follow this</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

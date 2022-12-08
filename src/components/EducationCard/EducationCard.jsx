import React from "react";
import hand from "../../assets/images/article-hand.png";
import img2 from "../../assets/images/article2.png";
import dots from "../../assets/images/dots.png";
import eye from "../../assets/images/eye.png";
import share from "../../assets/images/share-icon.png";
import user2 from "../../assets/images/user2.png";

const EducationCard = () => {
  return (
    <div className='mx-auto shadow-sm' style={{ maxWidth: "690px" }}>
      <div className='card mb-3'>
        <img src={img2} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title d-flex align-items-center fs-6 gap-2'>
            <img src={hand} alt='' />
            <span>Education</span>
          </h5>
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='card-title d-flex fw-semibold me-3'>
              Tax Benefits for Investment under National Pension Scheme launched
              by Government
            </h5>
            <div className='dropdown'>
              <img
                className='dropdown-toggle'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                src={dots}
                alt=''
                style={{ width: "28px" }}
              />
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Edit
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Report
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Option 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className='card-text text-muted'>
            I've worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
          <div className='card-text d-flex align-items-center justify-content-between py-2'>
            <div className='d-flex align-items-center'>
              <img src={user2} alt='' />
              <div className='ms-3'>
                <p className='fw-bolder mb-0'>Sarah West</p>
                <div className='d-flex d-sm-none'>
                  <div>
                    <img src={eye} alt='' />
                  </div>
                  <p className='fw-semibold mb-0 me-4 ms-2'>
                    <small>1.4k views</small>
                  </p>
                </div>
              </div>
            </div>
            <div className='d-flex align-items-center'>
              <div className='d-none d-sm-block'>
                <img src={eye} alt='' />
              </div>
              <p className='fw-semibold mb-0 me-4 ms-2 d-none d-sm-block'>
                <small>1.4k views</small>
              </p>
              <div className='btn btn-secondary bg-secondary border-0 rounded-0 bg-opacity-25 text-muted d-flex align-items-center'>
                <img src={share} alt='' />
                <p className='mb-0 fw-semibold ms-1 pb-1 d-sm-none'>
                  <small>Share</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;

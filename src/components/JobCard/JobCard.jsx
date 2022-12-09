import React from "react";
import bag1 from "../../assets/images/bag-1.png";
import bag from "../../assets/images/bag.png";
import dots from "../../assets/images/dots.png";
import eye from "../../assets/images/eye.png";
import location from "../../assets/images/location.png";
import share from "../../assets/images/share-icon.png";
import user4 from "../../assets/images/user4.png";

const JobCard = () => {
  return (
    <div className='mx-auto shadow-sm' style={{ maxWidth: "690px" }}>
      <div className='card mb-3'>
        <div className='card-body'>
          <h5 className='card-title d-flex align-items-center fs-6 gap-2 mb-3'>
            <img src={bag1} alt='' />
            <span>Job</span>
          </h5>
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='card-title d-flex fw-semibold me-3'>
              Finance & Investment Elite Social Mixer @Lujiazui
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
          <div className='fw-bold d-flex gap-5 mt-1'>
            <div className='d-flex align-items-center'>
              <img src={bag} alt='' />
              <p className='mb-0 ms-2'>
                <small>Innovaccer Analytics Private Ltd.</small>
              </p>
            </div>
            <div className='d-flex align-items-center'>
              <img src={location} alt='' />
              <p className='mb-0 ms-2'>
                <small>Noida, India</small>
              </p>
            </div>
          </div>
          <div className='my-3'>
            <button
              style={{ color: "#02B875" }}
              className='btn btn-light fw-semibold w-100 border'
            >
              Apply on Timesjobs
            </button>
          </div>
          <div className='card-text d-flex align-items-center justify-content-between py-2'>
            <div className='d-flex align-items-center'>
              <img src={user4} alt='' />
              <div className='ms-3'>
                <p className='fw-bolder mb-0'>Joseph Gray</p>
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

export default JobCard;

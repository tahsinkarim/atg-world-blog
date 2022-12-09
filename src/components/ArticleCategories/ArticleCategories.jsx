import React, { useContext } from "react";
import down from "../../assets/images/arrow-down.png";
import joinImg from "../../assets/images/join.png";
import leaveImg from "../../assets/images/leaveImg.png";
import { AuthContext } from "../../contexts/AuthProvider";

const ArticleCategories = () => {
  const { join, toggleJoin } = useContext(AuthContext);
  return (
    <div className='pt-4 sticky-top bg-white'>
      <div className='container d-flex justify-content-between align-items-center py-3 d-md-none'>
        <p className='fw-bold mb-0'>POSTS(368)</p>
        <div className='dropdown'>
          <button
            className='btn btn-light dropdown-toggle'
            type='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Filter: ALL
          </button>
          <ul className='dropdown-menu'>
            <li>
              <a className='dropdown-item' href='#'>
                Article
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Event
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Education
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Job
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='d-md-flex container align-items-center justify-content-between d-none'>
        <div className='d-flex gap-3 text-muted fw-semibold mb-0'>
          <p className='text-black mb-0'>All Posts (32)</p>
          <p className='mb-0'>Article</p>
          <p className='mb-0'>Event</p>
          <p className='mb-0'>Education</p>
          <p className='mb-0'>Job</p>
        </div>
        <div className='d-flex gap-2 col-5 justify-content-end'>
          <div className='d-flex'>
            <button
              style={{ whiteSpace: "nowrap" }}
              className='btn btn-light me-4 fw-semibold'
            >
              Make a Post
              <span>
                <img src={down} alt='' />
              </span>
            </button>
            {join ? (
              <button
                onClick={() => toggleJoin()}
                style={{ whiteSpace: "nowrap" }}
                className='btn btn-light d-flex align-items-center'
              >
                <img className='me-2' src={leaveImg} alt='' />
                Leave Group
              </button>
            ) : (
              <button
                onClick={() => toggleJoin()}
                style={{ whiteSpace: "nowrap" }}
                className='btn btn-primary d-flex align-items-center'
              >
                <img className='me-2' src={joinImg} alt='' />
                Join group
              </button>
            )}
          </div>
        </div>
      </div>
      <hr className='container d-none d-md-block pb-2'></hr>
    </div>
  );
};

export default ArticleCategories;

import React from "react";
import down from "../../assets/images/arrow-down.png";
import logo from "../../assets/images/logo.png";
import LoginModal from "../Login/LoginModal";
import RegisterModal from "../Login/RegisterModal";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-light px-2 sm:px-5'>
      <div className='container-fluid justify-content-between'>
        <a className='navbar-brand w-25' href='#'>
          <img src={logo} alt='' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-between w-50'
          id='navbarTogglerDemo02'
        >
          <form className='d-flex w-50 ms-5' role='search'>
            <input
              className='form-control me-2 rounded-pill'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
          </form>
          <div>
            <p
              type='button'
              className='fw-semibold mt-3 mt-lg-none'
              data-bs-toggle='modal'
              data-bs-target='#registerModal'
            >
              Create account. <span className='text-primary'>It's free</span>
              <span>
                <img src={down} alt='' />
              </span>
            </p>
          </div>
        </div>
      </div>
      <LoginModal></LoginModal>
      <RegisterModal></RegisterModal>
    </nav>
  );
};

export default Navbar;

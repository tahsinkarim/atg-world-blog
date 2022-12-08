import React from "react";
import fb from "../../assets/images/fb-logo.png";
import google from "../../assets/images/gmail-logo.png";
import login from "../../assets/images/login-img.png";

const LoginModal = () => {
  return (
    <div>
      <div
        className='modal fade'
        id='loginModal'
        tabIndex='-1'
        aria-labelledby='loginModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg modal-dialog-centered align-items-end align-items-sm-center mx-0 mx-sm-auto mt-4 mt-sm-2'>
          <div className='modal-content '>
            <div className='modal-header bg-success bg-opacity-10 text-success py-3 d-none d-lg-flex'>
              <h3 className='modal-title fs-6 text-center' id='loginModalLabel'>
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </h3>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body container align-items-center'>
              <div className='row mt-1'>
                {/* Login Form */}
                <div className='px-3 col ms-2'>
                  <h2 className='fw-bold fs-4 mb-4 ms-1 d-flex justify-content-between align-items-center'>
                    <p className='mb-0'>Create an account</p>
                    <div>
                      <button
                        type='button'
                        className='btn-close text-white bg-secondary rounded-5'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                        style={{ fontSize: "10px", padding: "6px" }}
                      ></button>
                    </div>
                  </h2>
                  <div className='row mx-1'>
                    <div className='col pe-0 ps-0 d-flex border rounded-top'>
                      <input
                        type='text'
                        className='form-control border-0 border-end rounded-top py-2'
                        placeholder='First name'
                        aria-label='First name'
                      />
                      <input
                        type='text'
                        className='form-control border-0 border-start rounded-top py-2'
                        placeholder='Last name'
                        aria-label='Last name'
                      />
                    </div>
                    <input
                      type='email'
                      className='form-control rounded-0 border-top-0 py-2'
                      placeholder='Email'
                      aria-label='email'
                    />
                    <input
                      type='password'
                      className='form-control rounded-0 border-top-0 py-2'
                      placeholder='Password'
                      aria-label='Password'
                    />
                    <input
                      type='password'
                      className='form-control rounded-0 rounded-bottom border-top-0 py-2'
                      placeholder='Confirm Password'
                      aria-label='Confirm Password'
                    />
                  </div>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='btn btn-primary rounded-5 d-flex justify-content-center mt-3 mb-4 mx-1 fw-semibold py-2 px-5'>
                      Create Account
                    </div>
                    <button className='fw-semibold text-muted cursor-pointer border-0 bg-white'>
                      <u>or, Sign In</u>
                    </button>
                  </div>
                  <div className='btn btn-light border rounded-1 d-flex justify-content-center align-items-center mt-3 mb-2 mx-1 fw-semibold py-2'>
                    <img className='h-75 me-2' src={fb} alt='' />
                    <span>Sign up with Facebook</span>
                  </div>
                  <div className='btn btn-light border rounded-1 d-flex justify-content-center align-items-center mb-4 mx-1 fw-semibold py-2'>
                    <img className='h-75 me-2' src={google} alt='' />
                    <span>Sign up with Google</span>
                  </div>
                </div>
                {/* Login Image */}
                <div className='col d-none flex-column align-items-center me-2 d-lg-flex'>
                  <p className='text-right'>
                    Already have an account?
                    <span className='text-primary fw-semibold'> Sign In</span>
                  </p>
                  <div>
                    <img src={login} alt='' />
                  </div>
                  <p className='fs-6'>
                    <small>
                      By signing up, you agree to our Terms & conditions,
                      Privacy policy
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

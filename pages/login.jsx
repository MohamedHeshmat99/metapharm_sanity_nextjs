import React, { useState , useEffect } from 'react'




const Login = () => {

 
  useEffect(() => {
    const signup = document.querySelector('.t-signup');
    const signin = document.querySelector('.t-signin');
    const addclass = document.querySelector('.login-site');
    signup.addEventListener('click', function() {
      addclass.className = 'login-site signup-show';
    })
    signin.addEventListener('click', function() {
      addclass.className = 'login-site signin-show';
    })
  }, []);


  return (
    <div>
      <div className="metapharm-contact-us">
        <div className="contact-us-container">
          <div className="contact-row">
            <div className="conatct-col-md-12">
              <ol className="breadcrumb">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="active">Login</li>
              </ol>
            </div>
            <div className="contact-us-col-md-12">
              <h1>Login Page</h1>
            </div>
          </div>
        </div>
      </div>
      <div id="page" className="login-site">
        <div className="login-container">
          <div className="theform">
            <div className="play">
              <div className="login-wrapper">
                <div className="card one"></div>
                <div className="card two"></div>
                <div className="card three"></div>
                <div className="card four"></div>
                <div className="card five"></div>
              </div>
            </div>
            <div className="signup">
              <nav className="login-nav">
                <ul>
                  <li
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      position: 'absolute',
                      left: '50px',
                    }}
                  >
                    <a href="#0">
                      <i className="ri-arrow-left-line"></i>
                    </a>
                  </li>
                  <li>
                    Already member? <a href="#0" className="t-signin">Sign in</a>
                  </li>
                </ul>
              </nav>
              <div className="login-heading">
                <h2>Sign Up</h2>
                <p>We secure your data privacy encrypted.</p>
              </div>
              <form className="login-form" action='/api/register' method='post'>
                <p>
                  <i className="ri-user-3-line"></i>
                  <input type="text" placeholder="Full Name" />
                </p>
                <p>
                  <i className="ri-mail-line"></i>
                  <input type="email" name="email" placeholder="Your email address"   />
                </p>
                <p>
                  <i className="ri-lock-line"></i>
                  <i className="ri-eye-off-line"></i>
                  <input type="password" name="password" placeholder="Enter password" />
                </p>
                <p>
                  <i className="ri-lock-line"></i>
                  <input type="password" placeholder="Re-Enter password" />
                </p>
                <div className="actions">
                  <label>
                    <input type="submit" value="Sign Up" />
                    <i className="ri-arrow-right-line"></i>
                  </label>
                  <p>Or</p>
                  <p className="login-socials">
                    <button>
                      <i className="ri-facebook-line"></i>
                    </button>
                    <button>
                      <i className="ri-google-line"></i>
                    </button>
                  </p>
                </div>
              </form>
            </div>
            <div className="signin">
              <nav className="login-nav">
                <ul>
                  <li
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      position: 'absolute',
                      left: '1px',
                    }}
                  >
                    <a href="#0">
                      <i className="ri-arrow-left-line"></i>
                    </a>
                  </li>
                  <li>
                    Don't have an account? <a href="#0" className="t-signup" >Sign up</a>
                  </li>
                </ul>
              </nav>
              <div className="login-heading">
                <h2>Sign In</h2>
                <p>We secure your data privacy encrypted.</p>
              </div>
              <form className="login-form" action='/api/login' method='post'>
                <p>
                  <i className="ri-mail-line"></i>
                  <input type="email" name="email" placeholder="Your email address"  />
                </p>
                <p>
                  <i className="ri-lock-line"></i>
                  <i className="ri-eye-off-line"></i>
                  <input type="password" name="password" placeholder="Enter password" />
                </p>
                <div className="actions">
                  <label>
                    <input type="submit" value="Sign In" />
                    <i className="ri-arrow-right-line"></i>
                  </label>
                  <p>Or</p>
                  <p className="login-socials">
                    <button>
                      <i className="ri-facebook-line"></i>
                    </button>
                    <button>
                      <i className="ri-google-line"></i>
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
import React from 'react';

const Footer = () => {
  return (

    <div>
      <div className="widgets">
          <div className="container">
            <div className="wrapper">
              <div className="flexwrap" style={{display: "flex;"}}>
                <div className="row">
                  <div className="item mini-links">
                    <h4>Help & Contact</h4>
                    <ul className="flexcol">
                      <li><a href="#">Your Account</a></li>
                      <li><a href="#">Your Orders</a></li>
                      <li><a href="#">Shipping Rates</a></li>
                      <li><a href="#">Returns</a></li>
                      <li><a href="#">Assistant</a></li>
                      <li><a href="#">Help</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="item mini-links">
                    <h4>Product Categories</h4>
                    <ul className="flexcol">
                      <li><a href="#">HAND CARE</a></li>
                      <li><a href="#">TEETH</a></li>
                      <li><a href="#">VITAMINS</a></li>
                      <li><a href="#">SHAKE</a></li>
                      <li><a href="#">GAINERS</a></li>
                      <li><a href="#">BARS</a></li>
                      <li><a href="#">HOMEOPHATY MEDICINES</a></li>
                      <li><a href="#">PAIN & FEVER</a></li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="item mini-links">
                    <h4>Payment Info</h4>
                    <ul className="flexcol">
                      <li><a href="#">Bussiness Card</a></li>
                      <li><a href="#">Shop with Points</a></li>
                      <li><a href="#">Reload Your Balance</a></li>
                      <li><a href="#">Paypal</a></li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="item mini-links">
                    <h4>About Us</h4>
                    <ul className="flexcol">
                      <li><a href="#">Company Info</a></li>
                      <li><a href="#">News</a></li>
                      <li><a href="#">Investors</a></li>
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Policies</a></li>
                      <li><a href="#">Customer reviews</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* widgets */}

        <div className="footer-info">
          <div className="container">
            <div className="wrapper">
              <div className="flexcol">
                <div className="logo">
                  <img src="/assets/logo-no-background.png" alt="" style={{width: "200px;",cursor:"pointer"}}/>
                </div>
                <div className="socials">
                  <ul className="flexitem">
                    <li><a href="#"><i className="ri-twitter-line"></i></a></li>
                    <li><a href="#"><i className="ri-facebook-line"></i></a></li>
                    <li><a href="#"><i className="ri-instagram-line"></i></a></li>
                    <li><a href="#"><i className="ri-linkedin-line"></i></a></li>
                    <li><a href="#"><i className="ri-youtube-line"></i></a></li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      <div className="footerCopy">
        <div className="inb">
          <p>Copyrights<sup>&copy;</sup> 2023. Developed  by <span style={{color:"#111", fontWeight: "600"}}>METAPHARM TEAM</span> </p>
        </div>
      </div>

    </div>
  )
}

export default Footer
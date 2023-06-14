import React, { useState } from 'react'

const Contact = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [emailValue, setEmailValue] = useState('');

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      // Add your sign-up logic here
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 1500); // Hide message after 1.5 seconds
      setEmailValue('');
    }
  };


  return (
    <div className="newsletter">
      <div className="container">
        <div className="wrapper">
          <div className="box">
            <div className="content">
              <h3>Join Our newsletter</h3>
              <p>Get E-mail updates about our latest shop and <strong>special offers</strong></p>
            </div>
            <form action="" className="search" onSubmit={handleSignup}>
              <span className="icon-large"><i className="ri-mail-line"></i></span>
              <input type="email" placeholder="Your email address" value={emailValue} onChange={handleEmailChange} required pattern="[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,}$" />
              <button type="submit">Sign Up</button>
            </form>
            {showSuccessMessage && (
              <div className="success-message">
                <p>Thank you for signing up!</p>
                <p>You will receive our latest updates and special offers in your inbox.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
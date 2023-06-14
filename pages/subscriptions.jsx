import Link from 'next/link';
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

const subscriptions = () => {
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
    <div>
    <div className="metapharm-contact-us">
        <div className="contact-us-container">
            <div className="contact-row">
                <div className="conatct-col-md-12">
                    <ol className="breadcrumb">
                        <li>
                            <a href="/">Home</a>
                        </li> 
                        <li className="active">Subscriptions</li>
                    </ol>
                </div>
                <div className="contact-us-col-md-12"><h1>Subscriptions</h1></div>
            </div>
        </div>
    </div>
    <div id="primary" className="pricing-content-area">
      <div className="pricing-container">
        <main className="pricing-main-content">
          <article id="post-2819" className="pricing-page">
            <div className="entry-pricing-content">
              <div data-elementor-type="wp-page" data-elementor-id="2819" className="elementor-elementor-2819">
                <section className="elementor-pricing-section" data-id="f7b353c" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
                  <div className="elementor-pricing-container">

                    <div className="elementor-pricing-column" data-id="0d41ef6" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
                      <div className="elementor-widget-wrap-pricing">
                        <div className="elementor-element-pricing" data-id="e185e06" data-element_type="widget" data-widget_type="pricing-table-v2.default">
                          <div className="elementor-widget-container-pricing">
                            <div className="price-table-container">
                              <div className="mt-package-title-price" >
                                <div className="mt-addon-spacer-price"></div>
                                  <h2 className="price-title">META CLASSIC </h2>
                              </div>
                              <div className="mt-package-price" >
                                <span className="cd-value-year">
                                  <sup>$</sup>
                                  50 <span className="line">/</span>
                                </span>
                                <span className="cd-duration">month</span>
                              </div>
                              <div className="mt-package-list">
                                <ul>
                                  <li className="package-list-item">
                                      <FaCheck className="fas-fa-check"  aria-hidden="true" />
                                      <span className="package-list-text">free delivery to your home for any order</span>
                                  </li>
                                  <li className="package-list-item">
                                      <FaCheck className="fas-fa-check"  aria-hidden="true" />
                                      <span className="package-list-text">3 general &amp; internal medicine check-ups</span>
                                  </li>
                                  <li className="package-list-item">
                                  <FaCheck className="fas-fa-check"  aria-hidden="true" />
                                  <span className="package-list-text">50% discount for selected products and services</span>
                                  </li>
                                  <li className="package-list-item">
                                  <FaCheck className="fas-fa-check"  aria-hidden="true" />
                                  <span className="package-list-text">free medical book</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="mt-btn-zone" >
                                <Link href={'/services'}>
                                <a className="mt-btn">All Services</a> 
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="elementor-pricing-column" data-id="0d41ef6" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
                      <div className="elementor-widget-wrap-pricing">
                        <div className="elementor-element-pricing" data-id="e185e06" data-element_type="widget" data-widget_type="pricing-table-v2.default">
                          <div className="elementor-widget-container-pricing">
                            <div className="price-table-container">
                              <div className="mt-package-title-price" >
                                <div className="mt-addon-spacer-price"></div>
                                  <h2 className="price-title">META PLUS </h2>
                              </div>
                              <div className="mt-package-price" >
                                <span className="cd-value-year">
                                    <sup>$</sup>
                                    90 <span className="line">/</span>
                                </span>
                                <span className="cd-duration">month</span>
                              </div>
                              <div className="mt-package-list">
                                <ul>
                                  <li className="package-list-item">
                                      <FaCheck className="fas-fa-check"  aria-hidden="true" />
                                      <span className="package-list-text">free delivery to your home for any order</span>
                                  </li>
                                  <li className="package-list-item">
                                      <FaCheck className="fas-fa-check"  aria-hidden="true" />
                                      <span className="package-list-text">4 general &amp; internal medicine check-ups</span>
                                  </li>
                                  <li className="package-list-item">
                                  <FaCheck className="fas-fa-check"  aria-hidden="true" />
                                  <span className="package-list-text">50% discount for selected products and services</span>
                                  </li>
                                  <li className="package-list-item">
                                  <FaCheck className="fas-fa-check"  aria-hidden="true" />
                                  <span className="package-list-text">free medical book</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="mt-btn-zone" >
                                <Link href={'/services'}>
                                <a className="mt-btn">All Services</a> 
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="elementor-pricing-column" data-id="0d41ef6" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
                      <div className="elementor-widget-wrap-pricing">
                        <div className="elementor-element-pricing" data-id="e185e06" data-element_type="widget" data-widget_type="pricing-table-v2.default">
                          <div className="elementor-widget-container-pricing">
                            <div className="price-table-container">
                              <div className="mt-package-title-price" >
                                <div className="mt-addon-spacer-price"></div>
                                <h2 className="price-title">META PRO </h2>
                              </div>
                              <div className="mt-package-price" >
                                <span className="cd-value-year">
                                  <sup>$</sup>
                                  120 <span className="line">/</span>
                                </span>
                                <span className="cd-duration">month</span>
                              </div>
                              <div className="mt-package-list">
                                <ul>
                                  <li className="package-list-item">
                                      <FaCheck className="fas-fa-check"  aria-hidden="true" />
                                      <span className="package-list-text">free delivery to your home for any order</span>
                                  </li>
                                  <li className="package-list-item">
                                      <FaCheck className="fas-fa-check"  aria-hidden="true" />
                                      <span className="package-list-text">5 general &amp; internal medicine check-ups</span>
                                  </li>
                                  <li className="package-list-item">
                                  <FaCheck className="fas-fa-check"  aria-hidden="true" />
                                  <span className="package-list-text">70% discount for selected products and services</span>
                                  </li>
                                  <li className="package-list-item">
                                  <FaCheck className="fas-fa-check"  aria-hidden="true" />
                                  <span className="package-list-text">free medical book</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="mt-btn-zone" >
                              <Link href={'/services'}>
                                <a className="mt-btn">All Services</a> 
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="elementor-pricing-column" data-id="0d41ef6" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
                      <div className="elementor-widget-wrap-pricing">
                        <div className="elementor-element-pricing" data-id="e185e06" data-element_type="widget" data-widget_type="pricing-table-v2.default">
                          <div className="elementor-widget-container-pricing">
                            <div className="price-table-container">
                              <div className="mt-package-title-price" >
                                <div className="mt-addon-spacer-price"></div>
                                <h2 className="price-title">META EXTRA </h2>
                              </div>
                              <div className="mt-package-price" >
                                <span className="cd-value-year">
                                    <sup>$</sup>
                                    300 <span className="line">/</span>
                                </span>
                                <span className="cd-duration">month</span>
                              </div>
                              <div className="mt-package-list">
                                <ul>
                                  <li className="package-list-item">
                                    <FaCheck className="fas-fa-check"  aria-hidden="true" />
                                    <span className="package-list-text">free delivery to your home for any order</span>
                                  </li>
                                  <li className="package-list-item">
                                    <FaCheck className="fas-fa-check"  aria-hidden="true" />
                                    <span className="package-list-text">6 general &amp; internal medicine check-ups</span>
                                  </li>
                                  <li className="package-list-item">
                                    <FaCheck className="fas-fa-check"  aria-hidden="true" />
                                    <span className="package-list-text">80% discount for selected products and services</span>
                                  </li>
                                  <li className="package-list-item">
                                    <FaCheck className="fas-fa-check"  aria-hidden="true" />
                                    <span className="package-list-text">free medical book</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="mt-btn-zone" >
                              <Link href={'/services'}>
                                <a className="mt-btn">All Services</a> 
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </section>
                          
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
              </div>
            </div>
          </article>
        </main>
      </div>
  </div>
  </div>
  )
}

export default subscriptions
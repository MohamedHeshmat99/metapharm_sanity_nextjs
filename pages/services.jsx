import React, { useState } from 'react'

const services = () => {
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
                        <li className="active">Services</li>
                    </ol>
                </div>
                <div className="contact-us-col-md-12"><h1>Services</h1></div>
            </div>
        </div>
      </div>
      <div id="primary" className="services-area">
      <div className="service-container">
        <main className="service-main-content">
          <article id="post-2677" className="post-2677">
            <div className="entry-content-service">
              <div data-elementor-type="wp-page" data-elementor-id="2677" className="elementor-2677-service">
                <section className="elementor-service-section" data-id="2b0297d" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
                  <div className="elementor-service-container">
                    <div className="elementor-column-services" data-id="2db73db" data-element_type="column">
                      <div className="elementor-widget-wrap-service">
                        <section className="elementor-section-services-service" data-id="e79ce54" data-element_type="section">
                          <div className="elementor-container-services">

                            <div className="elementor-column-service-service" data-id="9726a83" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
                              <div className="elementor-widget-wrap-services">
                                <div className="elementor-element-services" data-id="906153c" data-element_type="widget" data-widget_type="icon-with-text.default">
                                  <div className="elementor-widget-container-service">
                                    <div className="mt-icon-listgroup-item-service">
                                      <div className="mt-icon-listgroup-holder-service">
                                        <div className="mt-icon-listgroup-icon-holder-inner-service">
                                          <a>
                                            <img decoding="async" alt="list-image" className="mt-image-list-service" src="assets/services/drugs.png" />
                                          </a>
                                        </div>
                                        <div className="mt-icon-listgroup-content-holder-inner-service">
                                          <h2 className="mt-icon-listgroup-title-service"><a>Certified Pills</a></h2>
                                          <p className="mt-icon-listgroup-text-service"> Bring to the table win-win survival strategies to buy our products.. </p>      
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="elementor-column-service-service" data-id="9726a83" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
                              <div className="elementor-widget-wrap-services">
                                <div className="elementor-element-services" data-id="906153c" data-element_type="widget" data-widget_type="icon-with-text.default">
                                  <div className="elementor-widget-container-service">
                                    <div className="mt-icon-listgroup-item-service">
                                      <div className="mt-icon-listgroup-holder-service">
                                        <div className="mt-icon-listgroup-icon-holder-inner-service">
                                          <a>
                                            <img decoding="async" alt="list-image" className="mt-image-list-service" src="assets/services/pills.png" />
                                          </a>
                                        </div>
                                        <div className="mt-icon-listgroup-content-holder-inner-service">
                                          <h2 className="mt-icon-listgroup-title-service"><a>Quality Product</a></h2>
                                          <p className="mt-icon-listgroup-text-service"> Bring to the table win-win survival strategies to buy our products.. </p>      
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="elementor-column-service-service" data-id="9726a83" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
                              <div className="elementor-widget-wrap-services">
                                <div className="elementor-element-services" data-id="906153c" data-element_type="widget" data-widget_type="icon-with-text.default">
                                  <div className="elementor-widget-container-service">
                                    <div className="mt-icon-listgroup-item-service">
                                      <div className="mt-icon-listgroup-holder-service">
                                        <div className="mt-icon-listgroup-icon-holder-inner-service">
                                          <a>
                                            <img decoding="async" alt="list-image" className="mt-image-list-service" src="assets/services/medicine.png" />
                                          </a>
                                        </div>
                                        <div className="mt-icon-listgroup-content-holder-inner-service">
                                          <h2 className="mt-icon-listgroup-title-service"><a>All Types Of Meds</a></h2>
                                          <p className="mt-icon-listgroup-text-service"> Bring to the table win-win survival strategies to buy our products.. </p>      
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>

                        <section className="elementor-section-services-service" data-id="e79ce54" data-element_type="section">
                          <div className="elementor-container-services">

                            <div className="elementor-column-service-service" data-id="9726a83" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
                              <div className="elementor-widget-wrap-services">
                                <div className="elementor-element-services" data-id="906153c" data-element_type="widget" data-widget_type="icon-with-text.default">
                                  <div className="elementor-widget-container-service">
                                    <div className="mt-icon-listgroup-item-service">
                                      <div className="mt-icon-listgroup-holder-service">
                                        <div className="mt-icon-listgroup-icon-holder-inner-service">
                                          <a>
                                            <img decoding="async" alt="list-image" className="mt-image-list-service" src="assets/services/medicine-2.png" />
                                          </a>
                                        </div>
                                        <div className="mt-icon-listgroup-content-holder-inner-service">
                                          <h2 className="mt-icon-listgroup-title-service"><a>Herbal Supplies</a></h2>
                                          <p className="mt-icon-listgroup-text-service"> Bring to the table win-win survival strategies to buy our products.. </p>      
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="elementor-column-service-service" data-id="9726a83" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
                              <div className="elementor-widget-wrap-services">
                                <div className="elementor-element-services" data-id="906153c" data-element_type="widget" data-widget_type="icon-with-text.default">
                                  <div className="elementor-widget-container-service">
                                    <div className="mt-icon-listgroup-item-service">
                                      <div className="mt-icon-listgroup-holder-service">
                                        <div className="mt-icon-listgroup-icon-holder-inner-service">
                                          <a>
                                            <img decoding="async" alt="list-image" className="mt-image-list-service" src="assets/services/home-delivery.png" />
                                          </a>
                                        </div>
                                        <div className="mt-icon-listgroup-content-holder-inner-service">
                                          <h2 className="mt-icon-listgroup-title-service"><a>Home Health Prods</a></h2>
                                          <p className="mt-icon-listgroup-text-service"> Bring to the table win-win survival strategies to buy our products.. </p>      
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="elementor-column-service-service" data-id="9726a83" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
                              <div className="elementor-widget-wrap-services">
                                <div className="elementor-element-services" data-id="906153c" data-element_type="widget" data-widget_type="icon-with-text.default">
                                  <div className="elementor-widget-container-service">
                                    <div className="mt-icon-listgroup-item-service">
                                      <div className="mt-icon-listgroup-holder-service">
                                        <div className="mt-icon-listgroup-icon-holder-inner-service">
                                          <a>
                                            <img decoding="async" alt="list-image" className="mt-image-list-service" src="assets/services/compound.png" />
                                          </a>
                                        </div>
                                        <div className="mt-icon-listgroup-content-holder-inner-service">
                                          <h2 className="mt-icon-listgroup-title-service"><a>Compound Meds</a></h2>
                                          <p className="mt-icon-listgroup-text-service"> Bring to the table win-win survival strategies to buy our products.. </p>      
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>

                        <section className="elementor-section-services-service" data-id="e79ce54" data-element_type="section">
                          <div className="elementor-container-services">

                            <div className="elementor-column-service-service" data-id="9726a83" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
                              <div className="elementor-widget-wrap-services">
                                <div className="elementor-element-services" data-id="906153c" data-element_type="widget" data-widget_type="icon-with-text.default">
                                  <div className="elementor-widget-container-service">
                                    <div className="mt-icon-listgroup-item-service">
                                      <div className="mt-icon-listgroup-holder-service">
                                        <div className="mt-icon-listgroup-icon-holder-inner-service">
                                          <a>
                                            <img decoding="async" alt="list-image" className="mt-image-list-service" src="assets/services/book.png" />
                                          </a>
                                        </div>
                                        <div className="mt-icon-listgroup-content-holder-inner-service">
                                          <h2 className="mt-icon-listgroup-title-service"><a>Medical Books</a></h2>
                                          <p className="mt-icon-listgroup-text-service">  Bring to the table win-win survival strategies to ..  </p>      
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="elementor-column-service-service" data-id="9726a83" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
                              <div className="elementor-widget-wrap-services">
                                <div className="elementor-element-services" data-id="906153c" data-element_type="widget" data-widget_type="icon-with-text.default">
                                  <div className="elementor-widget-container-service">
                                    <div className="mt-icon-listgroup-item-service">
                                      <div className="mt-icon-listgroup-holder-service">
                                        <div className="mt-icon-listgroup-icon-holder-inner-service">
                                          <a>
                                            <img decoding="async" alt="list-image" className="mt-image-list-service" src="assets/services/ointment.png" />
                                          </a>
                                        </div>
                                        <div className="mt-icon-listgroup-content-holder-inner-service">
                                          <h2 className="mt-icon-listgroup-title-service"><a>Topical Medicines</a></h2>
                                          <p className="mt-icon-listgroup-text-service">  Bring to the table win-win survival strategies to ..  </p>      
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="elementor-column-service-service" data-id="9726a83" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:300}">
                              <div className="elementor-widget-wrap-services">
                                <div className="elementor-element-services" data-id="906153c" data-element_type="widget" data-widget_type="icon-with-text.default">
                                  <div className="elementor-widget-container-service">
                                    <div className="mt-icon-listgroup-item-service">
                                      <div className="mt-icon-listgroup-holder-service">
                                        <div className="mt-icon-listgroup-icon-holder-inner-service">
                                          <a>
                                            <img decoding="async" alt="list-image" className="mt-image-list-service" src="assets/services/inhaler.png" />
                                          </a>
                                        </div>
                                        <div className="mt-icon-listgroup-content-holder-inner-service">
                                          <h2 className="mt-icon-listgroup-title-service"><a>Inhalers</a></h2>
                                          <p className="mt-icon-listgroup-text-service">  Bring to the table win-win survival strategies to ..  </p>      
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
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

export default services
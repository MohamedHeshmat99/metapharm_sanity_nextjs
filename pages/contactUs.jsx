import React, { useState } from 'react';
import { FaEnvelope, FaLocationArrow, FaPhoneAlt, FaRegPaperPlane } from 'react-icons/fa'
import { TiUserOutline } from 'react-icons/ti'
import { RxEnvelopeClosed } from 'react-icons/rx'
import { HiOutlinePencilAlt } from 'react-icons/hi'
const contactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Submit form
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      setMessage('Message sent successfully.');
    }, 1500);
  }

  function handleInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function validateForm() {
    if (!formData.name || !formData.email || !formData.message) {
      setMessage('Please fill all fields');
      return false;
    }

    return true;
  }

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
              <li className="active">ContactUs</li>
            </ol>
          </div>
          <div className="contact-us-col-md-12"><h1>Contact Us</h1></div>
        </div>
      </div>
    </div>
    
    <div className="content-area">
      <div className="contact_us_container">
        <main className="main-content">
          <article className="post-1036">
            <div className="entry-content">
              <div className="elementor-1036">
                <section className="elementor-section-contact-us">
                  <div className="elementor-container-contact">
                    <div className="elementor-column-contact-us">
                    <div className="elementor-widget-wrap-1">

                      <section className="elementor-section-call-us">
                        <div className="elementor-container-call-us">
                          <div className="elementor-column-call-us">
                            <div className="elementor-widget-wrap-call-us">
                              <div className="elementor-element-call-us">
                                <div className="elementor-widget-container-call-us">
                                  <div className="elementor-icon-wrapper">
                                    <div className="elementor-icon">
                                      <FaPhoneAlt className="fa-phone-alt" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="elementor-column-call_us">
                            <div className="elementor-widget-wrap-call_us">
                              <div className="elementor-element-call_us">
                                <div className="elementor-widget-container-call_us">
                                  <h3 className="elementor-heading-title-call_us">Call Us:</h3> 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </section>

                      <section className="elementor-section-call-us-p">
                        <div className="elementor-container-call-us-p">
                          <div className="elementor-column-call-us-p">
                            <div className="elementor-widget-wrap-call-us-p">
                              <div className="elementor-element-call-us-p">
                                <div className="elementor-widget-container-call-us-p">
                                  <p className="elementor-heading-title-call-us-p">We're available 24/7, 7 days a week.</p> 
                                </div>
                              </div>
                              <div className="elementor-element-call-us-p">
                                <div className="elementor-widget-container-call-us-p">
                                  <p className="elementor-heading-title-number">
                                    <a href="tel:%209229%208228">+08 9229 8228</a>
                                  </p> 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </section>

                      <section className="elementor-section-call-us">
                        <div className="elementor-container-call-us">
                          <div className="elementor-column-call-us">
                            <div className="elementor-widget-wrap-call-us">
                              <div className="elementor-element-call-us">
                                <div className="elementor-widget-container-call-us">
                                  <div className="elementor-icon-wrapper">
                                    <div className="elementor-icon">
                                      <FaEnvelope className="fa-phone-alt" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="elementor-column-call_us">
                            <div className="elementor-widget-wrap-call_us">
                              <div className="elementor-element-call_us">
                                <div className="elementor-widget-container-call_us">
                                  <h3 className="elementor-heading-title-call_us">Write Us:</h3> 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </section>

                      <section className="elementor-section-call-us-p">
                        <div className="elementor-container-call-us-p">
                          <div className="elementor-column-call-us-p">
                            <div className="elementor-widget-wrap-call-us-p">
                              <div className="elementor-element-call-us-p">
                                <div className="elementor-widget-container-call-us-p">
                                    <p className="elementor-heading-title-call-us-p">Fill out our form and we will contact you within 24 hours.</p> 
                                </div>
                              </div>
                              <div className="elementor-element-call-us-p">
                                <div className="elementor-widget-container-call-us-p">
                                  <p className="elementor-heading-title-number">
                                    <a href="mailto:%20hello@metapharm.com">Email: hello@metapharm.com</a>
                                  </p> 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </section>

                      <section className="elementor-section-call-us">
                        <div className="elementor-container-call-us">
                          <div className="elementor-column-call-us">
                            <div className="elementor-widget-wrap-call-us">
                              <div className="elementor-element-call-us">
                                <div className="elementor-widget-container-call-us">
                                  <div className="elementor-icon-wrapper">
                                    <div className="elementor-icon">
                                      <FaLocationArrow className="fa-phone-alt" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="elementor-column-call_us">
                            <div className="elementor-widget-wrap-call_us">
                              <div className="elementor-element-call_us">
                                <div className="elementor-widget-container-call_us">
                                  <h3 className="elementor-heading-title-call_us">Headquarter</h3> 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </section>

                      <section className="elementor-section-call-us-p">
                        <div className="elementor-container-call-us-p">
                          <div className="elementor-column-call-us-p">
                            <div className="elementor-widget-wrap-call-us-p">
                              <div className="elementor-element-call-us-p">
                                <div className="elementor-widget-container-call-us-p">
                                  <p className="elementor-heading-title-call-us-p">Monday – Friday: 9:00-20:00</p> 
                                </div>
                              </div>
                              <div className="elementor-element-call-us-p">
                                <div className="elementor-widget-container-call-us-p">
                                  <p className="elementor-heading-title-call-us-p">Saturady: 11:00 – 15:00</p> 
                                </div>
                              </div>
                              <div className="elementor-element-call-us-p">
                                <div className="elementor-widget-container-call-us-p">
                                  <p className="elementor-heading-title-number">
                                    <a href="https://goo.gl/maps/rZrbWjaNAuKVsyBh8">27 Department, New Minya, EL Minya, EGP</a>
                                  </p> 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </section>

                    </div>

                    </div>

                    <div className="elementor-column-meta-form">
      <div className="elementor-widget-wrap-meta-form">
        <div className="elementor-element-meta-form">
          <div className="elementor-widget-container-meta-form">
            <div className="mt-addons-contact-meta-form">
              <div role="form" className="wpcf7-form-form" id="wpcf7-f3814-p1036-o1" lang="en-US" dir="ltr">
                <div className="screen-reader-response">
                  <p role="status" aria-live="polite" aria-atomic="true"></p> 
                  <ul></ul>
                </div>
                <form action="/contact-us/#wpcf7-f3814-p1036-o1" method="post" className="wpcf7-form-init" noValidate="novalidate" data-status="init" onSubmit={handleFormSubmit}>
                  <div style={{display: "none"}}>
                    <input type="hidden" name="_wpcf7" value="3814" />
                    <input type="hidden" name="_wpcf7_version" value="5.6.4" />
                    <input type="hidden" name="_wpcf7_locale" value="en_US" />
                    <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f3814-p1036-o1" />
                    <input type="hidden" name="_wpcf7_container_post" value="1036" />
                    <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                  </div>
                  <div className="metapharm-row-row">
                    <div className="metapharm-contact-col">
                      <label><TiUserOutline className="fa-user-o-name-icon" aria-hidden="true" /></label><br />
                      <span className="wpcf7-form-control-wrap" data-name="text-414">
                        <input type="text" name="name" size="40" className="metapharm-contact-text" aria-required="true" aria-invalid="false" placeholder="Full Name" value={formData.name} onChange={handleInputChange} />
                      </span>
                    </div>
                    <div className="metapharm-contact-col">
                      <label><RxEnvelopeClosed className="fa-envelope-o-email-icon" aria-hidden="true" /></label><br />
                      <span className="wpcf7-form-control-wrap" data-name="email-12">
                        <input type="email" name="email" size="40" className="metapharm-contact-email" aria-required="true" aria-invalid="false" placeholder="Email Address" value={formData.email} onChange={handleInputChange} />
                      </span>
                    </div>
                    <div className="metapharm-contact-col">
                      <label><HiOutlinePencilAlt className="fa-pencil-square-o-textarea-icon" aria-hidden="true" /></label><br />
                      <span className="wpcf7-form-control-wrap" data-name="textarea-545">
                        <textarea name="message" cols="40" rows="10" className="metapharm-contact-textarea" aria-required="true" aria-invalid="false" placeholder="Message..." value={formData.message} onChange={handleInputChange}></textarea>
                      </span>
                    </div>
                    <div className="metapharm-contact-col">
                      <button type="submit" className="metapharm-contact-submit" disabled={isSubmitting}>
                        {isSubmitting ? <FaRegPaperPlane className="fa-paper-plane-o" /> : 'Send'}
                      </button>
                    </div>
                  </div>
                  {message && <p>{message}</p>}
                </form>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
                  </div>
                </section>

                <section className="elementor-section-map" >
                  <div className="elementor-container-map">
                    <div className="elementor-column-map">
                      <div className="elementor-widget-wrap-map">
                        <div className="elementor-element-map">
                          <div className="elementor-widget-container-map">
                            <div className="elementor-custom-embed-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.0856074967155!2d30.83553312477981!3d28.082931475969342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145b265f9cc6452d%3A0x1cb8f296792c0c02!2z2KPZg9mA2KfYr9mK2YDZhdmA2YrZgNipINin2YTZgNiz2YDYp9iv2KfYqiDYqNin2YTZgNmF2YDZhtmA2YrZgNmA2YDZgNmA2Kcg2KfZhNmA2KzZgNiv2YrZgNiv2Kk!5e0!3m2!1sar!2seg!4v1685454320629!5m2!1sar!2seg"  width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="clearfix"></div>
            </div>
          </article>
        </main>
      </div>
    </div>
  </div>
)
}

export default contactUs
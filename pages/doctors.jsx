import React,{ useState } from 'react';
import Link from 'next/link'
import {FaPhoneAlt} from 'react-icons/fa'
const doctors = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function handleFormSubmit(event) {
      event.preventDefault();
  
      if (!validateForm()) {
        return;
      }
  
      // Submit form
      // ...
      // Display success message
      setIsSubmitted(true);
      setMessage('Message sent successfully.');
  
      // Reset form and hide message after 1.5 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
        setMessage('');
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
              <li className="active">Doctors</li>
            </ol>
          </div>
          <div className="contact-us-col-md-12"><h1>Doctors</h1></div>
        </div>
      </div>
    </div>

    <header className = "header bg-blue">
        <div className = "header-inner text-white text-center">
            <div className = "container grid">
                <div className = "header-inner-left">
                    <h1>your most trusted<br/> <span>health partner</span></h1>
                    <p className = "lead">the best match services for you</p>
                    <p className = "text text-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nulla odit esse necessitatibus corporis voluptatem?</p>
                    <div className = "btn-group">
                        <Link href={'/aboutUs'}><a href = "#" className = "button btn-white">Learn More</a></Link>
                        <Link href={'/login'}><a href = "#" className = "button btn-light-blue">Sign In</a></Link>
                    </div>
                </div>
                <div className = "header-inner-right">
                    <img src = "images/header.png" className='w-full block' />
                </div>
            </div>
        </div>
    </header>
   
    <main>

        <section id = "about" className = "about py">
            <div className = "about-inner">
                <div className = "container grid">
                    <div className = "about-left text-center">
                        <div className = "section-head">
                            <h2>About Us</h2>
                            <div className = "border-line"></div>
                        </div>
                        <p className = "text text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias delectus facilis, temporibus eum consectetur, a debitis exercitationem quae distinctio aliquid ea ipsam vitae esse amet soluta maxime dolorem? Inventore ut maiores illo ipsum nisi, nulla eligendi unde reiciendis quod voluptas velit sit voluptate perferendis cum pariatur molestiae tenetur repellat!</p>
                        <Link href={'/aboutUs'}><a href = "#" className = "button btn-white">Learn More</a></Link>
                    </div>
                    <div className = "about-right flex">
                        <div className = "img">
                            <img src = "images/about-img.png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section id = "banner-one" className = "banner-one text-center">
            <div className = "container text-white">
                <blockquote className = "lead"><i className = "fas fa-quote-left"></i> When you are young and healthy, it never occurs to you that in a single second your whole life could change. <i className = "fas fa-quote-right"></i></blockquote>
                <small className = "text text-sm">- Anonim Nano</small>
            </div>
        </section>



        <section id = "services" className = "services py">
            <div className = "container">
                <div className = "section-head text-center">
                    <h2 className = "lead">The Best Doctor gives the least medicines</h2>
                    <p className = "text text-lg">A perfect way to show your hospital services</p>
                    <div className = "line-art flex">
                        <div></div>
                        <img src = "images/4-dots.png" />
                        <div></div>
                    </div>
                </div>
                <div className = "services-inner text-center grid">
                    <article className = "service-item">
                        <div className = "icon">
                            <img src = "images/service-icon-1.png" />
                        </div>
                        <h3>Cardio Monitoring</h3>
                        <p className = "text text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus doloribus facilis velit, assumenda tempora quas mollitia quos voluptatibus consequatur!</p>
                    </article>

                    <article className = "service-item">
                        <div className = "icon">
                            <img src = "images/service-icon-2.png" />
                        </div>
                        <h3>Medical Treatment</h3>
                        <p className = "text text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus doloribus facilis velit, assumenda tempora quas mollitia quos voluptatibus consequatur!</p>
                    </article>

                    <article className = "service-item">
                        <div className = "icon">
                            <img src = "images/service-icon-3.png" />
                        </div>
                        <h3>Emergency Help</h3>
                        <p className = "text text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus doloribus facilis velit, assumenda tempora quas mollitia quos voluptatibus consequatur!</p>
                    </article>

                    <article className = "service-item">
                        <div className = "icon">
                            <img src = "images/service-icon-4.png" />
                        </div>
                        <h3>First Aid</h3>
                        <p className = "text text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus doloribus facilis velit, assumenda tempora quas mollitia quos voluptatibus consequatur!</p>
                    </article>
                </div>
            </div>
        </section>



        <section id = "banner-two" className = "banner-two text-center">
            <div className = "container grid">
                <div className = "banner-two-left">
                    <img src = "images/landing page.jpg" />
                </div>
                <div className = "banner-two-right">
                    <p className = "lead text-white">When you are young and healthy, it never occurs to you that in a single second your whole life could change.</p>
                    <div className = "btn-group">
                    <Link href={'/aboutUs'}><a href = "#" className = "button btn-white">Learn More</a></Link>
                    <Link href={'/login'}><a href = "#" className = "button btn-light-blue">Sign In</a></Link>
                    </div>
                </div>
            </div>
        </section>



        <section id = "doc-panel" className = "doc-panel py">
            <div className = "container">
                <div className = "section-head">
                    <h2>Our Doctor Panel</h2>
                </div>

                <div className = "doc-panel-inner grid">
                    <div className = "doc-panel-item">
                        <div className = "img flex">
                            <img src = "images/doc-1.png" alt = "doctor image" />
                            <div className = "info text-center bg-blue text-white flex">
                                <p className = "lead">samuel goe</p>
                                <p className = "text-lg">Medicine</p>
                            </div>
                        </div>
                    </div>

                    <div className = "doc-panel-item">
                        <div className = "img flex">
                            <img src = "images/doc-2.png" alt = "doctor image" />
                            <div className = "info text-center bg-blue text-white flex">
                                <p className = "lead">elizabeth ira</p>
                                <p className = "text-lg">Cardiology</p>
                            </div>
                        </div>
                    </div>

                    <div className = "doc-panel-item">
                        <div className = "img flex">
                            <img src = "images/doc-3.png" alt = "doctor image" />
                            <div className = "info text-center bg-blue text-white flex">
                                <p className = "lead">tanya collins</p>
                                <p className = "text-lg">Medicine</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section id = "package-service" className = "package-service py text-center">
            <div className = "container">
                <div className = "package-service-head text-white">
                    <h2>Package Service</h2>
                    <p className = "text text-lg">Best service package for you</p>
                </div>
                <div className = "package-service-inner grid">
                    <div className = "package-service-item bg-white">
                        <div className = "icon flex">
                        <FaPhoneAlt  />
                        </div>
                        <h3>Regular Case</h3>
                        <p className = "text text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, asperiores. Expedita, reiciendis quos beatae at consequatur voluptatibus fuga iste adipisci.</p>
                        <Link href={'/aboutUs'}><a href = "#" className = "button btn-blue">Read More</a></Link>
                    </div>

                    <div className = "package-service-item bg-white">
                        <div className = "icon flex">
                          <i className="ri-calendar-2-line"></i>
                        </div>
                        <h3>Serious Case</h3>
                        <p className = "text text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, asperiores. Expedita, reiciendis quos beatae at consequatur voluptatibus fuga iste adipisci.</p>
                        <Link href={'/aboutUs'}><a href = "#" className = "button btn-blue">Read More</a></Link>
                    </div>
                    
                    <div className = "package-service-item bg-white">
                        <div className = "icon flex">
                          <i className="ri-wechat-line"></i>
                        </div>
                        <h3>Emergency Case</h3>
                        <p className = "text text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, asperiores. Expedita, reiciendis quos beatae at consequatur voluptatibus fuga iste adipisci.</p>
                        <Link href={'/aboutUs'}><a href = "#" className = "button btn-blue">Read More</a></Link>
                    </div>
                </div>
            </div>
        </section>



        <section id = "posts" className = "posts py">
            <div className = "container">
                <div className = "section-head">
                    <h2>Latest Post</h2>
                </div>
                <div className = "posts-inner grid">
                    <article className = "post-item bg-white">
                        <div className = "img">
                            <img src = "images/post-1.jpg" />
                        </div>
                        <div className = "content">
                            <h4>Inspiring stories of person and family centered care during a global pandemic.</h4>
                            <p className = "text text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor voluptas eius recusandae sunt obcaecati esse facere cumque. Aliquid, cupiditate debitis.</p>
                            <p className = "text text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia ipsam, quis iure sed nulla.</p>
                            <div className = "info flex">
                                <small className = "text text-sm"><i className="ri-time-fill"></i> October 27, 2021</small>
                                <small className = "text text-sm"><i className="ri-chat-3-fill"></i> 5 comments</small>
                            </div>
                        </div>
                    </article>

                    <article className = "post-item bg-white">
                        <div className = "img">
                            <img src = "images/post-2.jpg" />
                        </div>
                        <div className = "content">
                            <h4>Inspiring stories of person and family centered care during a global pandemic.</h4>
                            <p className = "text text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor voluptas eius recusandae sunt obcaecati esse facere cumque. Aliquid, cupiditate debitis.</p>
                            <p className = "text text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia ipsam, quis iure sed nulla.</p>
                            <div className = "info flex">
                                <small className = "text text-sm"><i className="ri-time-fill"></i> October 27, 2021</small>
                                <small className = "text text-sm"><i className="ri-chat-3-fill"></i> 5 comments</small>
                            </div>
                        </div>
                    </article>

                    <article className = "post-item bg-white">
                        <div className = "img">
                            <img src = "images/post-3.jpg" />
                        </div>
                        <div className = "content">
                            <h4>Inspiring stories of person and family centered care during a global pandemic.</h4>
                            <p className = "text text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor voluptas eius recusandae sunt obcaecati esse facere cumque. Aliquid, cupiditate debitis.</p>
                            <p className = "text text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia ipsam, quis iure sed nulla.</p>
                            <div className = "info flex">
                                <small className = "text text-sm"><i className="ri-time-fill"></i> October 27, 2021</small>
                                <small className = "text text-sm"><i className="ri-chat-3-fill"></i> 5 comments</small>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>



        <section id = "contact" className = "contact py">
            <div className = "container grid">
                <div className = "contact-left">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.0856074967155!2d30.83553312477981!3d28.082931475969342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145b265f9cc6452d%3A0x1cb8f296792c0c02!2z2KPZg9mA2KfYr9mK2YDZhdmA2YrZgNipINin2YTZgNiz2YDYp9iv2KfYqiDYqNin2YTZgNmF2YDZhtmA2YrZgNmA2YDZgNmA2Kcg2KfZhNmA2KzZgNiv2YrZgNiv2Kk!5e0!3m2!1sar!2seg!4v1685454320629!5m2!1sar!2seg"  width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-right text-white text-center bg-blue">
                    <div className="contact-head">
                        <h3 className="lead">Contact Us</h3>
                        <p className="text text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga.</p>
                    </div>
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-element">
                        <input type="text" className="form-control" name="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} />
                        </div>
                        <div className="form-element">
                        <input type="email" className="form-control" name="email" placeholder="Your email" value={formData.email} onChange={handleInputChange} />
                        </div>
                        <div className="form-element">
                        <textarea rows="5" placeholder="Your Message" className="form-control" name="message" value={formData.message} onChange={handleInputChange} />
                        </div>
                        <button type="submit" className="button btn-white btn-submit" disabled={isSubmitted}>
                        {isSubmitted ? 'Message sent' : <><i className="ri-arrow-right-line"></i> Send Message</>}
                        </button>
                    </form>
                    {message && <div className="message">{message}</div>}
                </div>
            </div>
        </section>

    </main>

    </div>
  )
}

export default doctors
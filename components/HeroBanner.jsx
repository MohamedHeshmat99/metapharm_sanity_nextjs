import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {

  return (
    <section className="elementor-section-home">
      <div className="elementor-container-home  ">
        <div className="elementor-column">
          <div className="elementor-widget-wrap">
            <div className="elementor-element-home">
              <div className="elementor-widget-container">
                <div className="mt-addons-title-subtile">
                  <div className="mt-addons-subtitle-section " style={{color:"#000000"}}>Online Medical Supplies</div>
                  <h2 className="mt-addons-title-section" style={{color:"#000000"}}>Get Your Vitamins &amp; Minerals</h2>
                </div>
                <section className="elementor-section-button">
                  <div className="elementor-container-button">
                    <div className="elementor-column-button">
                      <div className="elementor-widget-wrap-button">
                        <div className="elementor-element-button">
                          <div className="elementor-widget-container-button1">
                            <div className="mt-addons_button_holder">
                              <Link href={'/shop'}>
                                <a className="mt-addons_button1">Shop Now </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column-button1">
                      <div className="elementor-widget-wrap-button1">
                        <div className="elementor-element-button1">
                          <div className="elementor-widget-container-button2">
                            <div className="mt-addons_button_holder1">
                            <Link href={'/aboutUs'}>
                              <a className="mt-addons_button2">About Us </a>
                              </Link>
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
        </div>
      </div>
    </section>
    
  )
}

export default HeroBanner
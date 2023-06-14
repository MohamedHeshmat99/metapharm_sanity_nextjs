import { Product, FooterBanner, HeroBanner, Contact } from '@/components'
import React from 'react'

import { client } from '@/lib/client';
import Link from 'next/link';

const Home = ({products, bannerData}) => (

  <div>
    <HeroBanner  />
    <section className="elementor-section-services">
      <div className="elementor-container-services">
        <div className="elementor-column-home-services">
          <div className="elementor-widget-wrap-home-services">
            <div className="elementor-element-services">
              <div className="elementor-widget-container-services">
                <div className="mt-icon-listgroup-item-services">
                  <div className="mt-icon-listgroup-holder-services">
                    <div className="mt-icon-listgroup-icon-holder-inner-services">
                      <a>
                        <img alt="list-image" className="mt-image-list-services" src="/assets/icon1-1.png" />
                      </a>
                    </div>
                    <div className="mt-icon-listgroup-content-holder-inner-services">
                      <h3 className="mt-icon-listgroup-title-services"><a>Secure Payment</a></h3>
                      <p className="mt-icon-listgroup-text-services"> ALL CARDS ACCEPTED </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column-home-services">
          <div className="elementor-widget-wrap-home-services">
            <div className="elementor-element-services">
              <div className="elementor-widget-container-services">
                <div className="mt-icon-listgroup-item-services">
                  <div className="mt-icon-listgroup-holder-services">
                    <div className="mt-icon-listgroup-icon-holder-inner-services">
                      <a>
                        <img alt="list-image" className="mt-image-list-services" src="/assets/icon3-1.png" />
                      </a>
                    </div>
                    <div className="mt-icon-listgroup-content-holder-inner-services">
                      <h3 className="mt-icon-listgroup-title-services"><a>Online Support</a></h3>
                      <p className="mt-icon-listgroup-text-services"> TECHNICAL 24/7 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column-home-services">
          <div className="elementor-widget-wrap-home-services">
            <div className="elementor-element-services">
              <div className="elementor-widget-container-services">
                <div className="mt-icon-listgroup-item-services">
                  <div className="mt-icon-listgroup-holder-services">
                    <div className="mt-icon-listgroup-icon-holder-inner-services">
                      <a>
                        <img alt="list-image" className="mt-image-list-services" src="/assets/icon2-1.png" />
                      </a>
                    </div>
                    <div className="mt-icon-listgroup-content-holder-inner-services">
                      <h3 className="mt-icon-listgroup-title-services"><a>Free Shipping</a></h3>
                      <p className="mt-icon-listgroup-text-services"> ON ALL ORDERS </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column-home-services">
          <div className="elementor-widget-wrap-home-services">
            <div className="elementor-element-services">
              <div className="elementor-widget-container-services">
                <div className="mt-icon-listgroup-item-services">
                  <div className="mt-icon-listgroup-holder-services">
                    <div className="mt-icon-listgroup-icon-holder-inner-services">
                      <a>
                        <img alt="list-image" className="mt-image-list-services" src="/assets/icon4-1.png" />
                      </a>
                    </div>
                    <div className="mt-icon-listgroup-content-holder-inner-services">
                      <h3 className="mt-icon-listgroup-title-services"><a>Discounts Online</a></h3>
                      <p className="mt-icon-listgroup-text-services"> WEEKEND SALES </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="elementor-section">
      <div className="elementor-container">
        <div className="elementor-element">
			    <div className="elementor-widget">
            <div className="container_banner">
				      <div className="banner_banner1">
			          <div className="mt-discount-container">
                  <div className="mt-discount-content">
                    <div className="first-text" style={{justifyContent: "left"}}>Starting with 19$</div>                    
                    <div className="second-text" style={{justifyContent: "left"}}>Your Day-life Protection</div>                    
                    <div className="third-text" style={{justifyContent: "left"}}>Protein Supplement</div>                
                    <div className="discount-btn-zone" style={{justifyContent: "flex-start"}}>
                      <Link href={'/shop'}><a className="primary-button">Shop Now </a></Link>                 
                    </div>
                  </div>
                </div>
        		  </div>
				    </div>
					</div>
		    </div>
				<div className="elementor-element1">
			    <div className="elementor-widget1">
            <div className="container_banner">
				      <div className="banner_banner1">
			          <div className="mt-discount-container1">
                  <div className="mt-discount-content">
                    <div className="first-text" style={{justifyContent: "left"}}>Get Up to 26% </div>                    
                    <div className="second-text" style={{justifyContent: "left"}}>Starting with 19$</div>                    
                    <div className="third-text" style={{justifyContent: "left"}}>Immunity Boosters</div>                
                    <div className="discount-btn-zone" style={{justifyContent: "flex-start"}}>
                      <Link href={'/shop'}><a className="primary-button">Shop Now </a></Link>                 
                    </div>
                  </div>
                </div>
        		  </div>
				    </div>
					</div>
		    </div>
      </div>
    </section>
    <div>
      <h2 className='mt-addons-title-section-title'>Health Products</h2>
    </div>

    <div className='products-container'>
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    <Contact />
  </div>

);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home

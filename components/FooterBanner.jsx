import React from 'react';
import Link from 'next/link';

const FooterBanner = () => {



  return (
    <div>
      <section className="elementor-section-footer">
      <div className="elementor-container-footer">
        <div className="elementor-column-footer">
          <div className="elementor-widget-wrap-footer">
            <div className="elementor-element-footer">
              <div className="elementor-widget-container-footer">
                <div className="mt-discount-container-footer1">
                  <div className="mt-discount-content-footer1">
                    <div className="first-text-footer1">Free Shipping And More</div> 
                    <div className="second-text-footer1">Curbside Delivery</div> 
                    <div className="third-text-footer1">Vitamin B12 &amp; B</div> 
                    <div className="discount-btn-zone-footer1"> <Link href={'/shop'}><a className="primary-button">Shop Now </a></Link> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column-footer">
          <div className="elementor-widget-wrap-footer">
            <div className="elementor-element-footer">
              <div className="elementor-widget-container-footer">
                <div className="mt-discount-container-footer2">
                  <div className="mt-discount-content-footer2">
                    <div className="first-text-footer2">Extra 9% Savings On Order</div> 
                    <div className="second-text-footer2">$25.00 - %75.00</div> 
                    <div className="third-text-footer2">For Weight Gain</div> 
                    <div className="discount-btn-zone-footer2"><Link href={'/shop'}><a className="primary-button">Shop Now </a></Link> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="brands"> 
      <div className="container"> 
        <div className="wrapper flexitem"> 
          <div className="item"> 
            <a href="https://www.pfizer.com/" target="_blank" > 
              <img src="assets/brands/pfizer-logo.png" alt="" style={{width:"120px", height: "70px"}}/> 
            </a> 
        </div> 
        <div className="item"> 
          <a href="https://www.gilead.com/" target='_blank'> 
            <img src="assets/brands/gilead-logo.png" alt="" style={{width:"200px", height: "170px"}} /> 
          </a> 
        </div> 
        <div className="item"> 
          <a href="https://www.amgen.com/" target='_blank'> 
            <img src="assets/brands/amgen-logo.png" alt="" style={{width:"200px",height:"140px"}} /> 
          </a> 
        </div> 
        <div className="item"> 
          <a href="https://www.gsk.com/en-gb/" target='_blank'> 
            <img src="assets/brands/glaxosmithkline-logo.png" alt="" style={{width:"160px", height: "70px"}} /> 
          </a> 
        </div> 
        <div className="item"> 
          <a href="https://www.roche.com/" target='_blank'> 
            <img src="assets/brands/roche_logo-removebg-preview.png" alt="" style={{width:"120px", height: "70px"}} /> 
          </a> 
        </div> 
        <div className="item"> 
          <a href="https://www.lilly.com/" target='_blank'> 
            <img src="assets/brands/lilly-logo.png" alt="" style={{width:"120px", height: "100px"}} /> 
          </a> 
        </div> 
        <div className="item"> 
          <a href="https://www.merck.com/" target='_blank'> 
            <img src="assets/brands/merck_logo.png" alt="" style={{width:"170px", height: "70px"}} /> 
          </a> 
        </div> 
        <div className="item"> 
          <a href="https://www.sanofi.com/en" target='_blank'> 
            <img src="assets/brands/sanofi-2022.png" alt="" style={{width:"180px", height: "50px"}} /> 
          </a> 
        </div> 
        <div className="item"> 
          <a href="https://www.abbott.com/" target='_blank'> 
            <img src="assets/brands/Abbott-Logo.png" alt="" style={{width:"200px", height: "70px"}} /> 
          </a> 
        </div> 
        <div className="item"> 
          <a href="https://www.bayer.com/en/" target='_blank'> 
            <img src="assets/brands/bayer-5-logo.png" alt="" style={{width:"160px", height: "100px"}} /> 
          </a> 
        </div> 
        <div className="item"> 
          <a href="https://www.abbvie.com/" target='_blank'> 
            <img src="assets/brands/abbvie-logo.png" alt="" style={{width:"160px", height: "100px"}} /> 
          </a> 
        </div> 
        <div className="item"> 
          <a href="https://www.mckesson.com/" target='_blank'> 
            <img src="assets/brands/McKesson-Logo.png" alt="" style={{width:"160px", height: "170px"}} /> 
          </a> 
        </div> 
        <div className="item"> 
          <a href="https://www.astrazeneca.com/" target='_blank'> 
            <img src="assets/brands/astrazeneca-logo.png" alt="" style={{width:"160px", height: "170px"}} /> 
          </a> 
        </div> 
        <div className="item"> 
          <a href="https://www.novartis.com/" target='_blank'> 
            <img src="assets/brands/novartis-logo.png" alt="" style={{width:"160px", height: "170px"}} /> 
          </a> 
        </div> 
      </div> 
    </div> 
  </div>
  </div>
  )
}

export default FooterBanner
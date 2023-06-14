import React, { useEffect, useState } from 'react'
import Swiper from 'swiper';
import axios from 'axios'
import Productdb from '@/components/Productdb';
import Link from 'next/link'




const Shop = () => {


    useEffect(() => {
      // copy inside .dpt-cat to .departments
      var dptCategory = document.querySelector('.dpt-cat');
      var dptPlace = document.querySelector('.departments');
      dptPlace.innerHTML = dptCategory.innerHTML;
  
      // copy inside nav to nav 
      var mainNav = document.querySelector('.header-nav nav');
      var navPlace = document.querySelector('.off-canvas nav');
      navPlace.innerHTML= mainNav.innerHTML;
  
      // show mobile menu
      const menuButton = document.querySelector('.trigger');
      const closeButton = document.querySelector('.t-close');
      const addclass = document.querySelector('.site');
      menuButton.addEventListener('click', function() {
          addclass.classList.toggle('showmenu')
      })
      closeButton.addEventListener('click', function() {
          addclass.classList.remove('showmenu')   
      })
  
      // show sub menu on mobile
      const submenu = document.querySelectorAll('.has-child .icon-small');
      submenu.forEach((menu) => menu.addEventListener('click',toggle));
  
      function toggle(e) {
          e.preventDefault();
          submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
          if (this.closest('.has-child').classList != 'expand');
          this.closest('.has-child').classList.toggle('expand');
      }
  
      // slider
      const swiper = new Swiper('.swiper', {
          loop: true,
  
          pagination: {
              el: '.swiper-pagination',
          },
  
      });
    }, []);
    const [productInfo, setProductInfo] = useState([])
    const [phrase, setPhrase] = useState('')
    useEffect(() => {
      fetch('/api/products')
        .then(response => response.json())
        .then(json => setProductInfo(json));
    }, []);
    
    const categoriesNames = [...new Set(productInfo.map(p => p.category))];
   
    let products;
    if (phrase) {
      products = productInfo.filter(p => p.name.toLowerCase().includes(phrase));
    } else {
      products = productInfo;
    }

      const [query, setQuery] = useState('')
      const [results, setResults] = useState([])
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.get(`/api/search?q=${query}`)
        setResults(response.data)
      }

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
              <li className="active">Shop</li>
            </ol>
          </div>
          <div className="contact-us-col-md-12"><h1>Shop</h1></div>
        </div>
      </div>
    </div>

    <div id="page" className="site">

      <aside className="site-off desktop-hide">
        <div className="off-canvas">
          <div className="canvas-head flexitem">
          <div className="logo">
            <img src="/assets/logo-no-background.png" alt="" style={{width: "200px"}}/>
          </div>
            <a href="#" className="t-close flexcenter"><i className="ri-close-line"></i></a>
          </div>
          <div className="departments"></div>
          <nav></nav>
          <div className="thetop-nav"></div>
        </div>
      </aside>


      <header style={{position: "inherit"}}>

        <div className="header-nav">
          <div className="container">
            <div className="wrapper flexitem">
              <a href="#" className="trigger desktop-hide"
                ><span className="i ri-menu-2-line"></span></a>
              <div className="left flexitem">
                {/* <div className="logo">
                  <a href="/"><span className="circle"></span>.Store</a>
                </div> */}
                <nav className="mobile-hide">
                  <ul className="flexitem second-links">
                    <li><a href="#" style={{border: "none"}}>Hand Care</a></li>
                    <li><a href="#">Vitamins</a></li>
                    <li className="has-child">
                      <a href="#"
                        >Pain & Fever
                        <div className="icon-small">
                          <i className="ri-arrow-down-s-line"></i>
                        </div>
                      </a>
                      <div className="mega">
                        <div className="container">
                          <div className="wrapper">
                            <div className="flexcol">
                              <div className="row">
                                <h4>Vitamins</h4>
                                <ul>
                                  <li><a href="#">Mineral Supplements</a></li>
                                  <li><a href="#">Avuredic Medicines</a></li>
                                  <li><a href="#">Immunity Boosters</a></li>
                                  <li><a href="#">Weight Management</a></li>
                                  <li><a href="#">Homeophaty Medicines</a></li>
                                  <li><a href="#">Sanitizers & Handwash</a></li>
                                  <li><a href="#">Hand Care</a></li>
                                  <li><a href="#">Pain & Fever</a></li>
                                  <li><a href="#">Teeth</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="flexcol">
                              <div className="row">
                                <h4>HandCare</h4>
                                <ul>
                                  <li><a href="#">Big Muscles</a></li>
                                  <li><a href="#">Himalaya Wellness</a></li>
                                  <li><a href="#">safe</a></li>
                                  <li><a href="#">Manaearth</a></li>
                                  <li><a href="#">Soulflower</a></li>
                                  <li><a href="#">AVUREDIC MEDICINES</a></li>
                                  <li><a href="#">Vitamins</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="flexcol">
                              <div className="row">
                                <h4>Beauty</h4>
                                <ul>
                                  <li><a href="#">Bath Accessories</a></li>
                                  <li><a href="#">Makeup & Cosmetics</a></li>
                                  <li><a href="#">Skin Care</a></li>
                                  <li><a href="#">Hair Care</a></li>
                                  <li><a href="#">Essential Oils</a></li>
                                  <li><a href="#">Fragrances</a></li>
                                  <li><a href="#">Soaps & Bath Bombs</a></li>
                                  <li><a href="#">Face Masks & Coverings</a></li>
                                  <li><a href="#">Spa Kits & Gifts</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="flexcol">
                              <div className="row">
                                <h4>Top Brands</h4>
                                <ul className="women-brands">
                                  <li><a href="#">Pfizer</a></li>
                                  <li><a href="#">Gilead</a></li>
                                  <li><a href="#">Amgen</a></li>
                                  <li><a href="#">Roche</a></li>
                                  <li><a href="#">Lilly</a></li>
                                  <li><a href="#">Merck</a></li>
                                  <li><a href="#">Sanofi</a></li>
                                  <li><a href="#">Abbott</a></li>
                                  <li><a href="#">Bayer</a></li>
                                  <li><a href="#">Abbvie</a></li>
                                  <li><a href="#">Glaxosmithkline</a></li>
                                </ul>
                                <a href="#" className="view-all"
                                  >View all brands
                                  <i className="ri-arrow-right-line"></i
                                ></a>
                              </div>
                            </div>
                            <div className="flexcol products">
                              <div className="row">
                                <div className="media">
                                  <div className="thumbnail object-cover">
                                    <a href="#">
                                      <img
                                        src="assets/Main-prod3.jpg"
                                        alt="thumbnail"
                                        style={{backgroundColor:"#dddfdc"}}
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="text-content">
                                  <h4>Most Wanted!</h4>
                                  <a href="#" className="primary-button"
                                    >Order Now</a
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li><a href="#">Baby Shop</a></li>
                    <li>
                      <Link href={'/prescription'}>
                        <a
                          >Prescription
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* header-nav */}

        <div className="header-main mobile-hide">
          <div className="container">
            <div className="wrapper flexitem">
              <div className="left">
                <div className="dpt-cat">
                  <div className="dpt-head">
                    <div className="main-text">All Departments</div>
                    <div className="mini-text mobile-hide">Total 1059 Products</div>
                    <a href="#" className="dpt-trigger mobile-hide">
                      <i className="ri-menu-3-line ri-xl"></i>
                    </a>
                  </div>
                  <div className="dpt-menu">
                    <ul className="second-links">
                      <li className="has-child beauty">
                        <a href="#">
                          <div className="icon-large">
                          </div>
                          Beauty
                          <div className="icon-small">
                            <i className="ri-arrow-right-s-line"></i>
                          </div>
                        </a>
                        <ul>
                          <li><a href="#">Makeup</a></li>
                          <li><a href="#">Skin Care</a></li>
                          <li><a href="#">Hair Care</a></li>
                          <li><a href="#">Fragrance</a></li>
                          <li><a href="#">Foot & Hand Care</a></li>
                          <li><a href="#">Tools & Accessories</a></li>
                          <li><a href="#">Shave & Hair Removal</a></li>
                          <li><a href="#">Personal Care</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <div className="icon-large">
                          </div>
                          Vitamins
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="icon-large">
                          </div>
                          Pain & Fever
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="icon-large">
                          </div>
                          HandCare
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="icon-large">
                          </div>
                          Health & Household
                        </a>
                      </li>
                      <li className="has-child homekit">
                        <a href="#">
                          <div className="icon-large">
                          </div>
                          Vitamins
                          <div className="icon-small">
                          <i className="ri-arrow-right-s-line"></i>
                          </div>
                        </a>
                        <div className="mega">
                          <div className="flexcol">
                            <div className="row"  style={{flex: "0"}}>
                              <h4><a href="#">Pain & Fever</a></h4>
                              <ul>
                              <li><a href="#">Makeup</a></li>
                              <li><a href="#">Skin Care</a></li>
                              <li><a href="#">Hair Care</a></li>
                              <li><a href="#">Fragrance</a></li>
                              <li><a href="#">Fragrance</a></li>
                              </ul>
                            </div>
                            <div className="row">
                              <h4><a href="#">Beauty</a></h4>
                              <ul>
                                  <li><a href="#">Bath Accessories</a></li>
                                  <li><a href="#">Makeup & Cosmetics</a></li>
                                  <li><a href="#">Skin Care</a></li>
                                  <li><a href="#">Hair Care</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="flexcol">
                            <div className="row"  style={{flex: "0"}}>
                              <h4><a href="#">HandCare</a></h4>
                              <ul>
                                  <li><a href="#">Big Muscles</a></li>
                                  <li><a href="#">Himalaya Wellness</a></li>
                                  <li><a href="#">safe</a></li>
                                  <li><a href="#">Manaearth</a></li>
                                  <li><a href="#">Soulflower</a></li>
                                  <li><a href="#">AVUREDIC MEDICINES</a></li>
                                  <li><a href="#">Vitamins</a></li>
                              </ul>
                            </div>
                            <div className="row">
                              <h4><a href="#">Pain & Fever</a></h4>
                              <ul>
                                  <li><a href="#">safe</a></li>
                                  <li><a href="#">Manaearth</a></li>
                                  <li><a href="#">Soulflower</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="flexcol">
                            <div className="row">
                              <h4><a href="#">Beauty</a></h4>
                              <ul>
                                  <li><a href="#">Bath Accessories</a></li>
                                  <li><a href="#">Makeup & Cosmetics</a></li>
                                  <li><a href="#">Skin Care</a></li>
                                  <li><a href="#">Hair Care</a></li>
                                  <li><a href="#">safe</a></li>
                                  <li><a href="#">Manaearth</a></li>
                                  <li><a href="#">Soulflower</a></li>
                                  <li><a href="#">Manaearth</a></li>
                                  <li><a href="#">Soulflower</a></li>
                                  <li><a href="#">AVUREDIC MEDICINES</a></li>
                                  <li><a href="#">Vitamins</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          <div className="icon-large">
                          </div>
                          Pet Supplies
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="icon-large">
                          </div>
                          Sport
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="icon-large">
                          </div>
                          Best Seller
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="search-box">
                  <form action="#" className="search">
                    <span className="icon-large"
                      ><i className="ri-search-line"></i
                    ></span>
                    <input value={phrase} onChange={e => setPhrase(e.target.value)} type="search" placeholder="Search for products" />
                    <button type="submit">Search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* header-main */}

      </header>
      {/* header */}

      <main>
        <div className="slider">
          <div className="container">
            <div className="wrapper">
              <div className="myslider swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="item">
                      <div className="image object-cover">
                        <img src="assets/slider1.jpg" alt="" />
                      </div>
                      <div className="text-content flexcol">
                        <h4>Best Medicines</h4>
                        <h2><span>Come and Get it!</span><br/><span>Brand New Medicine</span></h2>
                        <a href="#" className="primary-button">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item">
                      <div className="image object-cover">
                        <img src="assets/slider2.jpg" alt="" />
                      </div>
                      <div className="text-content flexcol">
                        <h4>Quick Care</h4>
                        <h2><span>Care Your Healthy</span><br/><span>With Vitamins</span></h2>
                        <a href="#" className="primary-button">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item">
                      <div className="image object-cover">
                        <img src="assets/slider3.jpg" alt="" />
                      </div>
                      <div className="text-content flexcol">
                        <h4>Quick Offer</h4>
                        <h2><span>Subscribe To Our Plans</span><br/><span>Extra 50% Off</span></h2>
                        <a href="#" className="primary-button">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item">
                      <div className="image object-cover">
                        <img src="assets/slider4.jpg" alt="" />
                      </div>
                      <div className="text-content flexcol">
                        <h4>Best Deals</h4>
                        <h2><span>Don't Wait Until It's Too Late</span><br/><span>Buy Your Medication Now</span></h2>
                        <a href="#" className="primary-button">Shop Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
        {/* slider */}

        

        <div className="trending">
          <div className="container">
            <div className="wrapper">
              <div className="sectop flexitem">
                <h2><span className="circle"></span><span>Trending Products</span></h2>
              </div>
              <div className="column">
                <div className="flexwrap" >
                  <div className="row products big">
                    
                  </div>
                  <div className="row products mini">
                    {categoriesNames.map(categoryName => (
                      <div key={categoryName}>
                        {products.find(p => p.category === categoryName) && (
                          <div>
                            <h2>{categoryName}</h2>
                            <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                            {products.filter(p => p.category === categoryName).map(productInfo => (
                              <div key={productInfo._id}>
                                <Productdb {...productInfo} />
                              </div>
                            ))}
                            </div>
                          </div>
                        )}
                        
                      </div>
                    ))}
                    
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* trending */}

        <div className="features">
          <div className="container">
            <div className="wrapper">
              <div className="column">
                <div className="sectop flexitem">
                  <h2><span className="circle"></span><span>Featured Products</span></h2>
                  <div className="second-links">
                    <a href="#" className="view-all">View all<i className="ri-arrow-right-line"></i></a>
                  </div>
                </div>
                <div className="products main flexwrap" style={{display: "flex",flexWrap: "wrap"}}>
                  <div className="item">
                    <div className="media">
                      <div className="thumbnail object-cover">
                        <a href="#">
                          <img src="assets/Main-prod2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="hoverable">
                        <ul>
                          <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                          <li><a href=""><i className="ri-eye-line"></i></a></li>
                          <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                        </ul>
                      </div>
                      <div className="discount circle flexcenter"><span>25%</span></div>
                    </div>
                    <div className="content">
                      <div className="rating">
                        <div className="stars"></div>
                        <span className="mini-text">(1,955)</span>
                      </div>
                      <h3><a href="#">Maca Root Capsules</a></h3>
                      <div className="price">
                        <span className="current">$56.50</span>
                        <span className="normal mini-text">$75.50</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="media">
                      <div className="thumbnail object-cover">
                        <a href="#">
                          <img src="assets/Main-prod4.jpg" alt="" />
                        </a>
                      </div>
                      <div className="hoverable">
                        <ul>
                          <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                          <li><a href=""><i className="ri-eye-line"></i></a></li>
                          <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                        </ul>
                      </div>
                      <div className="discount circle flexcenter"><span>17%</span></div>
                    </div>
                    <div className="content">
                      <div className="rating">
                        <div className="stars"></div>
                        <span className="mini-text">(994)</span>
                      </div>
                      <h3><a href="#">Blephaclean treatment Eye</a></h3>
                      <div className="price">
                        <span className="current">$37.50</span>
                        <span className="normal mini-text">$45.50</span>
                      </div>
                     
                    </div>
                  </div>
                  <div className="item">
                    <div className="media">
                      <div className="thumbnail object-cover">
                        <a href="#">
                          <img src="assets/Main-prod8-removebg-preview.png" alt="" style={{backgroundColor:"#dddfdc"}}/>
                        </a>
                      </div>
                      <div className="hoverable">
                        <ul>
                          <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                          <li><a href=""><i className="ri-eye-line"></i></a></li>
                          <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                        </ul>
                      </div>
                      <div className="discount circle flexcenter"><span>31%</span></div>
                    </div>
                    <div className="content">
                      <div className="rating">
                        <div className="stars"></div>
                        <span className="mini-text">(3,459)</span>
                      </div>
                      <h3><a href="#">Diclofenac Oaifarm Tablet</a></h3>
                      <div className="price">
                        <span className="current">$129.99</span>
                        <span className="normal mini-text">$189.98</span>
                      </div>
                      
                    </div>
                  </div>
                  <div className="item">
                    <div className="media">
                      <div className="thumbnail object-cover">
                        <a href="#">
                          <img src="assets/main-prod3.jpg" alt="" />
                        </a>
                      </div>
                      <div className="hoverable">
                        <ul>
                          <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                          <li><a href=""><i className="ri-eye-line"></i></a></li>
                          <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                        </ul>
                      </div>
                      <div className="discount circle flexcenter"><span>35%</span></div>
                    </div>
                    <div className="content">
                      <div className="rating">
                        <div className="stars"></div>
                        <span className="mini-text">(10)</span>
                      </div>
                      <h3><a href="#">Tekasept Tablets</a></h3>
                      <div className="price">
                        <span className="current">$118.90</span>
                        <span className="normal mini-text">$189.90</span>
                      </div>
                      
                    </div>
                  </div>
                  <div className="item">
                    <div className="media">
                      <div className="thumbnail object-cover">
                        <a href="#">
                          <img src="assets/main-prod12.jpg" alt="" />
                        </a>
                      </div>
                      <div className="hoverable">
                        <ul>
                          <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                          <li><a href=""><i className="ri-eye-line"></i></a></li>
                          <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                        </ul>
                      </div>
                      <div className="discount circle flexcenter"><span>32%</span></div>
                    </div>
                    <div className="content">
                      <div className="rating">
                        <div className="stars"></div>
                        <span className="mini-text">(2,251)</span>
                      </div>
                      <h3><a href="#">Benzoatin</a></h3>
                      <div className="price">
                        <span className="current">$80.90</span>
                        <span className="normal mini-text">$119.50</span>
                      </div>
                      
                    </div>
                  </div>
                  <div className="item">
                    <div className="media">
                      <div className="thumbnail object-cover">
                        <a href="#">
                          <img src="assets/Main-prod11-removebg-preview.png" alt=""  style={{backgroundColor:"#dddfdc"}} />
                        </a>
                      </div>
                      <div className="hoverable">
                        <ul>
                          <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                          <li><a href=""><i className="ri-eye-line"></i></a></li>
                          <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                        </ul>
                      </div>
                      <div className="discount circle flexcenter"><span>30%</span></div>
                    </div>
                    <div className="content">
                      <div className="rating">
                        <div className="stars"></div>
                        <span className="mini-text">(1,237)</span>
                      </div>
                      <h3><a href="#">Teethstr8 Max</a></h3>
                      <div className="price">
                        <span className="current">$45.95</span>
                        <span className="normal mini-text">$64.95</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="media">
                      <div className="thumbnail object-cover">
                        <a href="#">
                          <img src="assets/Main-prod9-removebg-preview.png" alt="" style={{backgroundColor:"#dddfdc"}} />
                        </a>
                      </div>
                      <div className="hoverable">
                        <ul>
                          <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                          <li><a href=""><i className="ri-eye-line"></i></a></li>
                          <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                        </ul>
                      </div>
                      <div className="discount circle flexcenter"><span>25%</span></div>
                    </div>
                    <div className="content">
                      <div className="rating">
                        <div className="stars"></div>
                        <span className="mini-text">(106)</span>
                      </div>
                      <h3><a href="#">Loratadine Ratiopharm Tablet</a></h3>
                      <div className="price">
                        <span className="current">$139.99</span>
                        <span className="normal mini-text">$189.98</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="media">
                      <div className="thumbnail object-cover">
                        <a href="#">
                          <img src="assets/Main-prod1-removebg-preview.png" alt="" style={{backgroundColor:"#dddfdc"}} />
                        </a>
                      </div>
                      <div className="hoverable">
                        <ul>
                          <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                          <li><a href=""><i className="ri-eye-line"></i></a></li>
                          <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                        </ul>
                      </div>
                      <div className="discount circle flexcenter"><span>24%</span></div>
                    </div>
                    <div className="content">
                      <div className="rating">
                        <div className="stars"></div>
                        <span className="mini-text">(25)</span>
                      </div>
                      <h3><a href="#">Tetraciclex Forte</a></h3>
                      <div className="price">
                        <span className="current">$104.90</span>
                        <span className="normal mini-text">$189.90</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* features products */}

        <div className="banners">
          <div className="container">
            <div className="wrapper">
              <div className="column">
                <div className="banner flexwrap" style={{display: "flex"}}>
                  <div className="row" style={{display: "block"}}>
                    <div className="item">
                      <div className="image">
                        <img src="assets/bannermedicine.jpg" alt="" style={{height:"220px", width:"591.4px"}}/>
                      </div>
                      <div className="text-content flexcol">
                        <h4>Brutal Sale!</h4>
                        <h3><span>Get the deal in here</span><br/>Best Vitamins</h3>
                        <a href="#" className="primary-button">Shop Now</a>
                      </div>
                      <a href="#" className="over-link"></a>
                    </div>
                  </div>
                  <div className="row" style={{display: "block"}}>
                    <div className="item get-gray">
                      <div className="image">
                        <img src="assets/bannermedicine2.jpg" alt="" style={{height:"220px", width:"591.4px"}} />
                      </div>
                      <div className="text-content flexcol">
                        <h4>Brutal Sale!</h4>
                        <h3><span>Discount everyday</span><br/>Subscribe Now</h3>
                        <a href="#" className="primary-button">Shop Now</a>
                      </div>
                      <a href="#" className="over-link"></a>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

      </main>
      {/* main */}

      <footer>
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
        {/* newsletter */}

        
      </footer>
      {/* footer */}
    </div>


    </div>
  )
}

export default Shop
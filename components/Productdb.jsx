import React from 'react'

const Productdb = ({name, price, picture}) => {
  return (
    <div>
      <div className="item" style={{flexDirection: "column"}}>
      <div className="media">
        <div className="thumbnail object-cover">
          <a href="#">
            <img src={picture} alt="" style={{backgroundColor:"#dddfdc"}} />
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
        <h3 className="main-links"><a href="#">{name}</a></h3>

        <div className="rating">
          <div className="stars"></div>
          <span className="mini-text">(2,548)</span>
        </div>
        <div className="price">
          <span className="current">${price}</span>
          <span className="normal mini-text">$189.98</span>
        </div>
        <div className="mini-text">
          <p>2975 sold</p>
          <p>Free Shipping</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Productdb
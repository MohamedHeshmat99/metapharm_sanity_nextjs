import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '@/context/StateContext'
const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, SKU, Category, Tag } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <h4>Category: </h4>
          <p>{Category}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h4 style={{color:'#324d67'}}>DESCRIPTION: </h4>
        <p style={{color: '#777'}}>Pellentesque vestibulum facilisis mauris at placerat. Cras at ligula at libero hendrerit venenatis et eget lorem. Pellentesque ex dui, pretium eu euismod a, fermentum id ligula. Integer bibendum consequat nisi vel semper. Pellentesque justo magna, ullamcorper non velit at, eleifend sodales quam. Proin pulvinar, quam at gravida tincidunt, mauris odio consequat libero, sit amet aliquam orci eros quis nisi. Sed id rhoncus diam. Praesent ut eleifend turpis. Maecenas nec odio et sem vehicula sagittis. Vivamus ultricies sagittis porttitor. Sed pretium iaculis odio, eu convallis nunc sollicitudin eget. Suspendisse ac nulla mi. Nullam quam nisl, pulvinar ut facilisis a, aliquam sed turpis.

Nam non nibh sit amet sapien vestibulum accumsan.
Phasellus pellentesque nisl at turpis auctor egestas.
Nulla sodales orci id finibus facilisis.
Proin eu nulla a lectus dictum scelerisque vitae non purus.
Cras consequat mi ac dui sagittis molestie. Proin pulvinar ultricies orci, eu aliquam nibh mattis sed. Aliquam rutrum libero nec luctus suscipit. Nullam rutrum velit ac sapien maximus ultrices. Integer viverra lectus non sem vestibulum, vel aliquam enim lobortis. Praesent eget elementum ligula, eu egestas arcu. Quisque varius, velit rhoncus lobortis auctor, erat quam sodales est, convallis tincidunt quam ex sed arcu.</p>
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails
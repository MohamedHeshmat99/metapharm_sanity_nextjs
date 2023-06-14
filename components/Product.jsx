import React from 'react'
import Link from 'next/link'

import { urlFor } from '@/lib/client'

const Product = ({ product: { image, name, slug, price, Category } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img 
            src={urlFor(image && image[0])}
            style={{width: '300px', height: '300px'}}
            className='product-image'
          />
          <p className='product-name'>{Category}</p>
          <p className='product-price'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
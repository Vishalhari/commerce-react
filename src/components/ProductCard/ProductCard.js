import React from 'react'
import AddtoCart from '../AddtoCard/AddtoCart';

import './ProductCard.css';

const ProductCard = ({products,addToCart}) => {
  return (
    <div class="product-card">
    <div>{products.title}</div>
    <div>{products.price}</div>
    <AddtoCart product={products} addToCart={addToCart} />
    </div>
  )
}

export default ProductCard
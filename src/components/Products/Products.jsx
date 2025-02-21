import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard';

const Products = ({addToCart}) => {
    const [products,SetProducts] = useState([]);
    useEffect(() => {
        fetch('https://run.mocky.io/v3/c715f23c-2025-4004-b629-06086a64ced7')
        .then((response) => response.json())
        .then((data) => SetProducts(data));
    },[]);
  return (
    <div>
    {
        products.map((item,index) => (
            <ProductCard key={index} products={item} addToCart={addToCart}/>
        ))
    }
    </div>
  )
}

export default Products
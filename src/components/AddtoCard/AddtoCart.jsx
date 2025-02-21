import React from 'react'

const AddtoCart = ({addToCart,product}) => {
  return (
    <div>
    <button onClick={() =>addToCart(product) }>AddtoCart</button>
    </div>
  )
}

export default AddtoCart
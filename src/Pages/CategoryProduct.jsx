import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './parts/Header';


const CategoryProduct = () => {
  const [isHome,Setishome] = useState(0);
    const { id } = useParams();

    console.log(id);
  return (
    <div>
    <Header isHome={isHome} />
    <div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px"}}>
            <h1 className="font-weight-semi-bold text-uppercase mb-3">Our Shop</h1>
            <div className="d-inline-flex">
                <p className="m-0"><a href="">Home</a></p>
                <p className="m-0 px-2">-</p>
                <p className="m-0">Shop</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CategoryProduct
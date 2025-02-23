import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import CategoryProduct from '../Pages/CategoryProduct';



const Routesconf = () => {
  return (
    <>
    <Routes>
    <Route path="/" Component={Home} />
    <Route path="categories/:id" Component={CategoryProduct} />
    </Routes>
    </>
  )
}

export default Routesconf;
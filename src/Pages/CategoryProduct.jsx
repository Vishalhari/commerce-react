import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';

const CategoryProduct = () => {
    const { id } = useParams();

    console.log(id);
  return (
    <div>
    <Header />
    </div>
  )
}

export default CategoryProduct
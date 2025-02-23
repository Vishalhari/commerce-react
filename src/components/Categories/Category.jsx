import React, { useEffect, useState } from 'react';
import axios from '../../constants/axios';

import {Link} from "react-router-dom";

import {allcategories} from '../../constants/urls';

const Category = () => {
    const [isOpen,Setisopen] = useState(1);
    const [categories,Setcategories] = useState([]);


    useEffect(() => {
      getCategories();
    },[])


    const getCategories = () => {
      axios.get(allcategories)
      .then((response) => {
          Setcategories(response.data);
      })
  }
    


  return (
    <div>
        <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" 
        style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}
        onClick={() => Setisopen(!isOpen)}>
            <h6 className="m-0">Categories</h6>
            <i className="fa fa-angle-down text-dark"></i>
        </a>
        <nav className={`navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 ${
          isOpen ? "show" : "collapse"
        }`}
        style={{
          height: isOpen ? "auto" : "0",
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
        }}
        id="navbar-vertical">
            <div className="navbar-nav w-100 overflow-hidden" style={{height:"410px"}}>
                <div className="nav-item dropdown">
                    
                    {
                        categories.map((item,index) => (
                          <Link to={`categories/${item.id}`} key={index}  className="nav-item nav-link">{item.name}</Link>
                        ))
                      }
                </div>
                
            </div>
        </nav>
    </div>
  )
}

export default Category
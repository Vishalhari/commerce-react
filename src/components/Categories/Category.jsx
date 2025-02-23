import React, { useState } from 'react'

const Category = ({categories}) => {
    const [isOpen,Setisopen] = useState(1);


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
                          <a href="" key={index}  className="nav-item nav-link">{item.name}</a>
                        ))
                      }
                </div>
                
            </div>
        </nav>
    </div>
  )
}

export default Category
import React from 'react'

const Category = ({categories}) => {
  return (
    <div>
        <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" 
        style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}>
            <h6 className="m-0">Categories</h6>
            <i className="fa fa-angle-down text-dark"></i>
        </a>
        <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
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
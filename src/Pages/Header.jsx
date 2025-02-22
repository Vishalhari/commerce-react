import React from 'react'
import Banner from './Banner'
import Category from '../components/Categories/Category'

const Header = ({categories}) => {
  return (
    <div>
    <div className="container-fluid">
   <div className="row bg-secondary py-2 px-xl-5">
       <div className="col-lg-6 d-none d-lg-block">
           <div className="d-inline-flex align-items-center">
               <a className="text-dark" href="">FAQs</a>
               <span className="text-muted px-2">|</span>
               <a className="text-dark" href="">Help</a>
               <span className="text-muted px-2">|</span>
               <a className="text-dark" href="">Support</a>
           </div>
       </div>
       <div className="col-lg-6 text-center text-lg-right">
           <div className="d-inline-flex align-items-center">
               <a className="text-dark px-2" href="">
                   <i className="fab fa-facebook-f"></i>
               </a>
               <a className="text-dark px-2" href="">
                   <i className="fab fa-twitter"></i>
               </a>
               <a className="text-dark px-2" href="">
                   <i className="fab fa-linkedin-in"></i>
               </a>
               <a className="text-dark px-2" href="">
                   <i className="fab fa-instagram"></i>
               </a>
               <a className="text-dark pl-2" href="">
                   <i className="fab fa-youtube"></i>
               </a>
           </div>
       </div>
   </div>
   <div className="row align-items-center py-3 px-xl-5">
       <div className="col-lg-3 d-none d-lg-block">
           <a href="" className="text-decoration-none">
               <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
           </a>
       </div>
       <div className="col-lg-6 col-6 text-left">
           <form action="">
               <div className="input-group">
                   <input type="text" className="form-control" placeholder="Search for products" />
                   <div className="input-group-append">
                       <span className="input-group-text bg-transparent text-primary">
                           <i className="fa fa-search"></i>
                       </span>
                   </div>
               </div>
           </form>
       </div>
       <div className="col-lg-3 col-6 text-right">
           <a href="" className="btn border">
               <i className="fas fa-heart text-primary"></i>
               <span className="badge">0</span>
           </a>
           <a href="" className="btn border">
               <i className="fas fa-shopping-cart text-primary"></i>
               <span className="badge">0</span>
           </a>
       </div>
   </div>
</div>
<div className="container-fluid mb-5">
<div className="row border-top px-xl-5">
    <div className="col-lg-3 d-none d-lg-block">
    <Category categories={categories} />
    </div>
    <div className="col-lg-9">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <a href="" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav mr-auto py-0">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="shop.html" className="nav-item nav-link">Shop</a>
                    <a href="detail.html" className="nav-item nav-link">Shop Detail</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu rounded-0 m-0">
                            <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                            <a href="checkout.html" className="dropdown-item">Checkout</a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
                <div className="navbar-nav ml-auto py-0">
                    <a href="" className="nav-item nav-link">Login</a>
                    <a href="" className="nav-item nav-link">Register</a>
                </div>
            </div>
        </nav>
        <Banner />
    </div>
</div>
</div>
    </div>
  )
}

export default Header
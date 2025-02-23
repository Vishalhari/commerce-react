import React, { useEffect, useState } from 'react'
import axios from '../constants/axios';

import {allcategories,allproducts} from '../constants/urls';


import Categorieslist from '../components/Categories/Categorieslist';
import Offers from '../Pages/Offers';
import Subscribe from './Subscribe';
import Clients from './Clients';
import Footer from './Footer';
import Header from './parts/Header';

const Home = () => {
    const [categories,Setcategories] = useState([]);
    const [trendyproducts,Settrendyproducts] = useState([]);
    const[isbanner,Setisbanner] = useState(1);
    const [isOpen,Setisopen] = useState(1);
    const [isHome,Setishome] = useState(1);
    useEffect(() => {   
        getCategories();
        gettrendyproducts();
    },[]);


    const getCategories = () => {
        axios.get(allcategories)
        .then((response) => {
            Setcategories(response.data);
        })
    }

    const gettrendyproducts = () => {
        const producturl = allproducts+'?offset=0&limit=8';
        axios.get(producturl)
        .then((response) => {
            Settrendyproducts(response.data);
        })
    }
  return (
    <div>
    <Header isbanner={isbanner} isHome={isHome} />
    <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center border mb-4" style={{ padding: "30px" }}>
                    <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
                    <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center border mb-4" style={{ padding: "30px" }}>
                    <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
                    <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center border mb-4" style={{ padding: "30px" }}>
                    <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
                    <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center border mb-4" style={{ padding: "30px" }}>
                    <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
                    <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                </div>
            </div>
        </div>
    </div>
    <Categorieslist categories={categories} />
    <Offers />
    <div className="container-fluid pt-5">
    <div className="text-center mb-4">
        <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
    </div>
    <div className="row px-xl-5 pb-3">
            {
                trendyproducts.map((item,index) => (
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={index}>
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src={item.image} alt="" />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">{item.title}</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>${item.price}</h6><h6 className="text-muted ml-2"></h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                            </div>
                        </div>
                    </div>
                ))
            }
            
           
            
            
           
            
            
            
        </div>

    </div>
    <Subscribe />
    
    <Clients />
    <Footer />

    </div>
  )
}

export default Home
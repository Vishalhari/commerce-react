import React from 'react'

const Categorieslist = ({categories}) => {
  return (
    <div>
    <div className="container-fluid pt-5">
    <div className="row px-xl-5 pb-3">
        {
            categories.map((item,index) => (
                <div className="col-lg-4 col-md-6 pb-1" key={index}>
                    <div className="cat-item d-flex flex-column border mb-4" style={{ padding: "30px" }}>
                        <p className="text-right">15 Products</p>
                        <a href="" className="cat-img position-relative overflow-hidden mb-3">
                            <img className="img-fluid" src={item.image} alt="" />
                        </a>
                        <h5 className="font-weight-semi-bold m-0">{item.name}</h5>
                    </div>
                </div>
            ))
        }
        
    </div>
</div>
    </div>
  )
}

export default Categorieslist
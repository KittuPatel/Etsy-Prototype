import React, { useEffect, useContext, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import { GlobalContext } from "../context/Provider"
import { productsAction } from "../context/actions/productsAction"

const ItemOverview = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const { globalDispatch, globalState } = useContext(GlobalContext)
  const {
    user,
    products: { data },
  } = globalState
  const userId = user?.userId
  useEffect(() => {
    console.log("product page")
    data?.products.map((product) => {
      if (product._id === id) {
        setProduct(product)
      }
    })
  }, [])

  return (
    // <div className="py-5">
    <div>
      <Header />
      <div className='container' style={{ marginTop: "180px" }}>
        <div className='row gx-4 gx-lg-5 align-items-center'>
          <div className='col-md-6'>
            <img
              className='card-img-top mb-5 mb-md-0'
              src={product.imageUrl}
              style={{ width: "100%", height: "500px" }}
              alt='...'
            />
          </div>
          <div className='col-md-6'>
            <div className='small mb-1'>
              Star Seller | {product.salesCount} Sales |{" "}
              <i className='fa fa-star'></i> 4.5{" "}
            </div>
            <div className='mb-1 underline'>
              <u>BlissBlushPillow</u>
            </div>
            <h3 className='display-5 fw-bolder'>{product.name}</h3>
            <div className='fs-5 mb-2'>
              {/* <span className="text-decoration-line-through">$45.00</span> */}
              <h4>${product.price}</h4>
            </div>
            <p>{product.description}</p>
            <div className='d-flex'>
              <input
                className='form-control text-center me-3'
                id='inputQuantity'
                type='select'
                placeholder='Enter Quantity'
              />
              <button
                className='btn btn-outline-dark flex-shrink-0'
                type='button'
              >
                <i className='bi-cart-fill me-1'></i>
                Add to cart
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default ItemOverview

import React, { useEffect, useContext, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import { GlobalContext } from "../context/Provider"
import { productsAction } from "../context/actions/productsAction"
import ShopName from "./ShopName"

const ItemOverview = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [productQuantity, setProductQuantity] = useState(0)
  const { globalDispatch, globalState } = useContext(GlobalContext)
  const {
    user,
    products: { data },
  } = globalState
  const userId = user?.userId
  useEffect(() => {
    console.log("product page")
    window.scrollTo(0, 0)
    data?.products.map((product) => {
      if (product._id === id) {
        setProduct(product)
        // Display max 20 items in the select box.
        product?.quantity > 20
          ? setProductQuantity(20)
          : setProductQuantity(product.quantity)
      }
    })
  }, [])

  let handleQuantityChange = (e) => {
    setProductQuantity(e.target.value)
  }

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
              <u>{product.shopName}</u>
            </div>
            <h3 className='display-5 fw-bolder'>{product.name}</h3>
            <div className='fs-5 mb-2'>
              {/* <span className="text-decoration-line-through">$45.00</span> */}
              <h4>${product.price}</h4>
            </div>
            <p>{product.description}</p>
            <div className='form-group w-100'>
              <select className='form-select' onChange={handleQuantityChange}>
                <option value='0' disabled>
                  Select Quantity
                </option>
                {[...Array(productQuantity)].map((_, index) => {
                  return <option value={index + 1}>{index + 1}</option>
                })}
              </select>
            </div>
            <br />
            <button className='btn btn-dark-outine w-100' type='button'>
              <i className='bi-cart-fill me-1'></i>
              Add to Favorites
            </button>
            <br /> <br />
            <button className='btn btn-dark w-100' type='button'>
              <i className='bi-cart-fill me-1'></i>
              Add to cart
            </button>
            <div></div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default ItemOverview

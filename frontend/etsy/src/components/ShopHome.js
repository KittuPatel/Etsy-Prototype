import React, { useContext, useEffect, useState } from "react"
import Header from "./Header"
import { GlobalContext } from "../context/Provider"
import { useHistory, useParams } from "react-router"
import { shopAction } from "../context/actions/shopAction"
import { Dimmer, Loader } from "semantic-ui-react"
import axiosInstance from "../helpers/axiosInstance"
import ProductCard from "./widgets/ProductCard"

const ShopHome = () => {
  const history = useHistory()
  const { userId, shopId } = useParams()
  const [isOwner, setIsOwner] = useState(false)
  const shopData = {}
  const [shopProducts, setShopProducts] = useState([])
  const { globalDispatch, globalState } = useContext(GlobalContext)
  const {
    shop: { data, loading, error },
  } = globalState
  useEffect(() => {
    shopAction(userId, shopId)(globalDispatch)

    if (data?.createdBy === userId) {
      setIsOwner(true)
    } else {
      setIsOwner(false)
    }
    // getShopProductsAction(userId, shopData)(globalDispatch)
    axiosInstance()
      .post(`/users/${userId}/products`, shopData)
      .then((response) => {
        console.log("response from shop products", response.data)
        setShopProducts(response.data.products)
      })
  }, [])

  const productsDiv = shopProducts?.map((product, index) => {
    let pageLink = `/product/${product._id}`
    return <ProductCard product={product} key={index} pageLink={pageLink} />
  })

  return (
    <div>
      <Header />
      {loading ? (
        <div className='container' style={{ marginTop: "250px" }}>
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        </div>
      ) : (
        data && (
          <div className='container' style={{ marginTop: "180px" }}>
            <div className='row'>
              <div className='col-md-8'>
                <div class='card profile-header'>
                  <div class='body'>
                    <div class='row'>
                      <div class='col-lg-4 col-md-4 col-12'>
                        <div class='profile-image float-md-right'>
                          {" "}
                          <img
                            src={data.imageUrl}
                            style={{ width: "150px", height: "150px" }}
                            alt=''
                          />{" "}
                        </div>
                      </div>
                      <div class='col-lg-8 col-md-8 col-12'>
                        {/* <br /> */}
                        <h4 class='mt-2 m-b-0'>{data.name}</h4>
                        <span class='job_post'>
                          {data.totalSalesCount} Sales |{" "}
                        </span>
                        <span class='job_post'>On Etsy since 2022</span>
                        <br /> <br />
                        <div>
                          {isOwner && (
                            <button class='btn btn-sm btn-dark btn-round'>
                              <i className='fa fa-pencil'></i> Edit Shop
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div class='card'>
                  <div class='card-body'>
                    <div class='d-flex flex-column align-items-center text-center'>
                      <img
                        src={
                          data.ownerDetails.imageUrl
                            ? data.ownerDetails.imageUrl
                            : "https://saltadorarchitects.com/images/team/01.jpg"
                        }
                        alt='Admin'
                        class='rounded-circle'
                        width='100'
                      />
                      <div class='mt-3'>
                        <h4>{data.ownerDetails.username}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='container'
              style={{ width: "90%", margin: "30px auto" }}
            >
              <div className='row'>
                <div className='col-md-10'>
                  <h4>Shop Items</h4>
                </div>
                <div className='col-md-2 float-right'>
                  <button className='btn btn-dark btn-sm w-100'>
                    <i className='fa fa-plus'></i> Add New Item
                  </button>
                </div>
              </div>
              <div className='row'>{productsDiv}</div>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default ShopHome

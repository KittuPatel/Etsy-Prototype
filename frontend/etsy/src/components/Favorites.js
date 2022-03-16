import React, { useContext, useEffect } from "react"
import { Input } from "semantic-ui-react"
import { GlobalContext } from "../context/Provider"
import { Link } from "react-router-dom"
import Header from "./Header"
import {
  favoritesAction,
  deleteFavoritesAction,
} from "../context/actions/favoritesAction"
const Favorites = () => {
  const { globalDispatch, globalState } = useContext(GlobalContext)
  const {
    user,
    favorites: { data },
  } = globalState
  console.log("user from globalState", user?.userId)
  const userId = user?.userId
  console.log("favorites page", data)
  useEffect(() => {
    window.scrollTo(0, 0)
    favoritesAction(userId)(globalDispatch)
  }, [userId])

  // const handleDeleteFav = (id) => {
  //   console.log("id", id)
  //   deleteFavoritesAction(userId, id)(globalDispatch)
  // }

  const productsDiv = data?.favorites.map((favProduct, index) => {
    let pageLink = `/product/${favProduct.product._id}`
    let favProductId = favProduct._id
    return (
      // assets/images/product_1.png
      <div class='col-md-3 col-lg-3 col-sm-6' key={index}>
        <div class='product-grid'>
          <div class='product-image'>
            <Link to={pageLink} class='image'>
              <img
                class='img-1'
                src={favProduct.product.imageUrl}
                style={{ height: "200px" }}
              />
              <img class='img-2' src={favProduct.product.imageUrl} />
            </Link>
            <ul class='product-links'>
              <li>
                <Link to='/'>
                  <i class='fa fa-heart color-etsy'></i>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <i class='fa fa-shopping-cart'></i>
                </Link>
              </li>
            </ul>
            <Link to={pageLink} class='product-view'>
              <i class='fa fa-search'></i>
            </Link>
          </div>
          <div class='product-content'>
            <ul class='rating'>
              <li class='fa fa-star'></li>
              <li class='fa fa-star'></li>
              <li class='fa fa-star'></li>
              <li class='fa fa-star'></li>
              <li class='fa fa-star disable'></li>
              <li class='disable'>(1 reviews)</li>
            </ul>
            <div className='row'>
              <div className='col-10'>
                <h3 class='title'>
                  <Link to={pageLink}>{favProduct.product.name}</Link>
                </h3>
                <div class='price'>${favProduct.product.price}</div>
              </div>
              <div className='col-2' style={{ paddingLeft: "0px" }}>
                <button
                  class='btn btn-danger'
                  // onClick={handleDeleteFav(favProductId)}
                >
                  <i className='fa fa-trash-o'></i>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      <Header />
      <div class='container profile-page' style={{ marginTop: "180px" }}>
        <div class='row'>
          <div class='col-xl-6 col-lg-7 col-md-12'>
            <div class='card profile-header'>
              <div class='body'>
                <div class='row'>
                  <div class='col-lg-4 col-md-4 col-12'>
                    <div class='profile-image float-md-right'>
                      {" "}
                      <img
                        src='https://global-uploads.webflow.com/5e4627609401e01182af1cce/5eb13bfdb4659efea4f8dace_profile-dummy.png'
                        alt=''
                      />{" "}
                    </div>
                  </div>
                  <div class='col-lg-8 col-md-8 col-12'>
                    <br />
                    <h4 class='m-t-0 m-b-0'>{user.username}</h4>
                    <span class='job_post'>0 Followers | </span>
                    <span class='job_post'>0 Following</span>
                    <br /> <br />
                    <div>
                      <Link
                        to='/editprofile'
                        class='btn btn-sm btn-primary btn-round'
                      >
                        Edit Profile <i className='fa fa-pencil'></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='col-xl-6 col-lg-6 col-md-6'>
            <h4 class='m-t-0 m-b-0'>Favourites</h4>
          </div>
          <div class='col-xl-6 col-lg-6 col-md-6'>
            <div class='input-group rounded'>
              <Input
                icon={{ name: "search", link: true }}
                placeholder='Search...'
                style={{ width: "370px" }}
              />
              {/* <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" /> */}
              {/* <span class="input-group-text border-0" id="search-addon">
                            <i class="fa fa-search fa-2x"></i>
                        </span> */}
            </div>
          </div>
        </div>
        <div className='row'>{productsDiv}</div>
      </div>
    </>
  )
}

export default Favorites

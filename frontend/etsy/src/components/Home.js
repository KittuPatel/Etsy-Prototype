import React, { useEffect, useContext, useState } from "react"
import { GlobalContext } from "../context/Provider"
import { useHistory, Link } from "react-router-dom"
import { productsAction } from "../context/actions/productsAction"
import { postFavoritesAction } from "../context/actions/favoritesAction"
import ProductCard from "./widgets/ProductCard"
import { putCartAction } from "../context/actions/cartAction"

const Home = () => {
  const { globalDispatch, globalState } = useContext(GlobalContext)
  const {
    user,
    products: { data },
  } = globalState
  console.log("user from globalState", user?.userId)
  const userId = user?.userId

  useEffect(() => {
    console.log("products action dispatch")
    productsAction(userId)(globalDispatch)
  }, [userId])

  console.log("Global State from Home", globalState)

  const handleFavProduct = (productId) => {
    if (userId) {
      console.log("productId from handleFavProduct", productId)
      postFavoritesAction(productId, userId)(globalDispatch)
      console.log("global state after postFavoritesAction", globalState)
    }
  }

  const addToCart = (productId) => {
    if (userId) {
      console.log(productId)
      putCartAction(userId, productId)(globalDispatch)
      console.log("HI put cart action dispatch")
    }
  }

  const productsDiv = data?.products.map((product, index) => {
    let pageLink = `/product/${product._id}`
    return (
      <ProductCard
        product={product}
        key={index}
        pageLink={pageLink}
        handleFavProduct={handleFavProduct}
        addToCart={addToCart}
      />
    )
  })

  return (
    <div>
      <div
        className='main_slider'
        style={{ backgroundImage: "url(assets/images/slider_1.jpg)" }}
      >
        <div className='container fill_height'>
          <div className='row align-items-center fill_height'>
            <div className='col'>
              <div className='main_slider_content'>
                <h6>Spring / Summer Collection 2021</h6>
                <h1>Get up to 30% Off New Arrivals</h1>
                <div className='red_button shop_now_button'>
                  <Link to='/'>shop now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='banner'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div
                className='banner_item align-items-center'
                style={{ backgroundImage: "url(assets/images/banner_1.jpg)" }}
              >
                <div className='banner_category'>
                  <Link to='/'>women's</Link>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div
                className='banner_item align-items-center'
                style={{ backgroundImage: "url(assets/images/banner_2.jpg)" }}
              >
                <div className='banner_category'>
                  <Link to='/'>accessories's</Link>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div
                className='banner_item align-items-center'
                style={{ backgroundImage: "url(assets/images/banner_3.jpg)" }}
              >
                <div className='banner_category'>
                  <Link to='/'>men's</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='new_arrivals'>
        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              <div className='section_title new_arrivals_title'>
                <h2>New Arrivals</h2>
              </div>
            </div>
          </div>
          <div className='row align-items-center'>
            <div className='col text-center'>
              <div className='new_arrivals_sorting'>
                <ul className='arrivals_grid_sorting clearfix button-group filters-button-group'>
                  <li
                    className='grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked'
                    data-filter='*'
                  >
                    all
                  </li>
                  <li
                    className='grid_sorting_button button d-flex flex-column justify-content-center align-items-center'
                    data-filter='.women'
                  >
                    women's
                  </li>
                  <li
                    className='grid_sorting_button button d-flex flex-column justify-content-center align-items-center'
                    data-filter='.accessories'
                  >
                    accessories
                  </li>
                  <li
                    className='grid_sorting_button button d-flex flex-column justify-content-center align-items-center'
                    data-filter='.men'
                  >
                    men's
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='row'>{productsDiv}</div>
        </div>
      </div>

      {/* <div className='deal_ofthe_week'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='deal_ofthe_week_img'>
                <img src='assets/images/deal_ofthe_week.png' alt='' />
              </div>
            </div>
            <div className='col-lg-6 text-right deal_ofthe_week_col'>
              <div className='deal_ofthe_week_content d-flex flex-column align-items-center float-right'>
                <div className='section_title'>
                  <h2>Deal Of The Week</h2>
                </div>

                <div className='red_button deal_ofthe_week_button'>
                  <Link to='/'>shop now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className='best_sellers'>
        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              <div className='section_title new_arrivals_title'>
                <h2>Best Sellers</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='product_slider_container'>
                <div className='owl-carousel owl-theme product_slider'>
                  <div className='owl-item product_slider_item'>
                    <div className='product-item'>
                      <div className='product discount'>
                        <div className='product_image'>
                          <img src='assets/images/product_1.png' alt='' />
                        </div>
                        <div className='favorite favorite_left'></div>
                        <div className='product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center'>
                          <span>-$20</span>
                        </div>
                        <div className='product_info'>
                          <h6 className='product_name'>
                            <Link to='/'>
                              Fujifilm X100T 16 MP Digital Camera (Silver)
                            </Link>
                          </h6>
                          <div className='product_price'>
                            $520.00<span>$590.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                <div className='product_slider_nav_left product_slider_nav d-flex align-items-center justify-content-center flex-column'>
                  <i className='fa fa-chevron-left' aria-hidden='true'></i>
                </div>
                <div className='product_slider_nav_right product_slider_nav d-flex align-items-center justify-content-center flex-column'>
                  <i className='fa fa-chevron-right' aria-hidden='true'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className='benefit'>
        <div className='container'>
          <div className='row benefit_row'>
            <div className='col-lg-3 benefit_col'>
              <div className='benefit_item d-flex flex-row align-items-center'>
                <div className='benefit_icon'>
                  <i className='fa fa-truck' aria-hidden='true'></i>
                </div>
                <div className='benefit_content'>
                  <h6>free shipping</h6>
                  <p>Suffered Alteration in Some Form</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 benefit_col'>
              <div className='benefit_item d-flex flex-row align-items-center'>
                <div className='benefit_icon'>
                  <i className='fa fa-money' aria-hidden='true'></i>
                </div>
                <div className='benefit_content'>
                  <h6>cach on delivery</h6>
                  <p>The Internet Tend To Repeat</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 benefit_col'>
              <div className='benefit_item d-flex flex-row align-items-center'>
                <div className='benefit_icon'>
                  <i className='fa fa-undo' aria-hidden='true'></i>
                </div>
                <div className='benefit_content'>
                  <h6>45 days return</h6>
                  <p>Making it Look Like Readable</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 benefit_col'>
              <div className='benefit_item d-flex flex-row align-items-center'>
                <div className='benefit_icon'>
                  <i className='fa fa-clock-o' aria-hidden='true'></i>
                </div>
                <div className='benefit_content'>
                  <h6>opening all week</h6>
                  <p>8AM - 09PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='newsletter'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='newsletter_text d-flex flex-column justify-content-center align-items-lg-start align-items-md-center text-center'>
                <h4>Newsletter</h4>
                <p>
                  Subscribe to our newsletter and get 20% off your first
                  purchase
                </p>
              </div>
            </div>
            <div className='col-lg-6'>
              <form action='post'>
                <div className='newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center'>
                  <input
                    id='newsletter_email'
                    type='email'
                    placeholder='Your email'
                    required='required'
                    data-error='Valid email is required.'
                  />
                  <button
                    id='newsletter_submit'
                    type='submit'
                    className='newsletter_submit_btn trans_300'
                    value='Submit'
                  >
                    subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

{
  /* <div className='product-item'>
        <div className='product discount product_filter'>
          <div className='product_image'>
            <img src='assets/images/product_1.png' alt='' />
          </div>
          <div className='favorite favorite_left'></div>
          <div className='product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center'>
            <span>-$20</span>
          </div>
          <div className='product_info'>
            <h6 className='product_name'>
              <Link to='/'>{product.name}</Link>
            </h6>
            <div className='product_price'>
              $520.00<span>$590.00</span> 
              {product.price}
            </div>
          </div>
        </div>
        <div className='red_button add_to_cart_button'>
          <Link to='/'>add to cart</Link>
        </div>
      </div> */
}

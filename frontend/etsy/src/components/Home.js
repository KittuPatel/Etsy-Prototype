import React, { useEffect, useContext, useState } from "react"
import { GlobalContext } from "../context/Provider"
import { useHistory, Link } from "react-router-dom"
import { productsAction } from "../context/actions/productsAction"
import { postFavoritesAction } from "../context/actions/favoritesAction"

const Home = () => {
  // const [productsList, setProductsList] = useState([])

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

  const productsDiv = data?.products.map((product, index) => {
    let pageLink = `/product/${product._id}`
    return (
      // assets/images/product_1.png
      <div class='col-md-3 col-lg-3 col-sm-6' key={index}>
        <div class='product-grid'>
          <div class='product-image'>
            <Link to={pageLink} class='image'>
              <img
                class='img-1'
                src={product.imageUrl}
                style={{ height: "200px" }}
              />
              <img class='img-2' src={product.imageUrl} />
            </Link>
            <ul class='product-links'>
              <li>
                <button onClick={handleFavProduct.bind(this, product._id)}>
                  <i class='fa fa-heart-o'></i>
                </button>
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
            <h3 class='title'>
              <Link to={pageLink}>{product.name}</Link>
            </h3>
            <div class='price'>${product.price}</div>
          </div>
        </div>
      </div>
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

                  <div className='owl-item product_slider_item'>
                    <div className='product-item women'>
                      <div className='product'>
                        <div className='product_image'>
                          <img src='assets/images/product_2.png' alt='' />
                        </div>
                        <div className='favorite'></div>
                        <div className='product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center'>
                          <span>new</span>
                        </div>
                        <div className='product_info'>
                          <h6 className='product_name'>
                            <Link to='/'>
                              Samsung CF591 Series Curved 27-Inch FHD Monitor
                            </Link>
                          </h6>
                          <div className='product_price'>$610.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='owl-item product_slider_item'>
                    <div className='product-item women'>
                      <div className='product'>
                        <div className='product_image'>
                          <img src='assets/images/product_3.png' alt='' />
                        </div>
                        <div className='favorite'></div>
                        <div className='product_info'>
                          <h6 className='product_name'>
                            <Link to='/'>
                              Blue Yeti USB Microphone Blackout Edition
                            </Link>
                          </h6>
                          <div className='product_price'>$120.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='owl-item product_slider_item'>
                    <div className='product-item accessories'>
                      <div className='product'>
                        <div className='product_image'>
                          <img src='assets/images/product_4.png' alt='' />
                        </div>
                        <div className='product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center'>
                          <span>sale</span>
                        </div>
                        <div className='favorite favorite_left'></div>
                        <div className='product_info'>
                          <h6 className='product_name'>
                            <Link to='/'>
                              DYMO LabelWriter 450 Turbo Thermal Label Printer
                            </Link>
                          </h6>
                          <div className='product_price'>$410.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='owl-item product_slider_item'>
                    <div className='product-item women men'>
                      <div className='product'>
                        <div className='product_image'>
                          <img src='assets/images/product_5.png' alt='' />
                        </div>
                        <div className='favorite'></div>
                        <div className='product_info'>
                          <h6 className='product_name'>
                            <Link to='/'>Pryma Headphones, Rose Gold & Grey</Link>
                          </h6>
                          <div className='product_price'>$180.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='owl-item product_slider_item'>
                    <div className='product-item accessories'>
                      <div className='product discount'>
                        <div className='product_image'>
                          <img src='assets/images/product_6.png' alt='' />
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

                  <div className='owl-item product_slider_item'>
                    <div className='product-item women'>
                      <div className='product'>
                        <div className='product_image'>
                          <img src='assets/images/product_7.png' alt='' />
                        </div>
                        <div className='favorite'></div>
                        <div className='product_info'>
                          <h6 className='product_name'>
                            <Link to='/'>
                              Samsung CF591 Series Curved 27-Inch FHD Monitor
                            </Link>
                          </h6>
                          <div className='product_price'>$610.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='owl-item product_slider_item'>
                    <div className='product-item accessories'>
                      <div className='product'>
                        <div className='product_image'>
                          <img src='assets/images/product_8.png' alt='' />
                        </div>
                        <div className='favorite'></div>
                        <div className='product_info'>
                          <h6 className='product_name'>
                            <Link to='/'>
                              Blue Yeti USB Microphone Blackout Edition
                            </Link>
                          </h6>
                          <div className='product_price'>$120.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='owl-item product_slider_item'>
                    <div className='product-item men'>
                      <div className='product'>
                        <div className='product_image'>
                          <img src='assets/images/product_9.png' alt='' />
                        </div>
                        <div className='product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center'>
                          <span>sale</span>
                        </div>
                        <div className='favorite favorite_left'></div>
                        <div className='product_info'>
                          <h6 className='product_name'>
                            <Link to='/'>
                              DYMO LabelWriter 450 Turbo Thermal Label Printer
                            </Link>
                          </h6>
                          <div className='product_price'>$410.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='owl-item product_slider_item'>
                    <div className='product-item men'>
                      <div className='product'>
                        <div className='product_image'>
                          <img src='assets/images/product_10.png' alt='' />
                        </div>
                        <div className='favorite'></div>
                        <div className='product_info'>
                          <h6 className='product_name'>
                            <Link to='/'>Pryma Headphones, Rose Gold & Grey</Link>
                          </h6>
                          <div className='product_price'>$180.00</div>
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

      <div className='blogs'>
        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              <div className='section_title'>
                <h2>Latest Blogs</h2>
              </div>
            </div>
          </div>
          <div className='row blogs_container'>
            <div className='col-lg-4 blog_item_col'>
              <div className='blog_item'>
                <div
                  className='blog_background'
                  style={{ backgroundImage: "url(assets/images/blog_1.jpg)" }}
                ></div>
                <div className='blog_content d-flex flex-column align-items-center justify-content-center text-center'>
                  <h4 className='blog_title'>
                    Here are the trends I see coming this fall
                  </h4>
                  <span className='blog_meta'>by admin | dec 01, 2021</span>
                  <Link className='blog_more' to='/'>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 blog_item_col'>
              <div className='blog_item'>
                <div
                  className='blog_background'
                  style={{ backgroundImage: "url(assets/images/blog_2.jpg)" }}
                ></div>
                <div className='blog_content d-flex flex-column align-items-center justify-content-center text-center'>
                  <h4 className='blog_title'>
                    Here are the trends I see coming this fall
                  </h4>
                  <span className='blog_meta'>by admin | dec 01, 2021</span>
                  <Link className='blog_more' to='/'>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 blog_item_col'>
              <div className='blog_item'>
                <div
                  className='blog_background'
                  style={{ backgroundImage: "url(assets/images/blog_3.jpg)" }}
                ></div>
                <div className='blog_content d-flex flex-column align-items-center justify-content-center text-center'>
                  <h4 className='blog_title'>
                    Here are the trends I see coming this fall
                  </h4>
                  <span className='blog_meta'>by admin | dec 01, 2021</span>
                  <Link className='blog_more' to='/'>
                    Read more
                  </Link>
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

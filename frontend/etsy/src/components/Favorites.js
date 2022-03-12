import React from "react"
import { Input } from "semantic-ui-react"
const Favorites = () => {
  return (
    <div class='container profile-page'>
      <div class='row'>
        <div class='col-xl-6 col-lg-7 col-md-12'>
          <div class='card profile-header'>
            <div class='body'>
              <div class='row'>
                <div class='col-lg-4 col-md-4 col-12'>
                  <div class='profile-image float-md-right'>
                    {" "}
                    <img
                      src='https://bootdey.com/img/Content/avatar/avatar2.png'
                      alt=''
                    />{" "}
                  </div>
                </div>
                <div class='col-lg-8 col-md-8 col-12'>
                  <br />
                  <h4 class='m-t-0 m-b-0'>Krishna Sai Mangalarapu</h4>
                  <span class='job_post'>0 Followers | </span>
                  <span class='job_post'>0 Following</span>
                  <br />
                  <div>
                    <button class='btn btn-sm btn-primary btn-round'>
                      Edit Profile <i className='fa fa-pencil'></i>{" "}
                    </button>
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
      <div class='row'>
        {/* <div class="col"> */}
        <div
          class='product-grid'
          data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'
        >
          <div class='product-item men'>
            <div class='product discount product_filter'>
              <div class='product_image'>
                <img src='assets/images/product_1.png' alt='' />
              </div>
              <div class='favorite favorite_left'></div>
              <div class='product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center'>
                <span>-$20</span>
              </div>
              <div class='product_info'>
                <h6 class='product_name'>
                  <a href='/'>Fujifilm X100T 16 MP Digital Camera (Silver)</a>
                </h6>
                <div class='product_price'>
                  $520.00<span>$590.00</span>
                </div>
              </div>
            </div>
            <div class='red_button add_to_cart_button'>
              <a href='/'>add to cart</a>
            </div>
          </div>

          <div class='product-item women'>
            <div class='product product_filter'>
              <div class='product_image'>
                <img src='assets/images/product_2.png' alt='' />
              </div>
              <div class='favorite'></div>
              <div class='product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center'>
                <span>new</span>
              </div>
              <div class='product_info'>
                <h6 class='product_name'>
                  <a href='/'>
                    Samsung CF591 Series Curved 27-Inch FHD Monitor
                  </a>
                </h6>
                <div class='product_price'>$610.00</div>
              </div>
            </div>
            <div class='red_button add_to_cart_button'>
              <a href='/'>add to cart</a>
            </div>
          </div>

          <div class='product-item women'>
            <div class='product product_filter'>
              <div class='product_image'>
                <img src='assets/images/product_3.png' alt='' />
              </div>
              <div class='favorite'></div>
              <div class='product_info'>
                <h6 class='product_name'>
                  <a href='/'>Blue Yeti USB Microphone Blackout Edition</a>
                </h6>
                <div class='product_price'>$120.00</div>
              </div>
            </div>
            <div class='red_button add_to_cart_button'>
              <a href='/'>add to cart</a>
            </div>
          </div>

          <div class='product-item accessories'>
            <div class='product product_filter'>
              <div class='product_image'>
                <img src='assets/images/product_4.png' alt='' />
              </div>
              <div class='product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center'>
                <span>sale</span>
              </div>
              <div class='favorite favorite_left'></div>
              <div class='product_info'>
                <h6 class='product_name'>
                  <a href='/'>
                    DYMO LabelWriter 450 Turbo Thermal Label Printer
                  </a>
                </h6>
                <div class='product_price'>$410.00</div>
              </div>
            </div>
            <div class='red_button add_to_cart_button'>
              <a href='/'>add to cart</a>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Favorites

import React from "react"
import { Link } from "react-router-dom"
import { Input } from "semantic-ui-react"

const Header = () => {
  return (
    <header class='header'>
      <footer className='footer' style={{ backgroundColor: "#1e1e27" }}>
        <div className='container footerContainer'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='footer_nav_container'>
                <div className='cr'></div>
              </div>
            </div>
          </div>
          <div className='top_nav'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='top_nav_right'>
                    <ul className='top_nav_menu'>
                      <li className='language'>
                        <a href='/'>
                          United States
                          {/* <i className="fa fa-angle-down"></i> */}
                        </a>
                        {/* <ul className="language_selection">
                                        <li><a href="/">French</a></li>
                                        <li><a href="/">Italian</a></li>
                                        <li><a href="/">German</a></li>
                                        <li><a href="/">Spanish</a></li>
                                    </ul> */}
                      </li>
                      <li className='currency'>
                        <a href='/'>
                          usd
                          {/* <i className="fa fa-angle-down"></i> */}
                        </a>
                        {/* <ul className="currency_selection">
                                        <li><a href="/">cad</a></li>
                                        <li><a href="/">aud</a></li>
                                        <li><a href="/">eur</a></li>
                                        <li><a href="/">gbp</a></li>
                                    </ul> */}
                      </li>
                      <li className='account'>
                        <a href='/'>
                          My Account
                          <i className='fa fa-angle-down'></i>
                        </a>
                        {/* <ul className="account_selection">
                                        <li><a href="/"><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
                                        <li><a href=""><i className="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
                                    </ul> */}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-md-6 text-right'>
                  <div className='top_nav_left'>
                    <i className='fa fa-bolt'></i> Etsy is powered by 100%
                    renewable electricity.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class='main_nav_container'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-12 text-right'>
              <div class='logo_container'>
                <a href='/'>
                  <span>Etsy</span>
                </a>
              </div>
              <nav class='navbar'>
                <ul class='navbar_menu'>
                  <li>
                    <Input
                      icon={{ name: "search", link: true }}
                      placeholder='Search...'
                      style={{ width: "370px" }}
                    />
                  </li>
                  <li></li>
                  <li>
                    <Link to='/register'>
                      <i className='fa fa-user-plus' aria-hidden='true'></i>{" "}
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link to='/login'>
                      <i className='fa fa-sign-in' aria-hidden='true'></i> Sign
                      In
                    </Link>
                  </li>
                </ul>
                <ul class='navbar_user'>
                  <li>
                    <Link to='/favorites'>
                      <i class='fa fa-heart' aria-hidden='true'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='/profile'>
                      <i class='fa fa-user' aria-hidden='true'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='/create-shop'>
                      <i class='fa fa-building' aria-hidden='true'></i>
                    </Link>
                  </li>
                  <li>
                    <a href='/'>
                      <i class='fa fa-shopping-cart' aria-hidden='true'></i>
                      {/* <span id='checkout_items' class='checkout_items'>
                        2
                      </span> */}
                    </a>
                  </li>
                </ul>
                <div class='hamburger_container'>
                  <i class='fa fa-bars' aria-hidden='true'></i>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className='fs_menu_overlay'></div>
      <div className='hamburger_menu'>
        <div className='hamburger_close'>
          <i className='fa fa-times' aria-hidden='true'></i>
        </div>
        <div className='hamburger_menu_content text-right'>
          <ul className='menu_top_nav'>
            <li className='menu_item has-children'>
              <a href='/'>
                usd
                <i className='fa fa-angle-down'></i>
              </a>
              <ul className='menu_selection'>
                <li>
                  <a href='/'>cad</a>
                </li>
                <li>
                  <a href='/'>aud</a>
                </li>
                <li>
                  <a href='/'>eur</a>
                </li>
                <li>
                  <a href='/'>gbp</a>
                </li>
              </ul>
            </li>
            <li className='menu_item has-children'>
              <a href='/'>
                English
                <i className='fa fa-angle-down'></i>
              </a>
              <ul className='menu_selection'>
                <li>
                  <a href='/'>French</a>
                </li>
                <li>
                  <a href='/'>Italian</a>
                </li>
                <li>
                  <a href='/'>German</a>
                </li>
                <li>
                  <a href='/'>Spanish</a>
                </li>
              </ul>
            </li>
            {/* <li className="menu_item has-children">
            {/* <a href="#">
              My Account
              <i className="fa fa-angle-down"></i>
            </a> */}
            {/* <ul className="menu_selection">  */}

            {/* </ul> */}
            {/* </li> */}
            <li className='menu_item'>
              <a href='/'>home</a>
            </li>
            <li className='menu_item'>
              <a href='/'>shop</a>
            </li>
            <li className='menu_item'>
              <a href='/'>promotion</a>
            </li>
            <li className='menu_item'>
              <a href='/'>pages</a>
            </li>
            <li className='menu_item'>
              <a href='/'>blog</a>
            </li>
            <li className='menu_item'></li>
            <li className='menu_item'>
              <Link to='/login'>
                <i className='fa fa-sign-in' aria-hidden='true'></i>Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header

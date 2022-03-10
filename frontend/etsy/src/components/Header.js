import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header class="header">    
            <div class="main_nav_container">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-right">
                        <div class="logo_container">
                            <a href="/"><span>Etsy</span></a>
                        </div>
                        <nav class="navbar">
                            <ul class="navbar_menu">
                                <li><a href="/">home</a></li>
                                <li><a href="/">shop</a></li>
                                <li><a href="/">promotion</a></li>
                                <li><a href="/">pages</a></li>
                                <li><a href="/">blog</a></li>
                                <li><Link to="/register"><i className="fa fa-user-plus" aria-hidden="true"></i>  Register</Link></li>
                                <li><Link to="/login"><i className="fa fa-sign-in" aria-hidden="true"></i>  Sign In</Link></li>
                            </ul>
                            <ul class="navbar_user">
                                <li><a href="/"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                                <li><a href="/"><i class="fa fa-user" aria-hidden="true"></i></a></li>
                                <li class="checkout">
                                <a href="/">
                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                    <span id="checkout_items" class="checkout_items">2</span>
                                </a>
                                </li>
                            </ul>
                            <div class="hamburger_container">
                                <i class="fa fa-bars" aria-hidden="true"></i>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
          </div>
              <div className="fs_menu_overlay"></div>
    <div className="hamburger_menu">
      <div className="hamburger_close"><i className="fa fa-times" aria-hidden="true"></i></div>
      <div className="hamburger_menu_content text-right">
        <ul className="menu_top_nav">
          <li className="menu_item has-children">
            <a href="/">
              usd
              <i className="fa fa-angle-down"></i>
            </a>
            <ul className="menu_selection">
              <li><a href="/">cad</a></li>
              <li><a href="/">aud</a></li>
              <li><a href="/">eur</a></li>
              <li><a href="/">gbp</a></li>
            </ul>
          </li>
          <li className="menu_item has-children">
            <a href="/">
              English
              <i className="fa fa-angle-down"></i>
            </a>
            <ul className="menu_selection">
              <li><a href="/">French</a></li>
              <li><a href="/">Italian</a></li>
              <li><a href="/">German</a></li>
              <li><a href="/">Spanish</a></li>
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
          <li className="menu_item"><a href="/">home</a></li>
          <li className="menu_item"><a href="/">shop</a></li>
          <li className="menu_item"><a href="/">promotion</a></li>
          <li className="menu_item"><a href="/">pages</a></li>
          <li className="menu_item"><a href="/">blog</a></li>
              <li className="menu_item"></li>
              <li className="menu_item"><Link to="/login"><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</Link></li>
        </ul>
      </div>
    </div>
  </header>
  )
}

export default Header;
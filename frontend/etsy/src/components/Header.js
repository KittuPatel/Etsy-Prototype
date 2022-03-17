import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { Input } from "semantic-ui-react"
import logout from "../context/actions/logout"
import { GlobalContext } from "../context/Provider"
import { useHistory } from "react-router-dom"

const Header = () => {
  const {
    authState: { auth: data },
    authDispatch,
    globalDispatch,
    globalState: { user },
  } = useContext(GlobalContext)
  // const user = data.data?.data

  const history = useHistory()
  console.log("user from authState Header", data)
  console.log("user from globalState Header", user)

  // useEffect(() => {

  // }, [])

  const handleLogout = () => {
    logout(history)(globalDispatch)
    logout(history)(authDispatch)
  }

  return (
    <header className='header'>
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
                        <Link to='/'>
                          United States
                          {/* <i className="fa fa-angle-down"></i> */}
                        </Link>
                        {/* <ul className="language_selection">
                                        <li><Link to="/">French</Link></li>
                                        <li><Link to="/">Italian</Link></li>
                                        <li><Link to="/">German</Link></li>
                                        <li><Link to="/">Spanish</Link></li>
                                    </ul> */}
                      </li>
                      <li className='currency'>
                        <Link to='/'>
                          usd
                          {/* <i className="fa fa-angle-down"></i> */}
                        </Link>
                        {/* <ul className="currency_selection">
                                        <li><Link to="/">cad</Link></li>
                                        <li><Link to="/">aud</Link></li>
                                        <li><Link to="/">eur</Link></li>
                                        <li><Link to="/">gbp</Link></li>
                                    </ul> */}
                      </li>
                      <li className='account'>
                        <Link to='/'>
                          My Account
                          <i className='fa fa-angle-down'></i>
                        </Link>
                        {/* <ul className="account_selection">
                                        <li><Link to="/"><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</Link></li>
                                        <li><Link to=""><i className="fa fa-user-plus" aria-hidden="true"></i>Register</Link></li>
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
      <div className='main_nav_container'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-right'>
              <div className='logo_container'>
                <Link to='/'>
                  <span>Etsy</span>
                </Link>
              </div>
              <nav className='navbar'>
                <ul className='navbar_menu'>
                  <li>
                    <Input
                      icon={{ name: "search", link: true }}
                      placeholder='Search for anything'
                      style={{ width: "370px" }}
                    />
                  </li>
                  {user?.userId === null ? (
                    <>
                      <li>
                        <Link to='/register'>
                          <i className='fa fa-user-plus' aria-hidden='true'></i>{" "}
                          Register
                        </Link>{" "}
                      </li>
                      <li>
                        <Link to='/login'>
                          <i className='fa fa-sign-in' aria-hidden='true'></i>{" "}
                          SignIn{" "}
                        </Link>{" "}
                      </li>
                    </>
                  ) : null}
                </ul>
                <ul className='navbar_user'>
                  <li>
                    <Link to='/favorites'>
                      <i className='fa fa-heart' aria-hidden='true'></i>
                    </Link>
                  </li>
                  {/* <li>
                    <Link to='/editprofile'>
                      <i className='fa fa-user' aria-hidden='true'></i>
                    </Link>
                  </li> */}
                  <li>
                    <Link to='/create-shop'>
                      <i className='fa fa-building' aria-hidden='true'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='/cart'>
                      <i className='fa fa-shopping-cart' aria-hidden='true'></i>
                      {/* <span id='checkout_items' className='checkout_items'>
                        2
                      </span> */}
                    </Link>
                  </li>
                </ul>

                {user?.userId !== null ? (
                  <ul className='navbar_menu'>
                    <li>
                      <button onClick={handleLogout} className='btn btn-danger'>
                        <i className='fa fa-sign-out' aria-hidden='true'></i>{" "}
                        Logout
                      </button>
                    </li>
                  </ul>
                ) : null}

                <div className='hamburger_container'>
                  <i className='fa fa-bars' aria-hidden='true'></i>
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
              <Link to='/'>
                usd
                <i className='fa fa-angle-down'></i>
              </Link>
              <ul className='menu_selection'>
                <li>
                  <Link to='/'>cad</Link>
                </li>
                <li>
                  <Link to='/'>aud</Link>
                </li>
                <li>
                  <Link to='/'>eur</Link>
                </li>
                <li>
                  <Link to='/'>gbp</Link>
                </li>
              </ul>
            </li>
            <li className='menu_item has-children'>
              <Link to='/'>
                English
                <i className='fa fa-angle-down'></i>
              </Link>
              <ul className='menu_selection'>
                <li>
                  <Link to='/'>French</Link>
                </li>
                <li>
                  <Link to='/'>Italian</Link>
                </li>
                <li>
                  <Link to='/'>German</Link>
                </li>
                <li>
                  <Link to='/'>Spanish</Link>
                </li>
              </ul>
            </li>
            {/* <li className="menu_item has-children">
            {/* <Link to="#">
              My Account
              <i className="fa fa-angle-down"></i>
            </Link> */}
            {/* <ul className="menu_selection">  */}

            {/* </ul> */}
            {/* </li> */}
            <li className='menu_item'>
              <Link to='/'>home</Link>
            </li>
            <li className='menu_item'>
              <Link to='/'>shop</Link>
            </li>
            <li className='menu_item'>
              <Link to='/'>promotion</Link>
            </li>
            <li className='menu_item'>
              <Link to='/'>pages</Link>
            </li>
            <li className='menu_item'>
              <Link to='/'>blog</Link>
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

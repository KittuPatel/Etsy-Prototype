import React, { useContext, useState } from "react"
import Header from "./Header"
import { GlobalContext } from "../context/Provider"
import { checkShopNameAction } from "../context/actions/shopAction"

const ShopName = () => {
  const [shopName, setShopName] = useState("")

  const { globalDispatch, globalState } = useContext(GlobalContext)
  const { user } = globalState
  const userId = user?.userId
  const handleShopNameChange = (e) => {
    setShopName(e.target.value)
  }
  const checkAvailabilityHandler = () => {
    console.log("shopName", shopName)
    checkShopNameAction(userId, shopName)(globalDispatch)
  }

  return (
    <div>
      <Header />
      <div className='container' style={{ marginTop: "250px" }}>
        <h2 className='nameShop'>Name your Shop</h2>
        <h3 className='nameShop'>
          Choose a memorable name that reflects your style.
        </h3>
        <div class='row'>
          <div class='col-xl-12 col-lg-12 col-md-12'></div>
        </div>
        <div className='nameShopContainer'>
          {/* <div className='col-xl-3 col-lg-3 col-md-3'></div> */}
          <div class='col-xl-6 col-lg-6 col-md-6'>
            <div class='input-group rounded'>
              <input
                type='text'
                class='form-control rounded'
                placeholder='Enter Shop Name'
                value={shopName}
                aria-label='Search'
                aria-describedby='search-addon'
                onChange={handleShopNameChange}
              />
              {/* <span class="input-group-text border-0" id="search-addon">
                        <i class="fa fa-search fa-2x"></i>
                    </span> */}
              <button
                className='btn btn-dark'
                onClick={checkAvailabilityHandler}
              >
                Check Availability
              </button>
            </div>
            <br />
            <div>
              <p className='nameShop text-muted'>
                Your shop name will appear in your shop and next to each of your
                listings throughout Etsy.
              </p>
            </div>
          </div>
          {/* <div className='col-xl-3 col-lg-3 col-md-3'></div> */}
        </div>
      </div>
    </div>
  )
}

export default ShopName

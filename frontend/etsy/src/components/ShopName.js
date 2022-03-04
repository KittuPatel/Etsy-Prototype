import React from 'react'

const ShopName = () => {
    return (
         <div className="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12">
                    <h4 class="m-t-0 m-b-0">Name your Shop</h4>
                </div>
            </div>
         <div>
            <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="input-group rounded">
                    <input type="search" class="form-control rounded" placeholder="Enter Shop Name" aria-label="Search" aria-describedby="search-addon" />
                    {/* <span class="input-group-text border-0" id="search-addon">
                        <i class="fa fa-search fa-2x"></i>
                    </span> */}
                    <button className='btn btn-primary'>Check Availability</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopName
import React from "react"
import Header from "./Header"

const ShopHome = () => {
  return (
    <div>
      <Header />
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
                        src='https://i.pinimg.com/736x/22/0c/57/220c57feb2860e0fc131683d16257bf4.jpg'
                        style={{ width: "150px", height: "150px" }}
                        alt=''
                      />{" "}
                    </div>
                  </div>
                  <div class='col-lg-8 col-md-8 col-12'>
                    {/* <br /> */}
                    <h4 class='mt-2 m-b-0'>BlissBlushPillow</h4>
                    <span class='job_post'>0 Sales | </span>
                    <span class='job_post'>On Etsy since 2019</span>
                    <br /> <br />
                    <div>
                      <button class='btn btn-sm btn-dark btn-round'>
                        <i className='fa fa-pencil'></i> Edit Shop
                      </button>
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
                    src='https://bootdey.com/img/Content/avatar/avatar7.png'
                    alt='Admin'
                    class='rounded-circle'
                    width='100'
                  />
                  <div class='mt-3'>
                    <h4>John Doe</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <h4>Items</h4>
          </div>
        </div>
        <div className='row'>{/*  */}</div>
      </div>
    </div>
  )
}

export default ShopHome

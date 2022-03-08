import React from 'react'

const ShopHome = () => {
  return (
      <div className='container'>
          <div className="row">
              <div className="col-md-8">
                <div class="card profile-header">
                        <div class="body">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-12">
                                    <div class="profile-image float-md-right"> <img src="https://i.pinimg.com/736x/22/0c/57/220c57feb2860e0fc131683d16257bf4.jpg" alt="" /> </div>
                                </div>
                                <div class="col-lg-8 col-md-8 col-12">
                                    <br />
                                    <h4 class="m-t-0 m-b-0">BlissBlushPillow</h4>
                                    <span class="job_post">0 Sales | </span>
                                    <span class="job_post">On Etsy since 2019</span>
                                    <br /> <br />
                                    <div>
                                        <button class="btn btn-sm btn-black btn-round"><i className='fa fa-pencil'></i> Edit Shop</button>
                                    </div>
                                </div>                
                            </div>
                        </div>                    
                </div>
              </div>
              <div className="col-md-4">
              <div class="card profile-header">
                        <div class="body">
                            <div class="row">
                              <div class="col-lg-6 col-md-6">
                              <h6 class="small lead text-black-50 text-center">SHOP OWNER</h6>
                                <div class="profile-image float-md-right rounded-circle"> <img className='rounded-circle' src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /> </div>
                                    <br />
                                    <p class="mt-1 m-b-0 text-center">Krishna Sai</p>
                                    <br /> <br />
                                </div>                
                          </div>
                        </div>                    
                </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
                <h4>Items</h4>
                </div>
                <div className="col-md-4">
                <h4>Items</h4>
                </div>
            </div>
      </div>
  )
}

export default ShopHome
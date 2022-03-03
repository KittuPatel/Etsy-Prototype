import React from 'react'

const Favorites = () => {
  return (
    <div class="container profile-page">
        <div class="row">
            <div class="col-xl-6 col-lg-7 col-md-12">
                <div class="card profile-header">
                    <div class="body">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-12">
                                <div class="profile-image float-md-right"> <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /> </div>
                            </div>
                            <div class="col-lg-8 col-md-8 col-12">
                                <br />
                                <h4 class="m-t-0 m-b-0"><strong>Krishna Sai</strong> Mangalarapu</h4>
                                <span class="job_post">0 Followers | </span>
                                <span class="job_post">0 Following</span>
                                <br />
                            <div>
                                    <button class="btn btn-sm btn-primary btn-round">Edit Profile  <i className='fa fa-pencil'></i> </button>
                                </div>
                            </div>                
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Favorites
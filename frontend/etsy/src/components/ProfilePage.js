import React from 'react'

const ProfilePage = () => {
  return (
      <div className='container mt-4'>
      <h2>Your Public Profile</h2>
      <p>Everything on this page can be seen by anyone.</p>
      <div class="container px-4 mt-4">
    <hr class="mt-0 mb-4" />
    <div class="row">
        <div class="col-xl-4">
            <div class="card mb-4 mb-xl-0">
                <div class="card-header">Profile Picture</div>
                <div class="card-body text-center">
                    <img class="img-account-profile rounded-circle mb-2" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                    <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                    <button class="btn btn-primary" type="button">Upload new image</button>
                </div>
            </div>
        </div>
        <div class="col-xl-8">
            <div class="card mb-4">
                <div class="card-header">Account Details</div>
                <div class="card-body">
                    <form>
                        {/* <div class="mb-3">
                            <label class="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                            <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" />
                        </div> */}
                        <div class="row gx-3 mb-3">
                            <div class="col-md-12">
                                <label class="mb-1" for="inputFirstName">Full name</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your full name" />
                            </div>
                        </div>
                            <div class="row gx-3 mb-3">
                                <div class="col-md-6">
                                    <label class=" mb-1" for="inputEmailAddress">Email address</label>
                                    <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" />
                                </div>
                            <div class="col-md-6">
                                <label class="mb-1" for="inputPhone">Phone number</label>
                                <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" />
                            </div>
                        </div>
                        
                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="mb-1" for="inputLocation">City</label>
                                <input class="form-control" id="inputLocation" type="text" placeholder="Enter your City" />
                            </div>
                            <div class="col-md-6">
                                <label class="mb-1" for="inputBirthday">Birthday</label>
                                <input class="form-control" id="inputBirthday" type="date" name="birthday" placeholder="Enter your birthday" />
                            </div>
                       </div>
                        <div class="row gx-3 mb-3">
                            <div class="col-md-12">
                                <label class="mb-1" for="inputBirthday">Address</label>
                                <input type="text" class="form-control" id="inputAddress" name='address' placeholder='Enter your Address' />
                            </div>     
                                  </div>
                                  <br />
                        <button class="btn btn-primary float-right" type="button">Save changes</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default ProfilePage
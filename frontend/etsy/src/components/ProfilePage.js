import React, { useContext, useState } from "react"
import { GlobalContext } from "../context/Provider"
import Header from "./Header"
import countries from "../utils/countries.js"

const ProfilePage = () => {
  const { authState, globalState, globalDispatch } = useContext(GlobalContext)
  console.log("profile", globalState)
  const userDetails = globalState?.user
  const [editUder, setEditUser] = useState(userDetails)

  const handleInputChange = (e) => {
    setEditUser({
      ...editUder,
      [e.target.name]: e.target.value,
    })
    // console.log(editUder)
    // globalDispatch({
    //   type: "EDIT_USER",
    //   payload: editUder,
    // })
  }

  const handleRadio = (e) => {
    setEditUser({
      ...userDetails,
      gender: e.target.value,
    })
  }

  return (
    <div>
      <Header />
      <div className='container' style={{ marginTop: "180px" }}>
        <h2>Your Public Profile</h2>
        <p>Everything on this page can be seen by anyone.</p>
        <div class='container px-4 mt-4'>
          <hr class='mt-0 mb-4' />
          <div class='row'>
            <div class='col-xl-2'>
              <div class='card mb-4 mb-xl-0'>
                <div class='card-header'>Profile Picture</div>
                <div class='card-body text-center'>
                  <img
                    class='img-account-profile rounded-circle mb-2'
                    src='https://bootdey.com/img/Content/avatar/avatar2.png'
                    width='100'
                    height='100'
                    alt=''
                  />
                  <div class='small font-italic text-muted mb-4'>
                    JPG or PNG no larger than 1 MB
                  </div>
                  <button class='btn btn-primary' type='button'>
                    Upload new image
                  </button>
                </div>
              </div>
            </div>
            <div class='col-xl-10'>
              <div class='card mb-4'>
                <div class='card-header'>Account Details</div>
                <div class='card-body'>
                  <form>
                    {/* <div class="mb-3">
                            <label class="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                            <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" />
                        </div> */}
                    <div class='row gx-3 mb-3'>
                      <div class='col-md-4'>
                        <label class='mb-1' for='username'>
                          Full name
                        </label>
                        <input
                          class='form-control'
                          id='username'
                          type='text'
                          name='username'
                          placeholder='Enter your full name'
                          value={editUder.name}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div class='col-md-4'>
                        <label class=' mb-1' for='email'>
                          Email address
                        </label>
                        <input
                          class='form-control'
                          id='email'
                          type='email'
                          name='email'
                          placeholder='Enter your email address'
                          value={editUder.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class='col-md-4'>
                        <label class='mb-1' for='phone'>
                          Phone number
                        </label>
                        <input
                          class='form-control'
                          id='phone'
                          name='phone'
                          type='tel'
                          placeholder='Enter your phone number'
                          value={editUder.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div class='row gx-3 mb-3'>
                      <div class='col-md-4'>
                        <label class='mb-1' for='city'>
                          City
                        </label>
                        <input
                          class='form-control'
                          id='city'
                          type='text'
                          name='city'
                          placeholder='Enter your City'
                          value={editUder.city}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class='col-md-4'>
                        <label class='mb-1' for='state'>
                          State
                        </label>
                        <input
                          class='form-control'
                          id='state'
                          type='text'
                          name='state'
                          placeholder='Enter your State'
                          value={editUder.state}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class='col-md-4'>
                        <label class='mb-1' for='country'>
                          Country
                        </label>
                        <select
                          id='country'
                          class='form-control'
                          name='country'
                          value={editUder.country}
                          onChange={handleInputChange}
                        >
                          <option disabled selected>
                            Choose Country
                          </option>
                          {countries &&
                            countries.map((country) => {
                              return (
                                <option value={country.name}>
                                  {country.name}
                                </option>
                              )
                            })}
                        </select>
                      </div>
                    </div>
                    <div class='row gx-3 mb-3'>
                      <div class='col-md-4'>
                        <label class='mb-1' for='address'>
                          Address
                        </label>
                        <input
                          type='text'
                          class='form-control'
                          id='address'
                          name='address'
                          placeholder='Enter your Address'
                          value={editUder.address}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class='col-md-4'>
                        <label class='mb-1' for='dob'>
                          Birthday
                        </label>
                        <input
                          class='form-control'
                          id='dob'
                          type='date'
                          name='dob'
                          placeholder='Enter your birthday'
                          value={editUder.dob}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class='col-md-4'>
                        <label for='gender'>Gender</label>
                        <div
                          onChange={handleRadio}
                          style={{ marginTop: "5px" }}
                        >
                          <input type='radio' value='Male' name='gender' /> Male
                          {"      "}
                          <input
                            type='radio'
                            value='Female'
                            name='gender'
                          />{" "}
                          Female {"  "}
                          {/* <br></br> */}
                          <input type='radio' value='Other' name='gender' />
                          {"      "}
                          Other
                        </div>
                      </div>
                    </div>
                    <br />
                    <button class='btn btn-primary float-right' type='button'>
                      Save changes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

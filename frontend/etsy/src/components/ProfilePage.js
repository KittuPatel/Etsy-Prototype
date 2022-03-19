import React, { useContext, useState, useEffect } from "react"
import { GlobalContext } from "../context/Provider"
import Header from "./Header"
import countries from "../utils/countries.js"
import axiosInstance from "../helpers/axiosInstance"
import { useHistory } from "react-router"
import { Dimmer, Loader } from "semantic-ui-react"

const ProfilePage = () => {
  const { authState, globalState, globalDispatch } = useContext(GlobalContext)
  console.log("profile", globalState)
  const userDetails = globalState?.user
  const [editUser, setEditUser] = useState(userDetails)
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const userId = globalState?.user?.userId
  const getUserDetails = async () => {
    console.log("asas" + userId)
    axiosInstance()
      .get(`/users/${userId}/profile`)
      .then((response) => {
        if (response && response.data) {
          console.log("RES" + JSON.stringify(response.data))
          setEditUser({
            username: response.data.username,
            imageUrl: response.data.imageUrl,
            dob: response.data.dob,
            gender: response.data.gender,
            address: response.data.address,
            city: response.data.city,
            state: response.data.state,
            country: response.data.country,
            about: response.data.about,
            email: response.data.email,
            phoneNo: response.data.phoneNo,
          })
          setLoading(false)
        } else {
          console.log("Error Getting Response from get User API")
        }
      })
      .catch((error) => {
        console.log("Error Getting Response from get User API")
      })
  }

  const handleInputChange = (e) => {
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    })
    // console.log(editUder)
    // globalDispatch({
    //   type: "EDIT_USER",
    //   payload: editUder,
    // })
  }

  useEffect(() => {
    setLoading(true)
    getUserDetails()
  }, [])

  const handleRadio = (e) => {
    setEditUser({
      ...userDetails,
      gender: e.target.value,
    })
  }

  const postuserData = async () => {
    axiosInstance()
      .put(`/users/${userId}/profile`, editUser)
      .then((response) => {
        if (response && response.data) {
          console.log("update profile successful")
          history.push("/editprofile")
        } else {
          console.log("error posting data to API")
        }
      })
      .catch((error) => {
        console.log("error posting data to API")
      })
  }

  return (
    <div>
      <Header />
      {loading ? (
        <div className='container' style={{ marginTop: "250px" }}>
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        </div>
      ) : (
        editUser && (
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
                              value={editUser?.username}
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
                              value={editUser?.email}
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
                              type='text'
                              placeholder='Enter your phone number'
                              value={editUser?.phone}
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
                              value={editUser?.city}
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
                              value={editUser?.state}
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
                              value={editUser?.country}
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
                              value={editUser?.address}
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
                              value={editUser?.dob?.slice(0, 10)}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div class='col-md-4'>
                            <label for='gender'>Gender</label>
                            <div
                              onChange={handleRadio}
                              style={{ marginTop: "5px" }}
                            >
                              <input
                                type='radio'
                                value='Male'
                                name='gender'
                                checked={editUser?.gender === "Male"}
                              />{" "}
                              Male
                              {"      "}
                              <input
                                type='radio'
                                value='Female'
                                name='gender'
                                checked={editUser?.gender === "Female"}
                              />{" "}
                              Female {"  "}
                              {/* <br></br> */}
                              <input
                                type='radio'
                                value='Other'
                                name='gender'
                                checked={editUser?.gender === "Other"}
                              />
                              {"      "}
                              Other
                            </div>
                          </div>
                        </div>
                        <br />
                        <button
                          class='btn btn-primary float-right'
                          type='button'
                          onClick={postuserData}
                        >
                          Save changes
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default ProfilePage

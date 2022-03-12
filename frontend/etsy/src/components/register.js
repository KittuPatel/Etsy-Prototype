import React, { useContext, useEffect, useState } from "react"
import { registerAction } from "../context/actions/registerAction"
import { GlobalContext } from "../context/Provider"
import { useHistory } from "react-router-dom"

const Register = () => {
  const { authDispatch, authState } = useContext(GlobalContext)

  const { auth } = authState
  const { loading, error, data } = auth

  // const history = useHistory()

  useEffect(() => {
    if (data) {
      // history.push("/login")
    }
  }, [data])

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const value = e.target.value
    setForm({
      ...form,
      [e.target.name]: value,
    })
    console.log(form)
  }

  const submitHandler = (e) => {
    console.log("submitHandler")
    registerAction(form)(authDispatch)
    console.log(authState)
  }

  return (
    <div className='d-lg-flex half'>
      <div
        className='bg order-2 order-md-1'
        style={{
          backgroundImage:
            "url(" +
            "https://images.pexels.com/photos/7585763/pexels-photo-7585763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" +
            ")",
        }}
      ></div>
      <div className='contents order-1 order-md-2'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-md-7'>
              <h3 className='mb-4'>
                Signup to <span className='etsy-logo'>Etsy</span>
              </h3>
              {/* <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p> */}
              <form action='#' method='post'>
                <div className='form-group username'>
                  <label for='username'>Fullname</label>
                  <input
                    type='text'
                    className='form-control'
                    style={{ fontWeight: "normal" }}
                    placeholder='Enter your Name'
                    id='name'
                    name='fullName'
                    value={form.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group email'>
                  <label for='username'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='your-email@gmail.com'
                    id='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group password mb-3'>
                  <label for='password'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Enter Password'
                    id='password'
                    name='password'
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>

                <div className='d-flex mb-2 align-items-center'>
                  <p>You agree to the Terms & Conditions by signing up.</p>
                  {/* <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                  <input type="checkbox" checked="checked"/>
                  <div className="control__indicator"></div>
                </label> */}
                  {/* <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>  */}
                </div>

                <input
                  type='submit'
                  value='Sign up'
                  onClick={submitHandler}
                  disabled={
                    !form.fullName || !form.email || !form.password || loading
                  }
                  className='btn btn-block btn-primary'
                />
                <br />
                {loading && <p>Loading..</p>}
                <p className='text-center'>
                  Already have an account? <a href='/login'>Login</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

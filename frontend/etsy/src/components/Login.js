import React, { useContext, useState } from "react"
import { GlobalContext } from "../context/Provider"

const Login = () => {
  const { authState, authDispatch } = useContext(GlobalContext)
  const {
    auth: { data },
  } = authState

  const [form, setForm] = useState({
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
    console.log("submitHandler from login")
    // registerAction(form)(authDispatch)
    // console.log(authState)
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
              {/* {data ? `Welcome ${data.username}` : "Login"} */}
              <h3 className='mb-4'>
                Login to <span className='etsy-logo'>Etsy</span>
              </h3>
              {/* <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p> */}
              <form action='#' method='post'>
                <div className='form-group email'>
                  <label for='email'>Email</label>
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
                  <p>You agree to the Terms & Conditions by Logging in.</p>
                  {/* <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                  <input type="checkbox" checked="checked"/>
                  <div className="control__indicator"></div>
                </label> */}
                  {/* <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>  */}
                </div>

                <input
                  type='button'
                  value='Login'
                  disabled={!form.email || !form.password}
                  className='btn btn-block btn-primary'
                  onClick={submitHandler}
                />
                <br />
                <p className='text-center'>
                  Don't have an account? <a href='/register'>Register</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

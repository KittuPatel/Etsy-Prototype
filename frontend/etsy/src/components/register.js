import React from 'react'

const Register = () => {
  return (
    <div className="d-lg-flex half">
    <div className="bg order-2 order-md-1" style= {{
  backgroundImage: "url(" + "https://images.pexels.com/photos/7585763/pexels-photo-7585763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" + ")",}}></div>
    <div className="contents order-1 order-md-2">

      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7">
            <h3>Signup to <strong>Etsy</strong></h3>
            <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
            <form action="#" method="post">
              <div className="form-group first">
                <label for="username">Username</label>
                <input type="text" className="form-control" placeholder="Enter your Name" id="name" />
              </div>
              <div className="form-group first">
                <label for="username">Email</label>
                <input type="email" className="form-control" placeholder="your-email@gmail.com" id="email" />
              </div>
              <div className="form-group last mb-3">
                <label for="password">Password</label>
                <input type="password" className="form-control" placeholder="Enter Password" id="password" />
              </div>
              
              <div className="d-flex mb-2 align-items-center">
                  <p>You agree to the Terms & Conditions by signing up.</p>
                {/* <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                  <input type="checkbox" checked="checked"/>
                  <div className="control__indicator"></div>
                </label> */}
                {/* <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>  */}
              </div>

              <input type="submit" value="Log In" className="btn btn-block btn-primary" />

            </form>
          </div>
        </div>
      </div>
    </div>

    
  </div>
  )
}

export default Register
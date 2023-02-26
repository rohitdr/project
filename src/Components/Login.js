import React from 'react'
import './login.css'
import './login_file.js'
export default function Login() {
  
  return (
    <>
  
{/* 
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt="Phone image"/>
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
     
          <div className="form-outline mb-4">
            <input type="email" id="form1Example13" className="form-control form-control-lg" />
            <label className="form-label" for="form1Example13">Email address</label>
          </div>

   
          <div className="form-outline mb-4">
            <input type="password" id="form1Example23" className="form-control form-control-lg" />
            <label className="form-label" for="form1Example23">Password</label>
          </div>

          <div className="d-flex justify-content-around align-items-center mb-4">
     
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label className="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

     
          <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <a className="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#3b5998"}} href="#!"
            role="button">
            Register
          </a>
      

        </form>
      </div>
    </div>
  </div> */}
  <section className="forms-section">
  <h1 className="section-title">Animated Forms</h1>
  <div className="forms">
    <div className="form-wrapper is-active">
      <button type="button" className="switcher switcher-login">
        Login
        <span className="underline"></span>
      </button>
      <form className="form form-login">
        <fieldset>
          <legend>Please, enter your email and password for login.</legend>
          <div className="input-block">
            <label for="login-email">E-mail</label>
            <input id="login-email" type="email" required/>
          </div>
          <div className="input-block">
            <label for="login-password">Password</label>
            <input id="login-password" type="password" required/>
          </div>
        </fieldset>
        <button type="submit" className="btn-login">Login</button>
      </form>
    </div>
    <div className="form-wrapper">
      <button type="button" className="switcher switcher-signup">
        Sign Up
        <span className="underline"></span>
      </button>
      <form className="form form-signup">
        <fieldset>
          <legend>Please, enter your email, password and password confirmation for sign up.</legend>
          <div className="input-block">
            <label for="signup-email">E-mail</label>
            <input id="signup-email" type="email" required/>
          </div>
          <div className="input-block">
            <label for="signup-password">Password</label>
            <input id="signup-password" type="password" required/>
          </div>
          <div className="input-block">
            <label for="signup-password-confirm">Confirm password</label>
            <input id="signup-password-confirm" type="password" required/>
          </div>
        </fieldset>
        <button type="submit" className="btn-signup">Continue</button>
      </form>
    </div>
  </div>
</section>


    </>
  )
}

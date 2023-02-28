import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RecipeContext from '../Context/RecipeContext'
import './login.css'
import './login_file.js'
export default function Login() {
  let Navigate = useNavigate();
  const context = useContext(RecipeContext)
  const {login} =context
  const onsubmit=(e)=>{
e.preventDefault();
login(logindetail)
if(sessionStorage.getItem("auth-token")){
Navigate("/Profile_Profile")


}

  }
  const [logindetail,setlogindetail]=useState({email:"",password:""})
  
  const loginchange=(e)=>{
setlogindetail({...logindetail,[e.target.name]:e.target.value})
  }
  return (
 <>


<section class="background-radial-gradient overflow-hidden">


  <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div class="row gx-lg-5 align-items-center mb-5">
      <div class="col-lg-6 mb-5 mb-lg-0" style={{zIndex: "10"}}>
        <h1 class="my-5 display-5 fw-bold ls-tight" style={{color: "hsl(218, 81%, 95%)"}}>
          The best offer <br />
          <span style={{color: "hsl(218, 81%, 75%)"}}>for your business</span>
        </h1>
        <p class="mb-4 opacity-70" style={{color: "hsl(218, 81%, 85%)"}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
        </p>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

        <div class="card bg-glass box_decrease_size_animation">
          <div class="card-body px-4 py-5 px-md-5 box_decrease_size_animation">
          <div class="card-header card-header-primary loginformheader text-center box_decrease_size_animationforlogin  ">
                <h4 class="card-title ">Login</h4>
                <div class="social-linelogin  ">
                  <a href="#pablo" class="btn btn-just-icon btn-link">
                    <i class="fa fs-5 fa-facebook-square"></i>
                  </a>
                  <a href="#pablo" class="btn btn-just-icon btn-link">
                    <i class="fa  fs-5 fa-twitter"></i>
                  </a>
                  <a href="#pablo" class="btn btn-just-icon btn-link">
                    <i class="fa fs-5 fa-google-plus"></i>
                  </a>
                </div> </div>
          <form class="loginform box_decrease_size_animation" onSubmit={onsubmit}>
          <div class="form-floating mb-3 mt-3 box_decrease_size_animation ">
            <input type="email" class="form-control loginform-control rounded-3" id="email" name="email" placeholder="name@example.com" value={logindetail.email} onChange={loginchange}/>
            <label for="loginemail">Email address</label>
          </div>
          <div class="form-floating mb-3 box_decrease_size_animation">
            <input type="password" class="form-control loginform-control rounded-3" id="password" name="password" placeholder="Password" value={logindetail.password} onChange={loginchange}/>
            <label for="loginPassword">Password</label>
          </div>
          <button class="w-100 mb-2 box_decrease_size_animation  login_login" type="submit">Login</button>
         
          <hr class="my-4"/>
   
         
        </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



 </>
  )
}

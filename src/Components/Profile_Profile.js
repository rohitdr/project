import React, { useContext } from 'react'
import { useEffect } from 'react'
import RecipeContext from '../Context/RecipeContext'
import { useNavigate } from "react-router-dom";
export default function Profile_Profile() {
  const context = useContext(RecipeContext)
  const {getUser,userData} = context
    let Navigate = useNavigate();
  useEffect(()=>{
    if(!sessionStorage.getItem("auth-token")){
Navigate("/login")
    }
    else{
getUser()
    }
  })
  return (
    <div>
      <section style={{backgroundColor: "#eee"}}>
  <div class="container py-5">
   
    

    <div class="row mt-2">
      <div class="col-lg-4">
        <div class="card mb-4 box_decrease_size_animation">
          <div class="card-body text-center">
            <img src={userData?.user?.Profile_Image} alt="avatar"
              class="rounded-circle img-fluid" style={{width: "150px"}}/>
            <h5 class="my-3">{userData?.user?.name}</h5>
            <p class="text-muted mb-1">Full Stack Developer</p>
            <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
            <div class="d-flex justify-content-center mb-2">
              <button type="button" class="btn btn-primary">Follow</button>
              <button type="button" class="btn btn-outline-primary ms-1">Message</button>
            </div>
          </div>
        </div>
        <div class="card mb-4 mb-lg-0  box_decrease_size_animation">
          <div class="card-body p-0  ">
            <ul class="list-group list-group-flush rounded-3">
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fas fa-globe fa-lg text-warning"></i>
                <p class="mb-0">mdbootstrap.com</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-github fa-lg" style={{color: "#333333"}}></i>
                <p class="mb-0">mdbootstrap</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-twitter fa-lg" style={{color: "#55acee"}}></i>
                <p class="mb-0">@mdbootstrap</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-instagram fa-lg" style={{color: "#ac2bac"}}></i>
                <p class="mb-0">mdbootstrap</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-facebook-f fa-lg" style={{color: "#3b5998"}}></i>
                <p class="mb-0">mdbootstrap</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
      <div class="col-xl-8 ">
            {/* <!-- Account details card--> */}
            <div class="card mb-4 box_decrease_size_animation">
                <div class="card-header">Account Details</div>
                <div class="card-body">
                    <form>
                       
                        <div class="mb-3">
                            <label class="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                            <input class="form-control profileform-control" id="inputUsername" type="text" placeholder="Enter your username" value="username"/>
                        </div>
                       
                        <div class="row gx-3 mb-3">
                      
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">First name</label>
                                <input class="form-control profileform-control" id="inputFirstName" type="text" placeholder="Enter your first name" value="Valerie"/>
                            </div>
                           
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Last name</label>
                                <input class="form-control profileform-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna"/>
                            </div>
                        </div>
                      
                        <div class="row gx-3 mb-3">
                         
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputOrgName">Organization name</label>
                                <input class="form-control profileform-control" id="inputOrgName" type="text" placeholder="Enter your organization name" value="Start Bootstrap"/>
                            </div>
                           
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLocation">Location</label>
                                <input class="form-control profileform-control" id="inputLocation" type="text" placeholder="Enter your location" value="San Francisco, CA"/>
                            </div>
                        </div>
                      
                        <div class="mb-3">
                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                            <input class="form-control profileform-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value={userData?.user?.email}/>
                        </div>
                      
                        <div class="row gx-3 mb-3">
                        
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">Phone number</label>
                                <input class="form-control profileform-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value={userData?.user?.phone_number}/>
                            </div>
                        
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputBirthday">Birthday</label>
                                <input class="form-control profileform-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" value="06/10/1988"/>
                            </div>
                        </div>
                        
                        <button class="btn btn-primary" type="button">Save changes</button>
                    </form>
                
            </div>
        </div>
    </div>
      
      </div>
    </div>
 
</section>
    </div>
  )
}

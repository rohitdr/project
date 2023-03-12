import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import RecipeContext from '../Context/RecipeContext';
import { useNavigate } from "react-router-dom";
export default function Profile_Security() {
    const context = useContext(RecipeContext)
const {showAlert,setProgress}= context
let Navigate = useNavigate();
    const [passwords, setPasswords]= useState({oldpassword:"",newpassword1:"",newpassword2:""})
    const onSubmit=(e)=>{
 e.preventDefault();
    }
    const changepassword=async()=>{
        if(passwords.newpassword1 === passwords.newpassword2){
            showAlert("Both the passwords must be same","danger")
            
        }
       else{
        setProgress(10)
   
        const response = await fetch(`http://localhost:5000/api/auth/changePassword`, {
          method: 'POST',
     
          headers: {
            'Content-Type': 'application/json',
            // 'auth-token':sessionStorage.getItem("auth-token")
            'auth-token':sessionStorage.getItem("auth-token")?sessionStorage.getItem("auth-token"):localStorage.getItem("auth-token")
    
           
          },
          body: JSON.stringify({oldpassword:passwords.oldpassword, password:passwords.newpassword1})
         
      
        });
     setProgress(50)
        let loginresult= await response.json();
     
      
        if(response.status !== 400){
          setProgress(70)
          
       
          
         
          setProgress(100)
    
           
            showAlert("Your Password has been successfully changed","success")
       Navigate("/login")
         
        }
    
      
        if(response.status=== 400){
          
          showAlert(loginresult.error,"danger")
          setProgress(100)
        }
       
    }
    }
    const change=(e)=>{
       setPasswords({...passwords,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <div class="container-xl px-4 mt-4">

       
          <div class="row">
            <div class="col-lg-8">
             
                <div class="card mb-4 box_decrease_size_animation">
                    <div class="card-header">Change Password</div>
                    <div class="card-body">
                        <form onSubmit={onsubmit}>
                           
                            <div class="mb-3">
                                <label class="small mb-1" for="oldpassword">Current Password</label>
                                <input class="form-control" id="oldpassword" type="password" name='oldpassword' placeholder="Enter current password" onChange={change}/>
                            </div>
                          
                            <div class="mb-3">
                                <label class="small mb-1" for="newpassword1">New Password</label>
                                <input class="form-control" id="newpassword1" type="password" name = "newpassword1" placeholder="Enter new password" onChange={change}/>
                            </div>
                           
                            <div class="mb-3">
                                <label class="small mb-1" for="newPassword">Confirm Password</label>
                                <input class="form-control" id="newPassword2" type="password" name="newpassword2" placeholder="Confirm new password" onChange={change}/>
                            </div>
                            <button class="btn btn-primary" type="button" onClick={changepassword}>Save</button>
                        </form>
                    </div>
                </div>

                <div class="card mb-4 box_decrease_size_animation">
                    <div class="card-header">Security Preferences</div>
                    <div class="card-body">
                       
                        <h5 class="mb-1">Account Privacy</h5>
                        <p class="small text-muted">By setting your account to private, your profile information and posts will not be visible to users outside of your user groups.</p>
                        <form>
                            <div class="form-check">
                                <input class="form-check-input" id="radioPrivacy1" type="radio" name="radioPrivacy" checked=""/>
                                <label class="form-check-label" for="radioPrivacy1">Public (posts are available to all users)</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" id="radioPrivacy2" type="radio" name="radioPrivacy"/>
                                <label class="form-check-label" for="radioPrivacy2">Private (posts are available to only users in your groups)</label>
                            </div>
                        </form>
                        <hr class="my-4"/>
                      
                        <h5 class="mb-1">Data Sharing</h5>
                        <p class="small text-muted">Sharing usage data can help us to improve our products and better serve our users as they navigation through our application. When you agree to share usage data with us, crash reports and usage analytics will be automatically sent to our development team for investigation.</p>
                        <form>
                            <div class="form-check">
                                <input class="form-check-input" id="radioUsage1" type="radio" name="radioUsage" checked=""/>
                                <label class="form-check-label" for="radioUsage1">Yes, share data and crash reports with app developers</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" id="radioUsage2" type="radio" name="radioUsage"/>
                                <label class="form-check-label" for="radioUsage2">No, limit my data sharing with app developers</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
               
                <div class="card mb-4 box_decrease_size_animation">
                    <div class="card-header">Two-Factor Authentication</div>
                    <div class="card-body">
                        <p>Add another level of security to your account by enabling two-factor authentication. We will send you a text message to verify your login attempts on unrecognized devices and browsers.</p>
                        <form>
                            <div class="form-check">
                                <input class="form-check-input" id="twoFactorOn" type="radio" name="twoFactor" checked=""/>
                                <label class="form-check-label" for="twoFactorOn">On</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" id="twoFactorOff" type="radio" name="twoFactor"/>
                                <label class="form-check-label" for="twoFactorOff">Off</label>
                            </div>
                            <div class="mt-3">
                                <label class="small mb-1" for="twoFactorSMS">SMS Number</label>
                                <input class="form-control" id="twoFactorSMS" type="tel" placeholder="Enter a phone number" value="555-123-4567"/>
                            </div>
                        </form>
                    </div>
                </div>
             
                <div class="card mb-4  Moving_in_z_axis_animation_profile_card box_decrease_size_animation">
                    <div class="card-header">Delete Account</div>
                    <div class="card-body">
                        <p>Deleting your account is a permanent action and cannot be undone. If you are sure you want to delete your account, select the button below.</p>
                        <button class="btn btn-danger-soft text-danger" type="button">I understand, delete my account</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import RecipeContext from '../Context/RecipeContext'
import { useNavigate } from "react-router-dom";
import { Input,Button } from '@nextui-org/react';

export default function Profile_Profile() {
  const [showfile, setshowfile]= useState(null)
  const [filesize , setfilesize]= useState(0)
  const context = useContext(RecipeContext)
  const {getUser,userData,showAlert,setProgress} = context
    let Navigate = useNavigate();
  useEffect(()=>{
    if(!sessionStorage.getItem("auth-token")){
Navigate("/login")
    }
    else{
getUser()
    }
  },[])
  //converting image to base64
  const toBase64=(file)=>
    new Promise((resolve,reject)=>{
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload=()=>resolve(reader.result);
      reader.onerror=(error)=>reject(error);
    });
  

  //image preview
const imagepreview=async (e)=>{
const imagefile = e.target.files[0];
setfilesize(e.target.files[0].size)
const imageurl = URL.createObjectURL(imagefile)
const previewing = document.querySelector("#profile_avtar")
previewing.src=imageurl

 let base64= await toBase64(imagefile)

 setshowfile(base64)

}
//api for changing the image
const changeprofileimage=async(file)=>{
setProgress(30)
  
  const response = await fetch("http://localhost:5000/api/auth/changeuploadimage", {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        'auth-token':sessionStorage.getItem("auth-token")

       
      },
      body: JSON.stringify({
        "image":file
       })
     
  
    });
  setProgress(50)
    
  let result = await response.json()
  setProgress(70)
if(result){
  showAlert("Image has been changed","success")
}
  
setProgress(100)
}

//uploading or changing the file
const changefile=()=>{
 if(filesize>100000){
  showAlert("File size should be less that 100kb","danger")
 }
 else{
changeprofileimage(showfile)
 }



}
//form submit
const submit=(e)=>{
  e.preventDefault();

}

//visible submit button
const visibleSubmit=()=>{
  if(document.getElementById('accountdetailsubmit').style.display=="block"){
    document.getElementById('accountdetailsubmit').style.display="none"
    document.getElementById('accountdetaildisplay').style.display="block"
  }
  else{
    document.getElementById('accountdetailsubmit').style.display="block"
    document.getElementById('accountdetaildisplay').style.display="none"
  }
  
}
//visible image controls
const visibleimagecontrols=()=>{
  if(document.getElementById('imagechangecontrols').style.display=="block"){
    document.getElementById('imagechangecontrols').style.display="none"
   
  }
  else{
    document.getElementById('imagechangecontrols').style.display="block"
  
  }
}
//visible socail network detail form
const visiblesocailSubmit=()=>{
  if(document.getElementById('display-content').style.display=="block"){
    document.getElementById('display-content').style.display="none"
    document.getElementById('displaysocailform').style.display="block"
  }
  else{
    document.getElementById('display-content').style.display="block"
    document.getElementById('displaysocailform').style.display="none"
  }
}
  return (
    <div>
      <section style={{backgroundColor: "#eee"}}>
  <div class="container py-5">
   
    

    <div class="row mt-2">
      <div class="col-lg-4">
        <div class="card mb-4 box_decrease_size_animation">
        <div class="card-header d-flex justify-content-between ">Profile Image <i class="fa-solid fa-pen" onClick={visibleimagecontrols}></i></div>

          <div class="card-body text-center">
            <img  alt="avatar" src={userData?.user?.Profile_Image}
              class="rounded-circle img-fluid" id="profile_avtar" style={{width: "150px"}}/>
            <h5 class="my-3">{userData?.user?.first_name} {userData?.user?.last_name}</h5>
        
           
            <div class="d-flex justify-content-center mb-2">
              {/* <button type="button" class="btn btn-primary">Follow</button> */}
              <form onSubmit={submit} id="imagechangecontrols" style={{display:"none"}}>
              <label for="profileimage" className='profileimagelabel'>
  Select Image
  <input id="profileimage" type="file" accept="image/*" onChange={imagepreview}/>
</label>
              <button type="button" class="btn btn-outline-primary ms-2 mb-1" onClick={changefile}>Change Image</button>
              </form>
            </div>
          </div>
        </div>
        <div class="card mb-4 mb-lg-0  box_decrease_size_animation">
        <div class="card-header d-flex justify-content-between ">Social Network <i class="fa-solid fa-pen" onClick={visiblesocailSubmit}></i></div>

          <div class="card-body p-0">
            <ul class="list-group list-group-flush rounded-3" id="display-content">
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
             <form className='ms-4 ps-3' id="displaysocailform">
                      <div className="d-flex justify-content-between pt-2 ">
                        <Input
                          className="box_decrease_size_animationforlogin bg-white"
                          bordered
                        
                          rounded
                          
                          color="secondary"
                          labelLeft="https://"
                          label="Website Name"
                          name="web"
                          id="web"
                          placeholder="Your Website Name"
                          labelRight=".com"
                          contentRight={
                            <i class="fas fa-globe fa-lg text-warning"></i>
                          }
                        />
                      </div>
                      <div className="d-flex justify-content-between pt-2 ">
                        <Input
                          className="box_decrease_size_animationforlogin bg-white"
                          bordered
                          
                          rounded
                          color="primary"
                        
                          labelLeft="https://"
                          label="Github Reposatary"
                          labelRight=".git"
                          id="git"
                          name="git"
                          contentRight={
                            <i class=" pe-2 fab fa-github fa-lg"></i>
                          }
                        />
                      </div>
                      <div className="d-flex justify-content-between pt-2 ">
                        <Input
                          className="box_decrease_size_animationforlogin bg-white "
                          bordered
                            rounded
                         
                          color="secondary"
                          labelLeft="https://"
                          label="Facebook"
                          name="facebook"
                          id="facebook"
                          labelRight=".facebook"
                          contentRight={
                            <i
                              class="fab fa-facebook-f fa-lg"
                              style={{ color: "#3b5998" }}
                            ></i>
                          }
                        />
                      </div>

                      <div className="d-flex justify-content-between pt-2 ">
                        <Input
                          className="box_decrease_size_animationforlogin bg-white "
                          bordered
                         
                          rounded
                          
                          contentRightStyling={false}
                          color="primary"
                          name="twitter"
                          id="twitter"
                          labelLeft="https://"
                          label="Twitter"
                          labelRight=".twitter"
                          contentRight={
                            <i
                              class="fab fa-twitter fa-lg"
                              style={{ color: "#55acee" }}
                            ></i>
                          }
                        />
                      </div>

                      <div className="d-flex justify-content-around mt-3 pt-2 mb-4">
                       
                        <Button
                          color="primary"
                          auto
                        
                          className="box_decrease_size_animationforlogin fw-bold"
                        >
                          Sign Up
                        </Button>
                      </div>
                    </form>
          </div>
        </div>
      </div>
     
      <div class="col-xl-8 accountdetailcard ">
            {/* <!-- Account details card--> */}
            <div class="card mb-4 box_decrease_size_animation">
                <div class="card-header d-flex justify-content-between ">Account Details <i class="fa-solid fa-pen" onClick={visibleSubmit}></i></div>
                <div class="card-body">
                    <form id="accountdetailsubmit">
                       
                        <div class="mb-3 col-7">
                            <label class="small mb-1" for="inputUsername">Username </label>
                            <input class="form-control profileform-control" id="inputUsername" type="text" placeholder="Enter your username" value={userData?.user?.username}/>
                        </div>
                       
                        <div class="row gx-3 mb-3">
                      
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">First name</label>
                                <input class="form-control profileform-control" id="inputFirstName" type="text" placeholder="Enter your first name" value={userData?.user?.first_name}/>
                            </div>
                           
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Last name</label>
                                <input class="form-control profileform-control" id="inputLastName" type="text" placeholder="Enter your last name" value={userData?.user?.last_name}/>
                            </div>
                        </div>
                      
                        
                      
                        <div class="mb-3 col-7">
                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                            <input class="form-control profileform-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value={userData?.user?.email}/>
                        </div>
                      
                        <div class="row gx-3 mb-3">
                        
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">Phone number</label>
                                <input class="form-control profileform-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value={userData?.user?.phone_number}/>
                            </div>
                        
                           
                        </div>
                        
                        <button class="btn btn-primary" type="button" >Save changes</button>
                    </form>
                    {/* displaying accound details
                     */}
                    <ul class="list-group list-group-flush rounded-3" id="accountdetaildisplay" width="50%">
              <li class="list-group-item d-flex justify-content-start align-items-center p-3">
              <i class="fa-solid fa-user me-2"></i>
                <p class="mb-0">{userData?.user?.username}</p>
              </li>
              <li class="list-group-item d-flex justify-content-start align-items-center p-3">
              <i class="fa-solid fa-signature me-2"></i>
                <p class="mb-0">{userData?.user?.first_name} {userData?.user?.last_name}</p>
              </li>
              <li class="list-group-item d-flex justify-content-start align-items-center p-3">
              <i class="fa-solid fa-envelope me-2"></i>
                <p class="mb-0">{userData?.user?.email}</p>
              </li>
              <li class="list-group-item d-flex justify-content-start align-items-center p-3">
               
                <i class="fa-solid fa-phone text-primary me-2"></i>
                <p class="mb-0">{userData?.user?.phone_number}</p>
              </li>
             
            </ul>
                
            </div>
        </div>
    </div>
      
      </div>
    </div>
 
</section>
    </div>
  )
}

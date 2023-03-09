import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import RecipeContext from '../Context/RecipeContext'
import { useNavigate } from "react-router-dom";
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
  return (
    <div>
      <section style={{backgroundColor: "#eee"}}>
  <div class="container py-5">
   
    

    <div class="row mt-2">
      <div class="col-lg-4">
        <div class="card mb-4 box_decrease_size_animation">
          <div class="card-body text-center">
            <img  alt="avatar" src={userData?.user?.Profile_Image}
              class="rounded-circle img-fluid" id="profile_avtar" style={{width: "150px"}}/>
            <h5 class="my-3">{userData?.user?.first_name}</h5>
            <p class="text-muted mb-1">Full Stack Developer</p>
            <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
            <div class="d-flex justify-content-center mb-2">
              {/* <button type="button" class="btn btn-primary">Follow</button> */}
              <form onSubmit={submit}>
              <label for="profileimage" className='profileimagelabel'>
  Select Image
  <input id="profileimage" type="file" accept="image/*" onChange={imagepreview}/>
</label>
              <button type="button" class="btn btn-outline-primary ms-2 mb-1" onClick={changefile}>Change Images</button>
              </form>
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
                       
                        <div class="mb-3 col-7">
                            <label class="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
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

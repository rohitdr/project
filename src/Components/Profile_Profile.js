import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import RecipeContext from '../Context/RecipeContext'
import { useNavigate } from "react-router-dom";
import { Input,Button } from '@nextui-org/react';

export default function Profile_Profile() {
  const [showfile, setshowfile]= useState(null)
  const [user,setuser]=useState({username:"",first_name:"",last_name:"",email:"",phone_number:""})
  const [socaildetails,setsocialdetails]=useState({git:"",facebook:"",twitter:"",web:""})
  const [filesize , setfilesize]= useState(0)
  const context = useContext(RecipeContext)
  const {getUser,userData,showAlert,setProgress,setAlert} = context
    let Navigate = useNavigate();
  useEffect(()=>{
    if(!sessionStorage.getItem("auth-token")&& !localStorage.getItem("auth-token")){
Navigate("/login")
    }
    else{
getUser()
    }
  },[userData])
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
        // 'auth-token':sessionStorage.getItem("auth-token")
        'auth-token':sessionStorage.getItem("auth-token")?sessionStorage.getItem("auth-token"):localStorage.getItem("auth-token")

       
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
//user detail onchange handler
const userdetailchange=(e)=>{
setuser({...user,[e.target.name]:e.target.value})
}
//api for updating accound detail
const updateaccountdetail=async (data)=>{
  setProgress(30)
  const response =  await fetch(
    "http://localhost:5000/api/auth/updateuser",
    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        // 'auth-token':sessionStorage.getItem("auth-token")
        'auth-token':sessionStorage.getItem("auth-token")?sessionStorage.getItem("auth-token"):localStorage.getItem("auth-token")
      },
      body: JSON.stringify(data),
    }
  );
  setProgress(50)
  let result =  await response.json()
  setProgress(70)
 
  if(response.status==404){
    showAlert(result.error,"danger")
    setProgress(100)
  }
  else{
    showAlert(result,"success")
    setProgress(100)
  }
 
}
//change account detail submit button
const changeaccountdetail=()=>{
  if(document.getElementById('username').value==userData?.user?.username && document.getElementById('email').value==userData?.user?.email && document.getElementById('first_name').value==userData?.user?.first_name && document.getElementById('last_name').value==userData?.user?.last_name && document.getElementById('phone_number').value==userData?.user?.phone_number){
    showAlert("Before submititng the from please Modify any detail","danger")
  }
  else if(document.getElementById('phone_number').value.length !== 10){
  
    showAlert("Phone Should be of 10 digits", "danger")

  }
  
  // validation for password
  else if(document.getElementById('first_name').value.length<3)
  {
    showAlert("First Name should be of more than 3 digits", "danger")
   
  }
  else if(!document.getElementById('email').value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i))
  {
    showAlert("Email should in correct Format", "danger")
   
  }
 

  else if(document.getElementById('username').value.length<8)
  {
  
    showAlert("Username Should be of more than 8 digits", "danger")
  }
  else{
    updateaccountdetail(user)
  }
  

  
 

}

//all the function for changing the socail details
const socailonchang=(e)=>{
setsocialdetails({...socaildetails,[e.target.name]:e.target.value})
}
//socail block submit button
const socailsubmit=()=>{
// console.log(userData?.user?.web==undefined)


   updateaccountdetail(socaildetails)

}


 
  return (
    <>
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
                <p class="mb-0">{userData?.user?.web?userData?.user?.web+".com":"recipe.com"}</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-github fa-lg" style={{color: "#333333"}}></i>
                <p class="mb-0">{userData?.user?.git?userData?.user?.git+".git":"recipe.git"}</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-twitter fa-lg" style={{color: "#55acee"}}></i>
                <p class="mb-0">{userData?.user?.twitter?userData?.user?.twitter+".twitter":"recipe.twitter"}</p>
              </li>
             
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-facebook-f fa-lg" style={{color: "#3b5998"}}></i>
                <p class="mb-0">{userData?.user?.facebook?userData?.user?.facebook+".facebook":"recipe.facebook"}</p>
              </li>
            </ul>
             <form className='ms-4 ps-3' id="displaysocailform" onSubmit={(e)=>{e.preventDefault()}}>
                      <div className="d-flex justify-content-between pt-2 ">
                        <Input
                          className="box_decrease_size_animationforlogin bg-white"
                          bordered
                        key="web"
                        
                          onChange={socailonchang}
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
                        key="git"
                          className="box_decrease_size_animationforlogin bg-white"
                          bordered
                          
                          
                          color="primary"
                          onChange={socailonchang}
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
                           key="facebook"
                          onChange={socailonchang}
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
                         key="twitter"
                          
                          onChange={socailonchang}
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
                        onPress={socailsubmit}
                          className="box_decrease_size_animationforlogin fw-bold"
                        >
                         Update
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
                    <form id="accountdetailsubmit" onSubmit={(e)=>{e.preventDefault()}}>
                       
                        <div class="mb-3 col-7">
                            <label class="small mb-1" for="inputUsername">Username </label>
                            <input class="form-control profileform-control " id="username" name='username' type="text" placeholder="Enter your username" onChange={userdetailchange}  defaultValue={userData?.user?.username}  />
                            <div class="invalid-feedback" id="invalid_username">
        Please choose a username.
      </div>
                        </div>
                       
                        <div class="row gx-3 mb-3">
                      
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">First name</label>
                                <input class="form-control profileform-control" id="first_name" type="text" name="first_name" placeholder="Enter your first name" onChange={userdetailchange}  defaultValue={userData?.user?.first_name}/>
                            </div>
                           
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Last name</label>
                                <input class="form-control profileform-control" id="last_name" type="text" name='last_name' placeholder="Enter your last name" onChange={userdetailchange}  defaultValue={userData?.user?.last_name}/>
                            </div>
                        </div>
                      
                        
                      
                        <div class="mb-3 col-7">
                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                            <input class="form-control profileform-control" id="email" type="email" name='email' placeholder="Enter your email address" onChange={userdetailchange}  defaultValue={userData?.user?.email}/>
                        </div>
                      
                        <div class="row gx-3 mb-3">
                        
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">Phone number</label>
                                <input class="form-control profileform-control" id="phone_number" type="phone number" name='phone_number' placeholder="Enter your phone number" onChange={userdetailchange}  defaultValue={userData?.user?.phone_number}/>
                            </div>
                        
                           
                        </div>
                        
                        <button class="btn btn-primary" type="button" onClick={changeaccountdetail} >Save changes</button>
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
    </div></>
  )
}

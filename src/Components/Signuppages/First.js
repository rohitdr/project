import React from 'react'
import { Input, useInput, Button, Radio,Textarea } from "@nextui-org/react";
import { useState } from "react";
import { useContext } from 'react';
import RecipeContext from '../../Context/RecipeContext';
import { useEffect } from 'react';
export default function First() {
    const { value, reset, bindings } = useInput("");
 const [signupdetail, setsignupdetails]=useState({phone_number:"",email:"",password:"",confirm_password:"",username:"",first_name:"", last_name:""})
  const context = useContext(RecipeContext)
  const {singuppage, setsignuppage,showAlert}= context
   const [usernamecolor, setusernamecolor]= useState("success")

 const [helpertextusername,sethelpertextusername]= useState("")
    const validateEmail = (value) => {
      return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    };
  
    const checkusername=async(username)=>{
      
      
     try{ const response = await fetch("http://localhost:5000/api/auth/checkUsername", {
        method: 'POST',
   
        headers: {
          'Content-Type': 'application/json',
         
  
         
        },
        body: JSON.stringify({
          "username":username
         })
       
    
      });
      
      let userDetail= await response.json();
   
  console.log(userDetail)
       
    }
  catch(e){
   console.log(e.message)
   
  }
  
     }
    const helper = React.useMemo(() => {
      if (!value)
        return {
          text: "",
          color: "",
        };
      const isValid = validateEmail(value);
      return {
        text: isValid ? "Correct email" : "Enter a valid email",
        color: isValid ? "success" : "error",
      };
    }, [value]);
   
    const onchangeusername=(e)=>{
setsignupdetails({...signupdetail,username:e.target.value})
if(signupdetail.username.length<8){
  setusernamecolor("error")
 sethelpertextusername("username must be of 8 digits")
}
else{
  setusernamecolor("success")
  sethelpertextusername("")
   checkusername(signupdetail.username)
}



    }
    const onchange=(e)=>{
setsignupdetails({...signupdetail,[e.target.name]:e.target.value})
    }
    const next=()=>{
      if(signupdetail.username.length<8){
        
        showAlert("OOPs!, Username must have 8 words", "danger")
      }
      else if(signupdetail.first_name.length<3){
        showAlert("OOPs!, First Name must have 3 words", "danger")
      }
      else if(signupdetail.last_name.length<3){
        showAlert("OOPs!, Last Name must have 3 words", "danger")
      }
      else if(signupdetail.phone_number.length!=10){
        showAlert("OOPs!, Phone Number Must be of 10 digits","danger")
      }
      else if(signupdetail.password.length<8){
        showAlert("OOPs!, Password must have 8 digits","danger")
      }
      else if(signupdetail.password != signupdetail.confirm_password){
        showAlert("OOPs!, Password and Confirm password must be same","danger")
      }

      else{
        console.log(signupdetail)
      document.getElementById('signup_first_component').setAttribute("class","disapear_component");
      setTimeout(()=>{setsignuppage(1)},350)
      }
    }

     
  return (
    <>
     
    <section class="background-radial-gradient overflow-hidden" >
        <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5 appear_component" id="signup_first_component">
          <div class="row gx-lg-5 align-items-center mb-5">
            <div class="col-lg-5 mb-5 mb-lg-0 position-relative">
              <div class="card singupcard border-success align-items-center box_decrease_size_animation">
                <div class="card-header singupcardheder b d-flex justify-content-center box_decrease_size_animationforlogin">
                  <h5 className="fw-bold pt-4 text-white"> Sign Up</h5>
                </div>
                <div class="card-body box_decrease_size_animationforlogin ">
                  <form>
                    <div className="row px-2 mt-3 box_decrease_size_animationforlogin mb-1">
                      <Input
                      {...bindings}
                      clearable
                      shadow={false}
                      onClearClick={reset}
                    required
                      color={helper.color}
                      helperColor={helper.color}
                      helperText={helper.text}
                        bordered
                        className="bg-white"
                        rounded
                        onChange={onchange}
                        type="email"
                        label="Your Email"
                        placeholder="Enter Your Email"
                        status="secondary"
                      />
                    </div>
                    <div className="d-flex justify-content-between pt-2 ">
                      <div className="px-3 box_decrease_size_animationforlogin mb-1">
                        <Input
                          className="bg-white"
                          size="md"
                          bordered
                          rounded
                          color="secondary"
                          clearable
                          name='first_name'
                          id='first_name'
                         onChange={onchange}
                          placeholder="Enter Your First name"
                          label="First Name"
                        />
                      </div>
                      <div className="box_decrease_size_animationforlogin mb-1">
                        <Input
                          size="md"
                          bordered
                          className="bg-white"
                          rounded
                          clearable
                          name='last_name'
                          id="last_name"
                          onChange={onchange}
                          color="secondary"
                          placeholder="Enter Your Last Name"
                          label="Last name"
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-between pt-2">
                      <div className="px-3 box_decrease_size_animationforlogin mb-1">
                      <Input
                          className="bg-white"
                          size="md"
                          bordered
                          rounded
                          onChange={onchangeusername}
                          helperColor="error"
                          helperText={helpertextusername}
                          color={usernamecolor}
                          clearable
                          name='username'
                          id='username'
                          
                          placeholder="Enter Your Username"
                          label="Username"
                        />
                      </div>
                      <div className="box_decrease_size_animationforlogin mb-1">
                        <Input
                          className="bg-white"
                          clearable
                          bordered
                          rounded
                          onChange={onchange}
                          name="phone_number"
                          id="phone_number"
                          color="success"
                          type="Phone number"
                          label="Phone Number"
                          placeholder="Enter Your Phone Number"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between pt-2">
                      <div className="px-3 box_decrease_size_animationforlogin mb-1">
                        <Input.Password
                          className="bg-white"
                          clearable
                          bordered
                          rounded
                          onChange={onchange}
                          color="warning"
                          name="password"
                          id="password"
                          type="password"
                          label="Password"
                          placeholder="Enter Your Password"
                        />
                      </div>
                      <div className="box_decrease_size_animationforlogin mb-1">
                        <Input.Password
                          className="bg-white"
                          clearable
                          bordered
                          rounded
                          onChange={onchange}
                          name="confirm_password"
                          id="confirm_password"
                          color="warning"
                          type="password"
                          label="Confirm Password"
                          placeholder="confirm Password"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3 pt-2 mb-4">
                      <Button
                        color="secondary"
                        auto
                        ghost
                        className="box_decrease_size_animationforlogin"
                        onClick={next}
                      >
                        Next
                      </Button>
                    </div>
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

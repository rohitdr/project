import React from "react";
import { useState } from "react";
// import First from "./Signuppages/First";
// import Second from "./Signuppages/Second";
// import Third from "./Signuppages/Third";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import RecipeContext from "../Context/RecipeContext";
import { Input, useInput, Button, Radio, Textarea } from "@nextui-org/react";
import e from "cors";

export default function SignUp() {
  const { value, reset, bindings } = useInput("");
  const [signupdetail, setsignupdetails] = useState({
    phone_number: "",
    email: "",
    password: "",
    confirm_password: "",
    username: "",
    first_name: "",
    last_name: "",
    gender:"",
    faourite_food:"",
    date_of_birth:"",
    address:"",
    city:"",
    state:"",
    pincode:"",
    web:"",
    git:"",
    facebook:"",
twitter:""
  });
  
  const context = useContext(RecipeContext);
  const { signuppage, setsignuppage,setProgress, showAlert } = context;
  const [usernamecolor, setusernamecolor] = useState("success");

  const [helpertextusername, sethelpertextusername] = useState("");
  const [hlepercolorusername, sethelpercolorusername] = useState("error");

  const [usernamecontentright, setusernamecontentright] = useState();
  const [phone_number_helper_text,setphone_number_helper_text]= useState("")
  const [phone_numbercolor,setphone_numbercolor]=useState("success")
  const [phone_numberhelpercolor,setphone_numberhelpercolor]=useState("error")
  const [phone_numbercontentright,setphone_numbercontentright]=useState()
  const [passwordcolor,setpasswordcolor]=useState("warning")
  const [passwordhelpertext,setpasswordhelpertext]=useState("")
  const [passwordhelpercolor,setpasswordhelpercolor]=useState("error")
  const [confirm_passwordcolor,setconfirm_passwordcolor]=useState("warning")
  const [confirm_passwordhelpercolor, setconfirm_passwordhelpercolor]=useState("error")
  const [confirm_passwordhelpercolortext, setconfirm_passwordhelpercolortext] = useState("")
  const [first_namecolor,setfirst_namecolor]=useState("secondary")
  const [first_namehelpercolor,setfirst_namehelpercolor]=useState("error")
  const [first_namehelpertext,setfirst_namehelpertext]=useState("")
  const [last_namecolor,setlast_namecolor]=useState("secondary")
  const [last_namehelpercolor,setlast_namehelpercolor]=useState("error")
  const [last_namehelpertext,setlast_namehelpertext]=useState("")
  ///for validation of email
  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };
  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    ///for validation of email
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);

  ///for validation of username
  const checkusername = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/checkUsername",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: document.getElementById("username").value,
          }),
        }
      );

      let result = await response.json();
      if (!result) {
        console.log("error");
        setusernamecolor("error");
        sethelpercolorusername("error");
        sethelpertextusername("Username is not avialable");

        setusernamecontentright(
          <i class="fa-solid text-danger fa-circle-exclamation"></i>
        );
      }
      if (result) {
        setusernamecolor("success");

        sethelpercolorusername("success");
        sethelpertextusername("username is avialable");
        setusernamecontentright(
          <i class="fa-solid text-success fa-circle-check"></i>
        );
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  //onload to store data for prev button

  //// onchanger effect on usrename
  const onchangeusername = (e) => {
    setsignupdetails({ ...signupdetail, username: e.target.value });

    if (signupdetail.username.length < 8) {
      setusernamecolor("error");
      sethelpertextusername("username must be of 8 digits");
    } else {
      sethelpertextusername("");
      checkusername(signupdetail.username);
    }
  };

  const onchange = (e) => {
    setsignupdetails({ ...signupdetail, [e.target.name]: e.target.value });
    //validation for number
    if(signupdetail.phone_number.length !== 10){
      setphone_number_helper_text("Phone Number should be of 10 digits")
      setphone_numberhelpercolor("error")
      setphone_numbercolor("error")
      setphone_numbercontentright( <i class="fa-solid text-danger fa-circle-exclamation"></i>)
      

    }
    else{
      setphone_number_helper_text("")
      setphone_numberhelpercolor("success")
      setphone_numbercolor("success")
      setphone_numbercontentright(<i class="fa-solid text-success fa-circle-check"></i>)
    }
    // validation for password
    if(signupdetail.password.length<8)
    {
     setpasswordhelpertext("Password should of 8 words")
     setpasswordhelpercolor("error")
     setpasswordcolor('error')
     
    }
    else{
setpasswordcolor("warning")
setpasswordhelpercolor("success")
setpasswordhelpertext("This Looks Nice ")
    }
    //validation for confirm password
    if(signupdetail.password !== signupdetail.confirm_password)
    {
     setconfirm_passwordcolor("error")
     setconfirm_passwordhelpercolor("error")
     setconfirm_passwordhelpercolortext("Password and Confirm password must be same")
     
    }
    else{
setconfirm_passwordcolor("warning")
setconfirm_passwordhelpercolor("success")
setconfirm_passwordhelpercolortext("")
    }
    //validation for first name
    if(signupdetail.first_name.length<3){
setfirst_namecolor("error")
setfirst_namehelpercolor("error")
setfirst_namehelpertext("First Name should of more than 3 words")
    }
    else{
setfirst_namecolor("secondary")
setfirst_namehelpercolor("success")
setfirst_namehelpertext("")
    }
    //validation for last name
    if(signupdetail.last_name.length<3){
setlast_namecolor("error")
setlast_namehelpercolor("error")
setlast_namehelpertext("Last name should be of more than 3 words")
    }
    else{
   setlast_namecolor("secondary")
   setlast_namehelpercolor("success")
   setlast_namehelpertext("")
    }
  };

  /// validation for next page button of first page
  const next = () => {
    setsignupdetails({ ...signupdetail, email: bindings.value });
    console.log(signupdetail);

    if (signupdetail.first_name.length < 3) {
      showAlert("OOPs!, First Name must have 3 words", "danger");
    } else if (signupdetail.last_name.length < 3) {
      showAlert("OOPs!, Last Name must have 3 words", "danger");
    } else if (signupdetail.phone_number.length!= 10) {
      showAlert("OOPs!, Phone Number Must be of 10 digits", "danger");
    } else if (signupdetail.password.length < 8) {
      showAlert("OOPs!, Password must have 8 digits", "danger");
    } else if (signupdetail.password != signupdetail.confirm_password) {
      showAlert("OOPs!, Password and Confirm password must be same", "danger");
    } else {
      console.log(signupdetail);
      document
        .getElementById("signup_first_component")
        .setAttribute("class", "disapear_component");
      setTimeout(() => {
        setsignuppage(1);
      }, 350);
    }
  };

  //second

  const second_prev = () => {
    document
      .getElementById("secondpage")
      .setAttribute("class", "disapear_component");
    setTimeout(() => {
      setsignuppage(0);
    }, 350);
  };
  const second_next = () => {
    setsignupdetails({...signupdetail,gender:document.querySelector("input[type='radio'][name=inlineRadioOptions]:checked").value})
     
    setsignupdetails({...signupdetail,date_of_birth:document.getElementById("date_of_birth").value})
    if(signupdetail.address.length<1){
      showAlert("Address can't be blank","danger")
   }
   else if(signupdetail.faourite_food.length<1){
    showAlert("Faourite Food can't be blank","danger")
 }
 else if(signupdetail.state.length<1){
  showAlert("State can't be blank","danger")
}
else if(signupdetail.city.length<1){
showAlert("City can't be blank","danger")
}
else if(signupdetail.pincode.length<1 || signupdetail.pincode.length>6 ){
showAlert("Pincode must be of 6 digits","danger")
}
else{
  document
  .getElementById("secondpage")
  .setAttribute("class", "disapear_component");
setTimeout(() => {
  setsignuppage(2);
}, 350);
}

      
     
    
   

  };
  const changesecond=(e)=>{
   setsignupdetails({...signupdetail,[e.target.name]:e.target.value})
   console.log(e.target.value)

  }

  //for third page
const changethird=(e)=>{
  setsignupdetails({...signupdetail,[e.target.name]:e.target.value})
}
//onclick prev button of third page
  const third_prev = () => {
    document
      .getElementById("thirdpage")
      .setAttribute("class", "disapear_component");
    setTimeout(() => {
      setsignuppage(1);
    }, 350);
 
  };
  //sign up api call
  let Navigate = useNavigate();
  const signupapi = async() => {
    setProgress(10)
      
       const response = await fetch(`http://localhost:5000/api/auth/createUser`, {
         method: 'POST',
         mode: "cors",
         headers: {
           'Content-Type': 'application/json',
          
   
          
         },
         body: JSON.stringify(signupdetail)
        
     
       });
    setProgress(50)
       let signupresult= await response.json();
    
     
       if(response.status !== 400){
         setProgress(70)
       
      
         
        
         setProgress(100)
   
           Navigate("/login")
           showAlert("Your had successfully Signed Up","success")
      
        
       
   
       }
       if(response.status=== 400){
         setProgress(100)
         showAlert(signupresult.error,"danger")
       }
      
     
   
     };
  //onclick of skip button of third Page
  const signup=()=>{
 signupapi();
  }

  return (
    <>
      {signuppage == 2 && (
        <section class="background-radial-gradient overflow-hidden">
          <div
            class="container px-4 py-5 px-md-5 text-center text-lg-start my-5 appear_component"
            id="signup_first_component"
          >
            <div class="row gx-lg-5 align-items-center mb-5">
              <div class="col-lg-5 mb-5 mb-lg-0 position-relative">
                <div class="card singupcard border-success align-items-center box_decrease_size_animation">
                  <div class="card-header singupcardheder b d-flex justify-content-center box_decrease_size_animationforlogin">
                    <h5 className="fw-bold pt-4 text-white"><span className="sign_s">S</span><span className="sign_i">i</span><span className="sign_g">g</span><span className="sign_n">n</span> <span className="sign_u">U</span><span className="sign_p">p</span></h5>
                  </div>
                  <div class="card-body box_decrease_size_animationforlogin ">
                    <form>
                      <div className="row px-2 mt-3 box_decrease_size_animationforlogin mb-1">
                        <Input
                          {...bindings}
                          shadow={false}
                          onClearClick={reset}
                          required
                          color={helper.color}
                          helperColor={helper.color}
                          helperText={helper.text}
                          bordered
                          className="bg-white"
                          rounded
                          type="email"
                          label="Your Email"
                          placeholder="Enter Your Email"
                        />
                      </div>
                      <div className="d-flex justify-content-between pt-2 ">
                        <div className="px-3 box_decrease_size_animationforlogin mb-1">
                          <Input
                            className="bg-white"
                            size="md"
                            bordered
                            rounded
                        
                           helperColor={first_namehelpercolor}
                           helperText={first_namehelpertext}
                           color={first_namecolor}
                            name="first_name"
                            id="first_name"
                            value={signupdetail.first_name}
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
                            helperColor={last_namehelpercolor}
                            helperText={last_namehelpertext}
                            color={last_namecolor}
                            value={signupdetail.last_name}
                            name="last_name"
                            id="last_name"
                            onChange={onchange}
                          
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
                            value={signupdetail.username}
                            contentRight={usernamecontentright}
                            onChange={onchangeusername}
                            helperColor={hlepercolorusername}
                            helperText={helpertextusername}
                            color={usernamecolor}
                            name="username"
                            id="username"
                            placeholder="Enter Your Username"
                            label="Username"
                          />
                        </div>
                        <div className="box_decrease_size_animationforlogin mb-1">
                          <Input
                            className="bg-white"
                           
                            bordered
                            rounded
                            helperColor={phone_numberhelpercolor}
                            helperText={phone_number_helper_text}
                            onChange={onchange}
                            name="phone_number"
                            contentRight={phone_numbercontentright}
                            value={signupdetail.phone_number}
                            id="phone_number"
                            // color="success"
                            color={phone_numbercolor}
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
                      
                            bordered
                            rounded
                            onChange={onchange}
                            // color="warning"
                            color={passwordcolor}
                            
                            name="password"
                            id="password"
                            helperColor={passwordhelpercolor}
                            helperText={passwordhelpertext}
                            value={signupdetail.password}
                            type="password"
                            label="Password"
                            placeholder="Enter Your Password"
                          />
                        </div>
                        <div className="box_decrease_size_animationforlogin mb-1">
                          <Input.Password
                            className="bg-white"
                           
                            bordered
                            rounded
                            helperColor={confirm_passwordhelpercolor}
                            helperText={confirm_passwordhelpercolortext}
                            color={confirm_passwordcolor}

                            onChange={onchange}
                            name="confirm_password"
                            id="confirm_password"
                            value={signupdetail.confirm_password}
                            
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
                          onPress={next}
                        >
                          Next
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mb-5 mb-lg-0" style={{zIndex: 10}}>
       <h1 class="my-5 display-5 fw-bold ls-tight" style={{color: "hsl(218, 81%, 95%)"}}>
         Be The First<br />
         <span style={{color: "hsl(218, 81%, 75%)"}}>Don't Miss this Oportunity</span>
       </h1>
       <p class="mb-4 opacity-70" style={{color: "hsl(218, 81%, 85%)"}}>
       Sign up know to be the first to Know about
        special and Intersting Recipes.
       </p>
     </div>
            </div>
          </div>
        </section>
      )}
      {signuppage == 1 && (
        <section class="background-radial-gradient overflow-hidden">
          <div
            class="container px-4 py-5 px-md-5 text-center text-lg-start my-5 appear_component"
            id="secondpage"
          >
            <div class="d-flex justify-content-center gx-lg-5 align-items-center mb-5">
              <div class="col-lg-5 mb-5 mb-lg-0 position-relative">
                <div class="card singupcard border-success align-items-center box_decrease_size_animation">
                  <div class="card-header singupcardheder b d-flex justify-content-center box_decrease_size_animationforlogin">
                    <h5 className="fw-bold pt-4 text-white">
                      {" "}
                      Additional Informaion
                    </h5>
                  </div>

                  <div class="card-body box_decrease_size_animationforlogin ">
                    <form>
                      <div className=" ps-5 mt-3 box_decrease_size_animationforlogin ">
                        <h4>Gender</h4>
                      <div class="form-check form-check-inline" >
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male" />
  <label class="form-check-label text-primary" for="inlineRadio1" >Male</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female" />
  <label class="form-check-label text-success" for="inlineRadio2">Female</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="tther"  />
  <label class="form-check-label text-warning" for="inlineRadio3">Other</label>
</div>
                      </div>
                      <div className="d-flex justify-content-between pt-2 ">
                        <div className="px-3 box_decrease_size_animationforlogin">
                          <Input
                            className="bg-white fw-bold"
                            size="md"
                            bordered
                            rounded
                            value={signupdetail.date_of_birth}
                            color="secondary"
                            onPress={changesecond}
                            type="date"
                            label="Date Of Birth"
                            name="date_of_birth"
                            id="date_of_birth"
                          />
                        </div>
                        <div className="box_decrease_size_animationforlogin">
                          <Input
                            size="md"
                            bordered
                            className="bg-white fw-bold"
                            rounded
                            value={signupdetail.faourite_food}
                            onChange={changesecond}
                          name="faourite_food"
                          id="faourite_food"
                            color="secondary"
                            placeholder="Enter Your favourite food"
                            label="Favourite food"
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-between pt-2">
                        <div className="px-3 box_decrease_size_animationforlogin">
                          <Textarea
                            value={signupdetail.address}
                            rounded
                            className="fw-bold"
                            bordered
                            onChange={changesecond}
                            color="secondary"
                            label="Address"
                            name="address"
                            id="address"
                            placeholder="Enter Your Address"
                          />
                        </div>
                        <div className="">
                          <Input
                            className="bg-white box_decrease_size_animationforlogin fw-bold "
                            onChange={changesecond}
                            bordered
                            value={signupdetail.city}
                            rounded
                            color="success"
                            type="text"
                            name="city"
                            id="city"
                            label="City"
                            placeholder="Enter Your city"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between pt-2">
                        <div className="px-3 box_decrease_size_animationforlogin">
                          <Input
                            className="bg-white fw-bold"
                            onChange={changesecond}
                            bordered
                            value={signupdetail.state}
                            rounded
                            color="warning"
                            type="text"
                            name="state"
                            id="state"
                            label="State"
                            placeholder="Enter Your State"
                          />
                        </div>
                        <div className="box_decrease_size_animationforlogin">
                          <Input
                            className="bg-white fw-bold"
                            onChange={changesecond}
                            bordered
                            value={signupdetail.pincode}
                            rounded
                            color="warning"
                            type="Phone Number"
                            label="Pincode"
                            name="pincode"
                            id="pincode"
                            placeholder="Enter Your Pincode"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-around mt-3 pt-2 mb-4">
                        <Button
                          color="warning"
                          id="second-first"
                          auto
                          onPress={second_prev}
                          className="box_decrease_size_animationforlogin fw-bold"
                        >
                          Prev
                        </Button>
                        <Button
                          color="success"
                          auto
                          onPress={second_next}
                          className="box_decrease_size_animationforlogin fw-bold"
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
      )}
      {signuppage == 0 && (
        <section class="background-radial-gradient overflow-hidden">
          <div
            class="container px-4 py-5 px-md-5 text-center text-lg-start my-5 appear_component"
            id="thirdpage"
          >
            <div class="d-flex justify-content-end gx-lg-5 align-items-center mb-5">
            <div class="col-lg-6 mb-5 mb-lg-0" style={{zIndex: 10}}>
       <h1 class="my-5 display-5 fw-bold ls-tight" style={{color: "hsl(218, 81%, 95%)"}}>
         How to Cook  <br />
         <span style={{color: "hsl(218, 81%, 75%)"}}> Any thing you want  </span>
       </h1>
       <p class="mb-4 opacity-70" style={{color: "hsl(218, 81%, 85%)"}}>
        Would You like to Explore the foodie in you.
       </p>
     </div>
              <div class="col-lg-5 mb-5 mb-lg-0 position-relative">
                <div class="card singupcard border-success align-items-center box_decrease_size_animation pb-3">
                  <div class="card-header singupcardheder b d-flex justify-content-center box_decrease_size_animationforlogin">
                    <h5 className="fw-bold pt-4 text-white">
                      {" "}
                      Socail Networks
                    </h5>
                  </div>

                  <div class="card-body box_decrease_size_animationforlogin ">
                    <form>
                      <div className="d-flex justify-content-between pt-2 ">
                        <Input
                          className="box_decrease_size_animationforlogin bg-white"
                          bordered
                          onChange={changethird}
                          rounded
                          value={signupdetail.web}
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
                          onChange={changethird}
                          rounded
                          color="primary"
                          value={signupdetail.git}
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
                          onChange={changethird}
                          rounded
                          value={signupdetail.facebook}
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
                          onChange={changethird}
                          rounded
                          value={signupdetail.twitter}
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
                          color="success"
                          auto
                          onPress={third_prev}
                          className="box_decrease_size_animationforlogin fw-bold"
                        >
                          Prev
                        </Button>
                        <Button
                          color="success"
                          auto
                          onPress={signup}
                          className="box_decrease_size_animationforlogin fw-bold"
                        >
                          Skip
                        </Button>
                        <Button
                          color="primary"
                          auto
                          onPress={signup}
                          className="box_decrease_size_animationforlogin fw-bold"
                        >
                          Sign Up
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

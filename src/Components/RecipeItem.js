import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import './RecipeItem.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import RecipeContext from "../Context/RecipeContext";

import Tooltip from 'react-bootstrap/Tooltip';
import { useEffect } from "react";

export default function RecipeItem(props) {
//to captalize first character

const firstCapital =(message)=>{
  let lower =message.toLowerCase();
  return ((lower.charAt(0).toUpperCase()) + lower.slice(1))
}



const [heart,setHeart]=useState("regular")
  const context = useContext(RecipeContext)
  const {deleteRecipe,LikeRecipe,getUser,userData,UnLikeRecipe} = context
 
const [star,setstar]=useState(0)
  let location = useLocation();
useEffect(()=>{
 
    getUser() 
 


},[])
const settingheart=()=>{
  if(userData?.user?.Liked_Recipe?.includes(props.id)){
setHeart("solid")

}
else{
  setHeart("regular")
}}
  React.useEffect(() => {
   
  }, [location])

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Share</Popover.Header>
      <Popover.Body>
        <div className="d-flex me-4 justify-content-between">
      <i className="fa-brands fa-whatsapp me-4 fs-2 fw-bold text-success"></i>
      <i className="fa-brands fa-instagram me-4  fs-2 fw-bold text-danger"></i>
      <i className="fa-brands fa-facebook me-4  fs-2 fw-bold text-primary"></i>
      <i className="fa-brands fa-snapchat fs-2 me-4  fw-bold text-warning  "></i></div>
      </Popover.Body>
    </Popover>
  );

 
   var deg =180;
const onclickRotate=()=>{
 

document.getElementById(`${props.id}`).style.transform=`rotateY(${deg}deg)`;

deg=(deg===180)?0:180
}
  return (
    <>
    
 
<div className="scene" onLoad={settingheart} >
  <div className="recipecard card border-success " id={`${props.id}`} style={{Width: "18rem"}}>
  
    <div className="face front">
    
  <img src={props.ImageUrl} className="card-img-top recipeitemimageopacity" alt="..."/>
  <div className="card-body">
  <h6 className="card-title text-warning"> {props.source}</h6>
  <h4 className="card-subtitle mb-2 text-dark fw-bold">{props.title}</h4>
    <p className="card-text text-dark"> {props.Ingridiants}</p>
    <div className="card-text text-dark d-flex justify-content-between">
      <p>
       <i className={`fa-${star>0?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(1)}}></i>
       <i className={`fa-${star>1?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(2)}}></i>
       <i className={`fa-${star>2?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(3)}}></i>
       <i className={`fa-${star>3?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(4)}}></i>
       <i className={`fa-${star>4?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(5)}}></i></p>
       <i className="fa-solid fa-right-left" onClick={onclickRotate}></i></div>
  </div>
  <ul className="list-group list-group-flush ">
    <li className="list-group-item d-flex justify-content-between">
      <i className="fa-solid fs-5 fa-comment"></i>
      <i className={`fa-${heart} fa-heart fs-5 recipeitemlike text-danger`} onClick={()=>{ 
        if(heart==="regular"){
        LikeRecipe(props.id)
        setHeart("solid")
      }
      if(heart=="solid"){
        UnLikeRecipe(props.id)
        setHeart("regular")
      }
       }
      } ></i>
       <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <i className="fa-solid fs-5 fa-share-nodes"></i>
  </OverlayTrigger>
      </li>
    
   
  </ul>
  <div className="card-img-overlay">
    <div className="row">
      <div className="col-md-2">
      <p className="badge recipeitembadgeopacity text-success fw-bold  fs-5 m-1">{props.health_labels[1]}</p>
      </div>
  
    </div>
    <div className="row">
      <div className="col-md-2">
      <p className="badge recipeitembadgeopacity text-success fs-5 m-1">{props.health_labels[2]}</p>
      </div>
  
    </div>
     <div className="row">
      <div className="col-md-2">
      <p className="badge recipeitembadgeopacity text-success  fs-5 m-1">{props.health_labels[3]}</p>
      </div>
  
    </div>
   
  </div>

  <div className="card-footer">
  <i className="fa-regular me-2 fa-clock"></i>{(new Date(props.date).toLocaleString())}
  </div>
</div>

  <div className="back ">

 
  {/* <div className=" d-flex justify-content-center align-items-center">
             
             <div className=" mt-2">

              

              <div className="user text-center">

                <div className="profile">

                  <img src="https://i.imgur.com/JgYD2nQ.jpg" className="rounded-circle" width="150"/>
                  
                </div>

              </div>


              <div className="mt-5 text-center">

                <h4 className="mb-0">Benjamin Tims</h4>
                <span className="text-muted d-block mb-2">Los Angles</span>

               


                <div className="d-flex justify-content-between align-items-center mt-4 px-4">

                  <div className="stats">
                    <h6 className="mb-0">Followers</h6>
                    <span>8,797</span>

                  </div>


                  <div className="stats">
                    <h6 className="mb-0">Projects</h6>
                    <span>142</span>

                  </div>


                  <div className="stats">
                    <h6 className="mb-0">Ranks</h6>
                    <span>129</span>

                  </div>
                  
                </div>
                
              </div>
               
             </div>

           </div> */}
  {/* <div className="d-flex justify-content-center align-item-center">
  <div className="profile mt-4">

<img src="https://i.imgur.com/JgYD2nQ.jpg" className="rounded-circle" width="150"/>

</div>

  </div> */}
  {/* <div className="card" >
 
  <img src="https://i.imgur.com/JgYD2nQ.jpg" className="avtar" alt="..."/>

  <div className="card-body">
    <h5 className="card-title fw-bold">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
  </div>
</div> */}
<div className="card testimonial-card pt-4 ">
        <div className="card-up" ></div>
        <div className="avatar mx-auto bg-white">
          <img src={userData?.user?.Profile_Image}
            className="rounded-circle img-fluid" />
        </div>
        <div className="card-body text-center pt-2">
          <h3 className="mb-4 fw-bold card-title">{userData?.user?.name}</h3>
   <hr/>
          <ul className="list-group list-group-flush">
  
    <div className="card-text text-dark mb-4 d-flex justify-content-between">
    <p>
      
    <i className={`fa-${star>0?"solid":"regular"} text-danger recipeitemstar fa-star`} onClick={()=>{setstar(1)}}></i>
       <i className={`fa-${star>1?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(2)}}></i>
       <i className={`fa-${star>2?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(3)}}></i>
       <i className={`fa-${star>3?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(4)}}></i>
       <i className={`fa-${star>4?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(5)}}></i></p>
       <i className="fa-solid fa-right-left " onClick={onclickRotate}></i></div>
       
       <div className="card-text text-dark d-flex justify-content-evenly">
       <h6 className="text-dark">{userData?.user?.Liked_Recipe?.length}</h6><h6 className="text-dark">{userData?.totalResults}</h6><p>{userData?.user?.Total_Comments}</p>
      </div>
      <p className="card-text text-dark d-flex justify-content-evenly">
      <i className="fa-heart fa-solid fs-4 text-danger"></i>
      <i className="fa-solid fa-utensils fs-4 "></i>
      <i className="fa-solid fs-4 fa-comment"></i>
      </p>
       <p className="card-text text-dark d-flex justify-content-around">
       <i className="fa-brands fa-whatsapp  fs-2 fw-bold text-success"></i>
      <i className="fa-brands fa-instagram   fs-2 fw-bold text-danger"></i>
      <i className="fa-brands fa-facebook   fs-2 fw-bold text-primary"></i>
        </p>
 
 
   
  </ul>
        </div>
      </div>
 


    </div>       
        
        
        
        
  
   
       

  </div>
</div>









    </>
  );
}

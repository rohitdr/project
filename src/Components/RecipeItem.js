import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import './RecipeItem.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import RecipeContext from "../Context/RecipeContext";

import Tooltip from 'react-bootstrap/Tooltip';

export default function RecipeItem(props) {
const [heart,setHeart]=useState("regular")
  const context = useContext(RecipeContext)
  const {deleteRecipe} = context
const [star,setstar]=useState(0)
  let location = useLocation();

  React.useEffect(() => {
   
  }, [location])

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Share</Popover.Header>
      <Popover.Body>
        <div className="d-flex me-4 justify-content-between">
      <i class="fa-brands fa-whatsapp me-4 fs-2 fw-bold text-success"></i>
      <i class="fa-brands fa-instagram me-4  fs-2 fw-bold text-danger"></i>
      <i class="fa-brands fa-facebook me-4  fs-2 fw-bold text-primary"></i>
      <i class="fa-brands fa-snapchat fs-2 me-4  fw-bold text-warning  "></i></div>
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
    
 
<div class="scene">
  <div class="recipecard card border-success " id={`${props.id}`} style={{Width: "18rem"}}>
  
    <div class="face front">
    
  <img src={props.ImageUrl} class="card-img-top recipeitemimageopacity" alt="..."/>
  <div class="card-body">
  <h6 class="card-title text-warning"> {props.source}</h6>
  <h4 class="card-subtitle mb-2 text-dark fw-bold">{props.title}</h4>
    <p class="card-text text-dark"> {props.Ingridiants}</p>
    <p class="card-text text-dark d-flex justify-content-between">
      <div>
       <i class={`fa-${star>0?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(1)}}></i>
       <i class={`fa-${star>1?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(2)}}></i>
       <i class={`fa-${star>2?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(3)}}></i>
       <i class={`fa-${star>3?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(4)}}></i>
       <i class={`fa-${star>4?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(5)}}></i></div>
       <i class="fa-solid fa-right-left" onClick={onclickRotate}></i></p>
  </div>
  <ul class="list-group list-group-flush ">
    <li class="list-group-item d-flex justify-content-between">
      <i class="fa-solid fs-5 fa-comment"></i>
      <i class={`fa-${heart} fa-heart fs-5 text-danger`} onClick={()=>{(heart==="regular")?setHeart("solid"):setHeart("regular")}} ></i>
       <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <i class="fa-solid fs-5 fa-share-nodes"></i>
  </OverlayTrigger>
      </li>
    
   
  </ul>
  <div class="card-img-overlay">
    <div className="row">
      <div className="col-md-2">
      <p class="badge recipeitembadgeopacity text-success fw-bold  fs-5 m-1">{props.health_labels[1]}</p>
      </div>
  
    </div>
    <div className="row">
      <div className="col-md-2">
      <p class="badge recipeitembadgeopacity text-success fs-5 m-1">{props.health_labels[2]}</p>
      </div>
  
    </div>
     <div className="row">
      <div className="col-md-2">
      <p class="badge recipeitembadgeopacity text-success  fs-5 m-1">{props.health_labels[3]}</p>
      </div>
  
    </div>
   
  </div>

  <div class="card-footer">
  <i class="fa-regular me-2 fa-clock"></i>{(new Date(props.date).toLocaleString())}
  </div>
</div>

  <div className="back ">

 
  {/* <div class=" d-flex justify-content-center align-items-center">
             
             <div class=" mt-2">

              

              <div class="user text-center">

                <div class="profile">

                  <img src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="150"/>
                  
                </div>

              </div>


              <div class="mt-5 text-center">

                <h4 class="mb-0">Benjamin Tims</h4>
                <span class="text-muted d-block mb-2">Los Angles</span>

               


                <div class="d-flex justify-content-between align-items-center mt-4 px-4">

                  <div class="stats">
                    <h6 class="mb-0">Followers</h6>
                    <span>8,797</span>

                  </div>


                  <div class="stats">
                    <h6 class="mb-0">Projects</h6>
                    <span>142</span>

                  </div>


                  <div class="stats">
                    <h6 class="mb-0">Ranks</h6>
                    <span>129</span>

                  </div>
                  
                </div>
                
              </div>
               
             </div>

           </div> */}
  {/* <div className="d-flex justify-content-center align-item-center">
  <div class="profile mt-4">

<img src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="150"/>

</div>

  </div> */}
  {/* <div class="card" >
 
  <img src="https://i.imgur.com/JgYD2nQ.jpg" class="avtar" alt="..."/>

  <div class="card-body">
    <h5 class="card-title fw-bold">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
  </div>
</div> */}
<div class="card testimonial-card pt-4 ">
        <div class="card-up" ></div>
        <div class="avatar mx-auto bg-white">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
            class="rounded-circle img-fluid" />
        </div>
        <div class="card-body text-center pt-2">
          <h3 class="mb-4 fw-bold card-title">Maria Smantha</h3>
   <hr/>
          <ul class="list-group list-group-flush">
  
    <p class="card-text text-dark mb-4 d-flex justify-content-between">
    <div>
      
    <i class={`fa-${star>0?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(1)}}></i>
       <i class={`fa-${star>1?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(2)}}></i>
       <i class={`fa-${star>2?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(3)}}></i>
       <i class={`fa-${star>3?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(4)}}></i>
       <i class={`fa-${star>4?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(5)}}></i></div>
       <i class="fa-solid fa-right-left " onClick={onclickRotate}></i></p>
       <p class="card-text text-dark d-flex justify-content-evenly">
      <i className="fa-heart fa-solid fs-5 text-danger"></i>
      <i class="fa-solid fa-utensils fs-5 "></i>
      <i class="fa-solid fs-5 fa-comment"></i>
      </p>
       <p class="card-text text-dark d-flex justify-content-evenly">
      <p>jkla</p><p>dfs</p><p>asdf</p>
      </p>
      
       <p class="card-text text-dark d-flex justify-content-around">
       <i class="fa-brands fa-whatsapp  fs-2 fw-bold text-success"></i>
      <i class="fa-brands fa-instagram   fs-2 fw-bold text-danger"></i>
      <i class="fa-brands fa-facebook   fs-2 fw-bold text-primary"></i>
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

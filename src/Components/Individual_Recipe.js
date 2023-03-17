import React, { useContext, useEffect, useState } from 'react'
import './Individiual_recipe.css'
import { Link, useLocation,useNavigate } from 'react-router-dom';
import RecipeContext from '../Context/RecipeContext';

import { Modal, Image, Text } from "@nextui-org/react";
export default function Individual_Recipe() {
  const context = useContext(RecipeContext)
  const {state} = useLocation();
 const location = useLocation();
  const {RecipeItemid}=state
let Navigate=useNavigate();
const [pageno , setpageno]=useState(0)
 
const {
  CurrentRecipeItem,
  CurrentRecipeItemid,
  setProgress,
  getUser,
  userData,
  setLoading,RecipeBYId
} = context;

  useEffect(()=>{
    getUser();
    RecipeBYId(RecipeItemid)
    },[RecipeItemid,CurrentRecipeItem?.recipe?.Comments])


  const discription_star=6;
  //comments functons 
  const [visible, setVisible] = useState(false);
  const [visiblerepeted, setvisiblerepeted] = useState(false);
  const [star, setstar] = useState(0);



 

  const Comment = async (comment, rating) => {
    setProgress(30);
    console.log(CurrentRecipeItemid);
    const response = await fetch(
      "http://localhost:5000/api/recipe/commentreicpe",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": sessionStorage.getItem("auth-token"),
          'auth-token':sessionStorage.getItem("auth-token")?sessionStorage.getItem("auth-token"):localStorage.getItem("auth-token")
        },
        body: JSON.stringify({
          id: RecipeItemid,
          comment: {
            username: userData?.user?.username,
            Profileimage: userData?.user?.Profile_Image,
            comment: comment,
            rating: rating,
          },
        }),
      }
    );
    setProgress(50);
    let result = await response.json();
    if (response.status == 404) {
      setProgress(100);
      setvisiblerepeted(true);
      setTimeout(() => {
        setvisiblerepeted(false);
      }, 4000);
    } else {
      setProgress(100);
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 4000);
    }
  };

  const submitcomment = () => {
    let comment = document.getElementById("validationTextareaforcomment").value;
    let rating = star;
    Comment(comment, rating);
  };
  return (
<div className='min-vh-100'>
    {CurrentRecipeItem.recipe && CurrentRecipeItem.recipe.map((element)=>{
    return <div style={{backgroundColor:" #edf1f5"}} key={element._id}>
     <div class="container pt-4" id="product-section" >
<div class="row">
<div class="col-md-6">
<img
src={element.image}
alt="Kodak Brownie Flash B Camera"
class="image-responsive box_decrease_size_animation"
height="400px"
width="100%"
/>
</div>
<div class="col-md-6">
<div class="col-md-12 ">
<h1 >{element.label}</h1>
</div>
<div className="row">
<div class="col-md-12">
<span class="label label-primary">Uploaded On </span>
<span class="monospaced">{(new Date(element.date).toLocaleString())}</span>
</div> </div><div className="row">
<div class="col-md-12 " >
<p class="description">
Uploaded By Rohit
</p>

</div> 
</div>
<div class="row">
<div class="col-md-3">

 <i className={`fa-${discription_star>0?"solid":"regular"} text-danger fa-star`} ></i>
 <i className={`fa-${discription_star>1?"solid":"regular"} text-danger fa-star`} ></i>
 <i className={`fa-${discription_star>2?"solid":"regular"} text-danger fa-star`} ></i>
 <i className={`fa-${discription_star>3?"solid":"regular"} text-danger fa-star`} ></i>
 <i className={`fa-${discription_star>4?"solid":"regular"} text-danger fa-star`} ></i>
 <span class="label label-success">61</span>
 
</div>
<div class="col-md-3">
<span class="monospaced"><i class="fa-solid text-danger mx-2 fa-heart"></i>{element.Likes}</span>
</div>
<div class="col-md-3">
<span class="monospaced">Write a Review</span>
</div>

</div>
<div class="col-md-12">
<p class="description">
{element.dietLabels.map((element)=>{ return <span class="badge  bg-dark mx-2" style={{color:"white"}} key={element}>{element}</span>})}

</p>
</div> 
<div class="col-md-12">
<p class="description">
{element.cautions.map((element)=>{ return <span class="badge mx-2 " style={{backgroundColor:"red"}} key={element}>{element}</span>})}
</p>
</div> 
<div class="col-md-12">
<p class="description">
{element.healthLabels.map((element)=>{ return <span class="badge mx-2  bg-info" key={element}>{element}</span>})}
</p>
</div> 
<div class="col-md-12">
<p class="description">
{element.cuisineType.map((element)=>{ return <span class="badge bg-success" key={element}>{element}</span>})} {element.mealType.map((element)=>{ return <span class="badge bg-primary" key={element}>{element}</span>})} {element.dishType.map((element)=>{ return <span class="badge bg-warning" key={element}>{element}</span>})}
</p>
</div> 














 

</div>

<div className="row">
<section >
          <div class="container pt-5">
<nav class="nav profile-nav-borders ">
  <a class={`nav-link   ${pageno==0?"active":""}  `} onClick={()=>{setpageno(0)}} >Description</a>
  <a class={`nav-link ${pageno==1?"active":""} `}  onClick={()=>{setpageno(1)}}>Comments& Ratings</a>

  <a class={`nav-link ${pageno==2?"active":""} `} onClick={()=>{setpageno(2)}}>Ingredients</a>
<a class={`nav-link ${pageno==3?"active":""} `}  onClick={()=>{setpageno(3)}}>Nutrients</a>
  
</nav>

<hr class="mt-0 mb-2"/> 
{/* recipe description */}
 { pageno ==0 &&<div className=''>
      

   {  CurrentRecipeItem?.recipe && CurrentRecipeItem?.recipe.map((element)=>{
    return <div style={{backgroundColor:" #edf1f5"}} className="pb-4" key={element._id}>
           <div class="container pt-4 " id="product-section" >
           <div className="row">
              <div className="col-md-6">
              <div class="accordion box_decrease_size_animation" id="accordionExample">
           
           <div class="accordion-item">
             <h2 class="accordion-header" id="headingOne">
               <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               DietLabels
               </button>
             </h2>
             <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
               <div class="accordion-body">
                 <strong>{element.dietLabels.map((element)=>{ return <span class="badge  bg-dark mx-2" key={element} style={{color:"white"}}>{element}</span>})}
</strong> 
               </div>
             </div>
           </div>
           <div class="accordion-item">
             <h2 class="accordion-header" id="headingTwo">
               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               healthLabels
               </button>
             </h2>
             <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
               <div class="accordion-body">
                 <strong>{element.healthLabels.map((element)=>{ return <span class="badge mx-2  bg-info" key={element} >{element}</span>})}
</strong> 
               </div>
             </div>
           </div>
          
           
           <div class="accordion-item">
             <h2 class="accordion-header" id="headingthired">
               <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethird" aria-expanded="true" aria-controls="collapsethird">
             Cuisine Type
               </button>
             </h2>
             <div id="collapsethird" class="accordion-collapse collapse show" aria-labelledby="headingthird" data-bs-parent="#accordionExample">
               <div class="accordion-body">
                 <strong>{element.cuisineType.map((element)=>{ return <span class="badge bg-success" key={element} >{element}</span>})} 
</strong> 
               </div>
             </div>
           </div>
           <div class="accordion-item">
             <h2 class="accordion-header" id="headingfour">
               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
          Cautions
               </button>
             </h2>
             <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
               <div class="accordion-body">
                 <strong>{element.cautions.map((element)=>{ return <span class="badge mx-2 " style={{backgroundColor:"red"}} key={element} >{element}</span>})}
</strong> 
               </div>
            
           </div>
           
         </div>
           
         </div>
              </div>
            
            
         <div className="col-md-6">
         <ul class="list-group box_decrease_size_animation">
         <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold mb-0">Instructions</div>

    </div>
  
  </li>
              {element?.instruction?.map((element)=>{ return   <li class="list-group-item d-flex justify-content-between align-items-center mb-0" key={element} >{element}</li>})}
              </ul>
              </div>    



            </div>
 


           </div>
          </div>  })} 
    </div>}
{/* recipe description */}

  {/* recipe comments */}
  { pageno == 1 && <div>
      <div style={{ backgroundColor: " #edf1f5" }} className="pb-4">
        <div class="container pt-4 " id="product-section">
          <div class="container ">
            <div class="row">
              <div class="col-lg-12">
                <div class="card ">
                  <div class="row">
                    <div class="col-sm-12 col-lg-4">
                      <div class="card-body">
                        <h4 class="card-title">Reviews</h4>
                        <h5 class="card-subtitleratingview">
                          Overview of Review
                        </h5>
                        <h2 class="font-medium mt-5 mb-0">25426</h2>
                        <span class="text-muted">
                          This month we got 346 New Reviews
                        </span>
                        <div class="image-box mt-4 mb-4">
                          <a
                            href="#"
                            class="mr-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Simmons"
                          >
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar1.png"
                              class="rounded-circle"
                              width="45"
                              alt="user"
                            />
                          </a>
                          <a
                            href="#"
                            class="mr-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Fitz"
                          >
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar2.png"
                              class="rounded-circle"
                              width="45"
                              alt="user"
                            />
                          </a>
                          <a
                            href="#"
                            class="mr-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Phil"
                          >
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar3.png"
                              class="rounded-circle"
                              width="45"
                              alt="user"
                            />
                          </a>
                          <a
                            href="#"
                            class="mr-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Melinda"
                          >
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar4.png"
                              class="rounded-circle"
                              width="45"
                              alt="user"
                            />
                          </a>
                        </div>
                        <a
                          href="javascript:void(0)"
                          class="btn btn-lg btn-info waves-effect waves-light"
                        >
                          Checkout All Reviews
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-12 col-lg-8 border-left">
                      <div class="card-body">
                        <ul class="list-style-none">
                          <li class="mt-4">
                            <div class="d-flex align-items-center">
                              <i class="fa fa-smile-o display-5ratingview text-muted"></i>
                              <div class="ml-2">
                                <h5 class="mb-0">Positive Reviews</h5>
                                <span class="text-muted">25547 Reviews</span>
                              </div>
                            </div>
                            <div class="progressratingview">
                              <div
                                class="progress-barratingview bg-success"
                                role="progressbar"
                                style={{ width: "47%" }}
                                aria-valuenow="47"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>
                          <li class="mt-5">
                            <div class="d-flex align-items-center">
                              <i class="fa fa-frown-o display-5ratingview text-muted"></i>
                              <div class="ml-2">
                                <h5 class="mb-0">Negative Reviews</h5>
                                <span class="text-muted">5547 Reviews</span>
                              </div>
                            </div>
                            <div class="progressratingview">
                              <div
                                class="progress-barratingview bg-danger"
                                role="progressbar"
                                style={{ width: "33%" }}
                                aria-valuenow="33"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>
                          <li class="mt-5 mb-5">
                            <div class="d-flex align-items-center">
                              <i class="fa fa-meh-o display-5ratingview text-muted"></i>
                              <div class="ml-2">
                                <h5 class="mb-0">Neutral Reviews</h5>
                                <span class="text-muted">547 Reviews</span>
                              </div>
                            </div>
                            <div class="progressratingview">
                              <div
                                class="progress-barratingview bg-info"
                                role="progressbar"
                                style={{ width: "20%" }}
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>

          {/* // Reviews */}

          <div class="bg-white rounded shadow-sm p-4 my-4 restaurant-detailed-ratings-and-reviews ">
            <a href="#" class="btn btn-outline-primary btn-sm float-right">
              Top Rated
            </a>
            <h5 class="mb-1">All Ratings and Reviews</h5>
            <div class="reviews-members pt-4 pb-4 ">
            {CurrentRecipeItem.recipe && CurrentRecipeItem.recipe.map((element)=>{
               return element.Comments.map((ele)=>{
                return <><div class="media row" key={ele._id}>
                <div className="col-md-1">
                  <a href="#">
                    <img
                      alt="Generic placeholder image pb-1"
                      src={ele.Profileimage?ele.Profileimage:"http://bootdey.com/img/Content/avatar/avatar6.png"}
                      class="mr-3 rounded-pill"
                    />
                  </a>
                </div>
                <div className="col-md-11">
                  <div class="media-body">
                    <div class="reviews-members-header">
                      <h6 class="">
                        <p class="text-black mb-0 ">{ele.username}</p>
                      </h6>
                      <p class="text-gray mx-2">{new Date(ele.date).toLocaleString()}</p>
                    </div>
                    <div class="reviews-members-body">
                    <span class="star-rating">
                <i
                  className={`fa-${
                    ele.rating > 0 ? "solid" : "regular"
                  } text-danger fa-star`}
                  
                ></i>
                <i
                  className={`fa-${
                    ele.rating > 1 ? "solid" : "regular"
                  } text-danger fa-star`}
                  
                ></i>
                <i
                  className={`fa-${
                    ele.rating > 2 ? "solid" : "regular"
                  } text-danger fa-star`}
                  
                ></i>
                <i
                  className={`fa-${
                    ele.rating > 3 ? "solid" : "regular"
                  } text-danger fa-star`}
                
                ></i>
                <i
                  className={`fa-${
                    ele.rating > 4 ? "solid" : "regular"
                  } text-danger fa-star`}
                 
                ></i>
              </span>
                      <p>
                     {ele.comment}
                      </p>
                    </div>
                  </div>
                </div><hr/>
              </div>  </>
                })
               })}
             
            </div>
         
            {/* <a class="text-center w-100 d-block mt-4 font-weight-bold" href="#">
              See All Reviews
            </a> */}
          </div>

          {/* leave a comment */}
          <div class="bg-white rounded shadow-sm p-4  rating-review-select-page">
            <h5 class="mb-4">Leave Comment</h5>
            <p class="mb-2">Rate the Place</p>
            <div class="mb-4">
              <span class="star-rating">
                <i
                  className={`fa-${
                    star > 0 ? "solid" : "regular"
                  } text-danger fa-star`}
                  onClick={() => {
                    setstar(1);
                  }}
                ></i>
                <i
                  className={`fa-${
                    star > 1 ? "solid" : "regular"
                  } text-danger fa-star`}
                  onClick={() => {
                    setstar(2);
                  }}
                ></i>
                <i
                  className={`fa-${
                    star > 2 ? "solid" : "regular"
                  } text-danger fa-star`}
                  onClick={() => {
                    setstar(3);
                  }}
                ></i>
                <i
                  className={`fa-${
                    star > 3 ? "solid" : "regular"
                  } text-danger fa-star`}
                  onClick={() => {
                    setstar(4);
                  }}
                ></i>
                <i
                  className={`fa-${
                    star > 4 ? "solid" : "regular"
                  } text-danger fa-star`}
                  onClick={() => {
                    setstar(5);
                  }}
                ></i>
              </span>
            </div>

            <form class="was-validated">
              <div class="mb-3">
                <label for="validationTextarea" class="form-label">
                  Enter Your Comment
                </label>
                <textarea
                  class="form-control"
                  id="validationTextareaforcomment"
                  placeholder="Please enter Your Comment"
                  required
                ></textarea>
                <div class="invalid-feedback">Please enter a Comment.</div>
              </div>
              <div class="form-group py-2">
                <button
                  class="btn btn-primary btn-sm"
                  type="button"
                  onClick={submitcomment}
                >
                  {" "}
                  Submit Comment{" "}
                </button>
              </div>
            </form>
          </div>
        </div>{" "}
      </div>

      {/* //modal for confirmation of successful comment */}
      <Modal noPadding open={visible} blur>
        <Modal.Header
          css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
        ></Modal.Header>
        <Modal.Body>
          <Image
            showSkeleton
            src="https://media.tenor.com/bXwaPdcTgc8AAAAC/jethalal-funny-dance-tarak-mehta-ka-ooltah-chashmah.gif"
            width={400}
            height={490}
          />
        </Modal.Body>
      </Modal>
      {/* modal for repeted commments */}
      <Modal noPadding open={visiblerepeted} blur>
        <Modal.Header
          css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
        ></Modal.Header>
        <Modal.Body>
          <Image
            showSkeleton
            src="https://media.tenor.com/doK11QWgHskAAAAC/yeh-mauka-baar-baar-nahi-milega-mauka.gif"
            width={400}
            height={490}
          />
        </Modal.Body>
      </Modal>
    </div>}
   {/* recipe comments */}
   {/* {reicpe Ingredients} */}
   {pageno ==2 &&   <div style={{backgroundColor:" #edf1f5"}}>
      <div class="container pt-4 " id="product-section" >
    <div className="row">
 

        {  CurrentRecipeItem.recipe && CurrentRecipeItem?.recipe.map((element)=>{
      return element.ingredients.map((ele)=>{
          return  <div className="col-md-6 pb-4" key={element._id} >
           <div class="card mb-3 box_decrease_size_animation" style={{maxWidth: "540px"}}>
     <div class="row g-0">
       <div class="col-md-4">
         <img src={ele.image} class="img-fluid rounded-start" alt="..."/>
       </div>
       <div class="col-md-8">
         <div class="card-body">
           <h5 class="card-title">{ele.text}</h5>
           <p class="card-text"><small class="text-muted">{Math.ceil(ele.weight)}g</small></p>
         </div>
       </div>
     </div>
   </div>
        
          
          
       </div>     
        })
   })} 
  
    </div>
    </div></div>}
   {/* {reicpe Ingredients} */}
   {/* reicpe Nutrients */}
   {pageno ==3 &&  <div style={{backgroundColor:" #edf1f5"}} className="pb-4">
    <div class="container pt-4 " id="product-section" >
         <section class="intro">
  <div class=" h-100" >
    <div class="mask d-flex align-items-center h-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="card shadow-2-strong box_decrease_size_animation" style={{backgroundColor: "#f5f7fa"}} >
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-borderless mb-0">
                    <thead>
                      <tr>
                        <th scope="col">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault" />
                          </div>
                        </th>
                        <th scope="col">Nutrients</th>
                        <th scope="col">Quantity</th>
                       
                        
                      </tr>
                    </thead>
                    <tbody>

                    {  CurrentRecipeItem?.recipe && CurrentRecipeItem?.recipe.map((element)=>{
                   
                        return <><tr key={element._id}>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.ENERC_KCAL.label}</td>
                        <td>{Math.ceil(element.totalNutrients.ENERC_KCAL.quantity)} {element.totalNutrients.ENERC_KCAL.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.FAT.label}</td>
                        <td>{Math.ceil(element.totalNutrients.FAT.quantity)} {element.totalNutrients.FAT.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.FASAT.label}</td>
                        <td>{Math.ceil(element.totalNutrients.FASAT.quantity)} {element.totalNutrients.FASAT.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.CHOCDF.label}</td>
                        <td>{Math.ceil(element.totalNutrients.CHOCDF.quantity)} {element.totalNutrients.CHOCDF.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.SUGAR.label}</td>
                        <td>{Math.ceil(element.totalNutrients.SUGAR.quantity)} {element.totalNutrients.SUGAR.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.PROCNT.label}</td>
                        <td>{Math.ceil(element.totalNutrients.PROCNT.quantity)} {element.totalNutrients.PROCNT.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.CHOLE.label}</td>
                        <td>{Math.ceil(element.totalNutrients.CHOLE.quantity)} {element.totalNutrients.CHOLE.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.CA.label}</td>
                        <td>{Math.ceil(element.totalNutrients.CA.quantity)} {element.totalNutrients.CA.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.FE.label}</td>
                        <td>{Math.ceil(element.totalNutrients.FE.quantity)} {element.totalNutrients.FE.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.VITA_RAE.label}</td>
                        <td>{Math.ceil(element.totalNutrients.VITA_RAE.quantity)} {element.totalNutrients.VITA_RAE.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.THIA.label}</td>
                        <td>{Math.ceil(element.totalNutrients.THIA.quantity)} {element.totalNutrients.THIA.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.RIBF.label}</td>
                        <td>{Math.ceil(element.totalNutrients.RIBF.quantity)} {element.totalNutrients.RIBF.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.NIA.label}</td>
                        <td>{Math.ceil(element.totalNutrients.NIA.quantity)} {element.totalNutrients.NIA.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.VITB6A.label}</td>
                        <td>{Math.ceil(element.totalNutrients.VITB6A.quantity)} {element.totalNutrients.VITB6A.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.FOLAC.label}</td>
                        <td>{Math.ceil(element.totalNutrients.FOLAC.quantity)} {element.totalNutrients.FOLAC.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.VITB12.label}</td>
                        <td>{Math.ceil(element.totalNutrients.VITB12.quantity)} {element.totalNutrients.VITB12.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.VITD.label}</td>
                        <td>{Math.ceil(element.totalNutrients.VITD.quantity)} {element.totalNutrients.VITD.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.TOCPHA.label}</td>
                        <td>{Math.ceil(element.totalNutrients.TOCPHA.quantity)} {element.totalNutrients.TOCPHA.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.WATER.label}</td>
                        <td>{Math.ceil(element.totalNutrients.WATER.quantity)} {element.totalNutrients.WATER.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      </>
                     
                     
                  
                    }
                    )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>   </div>}
    {/* reicpe Nutrients */}
</div> 


</section>
</div>




</div>
</div>

</div>
    }) }


    </div>
  )
}

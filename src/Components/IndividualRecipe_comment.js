import React, { useContext, useEffect, useState } from 'react'
import RecipeContext from '../Context/RecipeContext'

export default function IndividualRecipe_comment() {
    const context = useContext(RecipeContext)
    const {CurrentRecipeItem,CurrentRecipeItemid,RecipeBYId , loading,getUser,userData,setLoading } = context
    useEffect(()=>{
       
        
    getUser()
     
      })
    const Comment=async(comment,rating)=>{
        setLoading(true)
        console.log(CurrentRecipeItemid)
        const response = await fetch("http://localhost:5000/api/recipe/commentreicpe", {
            method: 'POST',
            mode: "cors",
            headers: {
              'Content-Type': 'application/json',
              'auth-token':sessionStorage.getItem("auth-token")
      
             
            },
            body: JSON.stringify({
              "id":CurrentRecipeItemid,
              "comment":{
                "username":userData?.user?.username,
                "Profileimage":userData?.user?.Profile_Image,
                "comment":comment,
                "rating":rating
                
              }

              
             })
           
        
          });
        
          
        
         setLoading(false)
        
      
      }
       const [star,setstar]=useState(0)
    const submitcomment=()=>{
        
let comment =document.getElementById("validationTextareaforcomment").value
let rating = star
Comment(comment,rating)

    }
  return (
    <div>
        <div style={{backgroundColor:" #edf1f5"}} className="pb-4">
           <div class="container pt-4 " id="product-section" >
  
  
                
       <div class="container ">
    <div class="row">
        <div class="col-lg-12">
            <div class="card box_decrease_size_animation">
                <div class="row">
                    <div class="col-sm-12 col-lg-4">
                        <div class="card-body">
                            <h4 class="card-title">Reviews</h4>
                            <h5 class="card-subtitleratingview">Overview of Review</h5>
                            <h2 class="font-medium mt-5 mb-0">25426</h2>
                            <span class="text-muted">This month we got 346 New Reviews</span>
                            <div class="image-box mt-4 mb-4">
                                <a href="#" class="mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Simmons"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle" width="45" alt="user"/></a>
                                <a href="#" class="mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Fitz"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="rounded-circle" width="45" alt="user"/></a>
                                <a href="#" class="mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Phil"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="rounded-circle" width="45" alt="user"/></a>
                                <a href="#" class="mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Melinda"><img src="https://bootdey.com/img/Content/avatar/avatar4.png" class="rounded-circle" width="45" alt="user"/></a>
                            </div>
                            <a href="javascript:void(0)" class="btn btn-lg btn-info waves-effect waves-light">Checkout All Reviews</a>
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
                                            <span class="text-muted">25547 Reviews</span></div>
                                    </div>
                                    <div class="progressratingview">
                                        <div class="progress-barratingview bg-success" role="progressbar" style={{width: "47%"}} aria-valuenow="47" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </li>
                                <li class="mt-5">
                                    <div class="d-flex align-items-center">
                                        <i class="fa fa-frown-o display-5ratingview text-muted"></i>
                                        <div class="ml-2">
                                            <h5 class="mb-0">Negative Reviews</h5>
                                            <span class="text-muted">5547 Reviews</span></div>
                                    </div>
                                    <div class="progressratingview">
                                        <div class="progress-barratingview bg-danger" role="progressbar" style={{width: "33%"}} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </li>
                                <li class="mt-5 mb-5">
                                    <div class="d-flex align-items-center">
                                        <i class="fa fa-meh-o display-5ratingview text-muted"></i>
                                        <div class="ml-2">
                                            <h5 class="mb-0">Neutral Reviews</h5>
                                            <span class="text-muted">547 Reviews</span></div>
                                    </div>
                                    <div class="progressratingview">
                                        <div class="progress-barratingview bg-info" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> </div>

    {/* // Reviews */}


    <div class="bg-white rounded shadow-sm p-4 my-4 restaurant-detailed-ratings-and-reviews box_decrease_size_animation">
                    <a href="#" class="btn btn-outline-primary btn-sm float-right">Top Rated</a>
                    <h5 class="mb-1">All Ratings and Reviews</h5>
<div class="reviews-members pt-4 pb-4 ">
                        <div class="media row"><div className="col-md-1">
                            <a href="#"><img alt="Generic placeholder image pb-1" src="http://bootdey.com/img/Content/avatar/avatar6.png" class="mr-3 rounded-pill"/></a></div>
                            <div className="col-md-11">
                            <div class="media-body">
                           
                                <div class="reviews-members-header">
                                   
                                    <h6 class=""><p class="text-black mb-0 " >Gurdeep Singh</p></h6>
                                    <p class="text-gray mx-2">Tue, 20 Mar 2020</p>
                                </div>
                                <div class="reviews-members-body">
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                </div>
                               
                            </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <a class="text-center w-100 d-block mt-4 font-weight-bold" href="#">See All Reviews</a>
               </div>


               {/* leave a comment */}
               <div class="bg-white rounded shadow-sm p-4 box_decrease_size_animation rating-review-select-page">
                    <h5 class="mb-4">Leave Comment</h5>
                    <p class="mb-2">Rate the Place</p>
                    <div class="mb-4">
                        <span class="star-rating">
                                              
                        <i className={`fa-${star>0?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(1)}}></i>
       <i className={`fa-${star>1?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(2)}}></i>
       <i className={`fa-${star>2?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(3)}}></i>
       <i className={`fa-${star>3?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(4)}}></i>
       <i className={`fa-${star>4?"solid":"regular"} text-danger fa-star`} onClick={()=>{setstar(5)}}></i>
                                 </span>
                    </div>
                   
                    <form class="was-validated">
  <div class="mb-3">
    <label for="validationTextarea" class="form-label">Enter Your Comment</label>
    <textarea class="form-control" id="validationTextareaforcomment" placeholder="Please enter Your Comment" required></textarea>
    <div class="invalid-feedback">
      Please enter a Comment.
    </div>
  </div>
                        <div class="form-group py-2">
                        <button class="btn btn-primary btn-sm" type="button" onClick={submitcomment}> Submit Comment </button>
                        </div>
                    </form>
                </div>
    </div>    </div>   </div>    



  )
}

import React from 'react'
import './Individiual_recipe.css'
import { Link, useLocation } from 'react-router-dom';

export default function Individual_Recipe() {
  let location = useLocation();

  React.useEffect(() => {
   
  }, [location]);
  const star=6;
  return (
    <div style={{backgroundColor:" #edf1f5"}}>
           <div class="container pt-4" id="product-section" >
  <div class="row">
   <div class="col-md-6">
   <img
  src="https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011.jpg"
  alt="Kodak Brownie Flash B Camera"
  class="image-responsive"
  height="400px"
  width="100%"
 />
   </div>
   <div class="col-md-6">
   <div class="col-md-12">
   <h1 >Kodak 'Brownie' Flash B Camera</h1>
 </div>
 <div className="row">
 <div class="col-md-12">
  <span class="label label-primary">Vintage</span>
  <span class="monospaced">No. 1960140180</span>
  </div> </div><div className="row">
 <div class="col-md-12">
  <p class="description">
   Classic film camera. Uses 620 roll film.
   Has a 2&frac14; x 3&frac14; inch image size.
  </p>
 </div> </div>
 <div class="row">
 <div class="col-md-3">
 
       <i className={`fa-${star>0?"solid":"regular"} text-danger fa-star`} ></i>
       <i className={`fa-${star>1?"solid":"regular"} text-danger fa-star`} ></i>
       <i className={`fa-${star>2?"solid":"regular"} text-danger fa-star`} ></i>
       <i className={`fa-${star>3?"solid":"regular"} text-danger fa-star`} ></i>
       <i className={`fa-${star>4?"solid":"regular"} text-danger fa-star`} ></i>
       <span class="label label-success">61</span>
       
 </div>
 <div class="col-md-3">
  <span class="monospaced">Write a Review</span>
 </div>
 </div>
 
 <div class="row">
 <div class="col-md-12 bottom-rule">
  <h2 class="product-price">$129.00</h2>
 </div>
</div>

<div class="row add-to-cart">
 <div class="col-md-5 product-qty">
  <span class="btn btn-default btn-lg btn-qty">
   <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
  </span>
  <input class="btn btn-default btn-lg btn-qty" value="1" />
  <span class="btn btn-default btn-lg btn-qty">
   <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>
  </span>
 </div>
 <div class="col-md-4">
  <button class="btn btn-lg btn-brand btn-full-width">
   Add to Cart
  </button>
 </div>
</div>

<div class="row">
 <div class="col-md-4 text-center">
  <span class="monospaced">In Stock</span>
 </div>
 <div class="col-md-4 col-md-offset-1 text-center">
  <a class="monospaced" href="#">Add to Shopping List</a>
 </div>
</div>
<div class="row">
 <div class="col-md-12 bottom-rule top-10"></div>
</div>

<div class="row">
 <div class="col-md-12 top-10">
  <p>To order by telephone, <a href="tel:18005551212">please call 1-800-555-1212</a></p>
 </div>
</div>
<span class="btn btn-default btn-lg btn-qty">
 <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
</span>
<div class="row">
 <div class="col-md-4 text-center">
  <span class="monospaced">In Stock</span>
 </div>
 <div class="col-md-4 col-md-offset-1 text-center">
  <a class="monospaced" href="#">Add to Shopping List</a>
 </div>
</div>



       
 
   </div>

   <div className="row">
   <section >
                <div class="container py-5">
   <nav class="nav profile-nav-borders ">
        <Link class={`nav-link ${location.pathname==='/Individual_description'?"active":""}  ms-0`} to="/Individual_description" >Description</Link>
        <Link class={`nav-link ${location.pathname==='/Individual_Comment'?"active":""} `} to="/Individual_Comment" >Comments& Ratings</Link>
   
        <Link class={`nav-link ${location.pathname==='/Individual_Ingredients'?"active":""} `} to="/Individual_Ingredients">Ingredients</Link>
   <Link class={`nav-link ${location.pathname==='/Individaul_Nutrients'?"active":""} `} to="/Individaul_Nutrients">Nutrients</Link>
        
    </nav><hr class="mt-0 mb-2"/>
   


   </div> 
  

   </section>
   </div>
  


  
  </div>
 </div>
    </div>
  )
}

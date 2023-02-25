import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import './searchbar.css'
import NavbarToggler from "./NavbarToggler";
import RecipeContext from "../Context/RecipeContext";
import { useState } from "react";
export default function Searchbar(props) {
  const context = useContext(RecipeContext)
  const {recipe,NameRecipe, setName_to_search,name_to_search,searchRecipe} = context


var num=0;
const changesize=()=>{
 document.getElementById("searchbar-searchbox").style.width="400px"
 
}
var searchentered
var modalsearch

  return (
   
    <>




<nav class="navbar navbar-expand-lg bg-light" id="Searchbar">
  <div class="container-fluid">
    <span class="navbar-brand"><span  class="name text-white"> <NavbarToggler></NavbarToggler>
  
          <span class="R">R</span>
          <span class="e">e</span>
          <span class="c">c</span>
          <span class="i">i</span>
          <span class="p">p</span>
          <span class="e2">e</span>
          <span class="R2">R</span>
          <span class="i2">i</span>
          <span class="o">o</span>
          <span class="t">t</span>
          </span></span>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa-solid fa-magnifying-glass "></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        
         
        </li>
       
      </ul>
      <form class="d-flex text-white">
        <input class="form-control me-2 search_input" id="searchbar-searchbox" type="search" placeholder="Search"  data-bs-toggle="modal" data-bs-target="#exampleModalsearch" aria-label="Search" onClick={changesize} onChange={(e)=>{
          searchentered=e.target.value
          setName_to_search(searchentered)
      
        }}  />
        
      
      <Link  class="btn btn-outline-light" tabindex="-1" to={"/SearchResult"} role="button" onClick={()=>{ console.log("h");  NameRecipe(`/${name_to_search}`); console.log(searchRecipe); console.log("done")}}  aria-disabled="true">Search</Link>
      </form>
    </div>
  </div>
</nav>

<div class="modal " id="exampleModalsearch" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
    <div class="modal-header">
       
        <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body searchmodal ">
    
<div class="input-group input-group-lg mb-3">
  <button class="btn btn-outline-secondary bg-white" type="button" id="button-addon1"><i class="fa-solid fs-4 fa-magnifying-glass"></i></button>
  <input type="text" class="form-control modalsearch " placeholder="" aria-label="Example text with button addon" onChange={(e)=>{NameRecipe(`/${e.target.value}`)}} aria-describedby="button-addon1"/>
</div>
<div>
<ul   className="searchlistbox" id="docsearch-list"> <div className="listcombo">
{searchRecipe.recipe && searchRecipe.recipe.map((element)=>{
   num++
   if(num<10){
    return <><Link to="/SearchResult"   onClick={(e)=>{ NameRecipe(`/${element.label.substring(0,20)}`);     }} className="DocSearch-Hitslink"><li class="DocSearch-Hits fw-bold"> <i class="fa-solid me-2 fa-bars"></i>{element.label}</li></Link></>}}
   )
   }</div></ul></div>
      </div>
     
    </div>
  </div>
</div>
    </>
  );
}

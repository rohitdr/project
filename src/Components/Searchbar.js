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




<nav className="navbar navbar-expand-lg bg-light" id="Searchbar">
  <div className="container-fluid">
    <span className="navbar-brand"><span  className="name text-white"> <NavbarToggler></NavbarToggler>
  
          <span className="R">R</span>
          <span className="e">e</span>
          <span className="c">c</span>
          <span className="i">i</span>
          <span className="p">p</span>
          <span className="e2">e</span>
          <span className="R2">R</span>
          <span className="i2">i</span>
          <span className="o">o</span>
          <span className="t">t</span>
          </span></span>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-magnifying-glass "></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        
         
        </li>
       
      </ul>
      <form className="d-flex text-white">
        <input className="form-control me-2 search_input" id="searchbar-searchbox" type="search" placeholder="Search"  data-bs-toggle="modal" data-bs-target="#exampleModalsearch" aria-label="Search" onClick={changesize} onChange={(e)=>{
          searchentered=e.target.value
          setName_to_search(searchentered)
      
        }}  />
        
      
      <Link  className="btn btn-outline-light" tabIndex="-1" to={"/SearchResult"} role="button" onClick={()=>{   NameRecipe(`/${name_to_search}`); }}  aria-disabled="true">Search</Link>
      </form>
    </div>
  </div>
</nav>

<div className="modal " id="exampleModalsearch" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
    <div className="modal-header">
       
        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body searchmodal ">
    
<div className="input-group input-group-lg transformingup mb-3">
  <button className="btn btn-outline-secondary bg-white" type="button" id="button-addon1y"><i className="fa-solid fs-4 fa-magnifying-glass"></i></button>
  <input type="text" className="form-control modalsearch fw-bold" id="button-addon1x" placeholder="Enter the Recipe Name" aria-label="Example text with button addon" onChange={(e)=>{NameRecipe(`/${e.target.value}`)}} aria-describedby="button-addon1"/>
</div>
<div>
<ul   className="searchlistbox" id="docsearch-list"> <div className="listcombo">
{searchRecipe.recipe && searchRecipe.recipe.map((element)=>{
   num++
   if(num<10){
    return <><Link to="/SearchResult"  onClick={(e)=>{ NameRecipe(`/${element.label.substring(0,20)}`);     }} className="DocSearch-Hitslink  transformingup"><li className="DocSearch-Hits  fw-bold"> <i className="fa-solid me-2 fa-bars"></i>{element.label}</li></Link></>}}
   )
   }</div></ul></div>
      </div>
     
    </div>
  </div>
</div>
    </>
  );
}

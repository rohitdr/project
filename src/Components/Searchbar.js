import React from "react";
import { Link } from "react-router-dom";
import './searchbar.css'
import NavbarToggler from "./NavbarToggler";
export default function Searchbar(props) {
const changesize=()=>{
 document.getElementById("searchbar-searchbox").style.width="400px"
 
}
var serachinput
const setname=()=>{
  serachinput=document.getElementById('searchbar-searchbox').value
}
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
      <form class="d-flex text-white" role="search">
        <input class="form-control me-2 search_input" id="searchbar-searchbox" type="search" placeholder="Search" aria-label="Search" onClick={changesize}  />
        {/* <button class="btn btn-outline-light " type="submit" >Search</button> */}
      
      <Link  class="btn btn-outline-light " tabindex="-1" cl="hlo" to={{pathname:"SearchResult",state:{name:"sdfas"},}} role="button" onClick={setname} aria-disabled="true">Search</Link>
      </form>
    </div>
  </div>
</nav>
    </>
  );
}

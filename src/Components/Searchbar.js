import React from "react";

import './searchbar.css'
import NavbarToggler from "./NavbarToggler";
export default function Searchbar(props) {

  return (
   
    <>




<nav class="navbar navbar-expand-lg bg-light" id="Searchbar">
  <div class="container-fluid">
    <span class="navbar-brand"> <NavbarToggler></NavbarToggler></span>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa-solid fa-magnifying-glass"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <span  class="name text-white">
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
          </span>
         
        </li>
       
      </ul>
      <form class="d-flex text-white" role="search">
        <input class="form-control me-2 search_input" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-light search_search" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  );
}

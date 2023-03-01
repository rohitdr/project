import React from 'react'
import { Navbar} from "@nextui-org/react";
export default function NavbarToggler() {
  return (
 
          
          // <button   role="button"    style={{padding:"0" , backgroundColor:"transparent"}}>
               <div data-bs-toggle="offcanvas"  data-bs-target="#offcanvas" aria-controls="navbarSupportedContent" aria-label="Toggle navigation" aria-expanded="false" style={{padding:"0" }}>
               <Navbar.Toggle hiddenIn="xs" />
               </div>

            //    {/* <span className="navbar-toggler-icon text-dark">
            //  <i className="fa-solid fa-bars fs-4 " data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></i>
            //  </span> */} 
            
       
          // </button> 
  
  )
}

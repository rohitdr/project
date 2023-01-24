import React from 'react'

import { AwesomeButton } from "react-awesome-button";
import Button from './Button';
import NavbarToggler from './NavbarToggler';
export default function Searchbar() {
  return (
  <>



<section className="header-main border-bottom " style={{backgroundColor:"	#89CFF0"}}>
	<div className="container-fluid">
       <div className="row  pt-3 pb-3 d-flex align-items-center">
           
           <div className="col-md-10">
          
        <div className="d-flex form-inputs">
        <div className="col-md-1 m-2 p-1">
        <NavbarToggler></NavbarToggler>
              </div>
      
        <input className="form-control" type="text" placeholder="Search any product..." />
      
        <div className="d-flex flex-column m-2">
                       <Button type ="success" label="Search"></Button>
                       
                   </div> 
        </div>
           </div>
           
           <div className="col-md-2" >
               <div className="d-flex d-none d-md-flex flex-row align-items-center  ">
                  
                      
                   <div className="d-flex flex-column ms-2">
                     
                       <Button type ="info" label="Light Mode" ></Button>
                      
                   </div>   
                   <div className="d-flex flex-column ms-2">
                    
                   <Button type ="dark" label ="dark mode"></Button>
                   </div>   
               </div>           
           </div>
       </div>
	</div> 
</section>

  </>
  )
}

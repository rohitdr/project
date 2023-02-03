import React from "react";
import './sidebar.css'
import Button from "./Button";
import './searchbar.css'
import NavbarToggler from "./NavbarToggler";
export default function Searchbar(props) {
 
  return (
    <>
      <section
        className="header-main border-bottom border border-dark "
        id="Searchbar"
        
      >
        <div className="container-fluid">
          <div className="row  pt-3 pb-3 d-flex align-items-center">
            <div className="col-md-4">
              <div className="d-flex form-inputs">
                <div className="col-md-12 m-2 p-1">
                  <NavbarToggler></NavbarToggler>
                </div>

               
              </div>
            </div>

            <div className="col-md-8  mb-1" >
              <div className="d-flex d-none d-md-flex flex-row align-items-center  " >
                <div className="col-md-8">
                  <div className="col-md-8">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search any recipe..."
                 
                
                />
</div>

</div>
<div className="m-2 ">
                  <Button type="success" label="Search"></Button>
                
                </div>   
             
                <div className="d-flex flex-column col-md-2 ">
                  <Button
                    type={props.type}
                    label={props.label}
                    onClick={props.onClick}
                    size={props.size}
                    textcolor={props.textcolor}
                  ></Button>
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

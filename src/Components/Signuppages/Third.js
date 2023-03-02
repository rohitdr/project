import React from 'react'
import { Input, useInput, Button, Radio,Textarea } from "@nextui-org/react";
import { useContext } from 'react';
import RecipeContext from '../../Context/RecipeContext';
export default function Third() {
  const context = useContext(RecipeContext)
  const {setsignuppage} = context
  const prev=()=>{
    document.getElementById('thirdpage').setAttribute("class","disapear_component");
    setTimeout(()=>{setsignuppage(1)},350)



  }
  return (
    <>
     <section class="background-radial-gradient overflow-hidden">
        <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5 appear_component" id ="thirdpage">
          <div class="d-flex justify-content-end gx-lg-5 align-items-center mb-5">
            <div class="col-lg-5 mb-5 mb-lg-0 position-relative">
              <div class="card singupcard border-success align-items-center box_decrease_size_animation pb-3">
                <div class="card-header singupcardheder b d-flex justify-content-center box_decrease_size_animationforlogin">
                  <h5 className="fw-bold pt-4 text-white"> Socail Networks</h5>
                </div>
                
                <div class="card-body box_decrease_size_animationforlogin ">
                  <form>
                    
                    <div className="d-flex justify-content-between pt-2 ">
                    
                        <Input
                          className='box_decrease_size_animationforlogin bg-white'
                           bordered
                           clearable
                           rounded
                           color='secondary'
                           labelLeft="https://"
                             label='Website Name'
                           placeholder="Your Website Name"
                           labelRight='.com'
                           contentRight={
                            <i class="fas fa-globe fa-lg text-warning"></i>
                          }
               
                         
                    
                        />
                     
                      
                    </div>
                    <div className="d-flex justify-content-between pt-2 ">
                    
                    <Input
                      className='box_decrease_size_animationforlogin bg-white'
                       bordered
                       clearable
                       rounded
                       color='primary'
                       labelLeft="https://"
                         label='Github Reposatary'
                      labelRight=".git"
                      contentRight={
                        <i class=" pe-2 fab fa-github fa-lg"></i>
                      }
           
                     
                    />
                 
                  
                </div>
                <div className="d-flex justify-content-between pt-2 ">
                    
                    <Input
                      className='box_decrease_size_animationforlogin bg-white '
                       bordered
                       clearable
                       rounded
                       color='secondary'
                       labelLeft="https://"
                         label='Facebook'
                         labelRight='.facebook'
                         contentRight={
                            <i class="fab fa-facebook-f fa-lg" style={{color: "#3b5998"}}></i>
                          }
               
                     
                    />
                 
                  
                </div>
               
                
               
                <div className="d-flex justify-content-between pt-2 ">
                    
                    <Input
                      className='box_decrease_size_animationforlogin bg-white '
                       bordered
                       clearable
                       rounded
                       contentRightStyling={false}
                       color='primary'
                       labelLeft="https://"
                         label='Twitter'
                         labelRight='.twitter'
                         contentRight={
                            <i class="fab fa-twitter fa-lg" style={{color: "#55acee"}}></i>
                          }
                        
                 />
                  
                </div>
                  
                    
                    <div className="d-flex justify-content-around mt-3 pt-2 mb-4">
                      <Button
                        color="success"
                        auto
                        onClick={prev}
                        className="box_decrease_size_animationforlogin fw-bold"
                      >
                   Prev
                      </Button>
                      <Button
                        color="success"
                        auto
                       
                        className="box_decrease_size_animationforlogin fw-bold"
                      >
                     Skip
                      </Button>
                      <Button
                        color="primary"
                        auto
                     
                        className="box_decrease_size_animationforlogin fw-bold"
                      >
                        Sign Up
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

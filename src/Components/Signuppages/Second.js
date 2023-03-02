import React from 'react'
import { Input, useInput, Button ,Radio,Textarea} from "@nextui-org/react";
import { useContext } from 'react';
import RecipeContext from '../../Context/RecipeContext';
export default function Second() {
  const context = useContext(RecipeContext)
  const {setsignuppage}= context
  const prev=()=>{
    document.getElementById('secondpage').setAttribute("class","disapear_component");
    setTimeout(()=>{setsignuppage(0)},350)



  }
  const next=()=>{
    document.getElementById('secondpage').setAttribute("class","disapear_component");
    setTimeout(()=>{setsignuppage(2)},350)
  }
  return (

       <>
       <section class="background-radial-gradient overflow-hidden">
          <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5 appear_component" id="secondpage">
            <div class="d-flex justify-content-center gx-lg-5 align-items-center mb-5">
              <div class="col-lg-5 mb-5 mb-lg-0 position-relative">
                <div class="card singupcard border-success align-items-center box_decrease_size_animation">
                  <div class="card-header singupcardheder b d-flex justify-content-center box_decrease_size_animationforlogin">
                    <h5 className="fw-bold pt-4 text-white"> Additional Informaion</h5>
                  </div>
                  
                  <div class="card-body box_decrease_size_animationforlogin ">
                    <form>
                      <div className="row ps-5 mt-3 box_decrease_size_animationforlogin ">
                      <Radio.Group label="Gender" className='fw-bold' defaultValue="primary"  labelColor='primary' orientation="horizontal">
        <Radio value="primary" color="primary" >
        Male
        </Radio>
        <Radio value="secondary" color="secondary" >
       Female
        </Radio>
        <Radio value="success" color="success" >
         Other
        </Radio>
       
      </Radio.Group>
                      </div>
                      <div className="d-flex justify-content-between pt-2 ">
                        <div className="px-3 box_decrease_size_animationforlogin">
                          <Input
                            className="bg-white fw-bold"
                            size="md"
                            bordered
                            rounded
                            color="secondary"
                            clearable
                            type="date"
                           
                            label="Date Of Birth"
                          />
                        </div>
                        <div className="box_decrease_size_animationforlogin">
                          <Input
                            size="md"
                            bordered
                            className="bg-white fw-bold"
                            rounded
                            clearable
                            color="secondary"
                            placeholder="Enter Your Last Name"
                            label="Last name"
                          />
                        </div>
                      </div>
  
                      <div className="d-flex justify-content-between pt-2">
                        <div className="px-3 box_decrease_size_animationforlogin">
                        <Textarea
                        clearable
                        rounded
                        className='fw-bold'
            bordered
            color="secondary"
            label='Address'
            placeholder="Enter Your Address"
          />
                        </div>
                        <div className="">
                          <Input
                            className="bg-white box_decrease_size_animationforlogin fw-bold "
                            clearable
                            bordered
                            rounded
                            color="success"
                            type="text"
                            label="City"
                            placeholder="Enter Your city"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between pt-2">
                        <div className="px-3 box_decrease_size_animationforlogin">
                          <Input
                            className="bg-white fw-bold"
                            clearable
                            bordered
                            rounded
                            color="warning"
                            type="text"
                            label="State"
                            placeholder="Enter Your State"
                          />
                        </div>
                        <div className="box_decrease_size_animationforlogin">
                          <Input
                            className="bg-white fw-bold"
                            clearable
                            bordered
                            rounded
                            color="warning"
                            type="Phone Number"
                            label="Pincode"
                            placeholder="Enter Your Pincode"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-around mt-3 pt-2 mb-4">
                        <Button
                          color="warning"
                          id="second-first"
                          auto
                          onClick={prev}
                          className="box_decrease_size_animationforlogin fw-bold"
                        >
                          Prev
                        </Button>
                        <Button
                          color="success"
                          auto
                       onClick={next}
                          className="box_decrease_size_animationforlogin fw-bold"
                        >
                          Next
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section></>
  )
}

import React from 'react'

export default function NoResult(props) {
  return (
    <>

<section class="">

  <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: "hsl(0, 0%, 96%)"}}>
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <h1 class="my-5 display-3 fw-bold ls-tight text-primary">
          {props.heading}<br />
            <span class=""></span>
          </h1>
          <p style={{color: "hsl(217, 10%, 50.8%)"}}>
          {props.paragraph}
          </p>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="card box_decrease_size_animation_for_recipeitem">
            <div class="card-body py-5 px-md-5 ">
             <img src={props.img} alt="result not found" className=''/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>

    </>
  )
}

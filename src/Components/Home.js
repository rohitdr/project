import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
export default function Home() {
const onclik=()=>{
  document.getElementById('#carouselExampleIndicators2').carousel()
}
  return (
   <>
<div className='home'>

<div className='mt-2 carousel'>
 <Carousel fade variant="dark">
      <Carousel.Item>
        <img
          className=" carousel_image w-100"
          src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel_image  w-100"
          src="https://images.pexels.com/photos/6061743/pexels-photo-6061743.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel_image w-100"
          src="https://images.pexels.com/photos/4686816/pexels-photo-4686816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

     
      </Carousel.Item>
    </Carousel>
    </div>

    <div className='row'>
   <div className='col-md-4'>


<div class="card" style={{width: "18rem;"}}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
   </div>
   <div className='col-md-4'>


<div class="card" style={{width: "18rem;"}}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
   </div>
   <div className='col-md-4'>


<div class="card" style={{width: "18rem;"}}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
   </div>
   <div className='col-md-4'>


<div class="card" style={{width: "18rem;"}}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
   </div>
   <div className='col-md-4'>


<div class="card" style={{width: "18rem;"}}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
   </div>

    </div>

{/* cards carousel */}

{/* cards carousel */}


    </div></>)
}

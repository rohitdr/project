import React, { useContext, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import RecipeContext from '../Context/RecipeContext';
import Carousel_card from './Carousel_card';
import Loader from './Loader';
export default function Home() {


  

  const hide="d-none d-md-block"

  var first=0;
  var second=0;
  var third=0
  var fourth=0
  const context = useContext(RecipeContext)
  const {recipe,allRecipe,loading,LatesRecipe,Latest_recipe} = context

 useEffect(()=>{
 
  LatesRecipe()
   allRecipe()
},[])

  return (
   <>



<div className='home_file  '>

{/* carousel */}
<div className=' carousel'>
 <Carousel fade variant="dark" >
      <Carousel.Item >
        <img
          className=" carousel_image w-100"
          src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="First slide"
        />
       
      </Carousel.Item >
      <Carousel.Item >
        <img
          className="carousel_image  w-100"
          src="https://images.pexels.com/photos/6061743/pexels-photo-6061743.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="carousel_image w-100"
          src="https://images.pexels.com/photos/4686816/pexels-photo-4686816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

     
      </Carousel.Item>
    </Carousel>
    </div>
{/* carousel */}
{/* cards carousel */}

<Carousel fade variant="dark"indicators={false} controls={false} interval={2000}>

      <Carousel.Item >
      <h1 className="text-center b my-4 fw-bold text-white" >
          Top Recipes
          </h1>
      {loading && <Loader></Loader>}
      <div className="cards-wrapper mb-3">
     
      {recipe.recipe && recipe.recipe.map((element)=>{
      first++;
      
      if(first<7){
        return <div className={`carousel_card card ${(first<3)?hide:""}`} key={element._id}>
        <Carousel_card image={element.image} title={element.label}></Carousel_card>
       
       </div>
      }
     
     
        
     }
     )
     }
    </div>
       
      </Carousel.Item>
      <Carousel.Item>
      <h1 className="text-center b my-4 fw-bold text-white" >
          Top Recipes
          </h1>
      {loading && <Loader></Loader>}
      <div className="cards-wrapper mb-3">
      {recipe.recipe && recipe.recipe.map((element)=>{
      second++;
      if(second>6 && second<13){
        return <div className={`carousel_card card ${(second<9)?hide:""}`} key={element._id}>
        <Carousel_card image={element.image} title={element.label}></Carousel_card>
       
       </div>
      }
     
     
        
     }
     )
     }

      </div>

      
      </Carousel.Item>
      <Carousel.Item>
      <h1 className="text-center  my-4 fw-bold text-white" >
          Top Recipes
          </h1>
      {loading && <Loader></Loader>}
      <div className="cards-wrapper mb-3">
      {recipe.recipe && recipe.recipe.map((element)=>{
      third++;
      if(third>13 && third<20){
        return <div className={`carousel_card card ${(third<16)?hide:""}`} key={element._id}>
        <Carousel_card image={element.image} title={element.label}></Carousel_card>
       
       </div>
      }
     
     
        
     }
     )
     }

      </div>

     
      </Carousel.Item>
    </Carousel>
{/* cards carousel */}


{/* latest Recipe */}
<div className="latest_recipe_container">
<div className="row">
  <div className="col-md-3 d-none d-md-block " id="latestRecipeUpper">
  <div className="carousel_card   card my-3 " style={{height:"20%"}}>
<Carousel_card image={"https://static.toiimg.com/photo/96087126/96087126.jpg?v=3"} height={100}></Carousel_card>
  </div>
  <div className="carousel_card  card my-3 " style={{height:"20%"}}>
<Carousel_card image={"https://image.winudf.com/v2/image1/Y29tLmRvbmF0ZS5wYWxtZHJvaWRfc2NyZWVuXzBfMTU4ODE1MDIwN18wNTg/screen-0.jpg?fakeurl=1&type=.webp"} height={100} ></Carousel_card>
  </div>
  <div className="carousel_card  card my-3 " style={{height:"20%"}}>
<Carousel_card image={"https://static.toiimg.com/photo/96087126/96087126.jpg?v=3"} height={100}></Carousel_card>
  </div>
  </div>
  <div className="col-md-6 my-3">
  <div className="p-1 border bg-white">
  <div className=" mb-3 text-center" style={{backgroundColor:"rgb(13, 63, 29)"}}>
<strong className='fw-bold text-white fs-3' >Latest Recipes</strong>
</div>
    {/* latest 1 */}

    {Latest_recipe.recipe && Latest_recipe.recipe.map((element)=>{
      fourth++;
      if(fourth<10){
        return <a href="" className="text-dark">
        <div className="row mb-4 border-bottom pb-2">
          <div className="col-3 ">
            <img src={element.image}
              className="img-fluid shadow-1-strong rounded latest_recipe_image " alt="Latest Recipe Image" />
          </div>
  
          <div className="col-9">
            <p className="mb-2 fs-4"><strong>{element.label}</strong></p>
            <p>
              <u>  {(new Date(element.date).toLocaleString())}</u>
            </p>
          </div>
        </div>
      </a>
      }
     
     
        
     }
     )
     }
  
   

  </div>
  </div>
  <div className="col-md-3 d-none d-md-block">
  <div className="carousel_card card my-3 "style={{height:"20%"}}>
<Carousel_card image={"https://static.toiimg.com/photo/96087126/96087126.jpg?v=3"} height={100}></Carousel_card>
  </div>
  <div className="carousel_card card my-3 "style={{height:"20%"}}>
<Carousel_card image={"https://static.toiimg.com/photo/96087126/96087126.jpg?v=3"} height={100}></Carousel_card>
  </div>
  <div className="carousel_card card my-3 " style={{height:"20%"}}>
<Carousel_card image={"https://static.toiimg.com/photo/96087126/96087126.jpg?v=3"} height={100}></Carousel_card>
  </div>
    </div>
</div>
</div>
{/* latest Recipe */}
{/* customer reviews */}

    <div class="mgb-40 padb-30 auto-invert line-b-4  align-center">
        <h4 class="font-cond-l fg-accent lts-md mgb-10" contenteditable="false">Not Yet Convinced?</h4>
        <h1 class="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" contenteditable="false">Read Customer Reviews</h1>
    </div>
    <ul class="hash-list cols-3 cols-1-xs pad-30-all  align-center text-sm">
        <li>
          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <p class="fs-110 font-cond-l" contenteditable="false">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
          <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Martha Stewart</h5>
          <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Business Woman - New York</small>
        </li>
        <li>
          <img src="https://bootdey.com/img/Content/avatar/avatar4.png" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <p class="fs-110 font-cond-l" contenteditable="false">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
          <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Ariana Menage</h5>
          <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Recording Artist - Los Angeles</small>
        </li>
        <li>
          <img src="https://bootdey.com/img/Content/avatar/avatar5.png" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <p class="fs-110 font-cond-l" contenteditable="false">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
          <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Sean Carter</h5>
          <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Fund Manager - Chicago</small>
        </li>
      </ul>
   
{/* customer reviews */}
    </div></>)
}

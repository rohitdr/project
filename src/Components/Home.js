import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import RecipeContext from '../Context/RecipeContext';
import Loader from './Loader';

import RecipeItem from "./RecipeItem";
export default function Home() {


  const onloadabout=()=>{
    //  document
    //   .getElementById("about_img")
    //   .setAttribute("class", "fade-left");
    //   document
    //   .getElementById("about_content")
    //   .setAttribute("class", "fade-right");
  }
  const [cuisineactive,setcuisineactive]=useState(0)

  const hide="d-none d-md-block"

  var first=0;
  var second=0;
  var third=0
  var fourth=0
  var cuisinenumber=0
  const context = useContext(RecipeContext)
  const {loading,LatesRecipe,Latest_recipe,getUser,cuisine,cuisinedata,cuisineloading} = context


 useEffect(()=>{

 
cuisine("indian")
  LatesRecipe()
 
},[])

  return (
   <>
   
 <section id="hero-animated" class="hero-animated d-flex align-items-center">
    <div class="container d-flex   flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
      <img src="https://media.zenfs.com/en/la_times_articles_853/72c10d6a673085671d1635ac9a1406ec" class="img-fluid animated box_decrease_size_animationforlogin  "/>
      <h2>Welcome to <span>RecipeRiot</span></h2>
      <p>Your go-to destination for delicious and easy-to-follow recipes. Our website is a haven for foodies and home cooks alike, where you can find an array of recipes for every occasion and skill level.</p>
      <div class="d-flex">
        <a href="#about" class="btn-get-started scrollto">Get Started</a>
        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
      </div>
    </div>
  </section>
  
{/* Other */}
  <section id="featured-services" class="featured-services">
      <div class="container">

        <div class="row gy-4">

          <div class="col-xl-3 col-md-6 d-flex box_decrease_size_animationforlogin " data-aos="zoom-out">
            <div class="service-item position-relative">
              <div class="icon"> <i class="fa-solid fa-bolt"></i></div>
              <h4><a href="" class="stretched-link">Recipe collections</a></h4>
              <p className='fs-6'> A way for users to save their favorite recipes and create their own recipe collections.</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex box_decrease_size_animationforlogin " data-aos="zoom-out" data-aos-delay="200">
            <div class="service-item position-relative">
              <div class="icon"><i class="fa-solid fa-tower-broadcast"></i></div>
              <h4><a href="" class="stretched-link">Search Anything</a></h4>
              <p className='fs-6'>We have a search bar where user can enter keywords to find recipes.</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex box_decrease_size_animationforlogin " data-aos="zoom-out" data-aos-delay="400">
            <div class="service-item position-relative">
              <div class="icon">  <i class="fa-sharp fa-solid fa-disease"></i></div>
              <h4><a href="" class="stretched-link">User account</a></h4>
              <p className='fs-6'>This allow users to create an account where they can save their favorite recipes, create a shopping list, and receive personalized recommendations.</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex box_decrease_size_animationforlogin " data-aos="zoom-out" data-aos-delay="600">
            <div class="service-item position-relative">
              <div class="icon"><i class="fa-solid fa-box"></i></div>
              <h4><a href="" class="stretched-link ">User-generated content</a></h4>
              <p className='fs-6'>A section that allows users to submit their own recipes, which can be reviewed and added to the site if they meet certain criteria.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
{/* next
 */}
<section id="services" class="services">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Recipe Search</h2>
          <p>Users can search for specific recipes by name, ingredient, cuisine, cooking time, or dietary requirements.</p>
        </div>

        <div class="row gy-5">

          <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="service-item">
              <div class="img">
                <img src="https://www.dish-works.com/wp-content/uploads/CBD-Hummus-min.gif" class="img-fluid" alt=""/>
              </div>
              <div class="details position-relative  box_decrease_size_animationforlogin">
                <div class="icon">
                  {/* <i class="bi bi-activity"></i> */}
                  <i class="fa-solid fa-bolt"></i>
                </div>
                <a href="#" class="stretched-link">
                  <h3>Countless Recipes</h3>
                </a>
                <p>We have  a large database of recipes that users can browse and filter by various criteria</p>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-md-6 zoom-in" data-aos-delay="300">
            <div class="service-item">
              <div class="img">
                <img src="https://cdn.dribbble.com/users/608874/screenshots/6370753/a.gif" class="img-fluid" alt=""/>
              </div>
              <div class="details position-relative  box_decrease_size_animationforlogin">
                <div class="icon">
                  {/* <i class="bi bi-broadcast"></i> */}
                  <i class="fa-solid fa-tower-broadcast"></i>
                </div>
                <a href="#" class="stretched-link">
                  <h3>Share Recipe </h3>
                </a>
                <p> Users can share their own recipes on the website and rate, review, or comment on other users' recipes</p>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div class="service-item">
              <div class="img">
                <img src="https://media.womensweekly.com.sg/public/2020/08/10-Easy-Indulgent-Cheesecake-Recipes-You-Must-Try.gif" class="img-fluid" alt=""/>
              </div>
              <div class="details position-relative  box_decrease_size_animationforlogin">
                <div class="icon">
                  {/* <i class="bi bi-easel"></i> */}
                  <i class="fa-sharp fa-solid fa-disease"></i>
                </div>
                <a href="#" class="stretched-link">
                  <h3>Nutritional information</h3>
                </a>
                <p>We provides nutritional information for each recipe, including calories, fat, protein, and carbohydrate content</p>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="500">
            <div class="service-item">
              <div class="img">
                <img src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/cooking-for-newsletter_ver_1.gif" class="img-fluid" alt=""/>
              </div>
              <div class="details position-relative  box_decrease_size_animationforlogin">
                <div class="icon">
                  {/* <i class="bi bi-bounding-box-circles"></i> */}
                  <i class="fa-solid fa-box"></i>
                </div>
                <a href="#" class="stretched-link">
                  <h3>Share and Rate</h3>
                </a>
                <p>Users can create and share their recipes.We  also  allows users to rate and review recipes posted by other users</p>
                <a href="#" class="stretched-link"></a>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="600">
            <div class="service-item">
              <div class="img">
                <img src="https://image-tc.galaxy.tf/wigif-57n22u0bjtunlpxduoyl4lqfa/cny-goodies-gif.gif?width=700" class="img-fluid" alt=""/>
              </div>
              <div class="details position-relative  box_decrease_size_animationforlogin">
                <div class="icon">
                  {/* <i class="bi bi-calendar4-week"></i> */}
                  <i class="fa-solid fa-calendar-minus"></i>
                </div>
                <a href="#" class="stretched-link">
                  <h3>Create and</h3>
                </a>
                <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                <a href="#" class="stretched-link"></a>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="700">
            <div class="service-item">
              <div class="img">
                <img src="https://www.chocolatesandchai.com/wp-content/uploads/2015/03/Drizzle-GIF-2.gif" class="img-fluid" alt=""/>
              </div>
              <div class="details position-relative  box_decrease_size_animationforlogin">
                <div class="icon">
                  {/* <i class="bi bi-chat-square-text"></i> */}
                  <i class="fa-solid fa-comments"></i>
                </div>
                <a href="#" class="stretched-link">
                  <h3>Dolori Architecto</h3>
                </a>
                <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                <a href="#" class="stretched-link"></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>


    <section id="about" class="about mt-4" onLoad={onloadabout} style={{backgroundColor:"#f7fbfe"}}>
      <div class="container">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" id="about_img" data-aos="fade-left">
            <img src="https://www.thespruceeats.com/thmb/B3nv-naxP17fALp5NGkUTNXGzcc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-burrata-591165-Final_V2-15f6ed3bc72f4f96bc977202005a92be.gif" class="img-fluid  box_decrease_size_animationforlogin" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content " id='about_content' data-aos="fade-right">
            <h3 className='text-primary fs-2'>About us</h3>
            <p class="fst-italic">
            Our recipes are carefully curated by our team of experienced chefs and food enthusiasts, and we strive to bring you only the best and most reliable recipes that are guaranteed to impress your family and friends.
            </p>
            <ul>
              <li><i class="fa-solid fa-square-check"></i>At RecipeRiot, we believe that cooking should be easy, fun, and accessible to everyone. That's why we've created a recipe search engine that makes it easy to find delicious and reliable recipes from around the world.</li>
              <li><i class="fa-solid fa-square-check"></i> Whether you're a beginner or an experienced home cook, our website is designed to help you find the perfect recipe for any occasion. With our intuitive search bar, you can easily search for recipes by ingredient, cuisine, dietary restriction, and more.</li>
             <li><i class="fa-solid fa-square-check"></i>But we're not just about recipes. We're also committed to providing our users with the latest food trends, cooking tips, and kitchen hacks to help you take your cooking skills to the next level. Our blog is filled with expert advice on everything from meal planning to ingredient substitutions.</li>
            </ul>
            <p>
            At RecipeRiot, we're dedicated to making cooking and food exploration accessible and fun for everyone. We're constantly updating our website with new recipes and features, so be sure to check back often and follow us on social media to stay connected with our community of food lovers.
            </p>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End About Section --> */}

    {/* <!-- ======= Pricing Section ======= --> */}
    <section id="pricing" class="pricing section-bg ">
      <div class="container">

        <div class="section-title text-center mt-4" data-aos="fade-up">
          <h2 className='text-primary fs-2'>Newly Arrived</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
        {Latest_recipe.recipe && Latest_recipe.recipe.map((element)=>{
      fourth++;
      if(fourth<5){
      
      return <div className="col-md-3 mt-4  homerecipe homenewrecipe" key={element._id}>
                  <RecipeItem
                    id={element._id}
                      title={element.label}
                      topLeftColor={"dark"}
                      headingColor={"dark"}
                    ImageUrl={element.image}
                    user={element.user}
                    date={element.date}
                    health_labels={element.healthLabels
                    }
                    Ingridiants={element.ingredientLines
                      .toString()
                      .replace(",", " and ")
                      .substring(0, 60)}
                    caleroies={Math.ceil(element.calories)}
                    fat={
                      element.totalNutrients.FAT.quantity
                        ? Math.ceil(
                            element.totalNutrients.FAT.quantity
                          )
                        : " "
                    }
                    caution={element.cautions}
                    time={element.totalTime}
                    source={element.source}
                    sugar={element.totalNutrients.SUGAR.quantity}
                    water={element.totalNutrients.WATER.quantity}
                    chole={element.totalNutrients.CHOLE.quantity}
                    vitamin_a={
                      element.totalNutrients.VITA_RAE.quantity
                    }
                    vitamin_c={element.totalNutrients.VITC.quantity}
                    vitamin_b6={element.totalNutrients.VITB6A.quantity}
                    vitamin_d={element.totalNutrients.VITD.quantity}
                    vitamin_e={element.totalNutrients.TOCPHA.quantity}
                  
                  ></RecipeItem>
                
                </div>
     
                  }
     }
     )
     }
     
     </div>
      </div>
    </section>
    {/* <!-- End Pricing Section --> */}



    <section id="portfolio" class="portfolio">
      <div class="container">

        <div class="section-title text-center">
          <h2 className='fw-bold text-primary'>Our Collections</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit</p>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" class={`${(cuisineactive==0)?"filter-active":""} fw-bold`} onClick={()=>{ cuisine("indian");setcuisineactive(0)}}>All</li>
              <li id="cuisine_indian" class={`${(cuisineactive==1)?"filter-active":""} fw-bold`} onClick={()=>{cuisine("american"); setcuisineactive(1)}}>American</li>
              <li  class={`${(cuisineactive==2)?"filter-active":""} fw-bold`} onClick={()=>{ cuisine("indian");setcuisineactive(2)}}>Indian</li>
              <li class={`${(cuisineactive==3)?"filter-active":""} fw-bold`} onClick={()=>{ cuisine("chinese");setcuisineactive(3)}}>Chinese</li>
              <li class={`${(cuisineactive==4)?"filter-active":""} fw-bold`}  onClick={()=>{ cuisine("british");setcuisineactive(4)}}>British</li>
              <li class={`${(cuisineactive==5)?"filter-active":""} fw-bold`}  onClick={()=>{ cuisine("italian");setcuisineactive(5)}}>Italian</li>
              <li class={`${(cuisineactive==6)?"filter-active":""} fw-bold`}  onClick={()=>{ cuisine("Japanese");setcuisineactive(6)}}>Japanese</li>
              <li  class={`${(cuisineactive==7)?"filter-active":""} fw-bold`} onClick={()=>{ cuisine("Mexican");setcuisineactive(7)}}>Mexican</li>
              <li class={`${(cuisineactive==8)?"filter-active":""} fw-bold`}  onClick={()=>{ cuisine("French");setcuisineactive(8)}}>French</li>
           
            </ul>
          </div>
        </div>
{/* indian recipes 
 */}
 {cuisineloading && <Loader></Loader>}
 <div className='row'>
 { cuisinedata.recipe && cuisinedata.recipe.map((element)=>{
      cuisinenumber++
      if(cuisinenumber<5){
      
      return <div className="col-md-3 mt-4 homerecipenew  homerecipe" key={element._id}>
                  <RecipeItem
                    id={element._id}
                      title={element.label}
                      topLeftColor={"dark"}
                      headingColor={"dark"}
                    ImageUrl={element.image}
                    user={element.user}
                    date={element.date}
                    health_labels={element.healthLabels
                    }
                    Ingridiants={element.ingredientLines
                      .toString()
                      .replace(",", " and ")
                      .substring(0, 60)}
                    caleroies={Math.ceil(element.calories)}
                    fat={
                      element.totalNutrients.FAT.quantity
                        ? Math.ceil(
                            element.totalNutrients.FAT.quantity
                          )
                        : " "
                    }
                    caution={element.cautions}
                    time={element.totalTime}
                    source={element.source}
                    sugar={element.totalNutrients.SUGAR.quantity}
                    water={element.totalNutrients.WATER.quantity}
                    chole={element.totalNutrients.CHOLE.quantity}
                    vitamin_a={
                      element.totalNutrients.VITA_RAE.quantity
                    }
                    vitamin_c={element.totalNutrients.VITC.quantity}
                    vitamin_b6={element.totalNutrients.VITB6A.quantity}
                    vitamin_d={element.totalNutrients.VITD.quantity}
                    vitamin_e={element.totalNutrients.TOCPHA.quantity}
                  
                  ></RecipeItem>
                
                </div>
     
                  }
     }
     )
     }
        {/* <div class="row portfolio-container">

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt=""/>
                <a href="assets/img/portfolio/portfolio-9.jpg" class="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" class="link-details" title="More Details"><i class="bx bx-link"></i></a>
              </figure>

              <div class="portfolio-info">
                <h4><a href="portfolio-details.html">Web 1</a></h4>
                <p>Web</p>
              </div>
            </div>
          </div>

        </div> */}
</div>
      </div>
    </section>
    {/* <!-- End Portfolio Section --> */}




    {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" class="contact section-bg mt-4" style={{backgroundColor:"#f7fbfe"}}>
      <div class="container">

        <div class="section-title text-center fw-bold pt-3">
          <h2>Contact</h2>
          <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fuga</p>
        </div>

        <div class="row mt-5 justify-content-center">

          <div class="col-lg-10">

            <div class="info-wrap">
              <div class="row">
                <div class="col-lg-4 info">
                  {/* <i class="bi bi-geo-alt"></i> */}
                  <i class="fa-sharp fa-solid fa-location-dot"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street<br/>New York, NY 535022</p>
                </div>

                <div class="col-lg-4 info mt-4 mt-lg-0">
                  {/* <i class="bi bi-envelope"></i> */}
                  <i class="fa-sharp fa-solid fa-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com<br/>contact@example.com</p>
                </div>

                <div class="col-lg-4 info mt-4 mt-lg-0">
                <i class="fa-solid fa-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 51<br/>+1 5589 22475 14</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div class="row mt-5 justify-content-center">
          <div class="col-lg-10">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Contact Section --> */}







   
    </>
    
    
    
    )

}

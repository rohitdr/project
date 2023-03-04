import React, { useContext, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import RecipeContext from '../Context/RecipeContext';
import Carousel_card from './Carousel_card';
import Loader from './Loader';
export default function Home() {


  const onloadabout=()=>{
    //  document
    //   .getElementById("about_img")
    //   .setAttribute("class", "fade-left");
    //   document
    //   .getElementById("about_content")
    //   .setAttribute("class", "fade-right");
  }

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
 <section id="hero-animated" class="hero-animated d-flex align-items-center">
    <div class="container d-flex   flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
      <img src="https://media.zenfs.com/en/la_times_articles_853/72c10d6a673085671d1635ac9a1406ec" class="img-fluid animated box_decrease_size_animationforlogin  "/>
      <h2>Welcome to <span>RecipeRiot</span></h2>
      <p>Et voluptate esse accusantium accusamus natus reiciendis quidem voluptates similique aut.</p>
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
              <div class="icon"><i class="bi bi-activity icon"></i></div>
              <h4><a href="" class="stretched-link">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex box_decrease_size_animationforlogin " data-aos="zoom-out" data-aos-delay="200">
            <div class="service-item position-relative">
              <div class="icon"><i class="bi bi-bounding-box-circles icon"></i></div>
              <h4><a href="" class="stretched-link">Sed ut perspici</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex box_decrease_size_animationforlogin " data-aos="zoom-out" data-aos-delay="400">
            <div class="service-item position-relative">
              <div class="icon"><i class="bi bi-calendar4-week icon"></i></div>
              <h4><a href="" class="stretched-link">Magni Dolores</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex box_decrease_size_animationforlogin " data-aos="zoom-out" data-aos-delay="600">
            <div class="service-item position-relative">
              <div class="icon"><i class="bi bi-broadcast icon"></i></div>
              <h4><a href="" class="stretched-link">Nemo Enim</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
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
                <img src="https://images.squarespace-cdn.com/content/v1/5fc3cd76affbf90a66fc921d/1638385829951-6ECZIFNW5UF6FILW0BI9/IMG_5326.jpeg" class="img-fluid" alt=""/>
              </div>
              <div class="details position-relative">
                <div class="icon">
                  <i class="bi bi-activity"></i>
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
                <img src="https://static.toiimg.com/photo/73356883.cms" class="img-fluid" alt=""/>
              </div>
              <div class="details position-relative">
                <div class="icon">
                  <i class="bi bi-broadcast"></i>
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
                <img src="https://wallpaperaccess.com/full/2305398.jpg" class="img-fluid" alt=""/>
              </div>
              <div class="details position-relative">
                <div class="icon">
                  <i class="bi bi-easel"></i>
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
                <img src="https://assets.cntraveller.in/photos/60be1e72c7150780d0a47e3b/master/pass/Home-cooking-recipes-self-isolatin-1366x768.jpg" class="img-fluid" alt=""/>
              </div>
              <div class="details position-relative">
                <div class="icon">
                  <i class="bi bi-bounding-box-circles"></i>
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
                <img src="https://www.licious.in/blog/wp-content/uploads/2023/02/shutterstock_1199926645-750x500.jpg" class="img-fluid" alt=""/>
              </div>
              <div class="details position-relative">
                <div class="icon">
                  <i class="bi bi-calendar4-week"></i>
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
                <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/03/07110850/salad.jpg" class="img-fluid" alt=""/>
              </div>
              <div class="details position-relative">
                <div class="icon">
                  <i class="bi bi-chat-square-text"></i>
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


    <section id="about" class="about" onLoad={onloadabout}>
      <div class="container">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" id="about_img" data-aos="fade-left">
            <img src="https://www.thespruceeats.com/thmb/B3nv-naxP17fALp5NGkUTNXGzcc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-burrata-591165-Final_V2-15f6ed3bc72f4f96bc977202005a92be.gif" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" id='about_content' data-aos="fade-right">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i class="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End About Section --> */}
    </>
    
    
    
    )

}

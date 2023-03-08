import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './searchbar.css'
import NavbarToggler from "./NavbarToggler";
import RecipeContext from "../Context/RecipeContext";
import { useState } from "react";
import { Navbar, Text, Avatar, Dropdown,Input  } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";
import { SearchIcon } from "./SearchIcon.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Searchbar(props) {
  const context = useContext(RecipeContext)
  const {recipe,NameRecipe, setName_to_search,name_to_search,searchRecipe,getUser,userData} = context
let Navigate = useNavigate();
useEffect(()=>{
getUser()

},[])
var num=0;

const logout=()=>{
  sessionStorage.removeItem("auth-token")
Navigate("/login")
}
var searchentered
var modalsearch
const clickindian=()=>{
 Navigate("/login")
}
const collapseItems = [
  "Features",
  "Customers",
  "Pricing",
  "Company",
  "Legal",
  "Team",
  "Help & Feedback",
  "Login",
  "Sign Up",
];

  return (
 
    <>

<Navbar isBordered variant="sticky" >
        <Navbar.Brand css={{ mr: "$4" }}>
        <NavbarToggler></NavbarToggler>
        {/* <Navbar.Toggle aria-label="toggle navigation" showIn="md"/> */}
      {/* <AcmeLogo></AcmeLogo> */}
      <p class="navbar-brand d-none d-sm-block">
      <img src="Reciperiotlogo.png" alt="Logo" width="75" height="90" class="d-inline-block align-text-top logoofwebsite"/>
    </p>
          <Text  color="inherit" css={{ mr: "$11" }} hideIn="xs">
          <span className="navbar-brand "><span  className="name text-dark  fw-bold"> 
  
          <span className="R">R</span>
          <span className="e">e</span>
          <span className="c">c</span>
          <span className="i">i</span>
          <span className="p">p</span>
          <span className="e2">e</span>
          <span className="R2">R</span>
          <span className="i2">i</span>
          <span className="o">o</span>
          <span className="t">t</span>
          </span></span>
    
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-magnifying-glass "></i>
    </button> */}
          </Text>
           </Navbar.Brand>
          


           <Navbar.Content
        
     
        
          variant="underline-rounded"
        

       
         

        >
             
       {/* <Dropdown isBordered >
            <Navbar.Item  hideIn="md" >
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
               
                ripple={false}
              >
             <p className="fs-6 fw-bold">HOME</p>
              </Dropdown.Button>
            </Navbar.Item>
           
          </Dropdown> */}
          <Navbar.Link  hideIn="md" onClick={()=>{Navigate("/home")}}> <p className="navbarhome"> HOME</p> </Navbar.Link>
          <Dropdown isBordered >
            <Navbar.Item  hideIn="md" >
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
               iconRight={<i class="fa-sharp fa-solid fa-chevron-down"></i>}
                ripple={false}
              >
             <p className="fs-6 "> MEALTYPE</p>
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              color="warning"
              aria-label="ACME features"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
                    mr: "$4",
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
             css={
              {
                color:"#dc3545"
              }
             }
                key="autoscaling"
                showFullDescription
                description="Looking to impress your dinner guests with a mouthwatering meal? Look no further than this delectable dinner recipe!"
              icon={<i class="fa-solid  fa-utensils fs-4 px-2" style={{color:"#dc3545"}}></i>}
              >
              Dinner
              </Dropdown.Item>
              <Dropdown.Item
                key="usage_metrics"
                showFullDescription
                css={
              {
                color:"purple"
              }
             }
                description="Whether you're looking to fuel up for a busy day ahead or simply indulge in a decadent morning treat, this breakfast recipe is sure to please."
               icon={<i class="fa-solid fa-bowl-food fs-4 px-2" style={{color:"purple"}}></i>}
              >
             BreakFast
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                showFullDescription
                css={{color:"$blue700"}}
                description="Don't settle for a boring sandwich or a lackluster salad for your midday meal! This lunch recipe will take your taste buds on a journey with every bite"
              icon={<i class="fa-sharp fa-solid fa-cloud-meatball fs-4 px-2 text-info"></i>}
              >
            Lunch
              </Dropdown.Item>
              <Dropdown.Item
                key="99_uptime"
                showFullDescription
                textColor="success"
                description="When the midday munchies strike or you're in need of a little pick-me-up, these snack recipes will have you covered!"
               icon={<i class="fa-solid fa-wheat-awn fs-4 px-2 text-success"></i>}
              >
                Snacks
              </Dropdown.Item>
              <Dropdown.Item
                key="supreme_support"
                showFullDescription
                textColor="primary"
                description=" These teatime treats are the perfect way to unwind and relax with loved ones, or to indulge in a little self-care and me-time."
               icon={<i class="fa-solid fa-mug-saucer fs-4 px-2 text-primary"></i>}
              >
            TeaTime
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown isBordered  >
            <Navbar.Item  hideIn="md">
              <Dropdown.Button
               light
               auto
         
               iconRight={<i class="fa-sharp fa-solid fa-chevron-down"></i>}
         
         
                css={{
                  px: 4,
                  dflex: "center",
                  svg: { pe: "none" },
                  
                }}
               
               
              >
               <p className="fs-6"> DISHTYPE</p>
              </Dropdown.Button>
            </Navbar.Item >
            <Dropdown.Menu
           color="warning"
              aria-label="ACME features"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
                    mr: "$4",
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
                key="autoscaling"
                textColor="success"
                showFullDescription
                description="Bake your way to happiness with this delicious homemade bread recipe."
              icon={<i class="fa-solid fa-bread-slice text-success fs-4"></i>}
              >
               Bread
              </Dropdown.Item>
              <Dropdown.Item
                key="usage_metrics"
                textColor="error"
                showFullDescription
                description="Start your day off right with this delicious and nutritious homemade cereal recipe."
               icon={<i class="fa-solid fa-bowl-food text-danger fs-4"></i>}
              >
               Cereals
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                textColor="primary"
                showFullDescription
                description="Transform any dish into a gourmet masterpiece with these delicious homemade condiments and sauces"
              icon={<i class="fa-sharp fa-solid fa-sink text-primay fs-4"></i>}
              >
             Condiments And Sauces
              </Dropdown.Item>
              <Dropdown.Item
                key="99_uptime"
                css={{color:"Purple"}}
                showFullDescription
                description="Indulge your sweet tooth with this heavenly homemade dessert recipe."
               icon={<i class="fa-solid fa-ice-cream fs-4" style={{color:"purple"}}></i>}
              >
               Desserts
              </Dropdown.Item>
              <Dropdown.Item
                key="supreme_support"
                css={{color:"Violet"}}
                showFullDescription
                description="Sip on paradise with this refreshing and delicious homemade drink recipe"
               icon={<i class="fa-solid fa-wine-glass-empty fs-4" style={{color:"Violet"}}></i>}
              >
                Drinks
              </Dropdown.Item>
              <Dropdown.Item
                key="MainCourse"
                css={{color:"indigo"}}
                showFullDescription
                description="Impress your dinner guests with this mouth-watering homemade main course recipe."
               icon={<i class="fa-brands fa-discourse fs-4" style={{color:"indigo"}}></i>}
              >
               MainCourse
              </Dropdown.Item>
              <Dropdown.Item
                key="Pancake"
                css={{color:"chocolate"}}
                showFullDescription
                description="From classic flavors to creative twists, this pancake recipe is sure to please any palate."
               icon={<i class="fa-solid fa-bacon fs-4" style={{color:"chocolate"}}></i>}
              
              >
               Pancake
              </Dropdown.Item>
              <Dropdown.Item
                key="Preps"
                css={{color:"brown"}}
                showFullDescription
                description="Make mealtime a breeze with this easy and time-saving homemade prep recipe."
               icon={<i class="fa-solid fa-mortar-pestle fs-4" style={{color:"brown"}}></i>}
              >
               Preps
              </Dropdown.Item>
              <Dropdown.Item
                key="Salad"
                css={{color:"$blue700"}}
                showFullDescription
                description="Elevate your salad game with this delicious and healthy homemade salad recipe."
               icon={<i class="fa-sharp fa-solid fa-lemon text-info fs-4" ></i>}
              >
                Salad
              </Dropdown.Item>
              <Dropdown.Item
                key="Sandwiches"
                css={{color:"Purple"}}
                showFullDescription
                description="Upgrade your lunch game with this easy and delicious homemade sandwich recipe."
               icon={<i class="fa-solid fa-hotdog fs-4" style={{color:"purple"}}></i>}
              >
               Sandwiches
              </Dropdown.Item>
              <Dropdown.Item
                key="Soup"
                css={{color:"darksalmon"}}
                showFullDescription
                description="Warm your soul and delight your taste buds with this homemade soup recipe"
               icon={<i class="fa-solid fa-pump-soap fs-4" style={{color:"darksalmon"}}></i>}
              >
              Soup
              </Dropdown.Item>
              <Dropdown.Item
                key="Starter"
                css={{color:"rebeccapurple"}}
                showFullDescription
                description="Kick off your meal in style with this easy and flavorful homemade starter recipe"
               icon={<i class="fa-solid fa-hourglass-start fs-4" style={{color:"rebeccapurple"}}></i>}
              >
              Starter
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown isBordered>
            <Navbar.Item  hideIn="md">
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                iconRight={<i class="fa-sharp fa-solid fa-chevron-down"></i>}
                ripple={false}
              >
                <p className="fs-6">DEIT TYPE</p>
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
            color="warning"
              aria-label="ACME features"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
                    mr: "$4",
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
                key="autoscaling"
                showFullDescription
                textColor="primary"
                description="Achieve a healthy and balanced lifestyle with this delicious and nutritious homemade recipe."
              icon={<i class="fa-solid fa-scale-balanced text-primary fs-4"></i>}
              >
               Balanced
              </Dropdown.Item>
              <Dropdown.Item
                key="usage_metrics"
                textColor="success"
                showFullDescription
                description="Fuel your body with the fiber it needs to thrive with this delicious and wholesome homemade recipe"
               icon={<i class="fa-solid fa-tower-observation text-success fs-4"></i>}
              >
               highFiber
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                showFullDescription
                textColor="erro"
                description="Power up your day with this delicious and protein-packed homemade recipe."
              icon={<i class="fa-solid fa-dna text-danger fs-4"></i>}
              >
                High-Protein
              </Dropdown.Item>
              <Dropdown.Item
                key="99_uptime"
                showFullDescription
               css={{color:"purple"}}
                description="Enjoy delicious and satisfying meals while maintaining a low-carb lifestyle with this easy and flavorful recipe."
               icon={<i class="fa-solid fa-bowl-food fs-4" style={{color:"purple"}}></i>}
              >
                Low-Carb
              </Dropdown.Item>
              <Dropdown.Item
                key="supreme_support"
                showFullDescription
                css={{color:"Brown"}}
                description="Discover the delicious world of low-fat cooking with this easy and flavorful homemade recipe."
               icon={<i class="fa-solid fa-fan fs-4" style={{color:"brown"}}></i>}
              >
               Low-Fat
              </Dropdown.Item>
              <Dropdown.Item
                key="Preserve"
                showFullDescription
                css={{color:"$blue700"}}
                description="Capture the flavors of the season with this delicious and easy homemade preserve recipe."
               icon={<i class="fa-solid fa-prescription-bottle text-info fs-4"></i>}
              >
             Preserve
              </Dropdown.Item>
             
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown isBordered>
            <Navbar.Item  hideIn="md">
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                iconRight={<i class="fa-sharp fa-solid fa-chevron-down"></i>}
                ripple={false}
              >
             <p className="fs-6"> HEALTH</p>
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
            iconRight={<i class="fa-sharp fa-solid fa-chevron-down"></i>}
              color="warning"
              aria-label="ACME features"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
                    mr: "$4",
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
                key="autoscaling"
                textColor="success"
                icon={<i class="fa-solid fa-champagne-glasses text-success"></i>}
                showFullDescription
                description="Experience the vibrant and delicious flavors of our alcohol-free recipe, without any of the after-effects"
              
              >
               Alcohol-Free
              </Dropdown.Item>
              <Dropdown.Item
                key="usage_metrics"
                textColor="error"
                showFullDescription
                icon={<i class="fa-solid fs-4 fa-egg text-danger"></i>}
                description="Indulge in the rich and satisfying taste of our egg-free recipe, perfect for those with dietary restrictions"
               
              >
                Egg-Free
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                textColor="primary"
                showFullDescription
                icon={<i class="fa-solid text-primary fs-4 fa-wheat-awn-circle-exclamation"></i>}
                description="Enjoy the delectable flavors of our gluten-free recipe, without compromising on taste or texture."
              
              >
                Gluten-Free
              </Dropdown.Item>
              <Dropdown.Item
                key="99_uptime"
               css={{color:"brown"}}
                showFullDescription
                icon={<i class="fa-solid fs-4 fa-solar-panel" style={{color:"brown"}}></i>}
                description="Savor the goodness of our kidney-friendly recipe, thoughtfully crafted to nourish your body while tantalizing your taste buds."
               
              >
                Kidney-Friendly
              </Dropdown.Item>
              <Dropdown.Item
                key="supreme_support"
                css={{color:"purple"}}
                showFullDescription
                icon={<i class="fa-solid fs-4 fa-fan" style={{color:"purple"}}></i>}
                description="Indulge guilt-free in our low-fat-abs recipe, designed to satisfy your cravings while promoting a healthier lifestyle."
               
              >
               Low-Fat-Abs
              </Dropdown.Item>
              <Dropdown.Item
                key="Low-Sugar"
                css={{color:"$blue700"}}
                showFullDescription
                icon={<i class="fa-solid fs-4 fa-cubes-stacked text-info"></i>}
                description="Experience the sweetness of our low-sugar recipe, bursting with delicious flavors without the added sugar rush."
               
              >
              Low-Sugar
              </Dropdown.Item>
              <Dropdown.Item
                key="Mustard-Free"
                css={{color:"orange"}}
                showFullDescription
                icon={<i class="fa-brands fs-4 fa-mastodon" style={{color:"orange"}}></i>}
                description="Enjoy the full flavor of our mustard-free recipe, perfect for those with allergies or simply looking for a refreshing change"
               
              >
              Mustard-Free
              </Dropdown.Item>
              <Dropdown.Item
                key="No-OIl-added"
                css={{color:"#b71c1c"}}
                icon={<i class="fa-solid fs-4 fa-bottle-droplet" style={{color:"#b71c1c"}}></i>}
                showFullDescription
                description="Taste the goodness of our no-oil-added recipe, carefully crafted to give you a healthy and flavorful meal without the excess oil."
               
              >
               No-Oil-Added
              </Dropdown.Item>
              <Dropdown.Item
                 css={{color:"darkred"}}
                key="Red-Meat-Free"
                icon={<i class="fa-solid fs-4 fa-drumstick-bite" style={{color:"darkred"}}></i>}
                showFullDescription
                description="Satisfy your cravings with our delicious red-meat-free recipe, bursting with flavor and wholesome ingredients for a satisfying meal."
               
              >
            Red-Meat-Free
              </Dropdown.Item>
              <Dropdown.Item
                key="Vegan"
                css={{color:"darkgreen"}}
               icon={<i class="fa-solid fs-4 fa-carrot" style={{color:"darkgreen"}}></i>}
                showFullDescription
                description="Experience the vibrant and delicious flavors of our vegan recipe, crafted with care to nourish your body and delight your taste buds."
               
              >
               Vegan
              </Dropdown.Item>
              <Dropdown.Item
                key="Vegetarian"
                css={{color:"blueviolet"}}
                showFullDescription
                icon={<i class="fa-solid fs-4 fa-plant-wilt" style={{color:"blueviolet"}}></i>}
                description="Indulge in the goodness of our vegetarian recipe, packed with wholesome ingredients and bursting with flavor to satisfy your cravings."
               
              >
            Vegetarian
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown isBordered>
            <Navbar.Item  hideIn="md">
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                iconRight={<i class="fa-sharp fa-solid fa-chevron-down"></i>}
                ripple={false}
              >
             <p className="fs-6">CUISINETYPE</p>
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              color="warning"
              isVirtualized={true}
              aria-label="ACME features"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
                    mr: "$4",
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
             
             <Dropdown.Item
              
                key="autoscaling"
                showFullDescription
              textColor="success"
                description="Explore the exotic flavors of India with a tantalizing array of spices and herbs"
              icon={<i class="fa-solid fa-indian-rupee-sign  fs-4 px-2"></i>}
              
              >
             
              <div onClick={()=>{Navigate("/cuisineType",{state:{type:"Indian"}})}}>
             Indian</div>
              </Dropdown.Item> 
              <Dropdown.Item
                key="usage_metrics"
                textColor="error"
                showFullDescription
                description="Indulge in the bold and comforting flavors of America, where classic dishes are reinvented with a modern twist"
               icon={<i class="fa-solid fa-dollar-sign fs-4 px-2 text-danger"></i>}
              >
                <div onClick={()=>{Navigate("/cuisineType",{state:{type:"american"}})}}>
               American</div>
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                showFullDescription
                textColor="primary"
                description="Experience the warmth and comfort of British cuisine, where hearty dishes are served with a side of tradition."
              icon={<i class="fa-solid fa-sterling-sign fs-4 px-2 text-primary"></i>}
              >
                <div onClick={()=>{Navigate("/cuisineType",{state:{type:"british"}})}}>
              British</div>
              </Dropdown.Item>
              <Dropdown.Item
                key="99_uptime"
                showFullDescription
                css={{
                  color:"#17a2b8"
                }}
                description="Take your taste buds on a journey to the Far East with the exquisite flavors of Chinese cuisine."
               icon={<i class="fa-brands fa-yandex fs-4 px-2 text-info"></i>}
              >
                <div onClick={()=>{Navigate("/cuisineType",{state:{type:"chinese"}})}}>
             Chinese</div>
              </Dropdown.Item>
              <Dropdown.Item
                key="supreme_support"
                showFullDescription
                css={{
                  color:"purple"
                }}
                description="Experience the irresistible flavors of Italy with this authentic recipe that will transport your taste buds to the heart of Tuscany."
               icon={<i class="fa-solid fa-euro-sign fs-4 px-2" style={{color:"purple"}}></i>}
              >
                <div onClick={()=>{Navigate("/cuisineType",{state:{type:"italian"}})}}>
               Italian</div>
              </Dropdown.Item>
              <Dropdown.Item
                key="japnese"
                showFullDescription
                css={{
                  color:"brown"
                }}
                description="Indulge in the artful simplicity of Japanese cuisine with this mouthwatering recipe , bringing the essence of Japan to your plate"
               icon={<i class="fa-solid fa-yen-sign fs-4 px-2" style={{color:"brown"}}></i>}
              >
                <div onClick={()=>{Navigate("/cuisineType",{state:{type:"japnese"}})}}>
           Japnese</div>
              </Dropdown.Item>
              <Dropdown.Item
                key="maxian"
                showFullDescription
                css={{
                  color:"#00695c"
                }}
                description="Spice up your taste buds with the vibrant and bold flavors of Mexico in this authentic recipe"
               icon={<i class="fa-solid fa-peso-sign fs-4 px-2" style={{color:"#00695c"}}></i>}
              >
                <div onClick={()=>{Navigate("/cuisineType",{state:{type:"mexican"}})}}>
             Mexican</div>
              </Dropdown.Item>
              <Dropdown.Item
                key="french"
                showFullDescription
                css={{
                  color:"#212121"
                }}
                description="Experience the indulgent flavors of France with this exquisite recipe that pays homage to the country's culinary mastery"
               icon={<i class="fa-solid fa-euro-sign fs-4 px-2" style={{color:"#212121"}}></i>}
              >
                <div onClick={()=>{Navigate("/cuisineType",{state:{type:"french"}})}}>
              French</div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      
       
       













        
           <form className="d-flex text-white  ">
        <input className="form-control me-2 text-white search_input rounded-3" id="searchbar-searchbox" type="search" placeholder="Search"  data-bs-toggle="modal" data-bs-target="#exampleModalsearch" aria-label="Search" onChange={(e)=>{
          searchentered=e.target.value
          setName_to_search(searchentered)
      
        }}  />
        
      
      {/* <Link  className="btn btn-outline-light" tabIndex="-1" to={"/SearchResult"} role="button" onClick={()=>{   NameRecipe(`/${name_to_search}`); }}  aria-disabled="true">Search</Link> */}
      </form>
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src={(sessionStorage.getItem('auth-token')?(userData?.user?.Profile_Image):"https://i.pravatar.cc/150?u=a042581f4e29026024d")}
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            {sessionStorage.getItem("auth-token")?
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                 {userData?.user?.email}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
              <Link to="/Profile_Profile" className=" text-dark searchbardropdown"> Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item key="team_settings"><Link to="/Profile_Activity" className=" text-dark searchbardropdown"> Activity</Link></Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
              <Link to="/Profile_Security" className=" text-dark searchbardropdown"> Security</Link>
              </Dropdown.Item>
              <Dropdown.Item key="system"><Link to="/Profile_Recipe" className=" text-dark searchbardropdown"> My Recipes</Link></Dropdown.Item>
              <Dropdown.Item key="configurations"><Link to="/Profile_LikedRecipe" className=" text-dark searchbardropdown">Favourite</Link></Dropdown.Item>
            
              <Dropdown.Item key="logout" withDivider color="error">
               <span onClick={logout}>Log Out</span> 
              </Dropdown.Item>
            </Dropdown.Menu>: <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              
              <Dropdown.Item key="settings" >
                <div onClick={()=>{Navigate("/login")}}>
              <p className="px-4 pt-3 text-dark searchbardropdown w-100"> Login</p></div>
             
              </Dropdown.Item>
              
              <Dropdown.Item key="analytics" >
              <div onClick={()=>{Navigate("/signUp")}}>
              <p className="px-4 pt-2 text-dark searchbardropdown w-100"> Sign Up</p></div>
              </Dropdown.Item>
             
       
              
            </Dropdown.Menu>}
            
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            {/* <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            > */}
              {item}
           
          </Navbar.CollapseItem>
        ))}
       
      </Navbar.Collapse>
      </Navbar>
     


{/* <nav className="navbar navbar-expand-lg bg-light" id="Searchbar">
  <div className="container-fluid ">
    <span className="navbar-brand"><span  className="name text-white"> <NavbarToggler></NavbarToggler>
  
          <span className="R">R</span>
          <span className="e">e</span>
          <span className="c">c</span>
          <span className="i">i</span>
          <span className="p">p</span>
          <span className="e2">e</span>
          <span className="R2">R</span>
          <span className="i2">i</span>
          <span className="o">o</span>
          <span className="t">t</span>
          </span></span>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-magnifying-glass "></i>
    </button>
    <div className="collapse navbar-collapse d-flex  bd-highlight" id="navbarSupportedContent">
      <div className="flex-grow-1 bd-highlight searchbarform ">
    <form className="d-flex text-white  ">
        <input className="form-control me-2 search_input rounded-3" id="searchbar-searchbox" type="search" placeholder="Search"  data-bs-toggle="modal" data-bs-target="#exampleModalsearch" aria-label="Search" onChange={(e)=>{
          searchentered=e.target.value
          setName_to_search(searchentered)
      
        }}  />
        
      
      <Link  className="btn btn-outline-light" tabIndex="-1" to={"/SearchResult"} role="button" onClick={()=>{   NameRecipe(`/${name_to_search}`); }}  aria-disabled="true">Search</Link>
      </form></div>
      <div className=" bd-highlight">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
     
  
      <li class="nav-item dropdown d-none d-lg-block">
      <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
        
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
     
         
        </li>
       
      </ul>
      </div>
    </div>
  </div>
</nav> */}

<div className="modal " id="exampleModalsearch" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
    <div className="modal-header">
       
        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body searchmodal ">
    
<div className="input-group input-group-lg transformingup mb-3">
  <button className="btn btn-outline-secondary bg-white" type="button" id="button-addon1y"><i className="fa-solid fs-4 fa-magnifying-glass"></i></button>
  <input type="text" className="form-control modalsearch fw-bold" id="button-addon1x" placeholder="Enter the Recipe Name" aria-label="Example text with button addon" onChange={(e)=>{NameRecipe(`/${e.target.value}`)}} aria-describedby="button-addon1"/>
</div>
<div>
<ul   className="searchlistbox" id="docsearch-list"> <div className="listcombo">
{searchRecipe.recipe && searchRecipe.recipe.map((element)=>{
   num++
   if(num<10){
    return <><Link to="/SearchResult"  onClick={(e)=>{ NameRecipe(`/${element.label.substring(0,20)}`);     }} className="DocSearch-Hitslink  transformingup"><li className="DocSearch-Hits  fw-bold"> <i className="fa-solid me-2 fa-bars"></i>{element.label}</li></Link></>}}
   )
   }</div></ul></div>
      </div>
     
    </div>
  </div>
</div>
    </>



  );
}

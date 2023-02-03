import React from "react";


import { Link } from "react-router-dom";

export default function Sidebar(props) {
  

  return (
    <>
      <div
        className="offcanvas offcanvas-start  border border-dark "
        tabIndex="-1"
        id="offcanvas"
        bs-offcanvas-padding-x= "0rem"
        data-bs-keyboard="false"
        data-bs-backdrop="false"
        style={{ backgroundColor: "#96C2DB" }}
      >
        <div className="offcanvas-header ">
          <h6 className={`offcanvas-title d-none d-sm-block text-white fw-bold`} id="offcanvas">
            Menu
          </h6>
          <button
            type="button"
            className={`btn-close btn-close-${props.crossColor} text-reset`}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
            id="menu"
          >
            <li className="nav-item home">
              <Link to="/home" className={`nav-link text-truncate text-white fw-bold`}>
                <i className=" fa-sharp fa-solid fa-house"></i>
                <span className=" mode">Home</span>
              </Link>
            </li>
            <li class ="dashboard">
              <a
                href="#submenu1"
                data-bs-toggle="collapse"
                className="nav-link text-truncate text-white fw-bold"
                 
              >
                <i className="fa-solid fa-table-columns" ></i>
                <span className="">Dashboard</span>{" "}
              </a>
            </li>
            <li class ="order">
              <a href="/" className="nav-link text-truncate text-white fw-bold">
                <i className="fs-5 bi-table"></i>
                <span className="">Orders</span>
              </a>
            </li>
           

            <li class ="login">
              <a href="/login" className="nav-link text-truncate text-white fw-bold">
                <i className="fs-5 bi-grid"></i>
                <span className="">Login</span>
              </a>
            </li>
            <li class ="customers">
              <a href="/" className="nav-link text-truncate text-white fw-bold">
                <i className="fs-5 bi-people"></i>
                <span className="">Customers</span>{" "}
              </a>
             
            </li>
            </ul>
            <hr className="hr" />
            <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
            id="menu">
            <li class ="category-heading">
              <div className={`nav-link text-truncate text-white fw-bold`}>
              <i className=" fs-5 fa-solid fa-list text-white p-1"></i>
            <span className="ms-1 d-none d-sm-inline ">Meal-Type</span>{" "}
              </div>
            </li>
            <li class ="home">
              <Link to="/Dinner" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-utensils p-1 text-dark"></i>
                <span className="ms-1 d-none d-sm-inline">Dinner</span>{" "}
              </Link>
            </li>
            <li  class ="dashboard">
              <Link to="/Breakfast" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-utensils p-1 text-dark"></i>
                <span className="ms-1 d-none d-sm-inline">Breakfast</span>{" "}
              </Link>
            </li>
            <li class ="order">
              <Link to="/Lunch" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-utensils p-1 text-dark"></i>
                <span className="ms-1 d-none d-sm-inline">Lunch</span>{" "}
              </Link>
            </li>
            <li class ="login">
              <Link to="/Snack" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-utensils p-1 text-dark"></i>
                <span className="ms-1 d-none d-sm-inline">Snacks</span>{" "}
              </Link>
            </li>
            <li class="customers">
              <Link to="/Teatime" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-utensils p-1 text-dark"></i>
                <span className="ms-1 d-none d-sm-inline">Teatime</span>{" "}
              </Link>
            </li>
            {/* heading */}
            </ul>
            <hr className="hr" />
            <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
            id="menu">
            <li class ="category-heading">
              <div className={`nav-link text-truncate text-white fw-bold`}>
              <i className=" fs-5 fa-solid fa-list  text-white p-1"></i>
            <span className="ms-1 d-none d-sm-inline  ">Dish-Type</span>{" "}
              </div>
            </li>
            <li  class ="home">
              <Link to="/Bread" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Bread</span>{" "}
              </Link>
            </li>


            <li  class ="dashboard">
              <a href="/Cereals" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Cereals</span>{" "}
              </a>
            </li>
            <li class ="order">
              <Link to="/Condiments And Sauces" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Condiments And Sauces</span>{" "}
              </Link>
            </li>
            <li class ="login">
              <Link to="/Desserts" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Desserts</span>{" "}
              </Link>
            </li>
            <li class ="customers">
              <Link to="/Drinks" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Drinks</span>{" "}
              </Link>
            </li>
            <li class="home">
              <Link to="/MainCourse" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">MainCourse</span>{" "}
              </Link>
            </li>
            <li class="dashboard">
              <Link to="/Pancake" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Pancake</span>{" "}
              </Link>
            </li>
            <li class="order">
              <Link to="/Preps" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Preps</span>{" "}
              </Link>
            </li>
            <li class="login">
              <Link to="/Salad" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Salad</span>{" "}
              </Link>
            </li>
            <li class="customers">
              <Link to="/Sandwiches" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Sandwiches</span>{" "}
              </Link>
            </li>
            <li class="home">
              <Link to="/Soup" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Soup</span>{" "}
              </Link>
            </li>
            <li class="dashboard">
              <Link to="/Starter" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Starter</span>{" "}
              </Link>
            </li>
            <li class="order">
              <Link to="/Sweets" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Sweets</span>{" "}
              </Link>
            </li>
            </ul>
            <hr className="hr" />
            <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
            id="menu">
            <li class ="category-heading">
              <div className={`nav-link text-truncate text-white  fw-bold`}>
              <i className=" fs-5 fa-solid fa-list text-white p-1"></i>
            <span className="ms-1 d-none d-sm-inline ">Deit-Type</span>{" "}
              </div>
            </li>
            <li  class ="home">
              <Link to="/balanced" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-bacon text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">balanced</span>{" "}
              </Link>
            </li>
            <li  class ="dashboard">
              <Link to="/highFiber" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-bacon text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">HighFiber</span>{" "}
              </Link>
            </li>
            <li class ="order">
              <Link to="/Preps" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-bacon text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">high-protein</span>{" "}
              </Link>
            </li>
            <li class ="login">
              <Link to="/highProtein" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-bacon text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">highProtein</span>{" "}
              </Link>
            </li>
            <li class="customers">
              <Link to="/lowCarb" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-bacon text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">lowCarb</span>{" "}
              </Link>
            </li>
            <li class="home">
              <Link to="/lowFat" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-bacon text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">low-fat</span>{" "}
              </Link>
            </li>
            <li class="dashboard">
              <Link to="/Preserve" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-bacon text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Preserve</span>{" "}
              </Link>
            </li>
            
            </ul>
            <hr className="hr "/>
            <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
            id="menu">
               <li  class ="category-heading">
              <div className={`nav-link text-truncate text-white fw-bold`}>
              <i className=" fs-5 fa-solid fa-list text-white p-1"></i>
            <span className="ms-1 d-none d-sm-inline mode">Health</span>{" "}
              </div>
            </li>
              <li class="home">
              <Link to="/alcoholFree" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">alcohol-Free</span>{" "}
              </Link>
            </li>
            <li  class ="dashboard">
              <Link to="/eggFree" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Egg-free</span>{" "}
              </Link>
            </li>
            <li class ="order">
              <Link to="/glutenFree" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">gluten-free</span>{" "}
              </Link>
            </li>
            <li class ="login">
              <Link to="/kidneyFriendly" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">kidney-Friendly</span>{" "}
              </Link>
            </li>
            <li class="customers">
              <Link to="/lowFatAbs" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">low-fat-abs</span>{" "}
              </Link>
            </li>
            <li class="home">
              <Link to="/lowSugar" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">low-sugar</span>{" "}
              </Link>
            </li>
            <li class="dashboard">
              <Link to="/mustardFree" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Mustard-free</span>{" "}
              </Link>
            </li>
            <li class="order">
              <Link to="/noOilAdded" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">No-oil-added</span>{" "}
              </Link>
            </li>
            <li class="login">
              <Link to="/redMeatFree" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">red-meat-free</span>{" "}
              </Link>
            </li>
            <li class="customers">
              <Link to="/vegan" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">vegan</span>{" "}
              </Link>
            </li>
            <li class="home">
              <Link to="/vegetarian" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">vegetarian</span>{" "}
              </Link>
            </li>
             
            </ul>
            <hr className="hr "/>
            <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
            id="menu">
               <li class ="category-heading">
              <div className={`nav-link text-truncate text-white fw-bold`}>
              <i className=" fs-5 fa-solid fa-list text-white p-1"></i>
            <span className="ms-1 d-none d-sm-inline ">Cuisine Type</span>{" "}
              </div>
            </li>
            <li  class ="home">
              <Link to="/American" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-flag text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">American</span>{" "}
              </Link>
            </li>
            <li  class ="dashboard">
              <Link to="/British" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-flag text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">British</span>{" "}
              </Link>
            </li>
            <li class ="order">
              <Link to="/Chinese" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-flag text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Chinese</span>{" "}
              </Link>
            </li>
            <li class ="login">
              <Link to="/French" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-flag text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">French</span>{" "}
              </Link>
            </li>
            <li class="customers">
              <Link to="/Indian" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-flag text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Indian</span>{" "}
              </Link>
            </li>
            <li class="home">
              <Link to="/Japanese" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-flag text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Japanese</span>{" "}
              </Link>
            </li>
            <li class="dashboard">
              <Link to="/Italian" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-flag text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Italian</span>{" "}
              </Link>
            </li>
            <li class="order">
              <Link to="/Mexican" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-flag text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Mexican</span>{" "}
              </Link>
            </li>
            <li class="login">
              <Link to="/SouthAmerican" className="nav-link text-truncate text-white fw-bold">
              <i className="fa-solid fa-flag text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline ">South-American</span>{" "}
              </Link>
            </li>
           
           




          </ul>
         
        </div>
      </div>
    </>
  );
}

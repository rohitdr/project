import React from "react";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div
        className="offcanvas offcanvas-start w-25"
        tabIndex="-1"
        id="offcanvas"
        data-bs-keyboard="false"
        data-bs-backdrop="false"
        style={{ backgroundColor: "#96C2DB" }}
      >
        <div className="offcanvas-header">
          <h6 className="offcanvas-title d-none d-sm-block fw-bold" id="offcanvas">
            Menu
          </h6>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body px-3">
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
            id="menu"
          >
            <li className="nav-item">
              <Link to="/home" className="nav-link text-truncate text-dark fw-bold">
                <i className=" fs fa-sharp fa-solid fa-house"></i>
                <span className="ms-2 d-none d-sm-inline">Home</span>
              </Link>
            </li>
            <li>
              <a
                href="#submenu1"
                data-bs-toggle="collapse"
                className="nav-link text-truncate text-white fw-bold"
                 
              >
                <i className="fa-solid fa-table-columns"></i>
                <span className="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-truncate text-white fw-bold">
                <i className="fs-5 bi-table"></i>
                <span className="ms-1 d-none d-sm-inline">Orders</span>
              </a>
            </li>
            <li className="dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle  text-truncate text-white fw-bold"
                id="dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fs-5 bi-bootstrap"></i>
                <span className="ms-1 d-none d-sm-inline">Bootstrap</span>
              </a>
              <ul
                className="dropdown-menu text-small shadow"
                aria-labelledby="dropdown"
              >
                <li>
                  <a className="dropdown-item text-white fw-bold" href="/">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Profile
                  </a>
                </li>
                <li></li>
                <li>
                  <a className="dropdown-item" href="/">
                    Sign out
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/" className="nav-link text-truncate text-white fw-bold">
                <i className="fs-5 bi-grid"></i>
                <span className="ms-1 d-none d-sm-inline">Products</span>
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-truncate text-white fw-bold">
                <i className="fs-5 bi-people"></i>
                <span className="ms-1 d-none d-sm-inline">Customers</span>{" "}
              </a>
             
            </li>
            </ul>
            <hr class="hr" />
            <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
            id="menu">
            <li>
              <div className="nav-link text-truncate text-dark fw-bold">
              <i class=" fs-5 fa-solid fa-list text-white p-1"></i>
            <span className="ms-1 d-none d-sm-inline ">Meal-Type</span>{" "}
              </div>
            </li>
            <li>
              <Link to="/Dinner" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-utensils p-1 text-dark"></i>
                <span className="ms-1 d-none d-sm-inline">Dinner</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/Breakfast" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-utensils p-1 text-dark"></i>
                <span className="ms-1 d-none d-sm-inline">Breakfast</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/Lunch" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-utensils p-1 text-dark"></i>
                <span className="ms-1 d-none d-sm-inline">Lunch</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/Snack" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-utensils p-1 text-dark"></i>
                <span className="ms-1 d-none d-sm-inline">Snacks</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/Teatime" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-utensils p-1 text-dark"></i>
                <span className="ms-1 d-none d-sm-inline">Teatime</span>{" "}
              </Link>
            </li>
            {/* heading */}
            </ul>
            <hr class="hr" />
            <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
            id="menu">
            <li>
              <div className="nav-link text-truncate text-dark fw-bold">
              <i class=" fs-5 fa-solid fa-list  text-white p-1"></i>
            <span className="ms-1 d-none d-sm-inline ">Dish-Type</span>{" "}
              </div>
            </li>
            <li>
              <Link to="/Bread" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Bread</span>{" "}
              </Link>
            </li>


            <li>
              <a href="/Cereals" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Cereals</span>{" "}
              </a>
            </li>
            <li>
              <Link to="/Condiments And Sauces" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Condiments And Sauces</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/Desserts" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Desserts</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/Drinks" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Drinks</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/MainCourse" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">MainCourse</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/Pancake" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Pancake</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/Preps" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Preps</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/Salad" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Salad</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/Sandwiches" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Sandwiches</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/Soup" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Soup</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/Starter" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Starter</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/Sweets" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-sharp fa-solid fa-bowl-food text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Sweets</span>{" "}
              </Link>
            </li>
            </ul>
            <hr class="hr" />
            <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
            id="menu">
            <li>
              <div className="nav-link text-truncate text-dark fw-bold text-dark fw-bold">
              <i class=" fs-5 fa-solid fa-list text-white p-1"></i>
            <span className="ms-1 d-none d-sm-inline ">Deit-Type</span>{" "}
              </div>
            </li>
            <li>
              <Link to="/balanced" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-bacon text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">balanced</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/highFiber" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-bacon text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">HighFiber</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/Preps" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-bacon text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">high-protein</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/highProtein" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-bacon text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">highProtein</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/lowCarb" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-bacon text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">lowCarb</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/lowFat" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-bacon text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">low-fat</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/Preserve" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-bacon text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Preserve</span>{" "}
              </Link>
            </li>
            
            </ul>
            <hr class="hr "/>
            <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
            id="menu">
               <li>
              <div className="nav-link text-truncate text-dark fw-bold text-dark fw-bold">
              <i class=" fs-5 fa-solid fa-list text-white p-1"></i>
            <span className="ms-1 d-none d-sm-inline ">Health</span>{" "}
              </div>
            </li>
              <li>
              <Link to="/alcoholFree" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">alcohol-Free</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/eggFree" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Egg-free</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/glutenFree" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">gluten-free</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/kidneyFriendly" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">kidney-Friendly</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/lowFatAbs" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">low-fat-abs</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/lowSugar" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">low-sugar</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/mustardFree" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">Mustard-free</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/noOilAdded" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">No-oil-added</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/redMeatFree" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">red-meat-free</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/vegan" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">vegan</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/vegetarian" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">vegetarian</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/wheatFree" className="nav-link text-truncate text-white fw-bold">
              <i class="fa-solid fa-wheat-awn-circle-exclamation text-dark p-1"></i>
                <span className="ms-1 d-none d-sm-inline">wheat-free</span>{" "}
              </Link>
            </li>
           




          </ul>
         
        </div>
      </div>
    </>
  );
}

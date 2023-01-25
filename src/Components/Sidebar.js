import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Recipe from "./Recipe";
import RecipeItem from "./RecipeItem";
import Recipe_Category from "./Recipe_Category";
import Searchbar from "./Searchbar";

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
          <h6 className="offcanvas-title d-none d-sm-block" id="offcanvas">
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
              <Link to="/home" className="nav-link text-truncate">
                <i className=" fs fa-sharp fa-solid fa-house"></i>
                <span className="ms-2 d-none d-sm-inline">Home</span>
              </Link>
            </li>
            <li>
              <a
                href="#submenu1"
                data-bs-toggle="collapse"
                className="nav-link text-truncate"
              >
                <i className="fa-solid fa-table-columns"></i>
                <span className="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-truncate">
                <i className="fs-5 bi-table"></i>
                <span className="ms-1 d-none d-sm-inline">Orders</span>
              </a>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle  text-truncate"
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
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li></li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="nav-link text-truncate">
                <i className="fs-5 bi-grid"></i>
                <span className="ms-1 d-none d-sm-inline">Products</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-truncate">
                <i className="fs-5 bi-people"></i>
                <span className="ms-1 d-none d-sm-inline">Customers</span>{" "}
              </a>
            </li>
            <li>
              <Link to="/Dinner"  className="nav-link text-truncate">
                <i className="fs-5 bi-people"></i>
                <span className="ms-1 d-none d-sm-inline">Dinner</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/Breakfast" className="nav-link text-truncate">
                <i className="fs-5 bi-people"></i>
                <span className="ms-1 d-none d-sm-inline">Breakfast</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/Lunch" className="nav-link text-truncate">
                <i className="fs-5 bi-people"></i>
                <span className="ms-1 d-none d-sm-inline">Lunch</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/Snack" className="nav-link text-truncate">
                <i className="fs-5 bi-people"></i>
                <span className="ms-1 d-none d-sm-inline">Snacks</span>{" "}
              </Link>
            </li>
            <li>
            <Link to="/Teatime" className="nav-link text-truncate">
                <i className="fs-5 bi-people"></i>
                <span className="ms-1 d-none d-sm-inline">Teatime</span>{" "}
              </Link>

            </li>
            <li>
            <Link to="/bread" className="nav-link text-truncate">
                <i className="fs-5 bi-people"></i>
                <span className="ms-1 d-none d-sm-inline">side-dish</span>{" "}
              </Link>
              
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

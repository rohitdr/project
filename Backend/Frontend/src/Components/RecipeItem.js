import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./RecipeItem.css";

import RecipeContext from "../Context/RecipeContext";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function RecipeItem(props) {
  const [heart, setHeart] = useState("regular");
  const context = useContext(RecipeContext);
 

  const [star, setstar] = useState(0);
  let location = useLocation();
  const {
    deleteRecipe,
    RecipeBYId,
    LikeRecipe,
    UnLikeRecipe,
    setCurrentRecipeItemid,
    getUserbyid,
   userData,
    getUser,
 
  } = context;
/* Creating a variable called Navigate that is using the useNavigate hook. */
  let Navigate = useNavigate();
  //to captalize first character


/* Calling the getUserbyid and getUser functions when the component mounts. */
  useEffect(() => {

      if (userData?.user?.Liked_Recipe?.includes(props.id)) {
        setHeart("solid");
      } else {
        setHeart("regular");
      }


  }, [sessionStorage.getItem('auth-token'),localStorage.getItem('auth-token')]);
/* Setting the state of the heart to regular. */



 /**
  * If the userData object has a user object that has a Liked_Recipe object that includes the props.id,
  * then set the heart to solid. Otherwise, set the heart to regular.
  */
 
/* A React hook that is used to run code after a component renders. */
  React.useEffect(() => {}, [location]);

 

  var deg = 180;
  const onclickRotate = () => {
    //  getUserbyid(props.user);
    document.getElementById(
      `${props.id}`
    ).style.transform = `rotateY(${deg}deg)`;

    deg = deg === 180 ? 0 : 180;
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: props.delay }}
      >
        <div className="scene  " >
          <div
            className="recipecard  card border-success"
            id={`${props.id}`}
            style={{ Width: "18rem",height:"525px" }}
          >
            <div className="face front" style={{height:"525px"}}>
              <img
                src={props.ImageUrl}
                className="card-img-top border-primary recipeitemimageopacity box_decrease_size_animation"
                alt="..."
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h6 className="card-title text-warning text-start recipeitemtext">
                    {" "}
                    {props.source}
                  </h6>
                  <h6 className="card-title text-primary text-start">
                    <div
                      onClick={() => {
                        Navigate(
                          `${
                            !sessionStorage.getItem("auth-token") &&
                            !localStorage.getItem("auth-token")
                              ? "/login"
                              : "/Individual_description"
                          }`,
                          { state: { RecipeItemid: props.id } }
                        );
                      }}
                    >
                      <i className="fa-solid fs-4 fa-diamond-turn-right"></i>
                    </div>
                  </h6>
                </div>
                <h4 className="card-subtitle mb-2 text-dark fw-bold recipeitemtext ">
                  {props.title}
                </h4>
                <p className="card-text mb-0 text-dark recipeitemtext">
                  {" "}
                  {props.Ingridiants}
                </p>

                <div className="card-text mb-0 text-dark d-flex justify-content-between">
                  <p>
                    <i
                      className={`fa-${
                        props.rating > 0 ? "solid" : "regular"
                      } text-danger fa-star`}
                      onClick={() => {
                        setstar(1);
                      }}
                    ></i>
                    <i
                      className={`fa-${
                        props.rating > 1 ? "solid" : "regular"
                      } text-danger fa-star`}
                      onClick={() => {
                        setstar(2);
                      }}
                    ></i>
                    <i
                      className={`fa-${
                        props.rating > 2 ? "solid" : "regular"
                      } text-danger fa-star`}
                      onClick={() => {
                        setstar(3);
                      }}
                    ></i>
                    <i
                      className={`fa-${
                        props.rating > 3 ? "solid" : "regular"
                      } text-danger fa-star`}
                      onClick={() => {
                        setstar(4);
                      }}
                    ></i>
                    <i
                      className={`fa-${
                        props.rating > 4 ? "solid" : "regular"
                      } text-danger fa-star`}
                      onClick={() => {
                        setstar(5);
                      }}
                    ></i>
                  </p>
                  <i
                    className="fa-solid fa-right-left"
                    onClick={onclickRotate}
                  ></i>
                </div>
              </div>
              <ul className="list-group list-group-flush ">
                <li className="list-group-item  mb-0 d-flex justify-content-between">
                  <i className="fa-solid fs-5 fa-comment"  onClick={() => {
                        Navigate(
                          `${
                            !sessionStorage.getItem("auth-token") &&
                            !localStorage.getItem("auth-token")
                              ? "/login"
                              : "/Individual_description"
                          }`,
                          { state: { RecipeItemid: props.id } }
                        );
                      }}></i>
                  <motion.p initial={{scale:0.8}} whileHover={{scale:1.5}} ><i
                    className={`fa-${heart} fa-heart fs-5 recipeitemlike text-danger`}
                    onClick={() => {
                      if (
                        !sessionStorage.getItem("auth-token") &&
                        !localStorage.getItem("auth-token")
                      ) {
                        Navigate("/login");
                      } else {
                        if (heart === "regular") {
                          LikeRecipe(props.id);
                          setHeart("solid");
                        }
                        if (heart == "solid") {
                          UnLikeRecipe(props.id);
                          setHeart("regular");
                        }
                      }
                    }}
                  ></i></motion.p>
                
                </li>
              </ul>
              <div className="card-img-overlay"  onClick={() => {
                        Navigate(
                          `${
                            !sessionStorage.getItem("auth-token") &&
                            !localStorage.getItem("auth-token")
                              ? "/login"
                              : "/Individual_description"
                          }`,
                          { state: { RecipeItemid: props.id } }
                        );
                      }}>
                <div className="row">
                  <div className="col-md-2">
                    <p className="badge recipeitembadgeopacity text-success fw-bold  fs-5 m-1">
                      {props.health_labels[1]}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <p className="badge recipeitembadgeopacity text-success fs-5 m-1">
                      {props.health_labels[2]}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <p className="badge recipeitembadgeopacity text-success  fs-5 m-1">
                      {props.health_labels[3]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-footer recipeitemtext">
                <i className="fa-regular me-2 fa-clock"></i>
                {new Date(props.date).toLocaleString().substring(0, 19)}
              </div>
            </div>

            <div className="back ">
              <div className="card testimonial-card pt-4 ">
                <div className="card-up"></div>
                <div className="avatar mb-1 mx-auto bg-white">
                  <img
                    src={props.userData?.Profile_Image}
                    className="rounded-circle img-fluid"
                    style={{ height: "250px" }}
                  />
                </div>
                <div className="card-body text-center pt-2">
                  <h3 className="mb-2 fw-bold card-title">
                    {props.userData?.first_name} {userData?.last_name}
                  </h3>
                  <hr />
                  <ul className="list-group list-group-flush">
                    <div className="card-text text-dark mb- d-flex justify-content-between">
                      <p className="text-dark">
                        <i 
                          className={`fa-solid text-danger recipeitemstar fa-star`}
                         
                        > </i> {props.userData?.Total_Comments} +
                      </p>
                      <i
                        className="fa-solid fa-right-left "
                        onClick={onclickRotate}
                      ></i>
                    </div>

                    <div className="card-text mb-3 text-dark d-flex justify-content-evenly">
                      <h6 className="text-dark">
                        {props.userData?.Liked_Recipe?.length}
                      </h6>
                      <h6 className="text-dark">{props.userData?.Total_Recipes}</h6>
                      <h6 className="text-dark">{props.userData?.Total_Comments}</h6>
                    </div>
                    <p className="card-text text-dark mb-3 d-flex justify-content-evenly">
                      <i className="fa-heart fa-solid fs-4 text-danger"></i>
                      <i className="fa-solid fa-utensils fs-4 "></i>
                      <i className="fa-solid fs-4 fa-comment"></i>
                    </p>
                    <p className="card-text text-dark d-flex justify-content-around">   
                      <i className="fas fa-globe  fs-2 fw-bold text-success" onClick={()=>{window.location.href=props.userData?.git}}></i>
                      <i className=" fab fa-github  fs-2 fw-bold text-danger" onClick={()=>{window.location.href=props.userData?.web}}></i>
                      <i className="fa-brands fa-facebook   fs-2 fw-bold text-primary" onClick={()=>{window.location.href=props.userData?.facebook}}> </i>
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

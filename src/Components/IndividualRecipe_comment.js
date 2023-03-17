import React, { useContext, useEffect, useState } from "react";
import RecipeContext from "../Context/RecipeContext";

import { Modal, Image, Text } from "@nextui-org/react";
import { Link, useLocation,useNavigate } from 'react-router-dom';
export default function IndividualRecipe_comment() {
  const [visible, setVisible] = useState(false);
  const [visiblerepeted, setvisiblerepeted] = useState(false);
  const [star, setstar] = useState(0);
  const {state}=useLocation();
  const {RecipeItemid}=state
  
  const context = useContext(RecipeContext);
  const {
    CurrentRecipeItem,
    CurrentRecipeItemid,
    setProgress,
    getUser,
    userData,
    setLoading,RecipeBYId
  } = context;
 
  useEffect(()=>{
 
    getUser();
    RecipeBYId(RecipeItemid)
    },[RecipeItemid])
  const Comment = async (comment, rating) => {
    setProgress(30);
    console.log(CurrentRecipeItemid);
    const response = await fetch(
      "http://localhost:5000/api/recipe/commentreicpe",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": sessionStorage.getItem("auth-token"),
          'auth-token':sessionStorage.getItem("auth-token")?sessionStorage.getItem("auth-token"):localStorage.getItem("auth-token")
        },
        body: JSON.stringify({
          id: CurrentRecipeItemid,
          comment: {
            username: userData?.user?.username,
            Profileimage: userData?.user?.Profile_Image,
            comment: comment,
            rating: rating,
          },
        }),
      }
    );
    setProgress(50);
    let result = await response.json();
    if (response.status == 404) {
      setProgress(100);
      setvisiblerepeted(true);
      setTimeout(() => {
        setvisiblerepeted(false);
      }, 4000);
    } else {
      setProgress(100);
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 4000);
    }
  };

  const submitcomment = () => {
    let comment = document.getElementById("validationTextareaforcomment").value;
    let rating = star;
    Comment(comment, rating);
  };
  return (
    <div>
      <div style={{ backgroundColor: " #edf1f5" }} className="pb-4">
        <div className="container pt-4 " id="product-section">
          <div className="container ">
            <div className="row">
              <div className="col-lg-12">
                <div className="card box_decrease_size_animation">
                  <div className="row">
                    <div className="col-sm-12 col-lg-4">
                      <div className="card-body">
                        <h4 className="card-title">Reviews</h4>
                        <h5 className="card-subtitleratingview">
                          Overview of Review
                        </h5>
                        <h2 className="font-medium mt-5 mb-0">25426</h2>
                        <span className="text-muted">
                          This month we got 346 New Reviews
                        </span>
                        <div className="image-box mt-4 mb-4">
                          <a
                            href="#"
                            className="mr-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Simmons"
                          >
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar1.png"
                              className="rounded-circle"
                              width="45"
                              alt="user"
                            />
                          </a>
                          <a
                            href="#"
                            className="mr-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Fitz"
                          >
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar2.png"
                              className="rounded-circle"
                              width="45"
                              alt="user"
                            />
                          </a>
                          <a
                            href="#"
                            className="mr-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Phil"
                          >
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar3.png"
                              className="rounded-circle"
                              width="45"
                              alt="user"
                            />
                          </a>
                          <a
                            href="#"
                            className="mr-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Melinda"
                          >
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar4.png"
                              className="rounded-circle"
                              width="45"
                              alt="user"
                            />
                          </a>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-lg btn-info waves-effect waves-light"
                        >
                          Checkout All Reviews
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-8 border-left">
                      <div className="card-body">
                        <ul className="list-style-none">
                          <li className="mt-4">
                            <div className="d-flex align-items-center">
                              <i className="fa fa-smile-o display-5ratingview text-muted"></i>
                              <div className="ml-2">
                                <h5 className="mb-0">Positive Reviews</h5>
                                <span className="text-muted">25547 Reviews</span>
                              </div>
                            </div>
                            <div className="progressratingview">
                              <div
                                className="progress-barratingview bg-success"
                                role="progressbar"
                                style={{ width: "47%" }}
                                aria-valuenow="47"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>
                          <li className="mt-5">
                            <div className="d-flex align-items-center">
                              <i className="fa fa-frown-o display-5ratingview text-muted"></i>
                              <div className="ml-2">
                                <h5 className="mb-0">Negative Reviews</h5>
                                <span className="text-muted">5547 Reviews</span>
                              </div>
                            </div>
                            <div className="progressratingview">
                              <div
                                className="progress-barratingview bg-danger"
                                role="progressbar"
                                style={{ width: "33%" }}
                                aria-valuenow="33"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>
                          <li className="mt-5 mb-5">
                            <div className="d-flex align-items-center">
                              <i className="fa fa-meh-o display-5ratingview text-muted"></i>
                              <div className="ml-2">
                                <h5 className="mb-0">Neutral Reviews</h5>
                                <span className="text-muted">547 Reviews</span>
                              </div>
                            </div>
                            <div className="progressratingview">
                              <div
                                className="progress-barratingview bg-info"
                                role="progressbar"
                                style={{ width: "20%" }}
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>

          {/* // Reviews */}

          <div className="bg-white rounded shadow-sm p-4 my-4 restaurant-detailed-ratings-and-reviews box_decrease_size_animation">
            <a href="#" className="btn btn-outline-primary btn-sm float-right">
              Top Rated
            </a>
            <h5 className="mb-1">All Ratings and Reviews</h5>
            <div className="reviews-members pt-4 pb-4 ">
            {CurrentRecipeItem.recipe && CurrentRecipeItem.recipe.map((element)=>{
               return element.Comments.map((ele)=>{
                return <><div className="media row" key={ele._id}>
                <div className="col-md-1">
                  <a href="#">
                    <img
                      alt="Generic placeholder image pb-1"
                      src="http://bootdey.com/img/Content/avatar/avatar6.png"
                      className="mr-3 rounded-pill"
                    />
                  </a>
                </div>
                <div className="col-md-11">
                  <div className="media-body">
                    <div className="reviews-members-header">
                      <h6 className="">
                        <p className="text-black mb-0 ">{ele._id}</p>
                      </h6>
                      <p className="text-gray mx-2">{new Date(ele.date).toLocaleString()}</p>
                    </div>
                    <div className="reviews-members-body">
                    <span className="star-rating">
                <i
                  className={`fa-${
                    ele.rating > 0 ? "solid" : "regular"
                  } text-danger fa-star`}
                  
                ></i>
                <i
                  className={`fa-${
                    ele.rating > 1 ? "solid" : "regular"
                  } text-danger fa-star`}
                  
                ></i>
                <i
                  className={`fa-${
                    ele.rating > 2 ? "solid" : "regular"
                  } text-danger fa-star`}
                  
                ></i>
                <i
                  className={`fa-${
                    ele.rating > 3 ? "solid" : "regular"
                  } text-danger fa-star`}
                
                ></i>
                <i
                  className={`fa-${
                    ele.rating > 4 ? "solid" : "regular"
                  } text-danger fa-star`}
                 
                ></i>
              </span>
                      <p>
                     {ele.comment}
                      </p>
                    </div>
                  </div>
                </div>
              </div> <hr /> </>
                })
               })}
             
            </div>
         
            {/* <a className="text-center w-100 d-block mt-4 font-weight-bold" href="#">
              See All Reviews
            </a> */}
          </div>

          {/* leave a comment */}
          <div className="bg-white rounded shadow-sm p-4 box_decrease_size_animation rating-review-select-page">
            <h5 className="mb-4">Leave Comment</h5>
            <p className="mb-2">Rate the Place</p>
            <div className="mb-4">
              <span className="star-rating">
                <i
                  className={`fa-${
                    star > 0 ? "solid" : "regular"
                  } text-danger fa-star`}
                  onClick={() => {
                    setstar(1);
                  }}
                ></i>
                <i
                  className={`fa-${
                    star > 1 ? "solid" : "regular"
                  } text-danger fa-star`}
                  onClick={() => {
                    setstar(2);
                  }}
                ></i>
                <i
                  className={`fa-${
                    star > 2 ? "solid" : "regular"
                  } text-danger fa-star`}
                  onClick={() => {
                    setstar(3);
                  }}
                ></i>
                <i
                  className={`fa-${
                    star > 3 ? "solid" : "regular"
                  } text-danger fa-star`}
                  onClick={() => {
                    setstar(4);
                  }}
                ></i>
                <i
                  className={`fa-${
                    star > 4 ? "solid" : "regular"
                  } text-danger fa-star`}
                  onClick={() => {
                    setstar(5);
                  }}
                ></i>
              </span>
            </div>

            <form className="was-validated">
              <div className="mb-3">
                <label for="validationTextarea" className="form-label">
                  Enter Your Comment
                </label>
                <textarea
                  className="form-control"
                  id="validationTextareaforcomment"
                  placeholder="Please enter Your Comment"
                  required
                ></textarea>
                <div className="invalid-feedback">Please enter a Comment.</div>
              </div>
              <div className="form-group py-2">
                <button
                  className="btn btn-primary btn-sm"
                  type="button"
                  onClick={submitcomment}
                >
                  {" "}
                  Submit Comment{" "}
                </button>
              </div>
            </form>
          </div>
        </div>{" "}
      </div>

      {/* //modal for confirmation of successful comment */}
      <Modal noPadding open={visible} blur>
        <Modal.Header
          css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
        ></Modal.Header>
        <Modal.Body>
          <Image
            showSkeleton
            src="https://media.tenor.com/bXwaPdcTgc8AAAAC/jethalal-funny-dance-tarak-mehta-ka-ooltah-chashmah.gif"
            width={400}
            height={490}
          />
        </Modal.Body>
      </Modal>
      {/* modal for repeted commments */}
      <Modal noPadding open={visiblerepeted} blur>
        <Modal.Header
          css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
        ></Modal.Header>
        <Modal.Body>
          <Image
            showSkeleton
            src="https://media.tenor.com/doK11QWgHskAAAAC/yeh-mauka-baar-baar-nahi-milega-mauka.gif"
            width={400}
            height={490}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

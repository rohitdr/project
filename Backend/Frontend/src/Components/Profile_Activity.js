import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import RecipeContext from "../Context/RecipeContext";
import NoResult from "./NoResult";
import InternalServerError from "./InternalServerError";
import { Modal, Image, Button } from "@nextui-org/react";
import AnimatedPage from "./AnimatedPage";

export default function Profile_Activity() {
/* A hook that is used to store the state of the component. */
  const [visibledelete, setvisibledelete] = useState({ state: false, id: "" });
  const context = useContext(RecipeContext);
  const [totalLikes, settotalLikes] = useState(0);
 /* Destructuring the context object. */
  const {
    getUser,
    userData,
    LatestRecipebyid,
    Latest_recipebyid,
    deleteRecipe,
    recipe,
  } = context;
/* A hook that is used to navigate to a different page. */
  let Navigate = useNavigate();
/* Checking if the user is logged in or not. If the user is not logged in, it will redirect the user to
the login page. */
  useEffect(() => {
    document.title=`RecipeRiot-Activities`
    if (
      !sessionStorage.getItem("auth-token") &&
      !localStorage.getItem("auth-token")
    ) {
      Navigate("/login");
    } else {
   

      LatestRecipebyid();
    }
  }, []);
 /**
  * When the user clicks on the delete button, the delete modal is displayed and the id of the recipe
  * is passed to the modal.
  * @param id - the id of the recipe
  */
  const deleterecipe = (id) => {
    setvisibledelete({ state: true, id: id });
  };

  return (
    <>
      <AnimatedPage>
        {userData == 500 || Latest_recipebyid == 500 ||recipe==500 ? (
          <InternalServerError></InternalServerError>
        ) : (
          <div>
            <div className="min-vh-100">
              <div className="row">
                <div className="col-lg-4 mb-4">
                  <div className="card h-100 border-start-lg border-start-primary box_decrease_size_animation">
                    <div className="card-body">
                      <div className="small text-muted">Total Recipes</div>
                      <div className="h3">{userData?.totalResults}</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="card h-100 border-start-lg border-start-secondary box_decrease_size_animation">
                    <div className="card-body">
                      <div className="small text-muted">Total Likes Got</div>
                      <div className="h3">
                        {userData?.user?.Liked_Recipe?.length}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="card h-100 border-start-lg border-start-success box_decrease_size_animation">
                    <div className="card-body">
                      <div className="small text-muted">Total Comments Got</div>
                      <div className="h3 d-flex align-items-center">
                        {userData?.user?.Total_Comments}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {!Latest_recipebyid ? (
                <NoResult
                  img="https://media.tenor.com/unvXyxtdn3oAAAAC/no-result.gif"
                  heading="No Result found"
                  paragraph="Whoops.... You had not uploaded any Recipe yet"
                ></NoResult>
              ) : (
                <div className="card card-header-actions mb-4 ">
                  <div className="card-header">Latest Recipes</div>

                  <div className="card-body border-primary px-0">
                    {Latest_recipebyid.recipe &&
                      Latest_recipebyid.recipe.map((element) => {
                        return (
                          <div key={element._id}>
                            <div className="d-flex align-items-center justify-content-between px-4 latestrecipelibox py-2">
                              <div className="d-flex align-items-center">
                                <img
                                  src={element.image}
                                  className="img-fluid shadow-1-strong rounded latest_recipe_image Profile_activity_latest_image "
                                  alt="Latest Recipe Image"
                                />
                                <div className="ms-4">
                                  <div className="small">{element.label}</div>
                                  <div className="text-xs text-muted">
                                    {new Date(element.date).toLocaleString()}
                                  </div>
                                </div>
                              </div>
                              <div className="ms-4 small row">
                                <div className="me-2 p-1 col">
                                  {" "}
                                  <Button
                                    onPress={() => {
                                      deleterecipe(element._id);
                                    }}
                                    color="error"
                                    auto
                                    ghost
                                  >
                                    <i className="fa-sharp fa-solid fa-trash"></i>
                                  </Button>
                                </div>
                                <div className="col p-1">
                                  <Button
                                    color="primary"
                                    auto
                                    ghost
                                    onPress={() => {
                                      Navigate("/Edit", {
                                        state: { EditingRecipeId: element._id },
                                      });
                                    }}
                                  >
                                    <i className="fa-solid fa-pen-to-square"></i>
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <hr />
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>

            {/* modal for confirmation of deleting the recipe */}

            <Modal noPadding open={visibledelete.state} blur>
              <Modal.Header
                css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
              ></Modal.Header>
              <Modal.Body>
                <Image
                  showSkeleton
                  src="https://media.tenor.com/IGYZtNLXHIwAAAAC/sunda-ko-aa-mast-naha-dho-ke-aa-paresh-rawal-baburao.gif"
                  width={400}
                  height={490}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button
                  auto
                  flat
                  color="error"
                  onClick={() => {
                    setvisibledelete({ state: false, id: "" });
                  }}
                >
                  Close
                </Button>
                <Button
                  auto
                  onClick={() => {
                    deleteRecipe(visibledelete.id);
                    setvisibledelete({ state: false, id: "" });
                  }}
                >
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}
      </AnimatedPage>
    </>
  );
}

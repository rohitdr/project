import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import RecipeContext from "../Context/RecipeContext";
import AnimatedPage from "./AnimatedPage";
import InternalServerError from "./InternalServerError";
import RecipeItem from "./RecipeItem";

export default function Meal() {
  /**
   * It takes a string, makes it lowercase, then capitalizes the first letter and returns the string.
   * @param message - The message you want to capitalize.
   * @returns the first letter of the string in uppercase and the rest of the string in lowercase.
   */
  const firstCapital = (message) => {
    let lower = message.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  /* A hook that is used to get the state of the current location. */
  const { state } = useLocation();
  var animationdelay = 0;
  const context = useContext(RecipeContext);
  const { mealtype, mealdata } = context;
  const { type, on } = state;
  /* A hook that is used to perform side effects in a functional component. */
  useEffect(() => {
    document.title=`RecipeRiot-${firstCapital(type)}  Recipes`
    mealtype(type);
  }, [type]);
  return (
    <>
      <AnimatedPage>
        {mealdata == 500 ? (
          <InternalServerError></InternalServerError>
        ) : (
          <div className="container min-vh-100">
            <div className="row my-3">
              <h1
                className="text-center my-4 fw-bold text-dark"
                style={{
                  opacity: "0",
                  animation: "drop .4s linear forwards 1s",
                }}
              >
                {firstCapital(type)} Recipes
              </h1>

              {mealdata.recipe &&
                mealdata.recipe.map((element) => {
                  if (animationdelay >= 2) {
                    animationdelay = 0;
                  }
                  animationdelay += 0.5;
                  return (
                    <div
                      className="col-md-3 mt-4 profilerecipe box_decrease_size_animation_for_recipeitem"
                      key={element._id}
                    >
                      <RecipeItem
                        id={element._id}
                        delay={animationdelay}
                        title={element.label}
                        topLeftColor={"dark"}
                        headingColor={"dark"}
                        ImageUrl={element.image}
                        user={element.user}
                        date={element.date}
                        health_labels={element.healthLabels}
                        Ingridiants={element.ingredientLines
                          .toString()
                          .replace(",", " and ")
                          .substring(0, 60)}
                        caleroies={Math.ceil(element.calories)}
                        fat={
                          element.totalNutrients.FAT.quantity
                            ? Math.ceil(element.totalNutrients.FAT.quantity)
                            : " "
                        }
                        caution={element.cautions}
                        time={element.totalTime}
                        source={element.source}
                        sugar={element.totalNutrients.SUGAR.quantity}
                        water={element.totalNutrients.WATER.quantity}
                        chole={element.totalNutrients.CHOLE.quantity}
                        vitamin_a={element.totalNutrients.VITA_RAE.quantity}
                        vitamin_c={element.totalNutrients.VITC.quantity}
                        vitamin_b6={element.totalNutrients.VITB6A.quantity}
                        vitamin_d={element.totalNutrients.VITD.quantity}
                        vitamin_e={element.totalNutrients.TOCPHA.quantity}
                      ></RecipeItem>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </AnimatedPage>
    </>
  );
}

import React, { useContext, useEffect } from "react";

import RecipeContext from "../Context/RecipeContext";
import RecipeItem from "./RecipeItem";
export default  function Profile(props){
  var id =1;
    const context = useContext(RecipeContext)
    const {recipe,allRecipe} = context
    useEffect(()=>{
     allRecipe()
  // eslint-disable-next-line
    },[])
   
return(
<>
<div className="container">
<div className="row my-3">
  
    <h2>Your Reicpes</h2>
  
       {recipe.recipe && recipe.recipe.map((element)=>{
      
        return <div className="col-md-6 mt-4 " key={element._id}>
                    <RecipeItem
                      id={element._id}
                        title={element.label}
                        topLeftColor={"dark"}
                        headingColor={"dark"}
                      ImagesUrl={element.image}
                    
                      health_labels={element.healthLabels
                        .toString()
                        .substring(0,120)}
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
                      // vitamin_k={element.totalNutrients.VITK1.quantity}
                    ></RecipeItem>
                  
                  </div>
       
       
       })}</div>
</div>
</>
)
}

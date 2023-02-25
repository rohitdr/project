import RecipeItem from "./RecipeItem";
import React, {  useEffect, useState } from "react";
import Loader from "./Loader";


import InfiniteScroll from "react-infinite-scroll-component";

export default  function Recipe(props)  {


  const [article, setArticle]=useState([])
  const[loading, setLoading] = useState(true)
  const[nextPage, setNextPage]= useState("")
  const [count , setCount]=useState(0)
  
   const fetchMoreData = async () => {
    let url = nextPage;
    
    
    let data = await fetch(url);
    let parse_data = await data.json();
   
    setArticle(article.concat(parse_data.hits))
    setNextPage(parse_data._links.next.href)
    setLoading(false)
    setCount(parse_data.count)

  };
  
  
  const initailizing=async()=>{
    props.setProgress(10)
    let url ="https://api.edamam.com/api/recipes/v2?type=public&app_id=8717089a&app_key=35658ee1215cbd7922d388170b7509f0&cuisineType=Asian";
 
    props.setProgress(30)
    let data = await fetch(url);
    props.setProgress(50)
    let parse_data = await data.json();
    props.setProgress(70)
   
    setArticle(parse_data.hits)
    setLoading(false)
    setNextPage(parse_data._links.next.href)
    props.setProgress(100)
  }
  useEffect( () => {
   initailizing()
  } ,[])

    return (
      <>
         {loading && <Loader></Loader>}
        
          <h1 className={`text-center text-${props.title}`}>Top-Recepies</h1>
          
          <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length !== count}
          loader={<Loader/>}
          >
            <div className="container">
          <div className="row">
            {article.map((element) => {
                return (
                  <div className="col-md-3 mt-4" key={element.recipe.uri}>
                    <RecipeItem
                      topLeftColor={props.topLeftColor}
                      headingColor={props.headingColor}
                      title={element.recipe.label}
                      ImagesUrl={element.recipe.images.SMALL.url}
                      url={element.recipe.shareAs}
                      health_labels={element.recipe.healthLabels}
                      Ingridiants={element.recipe.ingredientLines
                        .toString()
                        .replace(",", " and ")
                        .substring(0, 110)}
                      caleroies={Math.ceil(element.recipe.calories)}
                      fat={
                        element.recipe.totalNutrients.FAT.quantity
                          ? Math.ceil(
                              element.recipe.totalNutrients.FAT.quantity
                            )
                          : " "
                      }
                      caution={element.recipe.cautions}
                      time={element.recipe.totalTime}
                      source={element.recipe.source}
                      sugar={element.recipe.totalNutrients.SUGAR.quantity}
                      water={element.recipe.totalNutrients.WATER.quantity}
                      chole={element.recipe.totalNutrients.CHOLE.quantity}
                      vitamin_a={
                        element.recipe.totalNutrients.VITA_RAE.quantity
                      }
                      vitamin_c={element.recipe.totalNutrients.VITC.quantity}
                      vitamin_b6={element.recipe.totalNutrients.VITB6A.quantity}
                      vitamin_d={element.recipe.totalNutrients.VITD.quantity}
                      vitamin_e={element.recipe.totalNutrients.TOCPHA.quantity}
                      vitamin_k={element.recipe.totalNutrients.VITK1.quantity}
                    ></RecipeItem>
                  </div>
                );
              })}
          </div>
         
         
        </div>
       
        </InfiniteScroll>

      
      </>
    );
  }


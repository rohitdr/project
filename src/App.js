import "./App.css";
import Sidebar from "./Components/Sidebar.js";
import Searchbar from "./Components/Searchbar";
import Recipe from "./Components/Recipe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeCategory from "./Components/RecipeCategory";
import { useState } from "react";
import Individual_Recipe from "./Components/Individual_Recipe";


function App() {
  const [mode, setMode]=useState("light mode")
  const [button_label, setButton_label]=useState("Dark mode")
 const[textColor, setTextColor]=useState("dark")
 const[textColor_button, setTextColor_button]=useState("dark")
const[color, setColor]=useState("dark")
const[topLeftColor, settopLeftColor]=useState("white")
const[headingColor,setheadingColor]=useState("dark")
document.body.style.backgroundColor="#5F9EA0"

 const Mode_handler=()=>{
    if(mode==="light mode"){
      setMode("dark mode")
      setButton_label("Light Mode")
      document.body.style.backgroundColor="grey"
      document.getElementById("Searchbar").style.backgroundColor="#36454F"
         setTextColor("white")
      document.getElementById("offcanvas").style.backgroundColor="#36454F"
      setTextColor_button("black")
      setColor("white")
      settopLeftColor("#B8B8B8")
      settopLeftColor("	#202020")
setheadingColor("white")
     
    }
    if(mode==="dark mode"){
      setMode("light mode")
      setButton_label("Dark Mode")
  
       document.body.style.backgroundColor="#5F9EA0"
      document.getElementById("Searchbar").style.backgroundColor="#89CFF0"
      document.getElementById("offcanvas").style.backgroundColor="#89CFF0"
     setTextColor_button("white")
      setTextColor("black")
      setColor("dark")
      settopLeftColor("white")
      setheadingColor("dark")
    }

 }
  return (
    <>
      <BrowserRouter>
        <Sidebar color={textColor} crossColor={color}></Sidebar>
        <div className="">
          <div className="row">
            <div className="col min-vh-120">
              <Searchbar onClick={Mode_handler} size="large" label={button_label} type = {color} textcolor ={textColor_button}> </Searchbar>
           

              <Routes>
                <Route exact path="/home" element={<Recipe title={textColor}   topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button}></Recipe>} />
                <Route
                  exact
                  path="/Dinner"
                  element={
                    <RecipeCategory
                     textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Dinner"
                      heading="Dinner Recipes"
                      category={"mealType=Dinner"}
                    ></RecipeCategory>
                  }
                />
                <Route
                  exact
                  path="/Breakfast"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Breakfast"
                      heading="Breakfast Recipes"
                      category={"mealType=Breakfast"}
                    ></RecipeCategory>
                  }
                />
                <Route
                  path="/Lunch"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Lunch"
                      heading="Lunch Recipes"
                      category={"mealType=Lunch"}
                    ></RecipeCategory>
                  }
                />
                <Route
                  path="/Snack"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Snack"
                      heading="Snack Recipes"
                      category={"mealType=Snack"}
                    ></RecipeCategory>
                  }
                />
                <Route
                  path="/Teatime"
                  element={
                    <RecipeCategory
                    Key="Teatime"
                      heading="Teatime Recipes"
                      category={"mealType=Teatime"}
                    ></RecipeCategory>
                  }
                />
                <Route
                  path="/Bread"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Bread"
                      heading="Bread Recipes"
                      category={"dishType=Bread"}
                    ></RecipeCategory>
                  }
                />


                <Route
                  path="/Cereals"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Cereals"
                      heading="Cereals Recipes"
                      category={"dishType=Cereals"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Condiments And Sauces"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Condiments And Sauces"
                      heading="Condiments And Sauces Recipes"
                      category={"dishType=Condiments%20and%20sauces"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Desserts"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Desserts"
                      heading="Desserts Recipes"
                      category={"dishType=Desserts"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Drinks"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Drinks"
                      heading="Drinks Recipes"
                      category={"dishType=Drinks"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/MainCourse"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="MainCourse"
                      heading="MainCourse Recipes"
                      category={"dishType=Main%20course"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Pancake"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Pancake"
                      heading="Pancake Recipes"
                      category={"dishType=Pancake"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Preps"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Preps"
                      heading="Preps Recipes"
                      category={"dishType=Preps"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Preserve"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Preserve"
                      heading="Preserve Recipes"
                      category={"dishType=Preserve"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Salad"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Salad"
                      heading="Salad Recipes"
                      category={"dishType=Salad"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Sandwiches"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Sandwiches"
                      heading="Sandwiches Recipes"
                      category={"dishType=Sandwiches"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Soup"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Soup"
                      heading="Preserve Recipes"
                      category={"dishType=Soup"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Starter"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Starter"
                      heading="Starter Recipes"
                      category={"dishType=Starter"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Sweets"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Preserve"
                      heading="Sweets Recipes"
                      category={"dishType=Sweets"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/balanced"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="balanced"
                      heading="balanced Recipes"
                      category={"diet=balanced"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/highFiber"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="highFiber"
                      heading="high-fiber Recipes"
                      category={"diet=high-fiber"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/highProtein"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="highProtein"
                      heading="high-protein Recipes"
                      category={"diet=high-protein"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/lowCarb"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="lowCarb"
                      heading="lowCarb Recipes"
                      category={"diet=low-carb"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/lowFat"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="lowFat"
                      heading="lowFat Recipes"
                      category={"diet=low-fat"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/lowSodium"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="lowSodium"
                      heading="lowSodium Recipes"
                      category={"diet=low-sodium"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/alcoholFree"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="alcoholFree"
                      heading="alcohol-free Recipes"
                      category={"health=alcohol-free"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/eggFree"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="eggFree"
                      heading="Egg-free Recipes"
                      category={"health=egg-free"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/glutenFree"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="glutenFree"
                      heading="gluten-free Recipes"
                      category={"health=gluten-free"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/kidneyFriendly"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="kidneyFriendly"
                      heading="kidney-friendly Recipes"
                      category={"health=kidney-friendly"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/lowFatAbs"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="lowFatFbs"
                      heading="low-fat-abs Recipes"
                      category={"health=low-fat-abs"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/lowSugar"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="lowSugar"
                      heading="low-sugar Recipes"
                      category={"health=lowSugar"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/mustardFree"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="mustardFree"
                      heading="mustardFree Recipes"
                      category={"health=mustard-free"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/noOilAdded"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="noOilAdded"
                      heading="mustardFree Recipes"
                      category={"health=no-oil-added"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/redFeatFree"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="redFeatFree"
                      heading="red-meat-free Recipes"
                      category={"health=red-meat-free"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/vegan"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="vegan"
                      heading="vegan Recipes"
                      category={"health=vegan"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/vegetarian"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="vegetarian"
                      heading="vegetarian Recipes"
                      category={"health=vegetarian"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/wheatFree"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="wheatFree"
                      heading="wheatFree Recipes"
                      category={"health=wheat-free"}
                    ></RecipeCategory>
                  }
                />
                <Route
                  path="/American"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="American"
                      heading="American Recipes"
                      category={"cuisineType=American"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/British"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="British"
                      heading="British Recipes"
                      category={"cuisineType=British"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Chinese"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Chinese"
                      heading="Chinese Recipes"
                      category={"cuisineType=Chinese"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/French"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="French"
                      heading="French Recipes"
                      category={"cuisineType=French"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Indian"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Indian"
                      heading="Indian Recipes"
                      category={"cuisineType=Indian"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Italian"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Italian"
                      heading="Italian Recipes"
                      category={"cuisineType=Italian"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Japanese"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Japanese"
                      heading="Japanese Recipes"
                      category={"cuisineType=Japanese"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Mexican"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="Mexican"
                      heading="Mexican Recipes"
                      category={"cuisineType=Mexican"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/SouthAmerican"
                  element={
                    <RecipeCategory
                    textColor={textColor} topLeftColor={topLeftColor} headingColor={headingColor} type = {color} textcolor ={textColor_button} key="SouthAmerican"
                      heading="South-American Recipes"
                      category={"cuisineType=South%20American"}
                    ></RecipeCategory>
                  }
                />




              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
      {/* <Individual_Recipe></Individual_Recipe> */}
    </>
  );
}

export default App;

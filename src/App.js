import "./App.css";
import Sidebar from "./Components/Sidebar.js";
import Searchbar from "./Components/Searchbar";
import Recipe from "./Components/Recipe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeCategory from "./Components/RecipeCategory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar></Sidebar>
        <div className="container-fluid">
          <div className="row">
            <div className="col min-vh-100 mt-1 ">
              <Searchbar> </Searchbar>
           

              <Routes>
                <Route exact path="/home" element={<Recipe></Recipe>} />
                <Route
                  exact
                  path="/Dinner"
                  element={
                    <RecipeCategory
                     key="Dinner"
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
                    key="Breakfast"
                      heading="Breakfast Recipes"
                      category={"mealType=Breakfast"}
                    ></RecipeCategory>
                  }
                />
                <Route
                  path="/Lunch"
                  element={
                    <RecipeCategory
                    key="Lunch"
                      heading="Lunch Recipes"
                      category={"mealType=Lunch"}
                    ></RecipeCategory>
                  }
                />
                <Route
                  path="/Snack"
                  element={
                    <RecipeCategory
                    key="Snack"
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
                    key="Bread"
                      heading="Bread Recipes"
                      category={"dishType=Bread"}
                    ></RecipeCategory>
                  }
                />


                <Route
                  path="/Cereals"
                  element={
                    <RecipeCategory
                    key="Cereals"
                      heading="Cereals Recipes"
                      category={"dishType=Cereals"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Condiments And Sauces"
                  element={
                    <RecipeCategory
                    key="Condiments And Sauces"
                      heading="Condiments And Sauces Recipes"
                      category={"dishType=Condiments%20and%20sauces"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Desserts"
                  element={
                    <RecipeCategory
                    key="Desserts"
                      heading="Desserts Recipes"
                      category={"dishType=Desserts"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Drinks"
                  element={
                    <RecipeCategory
                    key="Drinks"
                      heading="Drinks Recipes"
                      category={"dishType=Drinks"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/MainCourse"
                  element={
                    <RecipeCategory
                    key="MainCourse"
                      heading="MainCourse Recipes"
                      category={"dishType=Main%20course"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Pancake"
                  element={
                    <RecipeCategory
                    key="Pancake"
                      heading="Pancake Recipes"
                      category={"dishType=Pancake"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Preps"
                  element={
                    <RecipeCategory
                    key="Preps"
                      heading="Preps Recipes"
                      category={"dishType=Preps"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Preserve"
                  element={
                    <RecipeCategory
                    key="Preserve"
                      heading="Preserve Recipes"
                      category={"dishType=Preserve"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Salad"
                  element={
                    <RecipeCategory
                    key="Salad"
                      heading="Salad Recipes"
                      category={"dishType=Salad"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Sandwiches"
                  element={
                    <RecipeCategory
                    key="Sandwiches"
                      heading="Sandwiches Recipes"
                      category={"dishType=Sandwiches"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Soup"
                  element={
                    <RecipeCategory
                    key="Soup"
                      heading="Preserve Recipes"
                      category={"dishType=Soup"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Starter"
                  element={
                    <RecipeCategory
                    key="Starter"
                      heading="Starter Recipes"
                      category={"dishType=Starter"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/Sweets"
                  element={
                    <RecipeCategory
                    key="Preserve"
                      heading="Sweets Recipes"
                      category={"dishType=Sweets"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/balanced"
                  element={
                    <RecipeCategory
                    key="balanced"
                      heading="balanced Recipes"
                      category={"diet=balanced"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/highFiber"
                  element={
                    <RecipeCategory
                    key="highFiber"
                      heading="high-fiber Recipes"
                      category={"diet=high-fiber"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/highProtein"
                  element={
                    <RecipeCategory
                    key="highProtein"
                      heading="high-protein Recipes"
                      category={"diet=high-protein"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/lowCarb"
                  element={
                    <RecipeCategory
                    key="lowCarb"
                      heading="lowCarb Recipes"
                      category={"diet=low-carb"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/lowFat"
                  element={
                    <RecipeCategory
                    key="lowFat"
                      heading="lowFat Recipes"
                      category={"diet=low-fat"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/lowSodium"
                  element={
                    <RecipeCategory
                    key="lowSodium"
                      heading="lowSodium Recipes"
                      category={"diet=low-sodium"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/alcoholFree"
                  element={
                    <RecipeCategory
                    key="alcoholFree"
                      heading="alcohol-free Recipes"
                      category={"health=alcohol-free"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/eggFree"
                  element={
                    <RecipeCategory
                    key="eggFree"
                      heading="Egg-free Recipes"
                      category={"health=egg-free"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/glutenFree"
                  element={
                    <RecipeCategory
                    key="glutenFree"
                      heading="gluten-free Recipes"
                      category={"health=gluten-free"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/kidneyFriendly"
                  element={
                    <RecipeCategory
                    key="kidneyFriendly"
                      heading="kidney-friendly Recipes"
                      category={"health=kidney-friendly"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/lowFatAbs"
                  element={
                    <RecipeCategory
                    key="lowFatFbs"
                      heading="low-fat-abs Recipes"
                      category={"health=low-fat-abs"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/lowSugar"
                  element={
                    <RecipeCategory
                    key="lowSugar"
                      heading="low-sugar Recipes"
                      category={"health=lowSugar"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/mustardFree"
                  element={
                    <RecipeCategory
                    key="mustardFree"
                      heading="mustardFree Recipes"
                      category={"health=mustard-free"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/noOilAdded"
                  element={
                    <RecipeCategory
                    key="noOilAdded"
                      heading="mustardFree Recipes"
                      category={"health=no-oil-added"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/redFeatFree"
                  element={
                    <RecipeCategory
                    key="redFeatFree"
                      heading="red-meat-free Recipes"
                      category={"health=red-meat-free"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/vegan"
                  element={
                    <RecipeCategory
                    key="vegan"
                      heading="vegan Recipes"
                      category={"health=vegan"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/vegetarian"
                  element={
                    <RecipeCategory
                    key="vegetarian"
                      heading="vegetarian Recipes"
                      category={"health=vegetarian"}
                    ></RecipeCategory>
                  }
                />
                 <Route
                  path="/wheatFree"
                  element={
                    <RecipeCategory
                    key="wheatFree"
                      heading="wheatFree Recipes"
                      category={"health=wheat-free"}
                    ></RecipeCategory>
                  }
                />




              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

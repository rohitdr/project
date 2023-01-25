
import "./App.css";
import Sidebar from "./Components/Sidebar.js";
import Searchbar from "./Components/Searchbar";
import Recipe from "./Components/Recipe";
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Recipe_Category from "./Components/Recipe_Category";
import { Navbar } from "react-bootstrap";
function App() {
  return (
    <>
      
                  
<BrowserRouter>

<Sidebar></Sidebar>
      <div className="container-fluid">
        <div className="row">
          <div className="col min-vh-100 mt-1 ">
            <Searchbar> </Searchbar>
            {/* <Recipe></Recipe> */}



<Routes>
< Route  exact path ='/home' element =  {<Recipe></Recipe>} />
< Route  exact path ='/Dinner'   element = {  <Recipe_Category key="dinner" category={"mealType=Dinner"}></Recipe_Category>} />
< Route   exact path ='/Breakfast' element = {   <Recipe_Category key="breakfast" category={"mealType=Breakfast"}></Recipe_Category>}/>
< Route path ='/Lunch' element = {   <Recipe_Category key="lunch" category={"mealType=Lunch"}></Recipe_Category>}/>
< Route path ='/Snack' element = {   <Recipe_Category key="snack" category={"mealType=Snack"}></Recipe_Category>}/>
< Route path ='/Teatime' element = {   <Recipe_Category key="teatime "category={"mealType=Teatime"}></Recipe_Category>}/>
< Route path ='/bread' element = {   <Recipe_Category key="side_dish "category={"dishType=Bread"}></Recipe_Category>}/>
</Routes>
</div>
</div>
</div>
</BrowserRouter>

      

    
 

    </>
  );
}

export default App;

import React from "react";
import Button from "./Button";
import './RecipeItem.css'
export default function RecipeItem(props) {
const onclick=()=>{
console.log("hello")
  document.getElementsByClassName("card").style.transform =`rotateY(180deg)`;
}
  return (
    <>
    
 
     <div class="scene ">
    
  <div class="card" id ="thiscard">
  
    <div class="face front"> 
     <div className="d-flex  ">
          <div
            className="p-1 flex-fill bd-highlight"
            style={{ width: "50%" }}
          >
            <img
             
              src={props.ImageUrl}
              className="card-img-top rounded zoom"
              alt=""
              style={{ zIndex:"1" }}
              onerror="this.src='https://cdn.xxl.thumbs.canstockphoto.com/image-not-available-written-in-chalk-on-a-blackboard-stock-image_csp8317846.jpg'"
             
            />
            <span class="position-absolute translate-middle badge bg-dark"><i class=" fs-5 fa-regular fa-square-plus" onClick={onclick}></i></span>
          </div>
       
          <div className="p-1 flex-fill bd-highlight   " style={{ width: "50%" }}  >
            <h4 className={`fw-bold text-${props.headingColor}`}  >
              {props.title}
            </h4>
            <p className={`card-text text-${props.headingColor}`} style={{textAlign:"justify"}}>
              {props.health_labels}.......
            </p>
            <h5
              className={`card-text text-center fw-bold text-${props.headingColor}`}
            >
              {" "}
              INGRIDIANTS
            </h5>
            <p className={`card-text text-${props.headingColor}`}>
              {props.Ingridiants}.....
            </p>
          </div>
        
        </div>
       
        <div className="card-footer text-muted">
        
          <table
            className={`table table-borderless table-hover  text-${props.headingColor}`}
          >
            <tbody>
              <tr>
                <td style={{ color: "white", background: "	red" }}>Caution</td>
                <td style={{ color: "white", background: "	red" }}>
                  {props.caution.toString().length > 2
                    ? props.caution.slice(0, 2).toString()
                    : "___"}
                </td>
                <td style={{ color: "white", background: "	green" }}>
                  Source:&#8594;
                </td>
                <td style={{ color: "white", background: "	green" }}>
                  {props.source}
                </td>
              </tr>
            </tbody>
          </table>
         
        </div>
        {/* <span class="position-absolute  translate-middle badge rounded-pill bg-danger" style={{zIndex:"99999990"}}>
            {props.time === 0 ? "Default" : props.time + "min"}
            <span class="visually-hidden">source</span>
          </span> */}
         
        
        
        
        
        </div>
   
       
    <div class="face back">
       <div
          className="card-body "

          style={{ backgroundColor: "rgb(63 52 81 / 15%)" }}
        >  <span class="position-absolute translate-middle badge bg-dark"><i class=" fs-5 fa-regular fa-square-plus" onClick={onclick}></i></span>

          <h5
            className={`card-text text-center fw-bold text-white`}
          >
            NUTRIENTS
          </h5>
          <div className="d-flex bd-highlight">
            <div
              className="p-2 flex-fill bd-highlight"
              style={{ width: "50%" }}
            >
              <h3 className={`text-center text-white`}>
                {props.caleroies}Kcal
              </h3>
              <h5 className={`text-center text-white`}>
                {" "}
                Fat :{props.fat}g
              </h5>
              <table
                className={`table table-borderless   my-4 text-white`}
              >
                <tbody>
                  <tr>
                    {/* <td>{Main_Nutrition}</td>
      <td>{Main_Nutrition_quantity}</td> */}
                  </tr>
                  <tr>
                    <td>Sugar</td>
                    <td>{Math.ceil(props.sugar)}g</td>
                  </tr>
                  <tr>
                    <td>Water</td>
                    <td>{Math.ceil(props.water)}g</td>
                  </tr>
                  <tr>
                    <td>Cholesterol</td>
                    <td>{Math.ceil(props.chole)}g</td>
                  </tr>
                </tbody>
              </table> 
            
              {/* <a className="btn btn-primary" href={props.url} role="button">Read More</a> */}
            </div>

            <div className="p-1 flex-fill bd-highlight">
              <table
                className={` table table-borderless  text-white`}
              >
                <tbody>
                  <tr>
                    {/* 
     <td>{aditional_Nutrition}</td>
     <td>{aditional_Nutrition_quantity}</td> */}
                  </tr>
                  <tr>
                    <td>VITAMIN-A</td>
                    <td>{Math.ceil(props.vitamin_a)}μg</td>
                  </tr>
                  <tr>
                    <td>VITAMIN-C</td>
                    <td>{Math.ceil(props.vitamin_c)}mg</td>
                  </tr>
                  <tr>
                    <td>VITAMIN-B6</td>
                    <td>{Math.ceil(props.vitamin_b6)}mg</td>
                  </tr>
                  <tr>
                    <td>VITAMIN-D</td>
                    <td>{Math.ceil(props.vitamin_d)}μg</td>
                  </tr>
                  <tr>
                    <td>VITAMIN-E</td>
                    <td>{Math.ceil(props.vitamin_e)}mg</td>
                  </tr>
                  <tr>
                    <td>VITAMIN-K</td>
                    <td>{Math.ceil(props.vitamin_k)}μg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Button
              color="primary"
              size="large"
              href={props.url}
              label="Read More"
              
            ></Button>
            <Button
              color="primary"
              size="large"
              href={props.url}
              label="delete"
            ></Button>
            <Button
              color="success"
              size="large"
              href={props.url}
              label="Edit"
            ></Button>
          </div>
        </div></div>
  </div>
</div>









    </>
  );
}

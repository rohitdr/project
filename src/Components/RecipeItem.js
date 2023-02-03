import React from "react";
import Button from "./Button";

export default function RecipeItem(props) {
  return (
    <>
      <div
        className="card border border-dark shadow-lg "
        style={{ backgroundColor: props.topLeftColor }}
      >
        <div className="d-flex ">
          <div
            className="p-1 flex-fill bd-highlight"
            style={{ width: "50%" }}
          >
            <img
             
              src={props.ImagesUrl}
              className="card-img-top rounded  zoom  "
              alt=""
              style={{ zIndex:"1" }}
            />
          </div>
          <div className="p-1 flex-fill bd-highlight " style={{ width: "50%" }}  >
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
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {props.time === 0 ? "Default" : props.time + "min"}
            <span class="visually-hidden">source</span>
          </span>
        </div>
        <hr className="hr" />
        <div
          className="card-body "
          style={{ backgroundColor: "rgb(63 52 81 / 15%)" }}
        >
          <h5
            className={`card-text text-center fw-bold text-${props.headingColor}`}
          >
            NUTRIENTS
          </h5>
          <div className="d-flex bd-highlight">
            <div
              className="p-2 flex-fill bd-highlight"
              style={{ width: "50%" }}
            >
              <h3 className={`text-center text-${props.headingColor}`}>
                {props.caleroies}Kcal
              </h3>
              <h5 className={`text-center text-${props.headingColor}`}>
                {" "}
                Fat :{props.fat}g
              </h5>
              <table
                className={`table table-borderless  table-hover my-4 text-${props.headingColor}`}
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
                className={` table table-borderless  table-hover text-${props.headingColor}`}
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
      </div>
    </>
  );
}

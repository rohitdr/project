import React from "react";

export default function BlankRecipeItem(){
    return(
        <>
       
       <div class="card">
  
  <div class="face front">

   <div className="d-flex">
        <div
          className="p-1 flex-fill bd-highlight"
          style={{ width: "50%" }}
        >
          <img
           
            src=""
            className="card-img-top rounded"
            alt=""
            style={{ zIndex:"1" }}
            onerror="this.src='https://cdn.xxl.thumbs.canstockphoto.com/image-not-available-written-in-chalk-on-a-blackboard-stock-image_csp8317846.jpg'"
            height="300px"
            width="500px"
          />
          <span class="position-absolute translate-middle badge bg-dark"><i class="fa-solid fs-6 fa-right-left"></i></span>
        </div>
     
        <div className="p-1 flex-fill bd-highlight   " style={{ width: "50%" }}  >
          <h4 className="fw-bold text-dark">

            {/* {props.title} */}
          </h4>
          <p className="card-text text-dark" style={{textAlign:"justify"}}>
            {/* {props.health_labels}....... */}
          </p>
          <h5
            className="card-text text-center fw-bold text-dark"
          >
            {" "}
            INGRIDIANTS
          </h5>
          <p className="card-text text-dark">
            {/* {props.Ingridiants}..... */}
          </p>
        </div>
      
      </div>
     
      <div className="card-footer text-muted">
      
        <table
          className="table table-borderless table-hover  text-dark"
        >
          <tbody>
            <tr>
              <td style={{ color: "white", background: "	red" }}>Caution</td>
              <td style={{ color: "white", background: "	red" }}>
                {/* {props.caution.toString().length > 2
                  ? props.caution.slice(0, 2).toString()
                  : "___"} */}
              </td>
              <td style={{ color: "white", background: "	green" }}>
                Source:&#8594;
              </td>
              <td style={{ color: "white", background: "	green" }}>
                {/* {props.source} */}
              </td>
            </tr>
          </tbody>
        </table>
       
      </div>

       
      
      
      
      
      </div>
 
     
 
</div>
        </>
    )
}

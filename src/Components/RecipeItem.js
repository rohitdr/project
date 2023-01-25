import React from 'react'
import Button from './Button'

export default function RecipeItem(props) {
    
  return (
   <>
   <div className="card">
   <div className="d-flex bd-highlight">
  <div className="p-2 flex-fill bd-highlight" style={{width: "50%"}}>
  <img height="300px" width="500px" src={props.ImagesUrl} className="card-img-top" alt=""/>

  </div>
  <div className="p-2 flex-fill bd-highlight " style={{width: "50%"}}><h4 className="fw-bold">{props.title}</h4>
    <p className="card-text ">{props.health_labels}.......
</p>
<h5 className="card-text text-center fw-bold"> INGRIDIANTS</h5>
<p className="card-text ">{props.Ingridiants}.....
</p>
   </div>

</div> 
<hr className="hr" />
  <div className="card-body " style={{backgroundColor:"rgb(63 52 81 / 15%)"}}>
  <h5 className="card-text text-center fw-bold">NUTRIENTS</h5>
  <div className="d-flex bd-highlight">
  <div className="p-2 flex-fill bd-highlight"  style={{width: "50%"}}>

    
    <h3 className="text-center">{props.caleroies}Kcal</h3>
    <h5 className="text-center"> Fat :{props.fat}g</h5>
  <table className=" table table-borderless table-striped table-hover my-4">
 
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
 
  <div className="p-1 flex-fill bd-highlight"><h5 className="card-title"></h5>
  <table className=" table table-borderless table-striped table-hover">
 
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
<div className="d-flex justify-content-center"><Button color="primary" href="{props.url}" label="Read More"></Button></div>





</div> 
  <div className="card-footer text-muted">

  <table className=" table table-borderless table-striped table-hover " >
 
 <tbody >
  
   <tr >
    
     <td style={{color:"white",background:"	#808080"}}>time:&#8594;</td>
     <td style={{color:"white",background:"	#808080"}}>{props.time == 0?"NOT avialable":props.time+" m"}</td>
     <td style={{color:"white",background:"	#808080"}}>Source:&#8594;</td>  
      <td style={{color:"white",background:"	#808080"}}>{props.source}</td>   
   </tr>
  
 
  
 </tbody>
</table>
  </div>
</div>
   
   
   </>
  )
}

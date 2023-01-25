import React from 'react'
import RecipeItem from './RecipeItem'

export default function Recipe() {

     componentDidMount=async ()=>{
        let url =`https://api.edamam.com/api/recipes/v2/df7b1fd4d8ec3a0a0d2cc9ab0ea0ad24?type=public&app_id=8717089a&app_key=35658ee1215cbd7922d388170b7509f0&page=${page}&pagesize=15`
        let data = await fetch(url)
        let parsedata = await data.json();
        setArticle(article=parsedata.articles) 
        setArticle(article=parsedata.articles) 
           }
    const [article,setArticle]=useState([])
    const[page, setpage] = useState(1)
  return (
    <>
   <div class="container">
  <div class="row">
    <div class="col-md-6 mt-4">
     
    <RecipeItem></RecipeItem>
    </div>
    <div class="col-md-6 mt-4">
     
    <RecipeItem></RecipeItem>
    </div><div class="col-md-6 mt-4">
     
     <RecipeItem></RecipeItem>
     </div><div class="col-md-6 mt-4">
     
     <RecipeItem></RecipeItem>
     </div><div class="col-md-6 mt-4">
     
     <RecipeItem></RecipeItem>
     </div><div class="col-md-6 mt-4">
     
     <RecipeItem></RecipeItem>
     </div>
  </div>
</div>
{/*         
<div class="d-flex justify-content-between">
        <button type="button" class="btn btn-dark" disabled={this.state.page<=1} onClick={this.prev}>previous</button>
        <button type="button" class="btn btn-dark" disabled={this.state.page+1>Math.ceil(this.state.total/20)} onClick={this.next}>Next</button>
        </div>   */}

    

   

    
    </>
  )
}

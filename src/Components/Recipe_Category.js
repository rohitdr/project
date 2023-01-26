import RecipeItem from "./RecipeItem";
import React, { useState, Component } from "react";
import Loader from "./Loader";

export default class Recipe_Category extends Component {
  refreshPage() {
    window.location.reload(false);
  }
  next_handler = async () => {
   

    this.url = this.state.next_page;

    let data = await fetch(this.url);
    window.location.href = "#top";
    this.setState({ loading: true });
   
    let parse_data = await data.json();
    this.setState({
      article: parse_data.hits,
      starting_count: parse_data.from,
      ending_count: parse_data.to,
      next_page: parse_data._links.next.href,
      loading: false,
    });
  };
  home_handler = async () => {
  

    let data = await fetch(this.state.Home_page);
    window.location.href = "#top";
    this.setState({ loading: true });
    let parse_data = await data.json();
    this.setState({
      article: parse_data.hits,
      starting_count: 1,
      ending_count: parse_data.to,
      next_page: parse_data._links.next.href,
      loading: false,
    });
  };
  constructor() {
    super();
    this.state = {
      article: [],
      starting_count: 1,
      next_page: "",
      ending_count: 1,
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      `https://api.edamam.com/api/recipes/v2?type=public&app_id=8717089a&app_key=35658ee1215cbd7922d388170b7509f0&${this.props.category}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parse_data = await data.json();
    this.setState({
      article: parse_data.hits,
      starting_count: parse_data.from,
      ending_count: parse_data.to,
      next_page: parse_data._links.next.href,
      Home_page: url,
      loading: false,
    });
  }

  render() {
    return (
      <>
   
        <div className="container my-2">
        



          <h1 className="text-center">Top -Recepies</h1>
          {this.state.loading && <Loader></Loader>}
          <div className="row">
            {!this.state.loading &&
              this.state.article.map((element) => {
                return (
                  <div className="col-md-6 mt-4" key={element.recipe.uri}>
                    <RecipeItem
                      title={element.recipe.label}
                      ImagesUrl={element.recipe.images.SMALL.url}
                      url={element.recipe.shareAs}
                      health_labels={element.recipe.healthLabels
                        .toString()
                        .substring(0, 145)}
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
          <div className="d-flex justify-content-between my-3">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.home_handler}
              disabled={this.state.starting_count <= 1}
            >
              Home
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.next_handler}
            >
              Next
            </button>
          </div>
        </div>

        {/* disabled={this.state.page+1>Math.ceil(this.state.total/20)}
        onClick={this.next}
        disabled={this.state.page<=1}
        onClick={this.prev} */}
      </>
    );
  }
}

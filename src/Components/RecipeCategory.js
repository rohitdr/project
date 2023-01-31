import RecipeItem from "./RecipeItem";
import React, { Component } from "react";
import Loader from "./Loader";
import Button from "./Button";
import InfiniteScroll from "react-infinite-scroll-component";

export default class Recipe_Category extends Component {
  refreshPage() {
    window.location.reload(false);
  }
  // next_handler = async () => {
  //   this.url = this.state.next_page;

  //   let data = await fetch(this.url);
  //   window.location.href = "#top";
  //   this.setState({ loading: true });

  //   let parse_data = await data.json();
  //   this.setState({
  //     article: parse_data.hits,
  //     starting_count: parse_data.from,
  //     ending_count: parse_data.to,
  //     next_page: parse_data._links.next.href,
  //     loading: false,
  //   });
  // };
  // home_handler = async () => {
  //   let data = await fetch(this.state.Home_page);
  //   window.location.href = "#top";
  //   this.setState({ loading: true });
  //   let parse_data = await data.json();
  //   this.setState({
  //     article: parse_data.hits,
  //     starting_count: 1,
  //     ending_count: parse_data.to,
  //     next_page: parse_data._links.next.href,
  //     loading: false,
  //   });
  // };
  fetchMoreData = async () => {
    let url = this.state.next_page;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parse_data = await data.json();
    this.setState({
      article: this.state.article.concat(parse_data.hits),
      // starting_count: parse_data.from,
      // ending_count: parse_data.to,
      next_page: parse_data._links.next.href,
      // Home_page: url,
      loading: false,
      count:parse_data.count
    })
  };
  constructor() {
    super();
    this.state = {
      article: [],
      starting_count: 1,
      next_page: "",
      ending_count: 1,
      loading: true,
      count:0
    };
  }
  async componentDidMount() {
    this.props.setProgress(10)
    let url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=8717089a&app_key=35658ee1215cbd7922d388170b7509f0&${this.props.category}`;
    // this.setState({ loading: true });
    this.props.setProgress(30)
    let data = await fetch(url);
    this.props.setProgress(50)
    let parse_data = await data.json();
    this.props.setProgress(70)
    this.setState({
      article: parse_data.hits,
      // starting_count: parse_data.from,
      // ending_count: parse_data.to,
      next_page: parse_data._links.next.href,
      // Home_page: url,
      loading: false,
      count:parse_data.count
    });
    this.props.setProgress(100)
  }

  render() {
    return (
      <>
     
      
          <h1 className={`text-center my-4 fw-bold text-${this.props.textColor}`}>
            Top - {this.props.heading}
          </h1>
          {this.state.loading && <Loader></Loader>}
          <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.count}
          loader={<Loader/>}
          >
            <div className="container">
          <div className="row" >
            {
              this.state.article.map((element) => {
                return (
                  <div className="col-md-6 mt-4"  key={element.recipe.uri}>
                    <RecipeItem
                     topLeftColor={this.props.topLeftColor}
                     headingColor={this.props.headingColor}
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
          {/* <div className="d-flex justify-content-between my-3">
            {/*
             
         
            //   disabled={this.state.starting_count <= 1}
            // >
            //   Home
            // </button> */}
             {/* <Button type ={this.props.type} label ="Home" onClick={this.home_handler}  disabled={this.state.starting_count <= 1} size="large"  textcolor={this.props.textcolor}></Button>
           
           
            <Button type ={this.props.type} label ="Next" onClick={this.next_handler}  size = "large"  textcolor={this.props.textcolor}></Button>
           
           
          </div>  */} 
        

      </>
    );
  }
}

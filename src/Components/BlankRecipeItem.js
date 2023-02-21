import React from "react";

export default function BlankRecipeItem() {
  const loadFile = (event) => {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };
  return (
    <>
      {" "}
      <form>
        <div className="scene">
          <div className="card">
            <div className="face front">
              <div className="d-flex blankRecipe">
                <div
                  className="p-1 imageBox flex-fill bd-highlight"
                  style={{ width: "50%" }}
                >
                  <input
                    type="file"
                    className="fileToUpload mx-auto hidden"
                    id="imgInp"
                    onChange={loadFile}
                  />
                  <img id="output" height="300px" width="300px" />
                </div>

                <div
                  className="p-1 flex-fill bd-highlight"
                  style={{ width: "50%" }}
                >
                  <div className="form-outline">
                    <input
                      type="text"
                      id="typeText"
                      placeholder="Enter the title"
                      className="form-control border-dark"
                    />

                    <h5 className="card-text text-center fw-bold text-dark">
                      {" "}
                      INGRIDIANTS
                    </h5>
                    <p className="card-text text-dark">
                      {/* <textarea className="form-control" id="textAreaExample" placeholder="Enter the Ingrediants" rows="3"></textarea> */}
                      <input
                        type="text"
                        name="account[first_Ingrediant]"
                        className="form-control border-dark"
                        placeholder="Enter the first Ingrediant"
                      />
                      <input
                        type="text"
                        name="account[Second_ingrediant]"
                        className="form-control mt-1 border-dark"
                        placeholder="Enter the Second Ingrediant"
                      />

                      <input
                        type="text"
                        name="account[third_Ingrediant]"
                        className="form-control mt-1 border-dark"
                        placeholder="Enter the third Ingrediant"
                      />
                      <div
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title="Add More Ingrediants"
                      >
                        <i
                          className=" fs-4 fa-solid  fa-circle-plus text-dark mt-1"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        ></i>
                      </div>
                    </p>

                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                    >
                      Add Recipe
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-footer text-muted">
                <table className="table table-borderless table-hover  text-dark">
                  <tbody>
                    <tr>
                      <td style={{ color: "white", background: "	red" }}>
                        Caution
                      </td>
                      <td style={{ color: "white", background: "	red" }}>
                        {/* {props.caution.toString().length > 2
                  ? props.caution.slice(0, 2).toString()
                  : "___"} */}
                        <input
                          type="text"
                          id="typeText"
                          placeholder="Enter the caution"
                          className="form-control border-dark"
                        />
                      </td>
                      <td style={{ color: "white", background: "	green" }}>
                        Source:&#8594;
                      </td>
                      <td style={{ color: "white", background: "	green" }}>
                        {/* {props.source} */}
                        <input
                          type="text"
                          id="typeText"
                          placeholder="Enter the source"
                          className="form-control border-dark"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* modal after clicking the add item */}
        <div
          className="modal"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Additional Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="form-outline">
                  <label className="form-label text-dark fw-bold" for="typeURL">
                    Enter Source Url
                  </label>
                  <input type="url" id="typeURL" className="form-control" />
                </div>
                {/* dietlabels */}
                <label className="form-label text-dark fw-bold">
                  Choose the Diet-Labels
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Low-Sodium
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Low-Fat
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    High-Fiber
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Balanced
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    High-Protein
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Low-Carb
                  </label>
                </div>

                {/* healthLabel */}
                <label className="form-label text-dark fw-bold">
                  Choose the Health Labels
                </label>
                <select multiple="multiple" className="form-select" name="health">
                  <option value="alcohol-cocktail"> alcohol-cocktail </option>

                  <option value="alcohol-free"> alcohol-free </option>

                  <option value="celery-free"> celery-free </option>

                  <option value="crustacean-free"> crustacean-free </option>

                  <option value="dairy-free"> dairy-free </option>

                  <option value="DASH"> DASH </option>

                  <option value="egg-free"> egg-free </option>

                  <option value="fish-free"> fish-free </option>

                  <option value="fodmap-free"> fodmap-free </option>

                  <option value="gluten-free"> gluten-free </option>

                  <option value="immuno-supportive"> immuno-supportive </option>

                  <option value="keto-friendly"> keto-friendly </option>

                  <option value="kidney-friendly"> kidney-friendly </option>

                  <option value="kosher"> kosher </option>

                  <option value="low-fat-abs"> low-fat-abs </option>

                  <option value="low-potassium"> low-potassium </option>

                  <option value="low-sugar"> low-sugar </option>

                  <option value="lupine-free"> lupine-free </option>

                  <option value="Mediterranean"> Mediterranean </option>

                  <option value="mollusk-free"> mollusk-free </option>

                  <option value="mustard-free"> mustard-free </option>

                  <option value="no-oil-added"> no-oil-added </option>

                  <option value="paleo"> paleo </option>

                  <option value="peanut-free"> peanut-free </option>

                  <option value="pescatarian"> pescatarian </option>

                  <option value="pork-free"> pork-free </option>

                  <option value="red-meat-free"> red-meat-free </option>

                  <option value="sesame-free"> sesame-free </option>

                  <option value="shellfish-free"> shellfish-free </option>

                  <option value="soy-free"> soy-free </option>

                  <option value="sugar-conscious"> sugar-conscious </option>

                  <option value="sulfite-free"> sulfite-free </option>

                  <option value="tree-nut-free"> tree-nut-free </option>

                  <option value="vegan"> vegan </option>

                  <option value="vegetarian"> vegetarian </option>

                  <option value="wheat-free"> wheat-free </option>
                </select>

                {/* crusine type */}
                <label className="form-label text-dark fw-bold">
                  Choose the cuisine Type
                </label>
                <select
                  multiple="multiple"
                  className="form-select"
                  name="cuisineType"
                >
                  <option value="American"> American </option>

                  <option value="Asian"> Asian </option>

                  <option value="British"> British </option>

                  <option value="Caribbean"> Caribbean </option>

                  <option value="Central Europe"> Central Europe </option>

                  <option value="Chinese"> Chinese </option>

                  <option value="Eastern Europe"> Eastern Europe </option>

                  <option value="French"> French </option>

                  <option value="Indian"> Indian </option>

                  <option value="Italian"> Italian </option>

                  <option value="Japanese"> Japanese </option>

                  <option value="Kosher"> Kosher </option>

                  <option value="Mediterranean"> Mediterranean </option>

                  <option value="Mexican"> Mexican </option>

                  <option value="Middle Eastern"> Middle Eastern </option>

                  <option value="Nordic"> Nordic </option>

                  <option value="South American"> South American </option>

                  <option value="South East Asian"> South East Asian </option>
                </select>
                {/* meal type */}

                <label className="form-label text-dark fw-bold">
                  Choose the Meal Type
                </label>
                <select multiple="multiple" className="form-select" name="mealType">
                  <option value="Breakfast"> Breakfast </option>

                  <option value="Dinner"> Dinner </option>

                  <option value="Lunch"> Lunch </option>

                  <option value="Snack"> Snack </option>

                  <option value="Teatime"> Teatime </option>
                </select>
                {/* dish type */}
                <label className="form-label text-dark fw-bold">
                  Choose the Dish Type
                </label>
                <select multiple="multiple" className="form-select" name="dishType">
                  <option value="Biscuits and cookies">
                    {" "}
                    Biscuits and cookies{" "}
                  </option>

                  <option value="Bread"> Bread </option>

                  <option value="Cereals"> Cereals </option>

                  <option value="Condiments and sauces">
                    {" "}
                    Condiments and sauces{" "}
                  </option>

                  <option value="Desserts"> Desserts </option>

                  <option value="Drinks"> Drinks </option>

                  <option value="Main course"> Main course </option>

                  <option value="Pancake"> Pancake </option>

                  <option value="Preps"> Preps </option>

                  <option value="Preserve"> Preserve </option>

                  <option value="Salad"> Salad </option>

                  <option value="Sandwiches"> Sandwiches </option>

                  <option value="Side dish"> Side dish </option>

                  <option value="Soup"> Soup </option>

                  <option value="Starter"> Starter </option>

                  <option value="Sweets"> Sweets </option>
                </select>
                <button
                  type="button"
                  className="btn btn-primary mt-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  Add Nutritional Details
                </button>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* modal for adding more Ingrediant */}
        <div
          className="modal"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ingrediants
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="form-outline">
                  <input
                    type="text"
                    id="typeText"
                    className="form-control border-dark"
                  />
                  <label className="form-label fw-bold" for="typeText">
                    Fourth Ingrediants
                  </label>
                </div>
                <div className="form-outline">
                  <input type="text" id="typeText" className="form-control" />
                  <label className="form-label fw-bold" for="typeText">
                    Fifth Ingrediants
                  </label>
                </div>
                <div className="form-outline">
                  <input type="text" id="typeText" className="form-control" />
                  <label className="form-label fw-bold" for="typeText">
                    Sixeth Ingrediants
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* modal for adding totalNutrients */}
        <div
          className="modal"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ingrediants dsf
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nutrient</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">units</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Enery</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">2</th>
                      <td>Fat</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Carbs</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">4</th>
                      <td>Fiber</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">5</th>
                      <td>Sugars</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Protein</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Cholesterol</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>Calcium</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>Iron</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>Vitamin A</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">11</th>
                      <td>Vitamin C</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">12</th>
                      <td>Thiamin B1</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">13</th>
                      <td>Riboflavin B2</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">14</th>
                      <td>Niacin B3</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">15</th>
                      <td>Vitamin B6</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">16</th>
                      <td> Vitamin B12</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">17</th>
                      <td>Vitamin D</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">18</th>
                      <td>Vitamin E</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">19</th>
                      <td>Vitamin K</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">20</th>
                      <td>Water</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="typeNumber"
                            className="form-control"
                        placeholder="Enter Quantity"
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                  
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

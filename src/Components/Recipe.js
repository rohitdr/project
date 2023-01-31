import RecipeItem from "./RecipeItem";
import React, { Component } from "react";
import Loader from "./Loader";
import Button from "./Button";

export default class Recipe extends Component {
  // article=[
  //   {
  //     "recipe": {
  //     "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_bbfc1a248bd6fe277e35fe01027de91f",
  //     "label": "Naomi Duguid's Fried Noodles",
  //     "image": "https://edamam-product-images.s3.amazonaws.com/web-img/041/04158b5869398c899942336274f0e0f7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDFbUpt1ia6bPdZgWotWMJtwWFFy2JxcxG0EmTrTWzbdAIhAI8IHFSuU2JY1Em3ZPqN0s%2FihVzRrRnVo2tHBFN3K5doKswECBUQABoMMTg3MDE3MTUwOTg2Igwzyn2KMuEUsaN7iSgqqQS8UgWe1HE1kWRKe%2B%2FxOcJllJbqdNW7ODlFcCBOn%2F7dValho%2BXvdA%2BhKb4Ctgi20xoFQprcymJ3%2BMJ5qeuXI0aD1wTNmygxLc4Ur4ZQdvUuWU3E9QPVkUrBdns97iXqtFu13AMGKf3BoRDh0LlWlHxDUBIa9PLdBOqz0yQrZAY%2FeuOUt68jV%2BhnWcEj%2BX37o3P6Sm5tGrkWaV%2BijK8qIt3gyYJTWgGqwtpLfAG8AQQ6%2FRL7dWlYyIjS4d87M02pEvlMsl%2Fif%2BN27EoV4MH4UWM0M2UMtcgV578K3Q20dW6rJNPfIdqbK1GNxjeXdsAvKXrKxTYmodnSwuq4RaT8dIhsuHb5EVRAS1KhmioRuZi3viggt0mJzUhYlV1JOjRktZ9%2BEeSSwRr7QkTCTA22MWfGngKH1oy42LpItTXkLNWjaxfbfR8on8YzACXNWSBxPbjKam2ROYTw9IMRuTEsCVOSXjhRQG6e54b8IwlCGBZQMgb7dOdXMhS6zk%2Fn%2FpWU9CcVnxWTXbozuB18gp4vlOlYoiC9mdY8xMsetZ5U0VIWY6UpYwz2U7winP%2FZ85gdUrSA5YEVkESaUZsrnf19YKl6IeOC9wHxd%2BEwx0L5A8aE8DHTp9ghNnzWwggjwaogonkRVCGXRkLHQHdjrE3qcNEQhGGj8Hcf71zjlGwIJr8Moalc6dJLe0jPpWMVTU8k%2F%2FmreQI0kME0JWG4QF424z9eLkFVbtz5RyqoMM%2BkxJ4GOqgBhjmrZH5e7l2uurEzkLJs2xRjoKoQ6epwZywT1BUjEgn7bpn%2BVASflVN4drpA8JGU%2B44pfAuJMkZIjTnzP4juVy2zv5%2FFePab9qsWiHIsVjCMZugvMQmT4kkga8V%2BFVLIOL6tF6fS8SKPYi7lZ3VSZnLF0azpKrtmeZlwKlegnVDEU4tZ3K3hSSwa2Y03S%2B8isxS6naB6a32S%2B7IORMkTnxJvkWjpHKQ9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T115321Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEXBHGMPI%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f8f7de64968ef8e267b211bef744cb7b81ebbc687d0a0f22392e341ad32991f5",
  //     "images": {
  //     "THUMBNAIL": {
  //     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/041/04158b5869398c899942336274f0e0f7-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDFbUpt1ia6bPdZgWotWMJtwWFFy2JxcxG0EmTrTWzbdAIhAI8IHFSuU2JY1Em3ZPqN0s%2FihVzRrRnVo2tHBFN3K5doKswECBUQABoMMTg3MDE3MTUwOTg2Igwzyn2KMuEUsaN7iSgqqQS8UgWe1HE1kWRKe%2B%2FxOcJllJbqdNW7ODlFcCBOn%2F7dValho%2BXvdA%2BhKb4Ctgi20xoFQprcymJ3%2BMJ5qeuXI0aD1wTNmygxLc4Ur4ZQdvUuWU3E9QPVkUrBdns97iXqtFu13AMGKf3BoRDh0LlWlHxDUBIa9PLdBOqz0yQrZAY%2FeuOUt68jV%2BhnWcEj%2BX37o3P6Sm5tGrkWaV%2BijK8qIt3gyYJTWgGqwtpLfAG8AQQ6%2FRL7dWlYyIjS4d87M02pEvlMsl%2Fif%2BN27EoV4MH4UWM0M2UMtcgV578K3Q20dW6rJNPfIdqbK1GNxjeXdsAvKXrKxTYmodnSwuq4RaT8dIhsuHb5EVRAS1KhmioRuZi3viggt0mJzUhYlV1JOjRktZ9%2BEeSSwRr7QkTCTA22MWfGngKH1oy42LpItTXkLNWjaxfbfR8on8YzACXNWSBxPbjKam2ROYTw9IMRuTEsCVOSXjhRQG6e54b8IwlCGBZQMgb7dOdXMhS6zk%2Fn%2FpWU9CcVnxWTXbozuB18gp4vlOlYoiC9mdY8xMsetZ5U0VIWY6UpYwz2U7winP%2FZ85gdUrSA5YEVkESaUZsrnf19YKl6IeOC9wHxd%2BEwx0L5A8aE8DHTp9ghNnzWwggjwaogonkRVCGXRkLHQHdjrE3qcNEQhGGj8Hcf71zjlGwIJr8Moalc6dJLe0jPpWMVTU8k%2F%2FmreQI0kME0JWG4QF424z9eLkFVbtz5RyqoMM%2BkxJ4GOqgBhjmrZH5e7l2uurEzkLJs2xRjoKoQ6epwZywT1BUjEgn7bpn%2BVASflVN4drpA8JGU%2B44pfAuJMkZIjTnzP4juVy2zv5%2FFePab9qsWiHIsVjCMZugvMQmT4kkga8V%2BFVLIOL6tF6fS8SKPYi7lZ3VSZnLF0azpKrtmeZlwKlegnVDEU4tZ3K3hSSwa2Y03S%2B8isxS6naB6a32S%2B7IORMkTnxJvkWjpHKQ9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T115321Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEXBHGMPI%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=585155bf780b1758a577fd947c44bebce992714d240329a1c054fac432313582",
  //     "width": 100,
  //     "height": 100
  //     },
  //     "SMALL": {
  //     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/041/04158b5869398c899942336274f0e0f7-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDFbUpt1ia6bPdZgWotWMJtwWFFy2JxcxG0EmTrTWzbdAIhAI8IHFSuU2JY1Em3ZPqN0s%2FihVzRrRnVo2tHBFN3K5doKswECBUQABoMMTg3MDE3MTUwOTg2Igwzyn2KMuEUsaN7iSgqqQS8UgWe1HE1kWRKe%2B%2FxOcJllJbqdNW7ODlFcCBOn%2F7dValho%2BXvdA%2BhKb4Ctgi20xoFQprcymJ3%2BMJ5qeuXI0aD1wTNmygxLc4Ur4ZQdvUuWU3E9QPVkUrBdns97iXqtFu13AMGKf3BoRDh0LlWlHxDUBIa9PLdBOqz0yQrZAY%2FeuOUt68jV%2BhnWcEj%2BX37o3P6Sm5tGrkWaV%2BijK8qIt3gyYJTWgGqwtpLfAG8AQQ6%2FRL7dWlYyIjS4d87M02pEvlMsl%2Fif%2BN27EoV4MH4UWM0M2UMtcgV578K3Q20dW6rJNPfIdqbK1GNxjeXdsAvKXrKxTYmodnSwuq4RaT8dIhsuHb5EVRAS1KhmioRuZi3viggt0mJzUhYlV1JOjRktZ9%2BEeSSwRr7QkTCTA22MWfGngKH1oy42LpItTXkLNWjaxfbfR8on8YzACXNWSBxPbjKam2ROYTw9IMRuTEsCVOSXjhRQG6e54b8IwlCGBZQMgb7dOdXMhS6zk%2Fn%2FpWU9CcVnxWTXbozuB18gp4vlOlYoiC9mdY8xMsetZ5U0VIWY6UpYwz2U7winP%2FZ85gdUrSA5YEVkESaUZsrnf19YKl6IeOC9wHxd%2BEwx0L5A8aE8DHTp9ghNnzWwggjwaogonkRVCGXRkLHQHdjrE3qcNEQhGGj8Hcf71zjlGwIJr8Moalc6dJLe0jPpWMVTU8k%2F%2FmreQI0kME0JWG4QF424z9eLkFVbtz5RyqoMM%2BkxJ4GOqgBhjmrZH5e7l2uurEzkLJs2xRjoKoQ6epwZywT1BUjEgn7bpn%2BVASflVN4drpA8JGU%2B44pfAuJMkZIjTnzP4juVy2zv5%2FFePab9qsWiHIsVjCMZugvMQmT4kkga8V%2BFVLIOL6tF6fS8SKPYi7lZ3VSZnLF0azpKrtmeZlwKlegnVDEU4tZ3K3hSSwa2Y03S%2B8isxS6naB6a32S%2B7IORMkTnxJvkWjpHKQ9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T115321Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEXBHGMPI%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fff1948ff3c6a8717c6741ee9c9651046e76ec22b35b5de8081f63dddb7090db",
  //     "width": 200,
  //     "height": 200
  //     },
  //     "REGULAR": {
  //     "url": "https://edamam-product-images.s3.amazonaws.com/web-img/041/04158b5869398c899942336274f0e0f7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDFbUpt1ia6bPdZgWotWMJtwWFFy2JxcxG0EmTrTWzbdAIhAI8IHFSuU2JY1Em3ZPqN0s%2FihVzRrRnVo2tHBFN3K5doKswECBUQABoMMTg3MDE3MTUwOTg2Igwzyn2KMuEUsaN7iSgqqQS8UgWe1HE1kWRKe%2B%2FxOcJllJbqdNW7ODlFcCBOn%2F7dValho%2BXvdA%2BhKb4Ctgi20xoFQprcymJ3%2BMJ5qeuXI0aD1wTNmygxLc4Ur4ZQdvUuWU3E9QPVkUrBdns97iXqtFu13AMGKf3BoRDh0LlWlHxDUBIa9PLdBOqz0yQrZAY%2FeuOUt68jV%2BhnWcEj%2BX37o3P6Sm5tGrkWaV%2BijK8qIt3gyYJTWgGqwtpLfAG8AQQ6%2FRL7dWlYyIjS4d87M02pEvlMsl%2Fif%2BN27EoV4MH4UWM0M2UMtcgV578K3Q20dW6rJNPfIdqbK1GNxjeXdsAvKXrKxTYmodnSwuq4RaT8dIhsuHb5EVRAS1KhmioRuZi3viggt0mJzUhYlV1JOjRktZ9%2BEeSSwRr7QkTCTA22MWfGngKH1oy42LpItTXkLNWjaxfbfR8on8YzACXNWSBxPbjKam2ROYTw9IMRuTEsCVOSXjhRQG6e54b8IwlCGBZQMgb7dOdXMhS6zk%2Fn%2FpWU9CcVnxWTXbozuB18gp4vlOlYoiC9mdY8xMsetZ5U0VIWY6UpYwz2U7winP%2FZ85gdUrSA5YEVkESaUZsrnf19YKl6IeOC9wHxd%2BEwx0L5A8aE8DHTp9ghNnzWwggjwaogonkRVCGXRkLHQHdjrE3qcNEQhGGj8Hcf71zjlGwIJr8Moalc6dJLe0jPpWMVTU8k%2F%2FmreQI0kME0JWG4QF424z9eLkFVbtz5RyqoMM%2BkxJ4GOqgBhjmrZH5e7l2uurEzkLJs2xRjoKoQ6epwZywT1BUjEgn7bpn%2BVASflVN4drpA8JGU%2B44pfAuJMkZIjTnzP4juVy2zv5%2FFePab9qsWiHIsVjCMZugvMQmT4kkga8V%2BFVLIOL6tF6fS8SKPYi7lZ3VSZnLF0azpKrtmeZlwKlegnVDEU4tZ3K3hSSwa2Y03S%2B8isxS6naB6a32S%2B7IORMkTnxJvkWjpHKQ9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T115321Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEXBHGMPI%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f8f7de64968ef8e267b211bef744cb7b81ebbc687d0a0f22392e341ad32991f5",
  //     "width": 300,
  //     "height": 300
  //     }
  //     },
  //     "source": "Serious Eats",
  //     "url": "http://www.seriouseats.com/recipes/2012/10/naomi-duguids-fried-noodles.html",
  //     "shareAs": "http://www.edamam.com/recipe/naomi-duguid-s-fried-noodles-bbfc1a248bd6fe277e35fe01027de91f/-",
  //     "yield": 2,
  //     "dietLabels": [
  //     "Balanced",
  //     "Low-Sodium"
  //     ],
  //     "healthLabels": [
  //     "Sugar-Conscious",
  //     "Low Potassium",
  //     "Kidney-Friendly",
  //     "Vegetarian",
  //     "Pescatarian",
  //     "Dairy-Free",
  //     "Tree-Nut-Free",
  //     "Soy-Free",
  //     "Fish-Free",
  //     "Shellfish-Free",
  //     "Pork-Free",
  //     "Red-Meat-Free",
  //     "Crustacean-Free",
  //     "Celery-Free",
  //     "Mustard-Free",
  //     "Sesame-Free",
  //     "Lupine-Free",
  //     "Mollusk-Free",
  //     "Alcohol-Free",
  //     "Sulfite-Free",
  //     "Kosher"
  //     ],
  //     "cautions": [],
  //     "ingredientLines": [
  //     "1 cup dried egg noodles",
  //     "Peanut oil, for frying"
  //     ],
  //     "ingredients": [
  //     {
  //     "text": "1 cup dried egg noodles",
  //     "quantity": 1,
  //     "measure": "cup",
  //     "food": "egg noodles",
  //     "weight": 38,
  //     "foodCategory": "grains",
  //     "foodId": "food_aefg3gqa71nrtpbhjfo3yb36kd81",
  //     "image": "https://www.edamam.com/food-img/800/800c9c0d7cef6b5474723682ffa2878d.jpg"
  //     },
  //     {
  //     "text": "Peanut oil, for frying",
  //     "quantity": 0,
  //     "measure": null,
  //     "food": "Peanut oil",
  //     "weight": 0.5167999999999999,
  //     "foodCategory": "Oils",
  //     "foodId": "food_ackj525b2vo905bisrwjabfanm5t",
  //     "image": "https://www.edamam.com/food-img/827/82725f6b015e75a059ba2569c768eb68.jpg"
  //     }
  //     ],
  //     "calories": 196.30800000000002,
  //     "totalWeight": 43.7,
  //     "totalTime": 20,
  //     "cuisineType": [
  //     "asian"
  //     ],
  //     "mealType": [
  //     "lunch/dinner"
  //     ],
  //     "dishType": [
  //     "main course"
  //     ],
  //     "totalNutrients": {
  //     "ENERC_KCAL": {
  //     "label": "Energy",
  //     "quantity": 196.30800000000002,
  //     "unit": "kcal"
  //     },
  //     "FAT": {
  //     "label": "Fat",
  //     "quantity": 7.3872,
  //     "unit": "g"
  //     },
  //     "FASAT": {
  //     "label": "Saturated",
  //     "quantity": 1.4117,
  //     "unit": "g"
  //     },
  //     "FATRN": {
  //     "label": "Trans",
  //     "quantity": 0.02318,
  //     "unit": "g"
  //     },
  //     "FAMS": {
  //     "label": "Monounsaturated",
  //     "quantity": 3.1091600000000006,
  //     "unit": "g"
  //     },
  //     "FAPU": {
  //     "label": "Polyunsaturated",
  //     "quantity": 2.32978,
  //     "unit": "g"
  //     },
  //     "CHOCDF": {
  //     "label": "Carbs",
  //     "quantity": 27.0826,
  //     "unit": "g"
  //     },
  //     "CHOCDF.net": {
  //     "label": "Carbohydrates (net)",
  //     "quantity": 25.828599999999998,
  //     "unit": "g"
  //     },
  //     "FIBTG": {
  //     "label": "Fiber",
  //     "quantity": 1.254,
  //     "unit": "g"
  //     },
  //     "SUGAR": {
  //     "label": "Sugars",
  //     "quantity": 0.7143999999999999,
  //     "unit": "g"
  //     },
  //     "SUGAR.added": {
  //     "label": "Sugars, added",
  //     "quantity": 0,
  //     "unit": "g"
  //     },
  //     "PROCNT": {
  //     "label": "Protein",
  //     "quantity": 5.3808,
  //     "unit": "g"
  //     },
  //     "CHOLE": {
  //     "label": "Cholesterol",
  //     "quantity": 31.92,
  //     "unit": "mg"
  //     },
  //     "NA": {
  //     "label": "Sodium",
  //     "quantity": 7.98,
  //     "unit": "mg"
  //     },
  //     "CA": {
  //     "label": "Calcium",
  //     "quantity": 13.3,
  //     "unit": "mg"
  //     },
  //     "MG": {
  //     "label": "Magnesium",
  //     "quantity": 22.04,
  //     "unit": "mg"
  //     },
  //     "K": {
  //     "label": "Potassium",
  //     "quantity": 92.72,
  //     "unit": "mg"
  //     },
  //     "FE": {
  //     "label": "Iron",
  //     "quantity": 1.5255100000000001,
  //     "unit": "mg"
  //     },
  //     "ZN": {
  //     "label": "Zinc",
  //     "quantity": 0.73017,
  //     "unit": "mg"
  //     },
  //     "P": {
  //     "label": "Phosphorus",
  //     "quantity": 91.58,
  //     "unit": "mg"
  //     },
  //     "VITA_RAE": {
  //     "label": "Vitamin A",
  //     "quantity": 6.46,
  //     "unit": "µg"
  //     },
  //     "VITC": {
  //     "label": "Vitamin C",
  //     "quantity": 0,
  //     "unit": "mg"
  //     },
  //     "THIA": {
  //     "label": "Thiamin (B1)",
  //     "quantity": 0.43054000000000003,
  //     "unit": "mg"
  //     },
  //     "RIBF": {
  //     "label": "Riboflavin (B2)",
  //     "quantity": 0.16188,
  //     "unit": "mg"
  //     },
  //     "NIA": {
  //     "label": "Niacin (B3)",
  //     "quantity": 3.1870600000000002,
  //     "unit": "mg"
  //     },
  //     "VITB6A": {
  //     "label": "Vitamin B6",
  //     "quantity": 0.08208,
  //     "unit": "mg"
  //     },
  //     "FOLDFE": {
  //     "label": "Folate equivalent (total)",
  //     "quantity": 140.6,
  //     "unit": "µg"
  //     },
  //     "FOLFD": {
  //     "label": "Folate (food)",
  //     "quantity": 11.02,
  //     "unit": "µg"
  //     },
  //     "FOLAC": {
  //     "label": "Folic acid",
  //     "quantity": 76.38,
  //     "unit": "µg"
  //     },
  //     "VITB12": {
  //     "label": "Vitamin B12",
  //     "quantity": 0.11019999999999999,
  //     "unit": "µg"
  //     },
  //     "VITD": {
  //     "label": "Vitamin D",
  //     "quantity": 0.11399999999999999,
  //     "unit": "µg"
  //     },
  //     "TOCPHA": {
  //     "label": "Vitamin E",
  //     "quantity": 1.03493,
  //     "unit": "mg"
  //     },
  //     "VITK1": {
  //     "label": "Vitamin K",
  //     "quantity": 0.2299,
  //     "unit": "µg"
  //     },
  //     "Sugar.alcohol": {
  //     "label": "Sugar alcohol",
  //     "quantity": 0,
  //     "unit": "g"
  //     },
  //     "WATER": {
  //     "label": "Water",
  //     "quantity": 3.4238,
  //     "unit": "g"
  //     }
  //     },
  //     "totalDaily": {
  //     "ENERC_KCAL": {
  //     "label": "Energy",
  //     "quantity": 9.815400000000002,
  //     "unit": "%"
  //     },
  //     "FAT": {
  //     "label": "Fat",
  //     "quantity": 11.364923076923077,
  //     "unit": "%"
  //     },
  //     "FASAT": {
  //     "label": "Saturated",
  //     "quantity": 7.0584999999999996,
  //     "unit": "%"
  //     },
  //     "CHOCDF": {
  //     "label": "Carbs",
  //     "quantity": 9.027533333333333,
  //     "unit": "%"
  //     },
  //     "FIBTG": {
  //     "label": "Fiber",
  //     "quantity": 5.016,
  //     "unit": "%"
  //     },
  //     "PROCNT": {
  //     "label": "Protein",
  //     "quantity": 10.761599999999998,
  //     "unit": "%"
  //     },
  //     "CHOLE": {
  //     "label": "Cholesterol",
  //     "quantity": 10.64,
  //     "unit": "%"
  //     },
  //     "NA": {
  //     "label": "Sodium",
  //     "quantity": 0.3325,
  //     "unit": "%"
  //     },
  //     "CA": {
  //     "label": "Calcium",
  //     "quantity": 1.33,
  //     "unit": "%"
  //     },
  //     "MG": {
  //     "label": "Magnesium",
  //     "quantity": 5.247619047619048,
  //     "unit": "%"
  //     },
  //     "K": {
  //     "label": "Potassium",
  //     "quantity": 1.9727659574468086,
  //     "unit": "%"
  //     },
  //     "FE": {
  //     "label": "Iron",
  //     "quantity": 8.475055555555556,
  //     "unit": "%"
  //     },
  //     "ZN": {
  //     "label": "Zinc",
  //     "quantity": 6.6379090909090905,
  //     "unit": "%"
  //     },
  //     "P": {
  //     "label": "Phosphorus",
  //     "quantity": 13.082857142857144,
  //     "unit": "%"
  //     },
  //     "VITA_RAE": {
  //     "label": "Vitamin A",
  //     "quantity": 0.7177777777777777,
  //     "unit": "%"
  //     },
  //     "VITC": {
  //     "label": "Vitamin C",
  //     "quantity": 0,
  //     "unit": "%"
  //     },
  //     "THIA": {
  //     "label": "Thiamin (B1)",
  //     "quantity": 35.87833333333334,
  //     "unit": "%"
  //     },
  //     "RIBF": {
  //     "label": "Riboflavin (B2)",
  //     "quantity": 12.452307692307691,
  //     "unit": "%"
  //     },
  //     "NIA": {
  //     "label": "Niacin (B3)",
  //     "quantity": 19.919125,
  //     "unit": "%"
  //     },
  //     "VITB6A": {
  //     "label": "Vitamin B6",
  //     "quantity": 6.313846153846153,
  //     "unit": "%"
  //     },
  //     "FOLDFE": {
  //     "label": "Folate equivalent (total)",
  //     "quantity": 35.15,
  //     "unit": "%"
  //     },
  //     "VITB12": {
  //     "label": "Vitamin B12",
  //     "quantity": 4.591666666666667,
  //     "unit": "%"
  //     },
  //     "VITD": {
  //     "label": "Vitamin D",
  //     "quantity": 0.7599999999999999,
  //     "unit": "%"
  //     },
  //     "TOCPHA": {
  //     "label": "Vitamin E",
  //     "quantity": 6.899533333333333,
  //     "unit": "%"
  //     },
  //     "VITK1": {
  //     "label": "Vitamin K",
  //     "quantity": 0.19158333333333333,
  //     "unit": "%"
  //     }
  //     },
  //     "digest": [
  //     {
  //     "label": "Fat",
  //     "tag": "FAT",
  //     "schemaOrgTag": "fatContent",
  //     "total": 7.3872,
  //     "hasRDI": true,
  //     "daily": 11.364923076923077,
  //     "unit": "g",
  //     "sub": [
  //     {
  //     "label": "Saturated",
  //     "tag": "FASAT",
  //     "schemaOrgTag": "saturatedFatContent",
  //     "total": 1.4117,
  //     "hasRDI": true,
  //     "daily": 7.0584999999999996,
  //     "unit": "g"
  //     },
  //     {
  //     "label": "Trans",
  //     "tag": "FATRN",
  //     "schemaOrgTag": "transFatContent",
  //     "total": 0.02318,
  //     "hasRDI": false,
  //     "daily": 0,
  //     "unit": "g"
  //     },
  //     {
  //     "label": "Monounsaturated",
  //     "tag": "FAMS",
  //     "schemaOrgTag": null,
  //     "total": 3.1091600000000006,
  //     "hasRDI": false,
  //     "daily": 0,
  //     "unit": "g"
  //     },
  //     {
  //     "label": "Polyunsaturated",
  //     "tag": "FAPU",
  //     "schemaOrgTag": null,
  //     "total": 2.32978,
  //     "hasRDI": false,
  //     "daily": 0,
  //     "unit": "g"
  //     }
  //     ]
  //     },
  //     {
  //     "label": "Carbs",
  //     "tag": "CHOCDF",
  //     "schemaOrgTag": "carbohydrateContent",
  //     "total": 27.0826,
  //     "hasRDI": true,
  //     "daily": 9.027533333333333,
  //     "unit": "g",
  //     "sub": [
  //     {
  //     "label": "Carbs (net)",
  //     "tag": "CHOCDF.net",
  //     "schemaOrgTag": null,
  //     "total": 25.828599999999998,
  //     "hasRDI": false,
  //     "daily": 0,
  //     "unit": "g"
  //     },
  //     {
  //     "label": "Fiber",
  //     "tag": "FIBTG",
  //     "schemaOrgTag": "fiberContent",
  //     "total": 1.254,
  //     "hasRDI": true,
  //     "daily": 5.016,
  //     "unit": "g"
  //     },
  //     {
  //     "label": "Sugars",
  //     "tag": "SUGAR",
  //     "schemaOrgTag": "sugarContent",
  //     "total": 0.7143999999999999,
  //     "hasRDI": false,
  //     "daily": 0,
  //     "unit": "g"
  //     },
  //     {
  //     "label": "Sugars, added",
  //     "tag": "SUGAR.added",
  //     "schemaOrgTag": null,
  //     "total": 0,
  //     "hasRDI": false,
  //     "daily": 0,
  //     "unit": "g"
  //     }
  //     ]
  //     },
  //     {
  //     "label": "Protein",
  //     "tag": "PROCNT",
  //     "schemaOrgTag": "proteinContent",
  //     "total": 5.3808,
  //     "hasRDI": true,
  //     "daily": 10.761599999999998,
  //     "unit": "g"
  //     },
  //     {
  //     "label": "Cholesterol",
  //     "tag": "CHOLE",
  //     "schemaOrgTag": "cholesterolContent",
  //     "total": 31.92,
  //     "hasRDI": true,
  //     "daily": 10.64,
  //     "unit": "mg"
  //     },
  //     {
  //     "label": "Sodium",
  //     "tag": "NA",
  //     "schemaOrgTag": "sodiumContent",
  //     "total": 7.98,
  //     "hasRDI": true,
  //     "daily": 0.3325,
  //     "unit": "mg"
  //     },
  //     {
  //     "label": "Calcium",
  //     "tag": "CA",
  //     "schemaOrgTag": null,
  //     "total": 13.3,
  //     "hasRDI": true,
  //     "daily": 1.33,
  //     "unit": "mg"
  //     },
  //     {
  //     "label": "Magnesium",
  //     "tag": "MG",
  //     "schemaOrgTag": null,
  //     "total": 22.04,
  //     "hasRDI": true,
  //     "daily": 5.247619047619048,
  //     "unit": "mg"
  //     },
  //     {
  //     "label": "Potassium",
  //     "tag": "K",
  //     "schemaOrgTag": null,
  //     "total": 92.72,
  //     "hasRDI": true,
  //     "daily": 1.9727659574468086,
  //     "unit": "mg"
  //     },
  //     {
  //     "label": "Iron",
  //     "tag": "FE",
  //     "schemaOrgTag": null,
  //     "total": 1.5255100000000001,
  //     "hasRDI": true,
  //     "daily": 8.475055555555556,
  //     "unit": "mg"
  //     },
  //     {
  //     "label": "Zinc",
  //     "tag": "ZN",
  //     "schemaOrgTag": null,
  //     "total": 0.73017,
  //     "hasRDI": true,
  //     "daily": 6.6379090909090905,
  //     "unit": "mg"
  //     },
  //     {
  //     "label": "Phosphorus",
  //     "tag": "P",
  //     "schemaOrgTag": null,
  //     "total": 91.58,
  //     "hasRDI": true,
  //     "daily": 13.082857142857144,
  //     "unit": "mg"
  //     },
  //     {
  //     "label": "Vitamin A",
  //     "tag": "VITA_RAE",
  //     "schemaOrgTag": null,
  //     "total": 6.46,
  //     "hasRDI": true,
  //     "daily": 0.7177777777777777,
  //     "unit": "µg"
  //     },
  //     {
  //     "label": "Vitamin C",
  //     "tag": "VITC",
  //     "schemaOrgTag": null,
  //     "total": 0,
  //     "hasRDI": true,
  //     "daily": 0,
  //     "unit": "mg"
  //     },
  //     {
  //     "label": "Thiamin (B1)",
  //     "tag": "THIA",
  //     "schemaOrgTag": null,
  //     "total": 0.43054000000000003,
  //     "hasRDI": true,
  //     "daily": 35.87833333333334,
  //     "unit": "mg"
  //     },
  //     {
  //     "label": "Riboflavin (B2)",
  //     "tag": "RIBF",
  //     "schemaOrgTag": null,
  //     "total": 0.16188,
  //     "hasRDI": true,
  //     "daily": 12.452307692307691,
  //     "unit": "mg"
  //     },
  //     {
  //     "label": "Niacin (B3)",
  //     "tag": "NIA",
  //     "schemaOrgTag": null,
  //     "total": 3.1870600000000002,
  //     "hasRDI": true,
  //     "daily": 19.919125,
  //     "unit": "mg"
  //     },
  //     {
  //     "label": "Vitamin B6",
  //     "tag": "VITB6A",
  //     "schemaOrgTag": null,
  //     "total": 0.08208,
  //     "hasRDI": true,
  //     "daily": 6.313846153846153,
  //     "unit": "mg"
  //     },
  //     {
  //     "label": "Folate equivalent (total)",
  //     "tag": "FOLDFE",
  //     "schemaOrgTag": null,
  //     "total": 140.6,
  //     "hasRDI": true,
  //     "daily": 35.15,
  //     "unit": "µg"
  //     },
  //     {
  //     "label": "Folate (food)",
  //     "tag": "FOLFD",
  //     "schemaOrgTag": null,
  //     "total": 11.02,
  //     "hasRDI": false,
  //     "daily": 0,
  //     "unit": "µg"
  //     },
  //     {
  //     "label": "Folic acid",
  //     "tag": "FOLAC",
  //     "schemaOrgTag": null,
  //     "total": 76.38,
  //     "hasRDI": false,
  //     "daily": 0,
  //     "unit": "µg"
  //     },
  //     {
  //     "label": "Vitamin B12",
  //     "tag": "VITB12",
  //     "schemaOrgTag": null,
  //     "total": 0.11019999999999999,
  //     "hasRDI": true,
  //     "daily": 4.591666666666667,
  //     "unit": "µg"
  //     },
  //     {
  //     "label": "Vitamin D",
  //     "tag": "VITD",
  //     "schemaOrgTag": null,
  //     "total": 0.11399999999999999,
  //     "hasRDI": true,
  //     "daily": 0.7599999999999999,
  //     "unit": "µg"
  //     },
  //     {
  //     "label": "Vitamin E",
  //     "tag": "TOCPHA",
  //     "schemaOrgTag": null,
  //     "total": 1.03493,
  //     "hasRDI": true,
  //     "daily": 6.899533333333333,
  //     "unit": "mg"
  //     },
  //     {
  //     "label": "Vitamin K",
  //     "tag": "VITK1",
  //     "schemaOrgTag": null,
  //     "total": 0.2299,
  //     "hasRDI": true,
  //     "daily": 0.19158333333333333,
  //     "unit": "µg"
  //     },
  //     {
  //     "label": "Sugar alcohols",
  //     "tag": "Sugar.alcohol",
  //     "schemaOrgTag": null,
  //     "total": 0,
  //     "hasRDI": false,
  //     "daily": 0,
  //     "unit": "g"
  //     },
  //     {
  //     "label": "Water",
  //     "tag": "WATER",
  //     "schemaOrgTag": null,
  //     "total": 3.4238,
  //     "hasRDI": false,
  //     "daily": 0,
  //     "unit": "g"
  //     }
  //     ]
  //     },
  //     "_links": {
  //     "self": {
  //     "href": "https://api.edamam.com/api/recipes/v2/bbfc1a248bd6fe277e35fe01027de91f?type=public&app_id=8717089a&app_key=35658ee1215cbd7922d388170b7509f0",
  //     "title": "Self"
  //     }
  //     }
  //     },
  //     {
  //       "recipe": {
  //       "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_49864e04de41a2512ee21919e26f482c",
  //       "label": "Ultimate Chickpea Noodle Soup recipes",
  //       "image": "https://edamam-product-images.s3.amazonaws.com/web-img/996/996dc0887734927c79893f7ceca9c69e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDFbUpt1ia6bPdZgWotWMJtwWFFy2JxcxG0EmTrTWzbdAIhAI8IHFSuU2JY1Em3ZPqN0s%2FihVzRrRnVo2tHBFN3K5doKswECBUQABoMMTg3MDE3MTUwOTg2Igwzyn2KMuEUsaN7iSgqqQS8UgWe1HE1kWRKe%2B%2FxOcJllJbqdNW7ODlFcCBOn%2F7dValho%2BXvdA%2BhKb4Ctgi20xoFQprcymJ3%2BMJ5qeuXI0aD1wTNmygxLc4Ur4ZQdvUuWU3E9QPVkUrBdns97iXqtFu13AMGKf3BoRDh0LlWlHxDUBIa9PLdBOqz0yQrZAY%2FeuOUt68jV%2BhnWcEj%2BX37o3P6Sm5tGrkWaV%2BijK8qIt3gyYJTWgGqwtpLfAG8AQQ6%2FRL7dWlYyIjS4d87M02pEvlMsl%2Fif%2BN27EoV4MH4UWM0M2UMtcgV578K3Q20dW6rJNPfIdqbK1GNxjeXdsAvKXrKxTYmodnSwuq4RaT8dIhsuHb5EVRAS1KhmioRuZi3viggt0mJzUhYlV1JOjRktZ9%2BEeSSwRr7QkTCTA22MWfGngKH1oy42LpItTXkLNWjaxfbfR8on8YzACXNWSBxPbjKam2ROYTw9IMRuTEsCVOSXjhRQG6e54b8IwlCGBZQMgb7dOdXMhS6zk%2Fn%2FpWU9CcVnxWTXbozuB18gp4vlOlYoiC9mdY8xMsetZ5U0VIWY6UpYwz2U7winP%2FZ85gdUrSA5YEVkESaUZsrnf19YKl6IeOC9wHxd%2BEwx0L5A8aE8DHTp9ghNnzWwggjwaogonkRVCGXRkLHQHdjrE3qcNEQhGGj8Hcf71zjlGwIJr8Moalc6dJLe0jPpWMVTU8k%2F%2FmreQI0kME0JWG4QF424z9eLkFVbtz5RyqoMM%2BkxJ4GOqgBhjmrZH5e7l2uurEzkLJs2xRjoKoQ6epwZywT1BUjEgn7bpn%2BVASflVN4drpA8JGU%2B44pfAuJMkZIjTnzP4juVy2zv5%2FFePab9qsWiHIsVjCMZugvMQmT4kkga8V%2BFVLIOL6tF6fS8SKPYi7lZ3VSZnLF0azpKrtmeZlwKlegnVDEU4tZ3K3hSSwa2Y03S%2B8isxS6naB6a32S%2B7IORMkTnxJvkWjpHKQ9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T115927Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEXBHGMPI%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fe9be39744df6d8acafc29e7abf190b9473dbe7652e680177d3666f160bf60f8",
  //       "images": {
  //       "THUMBNAIL": {
  //       "url": "https://edamam-product-images.s3.amazonaws.com/web-img/996/996dc0887734927c79893f7ceca9c69e-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDFbUpt1ia6bPdZgWotWMJtwWFFy2JxcxG0EmTrTWzbdAIhAI8IHFSuU2JY1Em3ZPqN0s%2FihVzRrRnVo2tHBFN3K5doKswECBUQABoMMTg3MDE3MTUwOTg2Igwzyn2KMuEUsaN7iSgqqQS8UgWe1HE1kWRKe%2B%2FxOcJllJbqdNW7ODlFcCBOn%2F7dValho%2BXvdA%2BhKb4Ctgi20xoFQprcymJ3%2BMJ5qeuXI0aD1wTNmygxLc4Ur4ZQdvUuWU3E9QPVkUrBdns97iXqtFu13AMGKf3BoRDh0LlWlHxDUBIa9PLdBOqz0yQrZAY%2FeuOUt68jV%2BhnWcEj%2BX37o3P6Sm5tGrkWaV%2BijK8qIt3gyYJTWgGqwtpLfAG8AQQ6%2FRL7dWlYyIjS4d87M02pEvlMsl%2Fif%2BN27EoV4MH4UWM0M2UMtcgV578K3Q20dW6rJNPfIdqbK1GNxjeXdsAvKXrKxTYmodnSwuq4RaT8dIhsuHb5EVRAS1KhmioRuZi3viggt0mJzUhYlV1JOjRktZ9%2BEeSSwRr7QkTCTA22MWfGngKH1oy42LpItTXkLNWjaxfbfR8on8YzACXNWSBxPbjKam2ROYTw9IMRuTEsCVOSXjhRQG6e54b8IwlCGBZQMgb7dOdXMhS6zk%2Fn%2FpWU9CcVnxWTXbozuB18gp4vlOlYoiC9mdY8xMsetZ5U0VIWY6UpYwz2U7winP%2FZ85gdUrSA5YEVkESaUZsrnf19YKl6IeOC9wHxd%2BEwx0L5A8aE8DHTp9ghNnzWwggjwaogonkRVCGXRkLHQHdjrE3qcNEQhGGj8Hcf71zjlGwIJr8Moalc6dJLe0jPpWMVTU8k%2F%2FmreQI0kME0JWG4QF424z9eLkFVbtz5RyqoMM%2BkxJ4GOqgBhjmrZH5e7l2uurEzkLJs2xRjoKoQ6epwZywT1BUjEgn7bpn%2BVASflVN4drpA8JGU%2B44pfAuJMkZIjTnzP4juVy2zv5%2FFePab9qsWiHIsVjCMZugvMQmT4kkga8V%2BFVLIOL6tF6fS8SKPYi7lZ3VSZnLF0azpKrtmeZlwKlegnVDEU4tZ3K3hSSwa2Y03S%2B8isxS6naB6a32S%2B7IORMkTnxJvkWjpHKQ9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T115927Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEXBHGMPI%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=baa42436295f204c9175ffb0bfd7ce067a8619860de7af730f225c8c77b21ab8",
  //       "width": 100,
  //       "height": 100
  //       },
  //       "SMALL": {
  //       "url": "https://edamam-product-images.s3.amazonaws.com/web-img/996/996dc0887734927c79893f7ceca9c69e-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDFbUpt1ia6bPdZgWotWMJtwWFFy2JxcxG0EmTrTWzbdAIhAI8IHFSuU2JY1Em3ZPqN0s%2FihVzRrRnVo2tHBFN3K5doKswECBUQABoMMTg3MDE3MTUwOTg2Igwzyn2KMuEUsaN7iSgqqQS8UgWe1HE1kWRKe%2B%2FxOcJllJbqdNW7ODlFcCBOn%2F7dValho%2BXvdA%2BhKb4Ctgi20xoFQprcymJ3%2BMJ5qeuXI0aD1wTNmygxLc4Ur4ZQdvUuWU3E9QPVkUrBdns97iXqtFu13AMGKf3BoRDh0LlWlHxDUBIa9PLdBOqz0yQrZAY%2FeuOUt68jV%2BhnWcEj%2BX37o3P6Sm5tGrkWaV%2BijK8qIt3gyYJTWgGqwtpLfAG8AQQ6%2FRL7dWlYyIjS4d87M02pEvlMsl%2Fif%2BN27EoV4MH4UWM0M2UMtcgV578K3Q20dW6rJNPfIdqbK1GNxjeXdsAvKXrKxTYmodnSwuq4RaT8dIhsuHb5EVRAS1KhmioRuZi3viggt0mJzUhYlV1JOjRktZ9%2BEeSSwRr7QkTCTA22MWfGngKH1oy42LpItTXkLNWjaxfbfR8on8YzACXNWSBxPbjKam2ROYTw9IMRuTEsCVOSXjhRQG6e54b8IwlCGBZQMgb7dOdXMhS6zk%2Fn%2FpWU9CcVnxWTXbozuB18gp4vlOlYoiC9mdY8xMsetZ5U0VIWY6UpYwz2U7winP%2FZ85gdUrSA5YEVkESaUZsrnf19YKl6IeOC9wHxd%2BEwx0L5A8aE8DHTp9ghNnzWwggjwaogonkRVCGXRkLHQHdjrE3qcNEQhGGj8Hcf71zjlGwIJr8Moalc6dJLe0jPpWMVTU8k%2F%2FmreQI0kME0JWG4QF424z9eLkFVbtz5RyqoMM%2BkxJ4GOqgBhjmrZH5e7l2uurEzkLJs2xRjoKoQ6epwZywT1BUjEgn7bpn%2BVASflVN4drpA8JGU%2B44pfAuJMkZIjTnzP4juVy2zv5%2FFePab9qsWiHIsVjCMZugvMQmT4kkga8V%2BFVLIOL6tF6fS8SKPYi7lZ3VSZnLF0azpKrtmeZlwKlegnVDEU4tZ3K3hSSwa2Y03S%2B8isxS6naB6a32S%2B7IORMkTnxJvkWjpHKQ9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T115927Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEXBHGMPI%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4be30b934428dbf17b5bd565bae076f7556d4e1193491f2ca1fc0341223381df",
  //       "width": 200,
  //       "height": 200
  //       },
  //       "REGULAR": {
  //       "url": "https://edamam-product-images.s3.amazonaws.com/web-img/996/996dc0887734927c79893f7ceca9c69e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDFbUpt1ia6bPdZgWotWMJtwWFFy2JxcxG0EmTrTWzbdAIhAI8IHFSuU2JY1Em3ZPqN0s%2FihVzRrRnVo2tHBFN3K5doKswECBUQABoMMTg3MDE3MTUwOTg2Igwzyn2KMuEUsaN7iSgqqQS8UgWe1HE1kWRKe%2B%2FxOcJllJbqdNW7ODlFcCBOn%2F7dValho%2BXvdA%2BhKb4Ctgi20xoFQprcymJ3%2BMJ5qeuXI0aD1wTNmygxLc4Ur4ZQdvUuWU3E9QPVkUrBdns97iXqtFu13AMGKf3BoRDh0LlWlHxDUBIa9PLdBOqz0yQrZAY%2FeuOUt68jV%2BhnWcEj%2BX37o3P6Sm5tGrkWaV%2BijK8qIt3gyYJTWgGqwtpLfAG8AQQ6%2FRL7dWlYyIjS4d87M02pEvlMsl%2Fif%2BN27EoV4MH4UWM0M2UMtcgV578K3Q20dW6rJNPfIdqbK1GNxjeXdsAvKXrKxTYmodnSwuq4RaT8dIhsuHb5EVRAS1KhmioRuZi3viggt0mJzUhYlV1JOjRktZ9%2BEeSSwRr7QkTCTA22MWfGngKH1oy42LpItTXkLNWjaxfbfR8on8YzACXNWSBxPbjKam2ROYTw9IMRuTEsCVOSXjhRQG6e54b8IwlCGBZQMgb7dOdXMhS6zk%2Fn%2FpWU9CcVnxWTXbozuB18gp4vlOlYoiC9mdY8xMsetZ5U0VIWY6UpYwz2U7winP%2FZ85gdUrSA5YEVkESaUZsrnf19YKl6IeOC9wHxd%2BEwx0L5A8aE8DHTp9ghNnzWwggjwaogonkRVCGXRkLHQHdjrE3qcNEQhGGj8Hcf71zjlGwIJr8Moalc6dJLe0jPpWMVTU8k%2F%2FmreQI0kME0JWG4QF424z9eLkFVbtz5RyqoMM%2BkxJ4GOqgBhjmrZH5e7l2uurEzkLJs2xRjoKoQ6epwZywT1BUjEgn7bpn%2BVASflVN4drpA8JGU%2B44pfAuJMkZIjTnzP4juVy2zv5%2FFePab9qsWiHIsVjCMZugvMQmT4kkga8V%2BFVLIOL6tF6fS8SKPYi7lZ3VSZnLF0azpKrtmeZlwKlegnVDEU4tZ3K3hSSwa2Y03S%2B8isxS6naB6a32S%2B7IORMkTnxJvkWjpHKQ9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T115927Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEXBHGMPI%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fe9be39744df6d8acafc29e7abf190b9473dbe7652e680177d3666f160bf60f8",
  //       "width": 300,
  //       "height": 300
  //       }
  //       },
  //       "source": "101 Cookbooks",
  //       "url": "http://www.101cookbooks.com/archives/001540.html",
  //       "shareAs": "http://www.edamam.com/recipe/ultimate-chickpea-noodle-soup-recipes-49864e04de41a2512ee21919e26f482c/-",
  //       "yield": 4,
  //       "dietLabels": [
  //       "Balanced",
  //       "High-Fiber"
  //       ],
  //       "healthLabels": [
  //       "Vegan",
  //       "Vegetarian",
  //       "Pescatarian",
  //       "Mediterranean",
  //       "Dairy-Free",
  //       "Egg-Free",
  //       "Peanut-Free",
  //       "Tree-Nut-Free",
  //       "Soy-Free",
  //       "Fish-Free",
  //       "Shellfish-Free",
  //       "Pork-Free",
  //       "Red-Meat-Free",
  //       "Crustacean-Free",
  //       "Celery-Free",
  //       "Mustard-Free",
  //       "Sesame-Free",
  //       "Lupine-Free",
  //       "Mollusk-Free",
  //       "Alcohol-Free",
  //       "Sulfite-Free",
  //       "Kosher"
  //       ],
  //       "cautions": [],
  //       "ingredientLines": [
  //       "4 cups water or a mild vegetable stock",
  //       "2 cups pre-soaked ceci beans (also known as chickpeas or garbanzo beans)",
  //       "6 ounces fresh or dried pappardelle",
  //       "1/3 cup extra virgin olive oil",
  //       "sea salt"
  //       ],
  //       "ingredients": [
  //       {
  //       "text": "4 cups water or a mild vegetable stock",
  //       "quantity": 4,
  //       "measure": "cup",
  //       "food": "vegetable stock",
  //       "weight": 908,
  //       "foodCategory": "Vegan products",
  //       "foodId": "food_bb2qjrjamst0vmam39stubtkmrs4",
  //       "image": "https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg"
  //       },
  //       {
  //       "text": "2 cups pre-soaked ceci beans (also known as chickpeas or garbanzo beans)",
  //       "quantity": 2,
  //       "measure": "cup",
  //       "food": "garbanzo beans",
  //       "weight": 400,
  //       "foodCategory": "plant-based protein",
  //       "foodId": "food_baux5rqbkto336asd7w3lbbi1koo",
  //       "image": "https://www.edamam.com/food-img/520/520c62055515f730b8947e0e445fd2be.jpg"
  //       },
  //       {
  //       "text": "6 ounces fresh or dried pappardelle",
  //       "quantity": 6,
  //       "measure": "ounce",
  //       "food": "pappardelle",
  //       "weight": 170.09713875,
  //       "foodCategory": "grains",
  //       "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
  //       "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
  //       },
  //       {
  //       "text": "1/3 cup extra virgin olive oil",
  //       "quantity": 0.3333333333333333,
  //       "measure": "cup",
  //       "food": "extra virgin olive oil",
  //       "weight": 72,
  //       "foodCategory": "Oils",
  //       "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
  //       "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
  //       },
  //       {
  //       "text": "sea salt",
  //       "quantity": 0,
  //       "measure": null,
  //       "food": "sea salt",
  //       "weight": 9.3005828325,
  //       "foodCategory": "Condiments and sauces",
  //       "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
  //       "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
  //       }
  //       ],
  //       "calories": 2788.28734183962,
  //       "totalWeight": 1558.7490957971008,
  //       "totalTime": 60,
  //       "cuisineType": [
  //       "asian"
  //       ],
  //       "mealType": [
  //       "lunch/dinner"
  //       ],
  //       "dishType": [
  //       "soup"
  //       ],
  //       "totalNutrients": {
  //       "ENERC_KCAL": {
  //       "label": "Energy",
  //       "quantity": 2788.28734183962,
  //       "unit": "kcal"
  //       },
  //       "FAT": {
  //       "label": "Fat",
  //       "quantity": 99.070495603805,
  //       "unit": "g"
  //       },
  //       "FASAT": {
  //       "label": "Saturated",
  //       "quantity": 12.8748198244175,
  //       "unit": "g"
  //       },
  //       "FATRN": {
  //       "label": "Trans",
  //       "quantity": 0,
  //       "unit": "g"
  //       },
  //       "FAMS": {
  //       "label": "Monounsaturated",
  //       "quantity": 58.553077110302496,
  //       "unit": "g"
  //       },
  //       "FAPU": {
  //       "label": "Polyunsaturated",
  //       "quantity": 19.50647256323,
  //       "unit": "g"
  //       },
  //       "CHOCDF": {
  //       "label": "Carbs",
  //       "quantity": 380.17632267178504,
  //       "unit": "g"
  //       },
  //       "CHOCDF.net": {
  //       "label": "Carbohydrates (net)",
  //       "quantity": 325.54960980106506,
  //       "unit": "g"
  //       },
  //       "FIBTG": {
  //       "label": "Fiber",
  //       "quantity": 54.62671287072,
  //       "unit": "g"
  //       },
  //       "SUGAR": {
  //       "label": "Sugars",
  //       "quantity": 47.827196898744994,
  //       "unit": "g"
  //       },
  //       "SUGAR.added": {
  //       "label": "Sugars, added",
  //       "quantity": 0,
  //       "unit": "g"
  //       },
  //       "PROCNT": {
  //       "label": "Protein",
  //       "quantity": 104.33617469551999,
  //       "unit": "g"
  //       },
  //       "CHOLE": {
  //       "label": "Cholesterol",
  //       "quantity": 0,
  //       "unit": "mg"
  //       },
  //       "NA": {
  //       "label": "Sodium",
  //       "quantity": 3604.7198942203495,
  //       "unit": "mg"
  //       },
  //       "CA": {
  //       "label": "Calcium",
  //       "quantity": 301.86224749772424,
  //       "unit": "mg"
  //       },
  //       "MG": {
  //       "label": "Magnesium",
  //       "quantity": 418.059339034411,
  //       "unit": "mg"
  //       },
  //       "K": {
  //       "label": "Potassium",
  //       "quantity": 3297.302834614868,
  //       "unit": "mg"
  //       },
  //       "FE": {
  //       "label": "Iron",
  //       "quantity": 20.088120674965428,
  //       "unit": "mg"
  //       },
  //       "ZN": {
  //       "label": "Zinc",
  //       "quantity": 13.5939221573421,
  //       "unit": "mg"
  //       },
  //       "P": {
  //       "label": "Phosphorus",
  //       "quantity": 1336.4028848560602,
  //       "unit": "mg"
  //       },
  //       "VITA_RAE": {
  //       "label": "Vitamin A",
  //       "quantity": 43.51709515576,
  //       "unit": "µg"
  //       },
  //       "VITC": {
  //       "label": "Vitamin C",
  //       "quantity": 18.51504811624,
  //       "unit": "mg"
  //       },
  //       "THIA": {
  //       "label": "Thiamin (B1)",
  //       "quantity": 2.0694047048749997,
  //       "unit": "mg"
  //       },
  //       "RIBF": {
  //       "label": "Riboflavin (B2)",
  //       "quantity": 0.96557985317,
  //       "unit": "mg"
  //       },
  //       "NIA": {
  //       "label": "Niacin (B3)",
  //       "quantity": 9.19867151019,
  //       "unit": "mg"
  //       },
  //       "VITB6A": {
  //       "label": "Vitamin B6",
  //       "quantity": 2.404265948825,
  //       "unit": "mg"
  //       },
  //       "FOLDFE": {
  //       "label": "Folate equivalent (total)",
  //       "quantity": 2263.72463469584,
  //       "unit": "µg"
  //       },
  //       "FOLFD": {
  //       "label": "Folate (food)",
  //       "quantity": 2263.72463469584,
  //       "unit": "µg"
  //       },
  //       "FOLAC": {
  //       "label": "Folic acid",
  //       "quantity": 0,
  //       "unit": "µg"
  //       },
  //       "VITB12": {
  //       "label": "Vitamin B12",
  //       "quantity": 0.000554788,
  //       "unit": "µg"
  //       },
  //       "VITD": {
  //       "label": "Vitamin D",
  //       "quantity": 0.00332328,
  //       "unit": "µg"
  //       },
  //       "TOCPHA": {
  //       "label": "Vitamin E",
  //       "quantity": 13.905540451584999,
  //       "unit": "mg"
  //       },
  //       "VITK1": {
  //       "label": "Vitamin K",
  //       "quantity": 93.44359440491,
  //       "unit": "µg"
  //       },
  //       "Sugar.alcohol": {
  //       "label": "Sugar alcohol",
  //       "quantity": 0,
  //       "unit": "g"
  //       },
  //       "WATER": {
  //       "label": "Water",
  //       "quantity": 952.2985440651443,
  //       "unit": "g"
  //       }
  //       },
  //       "totalDaily": {
  //       "ENERC_KCAL": {
  //       "label": "Energy",
  //       "quantity": 139.414367091981,
  //       "unit": "%"
  //       },
  //       "FAT": {
  //       "label": "Fat",
  //       "quantity": 152.41614708277692,
  //       "unit": "%"
  //       },
  //       "FASAT": {
  //       "label": "Saturated",
  //       "quantity": 64.3740991220875,
  //       "unit": "%"
  //       },
  //       "CHOCDF": {
  //       "label": "Carbs",
  //       "quantity": 126.72544089059501,
  //       "unit": "%"
  //       },
  //       "FIBTG": {
  //       "label": "Fiber",
  //       "quantity": 218.50685148288002,
  //       "unit": "%"
  //       },
  //       "PROCNT": {
  //       "label": "Protein",
  //       "quantity": 208.67234939103997,
  //       "unit": "%"
  //       },
  //       "CHOLE": {
  //       "label": "Cholesterol",
  //       "quantity": 0,
  //       "unit": "%"
  //       },
  //       "NA": {
  //       "label": "Sodium",
  //       "quantity": 150.19666225918124,
  //       "unit": "%"
  //       },
  //       "CA": {
  //       "label": "Calcium",
  //       "quantity": 30.186224749772425,
  //       "unit": "%"
  //       },
  //       "MG": {
  //       "label": "Magnesium",
  //       "quantity": 99.53793786533593,
  //       "unit": "%"
  //       },
  //       "K": {
  //       "label": "Potassium",
  //       "quantity": 70.15537945989081,
  //       "unit": "%"
  //       },
  //       "FE": {
  //       "label": "Iron",
  //       "quantity": 111.6006704164746,
  //       "unit": "%"
  //       },
  //       "ZN": {
  //       "label": "Zinc",
  //       "quantity": 123.5811105212918,
  //       "unit": "%"
  //       },
  //       "P": {
  //       "label": "Phosphorus",
  //       "quantity": 190.91469783658005,
  //       "unit": "%"
  //       },
  //       "VITA_RAE": {
  //       "label": "Vitamin A",
  //       "quantity": 4.835232795084445,
  //       "unit": "%"
  //       },
  //       "VITC": {
  //       "label": "Vitamin C",
  //       "quantity": 20.572275684711112,
  //       "unit": "%"
  //       },
  //       "THIA": {
  //       "label": "Thiamin (B1)",
  //       "quantity": 172.45039207291666,
  //       "unit": "%"
  //       },
  //       "RIBF": {
  //       "label": "Riboflavin (B2)",
  //       "quantity": 74.27537332076922,
  //       "unit": "%"
  //       },
  //       "NIA": {
  //       "label": "Niacin (B3)",
  //       "quantity": 57.4916969386875,
  //       "unit": "%"
  //       },
  //       "VITB6A": {
  //       "label": "Vitamin B6",
  //       "quantity": 184.943534525,
  //       "unit": "%"
  //       },
  //       "FOLDFE": {
  //       "label": "Folate equivalent (total)",
  //       "quantity": 565.93115867396,
  //       "unit": "%"
  //       },
  //       "VITB12": {
  //       "label": "Vitamin B12",
  //       "quantity": 0.023116166666666667,
  //       "unit": "%"
  //       },
  //       "VITD": {
  //       "label": "Vitamin D",
  //       "quantity": 0.0221552,
  //       "unit": "%"
  //       },
  //       "TOCPHA": {
  //       "label": "Vitamin E",
  //       "quantity": 92.70360301056667,
  //       "unit": "%"
  //       },
  //       "VITK1": {
  //       "label": "Vitamin K",
  //       "quantity": 77.86966200409167,
  //       "unit": "%"
  //       }
  //       },
  //       "digest": [
  //       {
  //       "label": "Fat",
  //       "tag": "FAT",
  //       "schemaOrgTag": "fatContent",
  //       "total": 99.070495603805,
  //       "hasRDI": true,
  //       "daily": 152.41614708277692,
  //       "unit": "g",
  //       "sub": [
  //       {
  //       "label": "Saturated",
  //       "tag": "FASAT",
  //       "schemaOrgTag": "saturatedFatContent",
  //       "total": 12.8748198244175,
  //       "hasRDI": true,
  //       "daily": 64.3740991220875,
  //       "unit": "g"
  //       },
  //       {
  //       "label": "Trans",
  //       "tag": "FATRN",
  //       "schemaOrgTag": "transFatContent",
  //       "total": 0,
  //       "hasRDI": false,
  //       "daily": 0,
  //       "unit": "g"
  //       },
  //       {
  //       "label": "Monounsaturated",
  //       "tag": "FAMS",
  //       "schemaOrgTag": null,
  //       "total": 58.553077110302496,
  //       "hasRDI": false,
  //       "daily": 0,
  //       "unit": "g"
  //       },
  //       {
  //       "label": "Polyunsaturated",
  //       "tag": "FAPU",
  //       "schemaOrgTag": null,
  //       "total": 19.50647256323,
  //       "hasRDI": false,
  //       "daily": 0,
  //       "unit": "g"
  //       }
  //       ]
  //       },
  //       {
  //       "label": "Carbs",
  //       "tag": "CHOCDF",
  //       "schemaOrgTag": "carbohydrateContent",
  //       "total": 380.17632267178504,
  //       "hasRDI": true,
  //       "daily": 126.72544089059501,
  //       "unit": "g",
  //       "sub": [
  //       {
  //       "label": "Carbs (net)",
  //       "tag": "CHOCDF.net",
  //       "schemaOrgTag": null,
  //       "total": 325.54960980106506,
  //       "hasRDI": false,
  //       "daily": 0,
  //       "unit": "g"
  //       },
  //       {
  //       "label": "Fiber",
  //       "tag": "FIBTG",
  //       "schemaOrgTag": "fiberContent",
  //       "total": 54.62671287072,
  //       "hasRDI": true,
  //       "daily": 218.50685148288002,
  //       "unit": "g"
  //       },
  //       {
  //       "label": "Sugars",
  //       "tag": "SUGAR",
  //       "schemaOrgTag": "sugarContent",
  //       "total": 47.827196898744994,
  //       "hasRDI": false,
  //       "daily": 0,
  //       "unit": "g"
  //       },
  //       {
  //       "label": "Sugars, added",
  //       "tag": "SUGAR.added",
  //       "schemaOrgTag": null,
  //       "total": 0,
  //       "hasRDI": false,
  //       "daily": 0,
  //       "unit": "g"
  //       }
  //       ]
  //       },
  //       {
  //       "label": "Protein",
  //       "tag": "PROCNT",
  //       "schemaOrgTag": "proteinContent",
  //       "total": 104.33617469551999,
  //       "hasRDI": true,
  //       "daily": 208.67234939103997,
  //       "unit": "g"
  //       },
  //       {
  //       "label": "Cholesterol",
  //       "tag": "CHOLE",
  //       "schemaOrgTag": "cholesterolContent",
  //       "total": 0,
  //       "hasRDI": true,
  //       "daily": 0,
  //       "unit": "mg"
  //       },
  //       {
  //       "label": "Sodium",
  //       "tag": "NA",
  //       "schemaOrgTag": "sodiumContent",
  //       "total": 3604.7198942203495,
  //       "hasRDI": true,
  //       "daily": 150.19666225918124,
  //       "unit": "mg"
  //       },
  //       {
  //       "label": "Calcium",
  //       "tag": "CA",
  //       "schemaOrgTag": null,
  //       "total": 301.86224749772424,
  //       "hasRDI": true,
  //       "daily": 30.186224749772425,
  //       "unit": "mg"
  //       },
  //       {
  //       "label": "Magnesium",
  //       "tag": "MG",
  //       "schemaOrgTag": null,
  //       "total": 418.059339034411,
  //       "hasRDI": true,
  //       "daily": 99.53793786533593,
  //       "unit": "mg"
  //       },
  //       {
  //       "label": "Potassium",
  //       "tag": "K",
  //       "schemaOrgTag": null,
  //       "total": 3297.302834614868,
  //       "hasRDI": true,
  //       "daily": 70.15537945989081,
  //       "unit": "mg"
  //       },
  //       {
  //       "label": "Iron",
  //       "tag": "FE",
  //       "schemaOrgTag": null,
  //       "total": 20.088120674965428,
  //       "hasRDI": true,
  //       "daily": 111.6006704164746,
  //       "unit": "mg"
  //       },
  //       {
  //       "label": "Zinc",
  //       "tag": "ZN",
  //       "schemaOrgTag": null,
  //       "total": 13.5939221573421,
  //       "hasRDI": true,
  //       "daily": 123.5811105212918,
  //       "unit": "mg"
  //       },
  //       {
  //       "label": "Phosphorus",
  //       "tag": "P",
  //       "schemaOrgTag": null,
  //       "total": 1336.4028848560602,
  //       "hasRDI": true,
  //       "daily": 190.91469783658005,
  //       "unit": "mg"
  //       },
  //       {
  //       "label": "Vitamin A",
  //       "tag": "VITA_RAE",
  //       "schemaOrgTag": null,
  //       "total": 43.51709515576,
  //       "hasRDI": true,
  //       "daily": 4.835232795084445,
  //       "unit": "µg"
  //       },
  //       {
  //       "label": "Vitamin C",
  //       "tag": "VITC",
  //       "schemaOrgTag": null,
  //       "total": 18.51504811624,
  //       "hasRDI": true,
  //       "daily": 20.572275684711112,
  //       "unit": "mg"
  //       },
  //       {
  //       "label": "Thiamin (B1)",
  //       "tag": "THIA",
  //       "schemaOrgTag": null,
  //       "total": 2.0694047048749997,
  //       "hasRDI": true,
  //       "daily": 172.45039207291666,
  //       "unit": "mg"
  //       },
  //       {
  //       "label": "Riboflavin (B2)",
  //       "tag": "RIBF",
  //       "schemaOrgTag": null,
  //       "total": 0.96557985317,
  //       "hasRDI": true,
  //       "daily": 74.27537332076922,
  //       "unit": "mg"
  //       },
  //       {
  //       "label": "Niacin (B3)",
  //       "tag": "NIA",
  //       "schemaOrgTag": null,
  //       "total": 9.19867151019,
  //       "hasRDI": true,
  //       "daily": 57.4916969386875,
  //       "unit": "mg"
  //       },
  //       {
  //       "label": "Vitamin B6",
  //       "tag": "VITB6A",
  //       "schemaOrgTag": null,
  //       "total": 2.404265948825,
  //       "hasRDI": true,
  //       "daily": 184.943534525,
  //       "unit": "mg"
  //       },
  //       {
  //       "label": "Folate equivalent (total)",
  //       "tag": "FOLDFE",
  //       "schemaOrgTag": null,
  //       "total": 2263.72463469584,
  //       "hasRDI": true,
  //       "daily": 565.93115867396,
  //       "unit": "µg"
  //       },
  //       {
  //       "label": "Folate (food)",
  //       "tag": "FOLFD",
  //       "schemaOrgTag": null,
  //       "total": 2263.72463469584,
  //       "hasRDI": false,
  //       "daily": 0,
  //       "unit": "µg"
  //       },
  //       {
  //       "label": "Folic acid",
  //       "tag": "FOLAC",
  //       "schemaOrgTag": null,
  //       "total": 0,
  //       "hasRDI": false,
  //       "daily": 0,
  //       "unit": "µg"
  //       },
  //       {
  //       "label": "Vitamin B12",
  //       "tag": "VITB12",
  //       "schemaOrgTag": null,
  //       "total": 0.000554788,
  //       "hasRDI": true,
  //       "daily": 0.023116166666666667,
  //       "unit": "µg"
  //       },
  //       {
  //       "label": "Vitamin D",
  //       "tag": "VITD",
  //       "schemaOrgTag": null,
  //       "total": 0.00332328,
  //       "hasRDI": true,
  //       "daily": 0.0221552,
  //       "unit": "µg"
  //       },
  //       {
  //       "label": "Vitamin E",
  //       "tag": "TOCPHA",
  //       "schemaOrgTag": null,
  //       "total": 13.905540451584999,
  //       "hasRDI": true,
  //       "daily": 92.70360301056667,
  //       "unit": "mg"
  //       },
  //       {
  //       "label": "Vitamin K",
  //       "tag": "VITK1",
  //       "schemaOrgTag": null,
  //       "total": 93.44359440491,
  //       "hasRDI": true,
  //       "daily": 77.86966200409167,
  //       "unit": "µg"
  //       },
  //       {
  //       "label": "Sugar alcohols",
  //       "tag": "Sugar.alcohol",
  //       "schemaOrgTag": null,
  //       "total": 0,
  //       "hasRDI": false,
  //       "daily": 0,
  //       "unit": "g"
  //       },
  //       {
  //       "label": "Water",
  //       "tag": "WATER",
  //       "schemaOrgTag": null,
  //       "total": 952.2985440651443,
  //       "hasRDI": false,
  //       "daily": 0,
  //       "unit": "g"
  //       }
  //       ]
  //       },
  //       "_links": {
  //       "self": {
  //       "href": "https://api.edamam.com/api/recipes/v2/49864e04de41a2512ee21919e26f482c?type=public&app_id=8717089a&app_key=35658ee1215cbd7922d388170b7509f0",
  //       "title": "Self"
  //       }
  //       }
  //       }
  //       ,
  //       {
  //       "recipe": {
  //         "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_bab2d8216f58ead535865005dde3e160",
  //         "label": "Cream Cheese Noodle Kugel",
  //         "image": "https://edamam-product-images.s3.amazonaws.com/web-img/3bf/3bfcc3d99efce50afeb5aa527c592b39.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dcfb493703b7b64f1c8f3039c82fd012f1f025dafe64fa817ca32a2ccdc9962d",
  //         "images": {
  //         "THUMBNAIL": {
  //         "url": "https://edamam-product-images.s3.amazonaws.com/web-img/3bf/3bfcc3d99efce50afeb5aa527c592b39-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d100ae1dc7390a572c10f4363747561bab6be33eaf16986df0b911e29b4417a4",
  //         "width": 100,
  //         "height": 100
  //         },
  //         "SMALL": {
  //         "url": "https://edamam-product-images.s3.amazonaws.com/web-img/3bf/3bfcc3d99efce50afeb5aa527c592b39-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=009edd178b381c8a58bfd95080b3e0418eceb35bf462e1e3b72098fae4ea20e3",
  //         "width": 200,
  //         "height": 200
  //         },
  //         "REGULAR": {
  //         "url": "https://edamam-product-images.s3.amazonaws.com/web-img/3bf/3bfcc3d99efce50afeb5aa527c592b39.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dcfb493703b7b64f1c8f3039c82fd012f1f025dafe64fa817ca32a2ccdc9962d",
  //         "width": 300,
  //         "height": 300
  //         },
  //         "LARGE": {
  //         "url": "https://edamam-product-images.s3.amazonaws.com/web-img/3bf/3bfcc3d99efce50afeb5aa527c592b39-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9821b18525f78bf0129c3a869ae0fcc7596ac161154718c87a86b5006e18b8af",
  //         "width": 600,
  //         "height": 600
  //         }
  //         },
  //         "source": "Smitten Kitchen",
  //         "url": "http://smittenkitchen.com/2007/09/noodle-kugel/",
  //         "shareAs": "http://www.edamam.com/recipe/cream-cheese-noodle-kugel-bab2d8216f58ead535865005dde3e160/-",
  //         "yield": 4,
  //         "dietLabels": [
  //         "Balanced",
  //         "High-Fiber"
  //         ],
  //         "healthLabels": [
  //         "Vegetarian",
  //         "Pescatarian",
  //         "Peanut-Free",
  //         "Tree-Nut-Free",
  //         "Soy-Free",
  //         "Fish-Free",
  //         "Shellfish-Free",
  //         "Pork-Free",
  //         "Red-Meat-Free",
  //         "Crustacean-Free",
  //         "Celery-Free",
  //         "Mustard-Free",
  //         "Sesame-Free",
  //         "Lupine-Free",
  //         "Mollusk-Free",
  //         "Alcohol-Free",
  //         "Kosher"
  //         ],
  //         "cautions": [
  //         "Sulfites"
  //         ],
  //         "ingredientLines": [
  //         "1 pound wide egg noodles",
  //         "2 8-ounce packages cream cheese, softened",
  //         "1 pound (16 ounces) creamed cottage cheese, full fat",
  //         "1 1/2 cups sugar",
  //         "1 stick salted butter, melted, plus more for greasing the baking dish",
  //         "8 eggs",
  //         "2 teaspoons vanilla",
  //         "1 teaspoon cinnamon",
  //         "1 cup dried cherries"
  //         ],
  //         "ingredients": [
  //         {
  //         "text": "1 pound wide egg noodles",
  //         "quantity": 1,
  //         "measure": "pound",
  //         "food": "wide egg noodles",
  //         "weight": 453.59237,
  //         "foodCategory": "grains",
  //         "foodId": "food_aefg3gqa71nrtpbhjfo3yb36kd81",
  //         "image": "https://www.edamam.com/food-img/800/800c9c0d7cef6b5474723682ffa2878d.jpg"
  //         },
  //         {
  //         "text": "2 8-ounce packages cream cheese, softened",
  //         "quantity": 16,
  //         "measure": "ounce",
  //         "food": "cream cheese",
  //         "weight": 453.59237,
  //         "foodCategory": "Cheese",
  //         "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
  //         "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
  //         },
  //         {
  //         "text": "1 pound (16 ounces) creamed cottage cheese, full fat",
  //         "quantity": 1,
  //         "measure": "pound",
  //         "food": "cottage cheese",
  //         "weight": 453.59237,
  //         "foodCategory": "Cheese",
  //         "foodId": "food_adqkk4ta6dggveb3hy192aqzdfnv",
  //         "image": "https://www.edamam.com/food-img/8ee/8ee7b75071fc907cce2819031a9ae563.jpg"
  //         },
  //         {
  //         "text": "1 1/2 cups sugar",
  //         "quantity": 1.5,
  //         "measure": "cup",
  //         "food": "sugar",
  //         "weight": 300,
  //         "foodCategory": "sugars",
  //         "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
  //         "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
  //         },
  //         {
  //         "text": "1 stick salted butter, melted, plus more for greasing the baking dish",
  //         "quantity": 1,
  //         "measure": "stick",
  //         "food": "salted butter",
  //         "weight": 113,
  //         "foodCategory": "Dairy",
  //         "foodId": "food_axwam0ga2lqqlabfq1kqtbloozm3",
  //         "image": "https://www.edamam.com/food-img/515/515af390107678fce1533a31ee4cc35b.jpeg"
  //         },
  //         {
  //         "text": "8 eggs",
  //         "quantity": 8,
  //         "measure": "<unit>",
  //         "food": "eggs",
  //         "weight": 344,
  //         "foodCategory": "Eggs",
  //         "foodId": "food_bhpradua77pk16aipcvzeayg732r",
  //         "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
  //         },
  //         {
  //         "text": "2 teaspoons vanilla",
  //         "quantity": 2,
  //         "measure": "teaspoon",
  //         "food": "vanilla",
  //         "weight": 8.4,
  //         "foodCategory": "Condiments and sauces",
  //         "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
  //         "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
  //         },
  //         {
  //         "text": "1 teaspoon cinnamon",
  //         "quantity": 1,
  //         "measure": "teaspoon",
  //         "food": "cinnamon",
  //         "weight": 2.6,
  //         "foodCategory": "Condiments and sauces",
  //         "foodId": "food_atjxtznauw5zabaixm24xa787onz",
  //         "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
  //         },
  //         {
  //         "text": "1 cup dried cherries",
  //         "quantity": 1,
  //         "measure": "cup",
  //         "food": "dried cherries",
  //         "weight": 160,
  //         "foodCategory": "sugar jam",
  //         "foodId": "food_am5qn60a2zxubua23hvaebukpcne",
  //         "image": "https://www.edamam.com/food-img/330/330dd43a630a5649ff5b0d2e5c18fa08.jpg"
  //         }
  //         ],
  //         "calories": 6764.1451288,
  //         "totalWeight": 2288.77711,
  //         "totalTime": 0,
  //         "cuisineType": [
  //         "asian"
  //         ],
  //         "mealType": [
  //         "lunch/dinner"
  //         ],
  //         "dishType": [
  //         "main course"
  //         ],
  //         "totalNutrients": {
  //         "ENERC_KCAL": {
  //         "label": "Energy",
  //         "quantity": 6764.1451288,
  //         "unit": "kcal"
  //         },
  //         "FAT": {
  //         "label": "Fat",
  //         "quantity": 320.5279806260001,
  //         "unit": "g"
  //         },
  //         "FASAT": {
  //         "label": "Saturated",
  //         "quantity": 169.69483690300004,
  //         "unit": "g"
  //         },
  //         "FATRN": {
  //         "label": "Trans",
  //         "quantity": 4.111551345700001,
  //         "unit": "g"
  //         },
  //         "FAMS": {
  //         "label": "Monounsaturated",
  //         "quantity": 84.93527340499999,
  //         "unit": "g"
  //         },
  //         "FAPU": {
  //         "label": "Polyunsaturated",
  //         "quantity": 23.438289416700005,
  //         "unit": "g"
  //         },
  //         "CHOCDF": {
  //         "label": "Carbs",
  //         "quantity": 791.430453664,
  //         "unit": "g"
  //         },
  //         "CHOCDF.net": {
  //         "label": "Carbohydrates (net)",
  //         "quantity": 771.081305454,
  //         "unit": "g"
  //         },
  //         "FIBTG": {
  //         "label": "Fiber",
  //         "quantity": 20.349148210000003,
  //         "unit": "g"
  //         },
  //         "SUGAR": {
  //         "label": "Sugars",
  //         "quantity": 444.49838791199994,
  //         "unit": "g"
  //         },
  //         "SUGAR.added": {
  //         "label": "Sugars, added",
  //         "quantity": 299.4,
  //         "unit": "g"
  //         },
  //         "PROCNT": {
  //         "label": "Protein",
  //         "quantity": 187.841858677,
  //         "unit": "g"
  //         },
  //         "CHOLE": {
  //         "label": "Cholesterol",
  //         "quantity": 2479.7099007,
  //         "unit": "mg"
  //         },
  //         "NA": {
  //         "label": "Sodium",
  //         "quantity": 4641.828775000002,
  //         "unit": "mg"
  //         },
  //         "CA": {
  //         "label": "Calcium",
  //         "quantity": 1290.2955192,
  //         "unit": "mg"
  //         },
  //         "MG": {
  //         "label": "Magnesium",
  //         "quantity": 421.50227749999993,
  //         "unit": "mg"
  //         },
  //         "K": {
  //         "label": "Potassium",
  //         "quantity": 3337.5369182,
  //         "unit": "mg"
  //         },
  //         "FE": {
  //         "label": "Iron",
  //         "quantity": 27.737219702,
  //         "unit": "mg"
  //         },
  //         "ZN": {
  //         "label": "Zinc",
  //         "quantity": 17.862784070999997,
  //         "unit": "mg"
  //         },
  //         "P": {
  //         "label": "Phosphorus",
  //         "quantity": 3063.1853922,
  //         "unit": "mg"
  //         },
  //         "VITA_RAE": {
  //         "label": "Vitamin A",
  //         "quantity": 3454.397954,
  //         "unit": "µg"
  //         },
  //         "VITC": {
  //         "label": "Vitamin C",
  //         "quantity": 30.978800000000003,
  //         "unit": "mg"
  //         },
  //         "THIA": {
  //         "label": "Thiamin (B1)",
  //         "quantity": 5.589935966000001,
  //         "unit": "mg"
  //         },
  //         "RIBF": {
  //         "label": "Riboflavin (B2)",
  //         "quantity": 5.076795521799999,
  //         "unit": "mg"
  //         },
  //         "NIA": {
  //         "label": "Niacin (B3)",
  //         "quantity": 40.91254945470001,
  //         "unit": "mg"
  //         },
  //         "VITB6A": {
  //         "label": "Vitamin B6",
  //         "quantity": 2.1032513389000003,
  //         "unit": "mg"
  //         },
  //         "FOLDFE": {
  //         "label": "Folate equivalent (total)",
  //         "quantity": 1965.4440141,
  //         "unit": "µg"
  //         },
  //         "FOLFD": {
  //         "label": "Folate (food)",
  //         "quantity": 418.6940324000001,
  //         "unit": "µg"
  //         },
  //         "FOLAC": {
  //         "label": "Folic acid",
  //         "quantity": 911.7206637000002,
  //         "unit": "µg"
  //         },
  //         "VITB12": {
  //         "label": "Vitamin B12",
  //         "quantity": 7.653545989000001,
  //         "unit": "µg"
  //         },
  //         "VITD": {
  //         "label": "Vitamin D",
  //         "quantity": 13.1109237,
  //         "unit": "µg"
  //         },
  //         "TOCPHA": {
  //         "label": "Vitamin E",
  //         "quantity": 9.922503538,
  //         "unit": "mg"
  //         },
  //         "VITK1": {
  //         "label": "Vitamin K",
  //         "quantity": 33.33534058000001,
  //         "unit": "µg"
  //         },
  //         "Sugar.alcohol": {
  //         "label": "Sugar alcohol",
  //         "quantity": 0,
  //         "unit": "g"
  //         },
  //         "WATER": {
  //         "label": "Water",
  //         "quantity": 960.9266107880001,
  //         "unit": "g"
  //         }
  //         },
  //         "totalDaily": {
  //         "ENERC_KCAL": {
  //         "label": "Energy",
  //         "quantity": 338.20725644,
  //         "unit": "%"
  //         },
  //         "FAT": {
  //         "label": "Fat",
  //         "quantity": 493.1199701938463,
  //         "unit": "%"
  //         },
  //         "FASAT": {
  //         "label": "Saturated",
  //         "quantity": 848.4741845150002,
  //         "unit": "%"
  //         },
  //         "CHOCDF": {
  //         "label": "Carbs",
  //         "quantity": 263.81015122133334,
  //         "unit": "%"
  //         },
  //         "FIBTG": {
  //         "label": "Fiber",
  //         "quantity": 81.39659284000001,
  //         "unit": "%"
  //         },
  //         "PROCNT": {
  //         "label": "Protein",
  //         "quantity": 375.683717354,
  //         "unit": "%"
  //         },
  //         "CHOLE": {
  //         "label": "Cholesterol",
  //         "quantity": 826.5699669,
  //         "unit": "%"
  //         },
  //         "NA": {
  //         "label": "Sodium",
  //         "quantity": 193.40953229166675,
  //         "unit": "%"
  //         },
  //         "CA": {
  //         "label": "Calcium",
  //         "quantity": 129.02955192,
  //         "unit": "%"
  //         },
  //         "MG": {
  //         "label": "Magnesium",
  //         "quantity": 100.3576851190476,
  //         "unit": "%"
  //         },
  //         "K": {
  //         "label": "Potassium",
  //         "quantity": 71.01142379148936,
  //         "unit": "%"
  //         },
  //         "FE": {
  //         "label": "Iron",
  //         "quantity": 154.09566501111112,
  //         "unit": "%"
  //         },
  //         "ZN": {
  //         "label": "Zinc",
  //         "quantity": 162.38894609999997,
  //         "unit": "%"
  //         },
  //         "P": {
  //         "label": "Phosphorus",
  //         "quantity": 437.59791317142856,
  //         "unit": "%"
  //         },
  //         "VITA_RAE": {
  //         "label": "Vitamin A",
  //         "quantity": 383.82199488888887,
  //         "unit": "%"
  //         },
  //         "VITC": {
  //         "label": "Vitamin C",
  //         "quantity": 34.42088888888889,
  //         "unit": "%"
  //         },
  //         "THIA": {
  //         "label": "Thiamin (B1)",
  //         "quantity": 465.8279971666668,
  //         "unit": "%"
  //         },
  //         "RIBF": {
  //         "label": "Riboflavin (B2)",
  //         "quantity": 390.5227324461538,
  //         "unit": "%"
  //         },
  //         "NIA": {
  //         "label": "Niacin (B3)",
  //         "quantity": 255.70343409187507,
  //         "unit": "%"
  //         },
  //         "VITB6A": {
  //         "label": "Vitamin B6",
  //         "quantity": 161.78856453076924,
  //         "unit": "%"
  //         },
  //         "FOLDFE": {
  //         "label": "Folate equivalent (total)",
  //         "quantity": 491.361003525,
  //         "unit": "%"
  //         },
  //         "VITB12": {
  //         "label": "Vitamin B12",
  //         "quantity": 318.89774954166677,
  //         "unit": "%"
  //         },
  //         "VITD": {
  //         "label": "Vitamin D",
  //         "quantity": 87.406158,
  //         "unit": "%"
  //         },
  //         "TOCPHA": {
  //         "label": "Vitamin E",
  //         "quantity": 66.15002358666668,
  //         "unit": "%"
  //         },
  //         "VITK1": {
  //         "label": "Vitamin K",
  //         "quantity": 27.77945048333334,
  //         "unit": "%"
  //         }
  //         },
  //         "digest": [
  //         {
  //         "label": "Fat",
  //         "tag": "FAT",
  //         "schemaOrgTag": "fatContent",
  //         "total": 320.5279806260001,
  //         "hasRDI": true,
  //         "daily": 493.1199701938463,
  //         "unit": "g",
  //         "sub": [
  //         {
  //         "label": "Saturated",
  //         "tag": "FASAT",
  //         "schemaOrgTag": "saturatedFatContent",
  //         "total": 169.69483690300004,
  //         "hasRDI": true,
  //         "daily": 848.4741845150002,
  //         "unit": "g"
  //         },
  //         {
  //         "label": "Trans",
  //         "tag": "FATRN",
  //         "schemaOrgTag": "transFatContent",
  //         "total": 4.111551345700001,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "g"
  //         },
  //         {
  //         "label": "Monounsaturated",
  //         "tag": "FAMS",
  //         "schemaOrgTag": null,
  //         "total": 84.93527340499999,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "g"
  //         },
  //         {
  //         "label": "Polyunsaturated",
  //         "tag": "FAPU",
  //         "schemaOrgTag": null,
  //         "total": 23.438289416700005,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "g"
  //         }
  //         ]
  //         },
  //         {
  //         "label": "Carbs",
  //         "tag": "CHOCDF",
  //         "schemaOrgTag": "carbohydrateContent",
  //         "total": 791.430453664,
  //         "hasRDI": true,
  //         "daily": 263.81015122133334,
  //         "unit": "g",
  //         "sub": [
  //         {
  //         "label": "Carbs (net)",
  //         "tag": "CHOCDF.net",
  //         "schemaOrgTag": null,
  //         "total": 771.081305454,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "g"
  //         },
  //         {
  //         "label": "Fiber",
  //         "tag": "FIBTG",
  //         "schemaOrgTag": "fiberContent",
  //         "total": 20.349148210000003,
  //         "hasRDI": true,
  //         "daily": 81.39659284000001,
  //         "unit": "g"
  //         },
  //         {
  //         "label": "Sugars",
  //         "tag": "SUGAR",
  //         "schemaOrgTag": "sugarContent",
  //         "total": 444.49838791199994,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "g"
  //         },
  //         {
  //         "label": "Sugars, added",
  //         "tag": "SUGAR.added",
  //         "schemaOrgTag": null,
  //         "total": 299.4,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "g"
  //         }
  //         ]
  //         },
  //         {
  //         "label": "Protein",
  //         "tag": "PROCNT",
  //         "schemaOrgTag": "proteinContent",
  //         "total": 187.841858677,
  //         "hasRDI": true,
  //         "daily": 375.683717354,
  //         "unit": "g"
  //         },
  //         {
  //         "label": "Cholesterol",
  //         "tag": "CHOLE",
  //         "schemaOrgTag": "cholesterolContent",
  //         "total": 2479.7099007,
  //         "hasRDI": true,
  //         "daily": 826.5699669,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Sodium",
  //         "tag": "NA",
  //         "schemaOrgTag": "sodiumContent",
  //         "total": 4641.828775000002,
  //         "hasRDI": true,
  //         "daily": 193.40953229166675,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Calcium",
  //         "tag": "CA",
  //         "schemaOrgTag": null,
  //         "total": 1290.2955192,
  //         "hasRDI": true,
  //         "daily": 129.02955192,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Magnesium",
  //         "tag": "MG",
  //         "schemaOrgTag": null,
  //         "total": 421.50227749999993,
  //         "hasRDI": true,
  //         "daily": 100.3576851190476,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Potassium",
  //         "tag": "K",
  //         "schemaOrgTag": null,
  //         "total": 3337.5369182,
  //         "hasRDI": true,
  //         "daily": 71.01142379148936,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Iron",
  //         "tag": "FE",
  //         "schemaOrgTag": null,
  //         "total": 27.737219702,
  //         "hasRDI": true,
  //         "daily": 154.09566501111112,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Zinc",
  //         "tag": "ZN",
  //         "schemaOrgTag": null,
  //         "total": 17.862784070999997,
  //         "hasRDI": true,
  //         "daily": 162.38894609999997,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Phosphorus",
  //         "tag": "P",
  //         "schemaOrgTag": null,
  //         "total": 3063.1853922,
  //         "hasRDI": true,
  //         "daily": 437.59791317142856,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Vitamin A",
  //         "tag": "VITA_RAE",
  //         "schemaOrgTag": null,
  //         "total": 3454.397954,
  //         "hasRDI": true,
  //         "daily": 383.82199488888887,
  //         "unit": "µg"
  //         },
  //         {
  //         "label": "Vitamin C",
  //         "tag": "VITC",
  //         "schemaOrgTag": null,
  //         "total": 30.978800000000003,
  //         "hasRDI": true,
  //         "daily": 34.42088888888889,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Thiamin (B1)",
  //         "tag": "THIA",
  //         "schemaOrgTag": null,
  //         "total": 5.589935966000001,
  //         "hasRDI": true,
  //         "daily": 465.8279971666668,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Riboflavin (B2)",
  //         "tag": "RIBF",
  //         "schemaOrgTag": null,
  //         "total": 5.076795521799999,
  //         "hasRDI": true,
  //         "daily": 390.5227324461538,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Niacin (B3)",
  //         "tag": "NIA",
  //         "schemaOrgTag": null,
  //         "total": 40.91254945470001,
  //         "hasRDI": true,
  //         "daily": 255.70343409187507,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Vitamin B6",
  //         "tag": "VITB6A",
  //         "schemaOrgTag": null,
  //         "total": 2.1032513389000003,
  //         "hasRDI": true,
  //         "daily": 161.78856453076924,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Folate equivalent (total)",
  //         "tag": "FOLDFE",
  //         "schemaOrgTag": null,
  //         "total": 1965.4440141,
  //         "hasRDI": true,
  //         "daily": 491.361003525,
  //         "unit": "µg"
  //         },
  //         {
  //         "label": "Folate (food)",
  //         "tag": "FOLFD",
  //         "schemaOrgTag": null,
  //         "total": 418.6940324000001,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "µg"
  //         },
  //         {
  //         "label": "Folic acid",
  //         "tag": "FOLAC",
  //         "schemaOrgTag": null,
  //         "total": 911.7206637000002,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "µg"
  //         },
  //         {
  //         "label": "Vitamin B12",
  //         "tag": "VITB12",
  //         "schemaOrgTag": null,
  //         "total": 7.653545989000001,
  //         "hasRDI": true,
  //         "daily": 318.89774954166677,
  //         "unit": "µg"
  //         },
  //         {
  //         "label": "Vitamin D",
  //         "tag": "VITD",
  //         "schemaOrgTag": null,
  //         "total": 13.1109237,
  //         "hasRDI": true,
  //         "daily": 87.406158,
  //         "unit": "µg"
  //         },
  //         {
  //         "label": "Vitamin E",
  //         "tag": "TOCPHA",
  //         "schemaOrgTag": null,
  //         "total": 9.922503538,
  //         "hasRDI": true,
  //         "daily": 66.15002358666668,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Vitamin K",
  //         "tag": "VITK1",
  //         "schemaOrgTag": null,
  //         "total": 33.33534058000001,
  //         "hasRDI": true,
  //         "daily": 27.77945048333334,
  //         "unit": "µg"
  //         },
  //         {
  //         "label": "Sugar alcohols",
  //         "tag": "Sugar.alcohol",
  //         "schemaOrgTag": null,
  //         "total": 0,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "g"
  //         },
  //         {
  //         "label": "Water",
  //         "tag": "WATER",
  //         "schemaOrgTag": null,
  //         "total": 960.9266107880001,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "g"
  //         }
  //         ]
  //         },
  //         "_links": {
  //         "self": {
  //         "href": "https://api.edamam.com/api/recipes/v2/bab2d8216f58ead535865005dde3e160?type=public&app_id=8717089a&app_key=35658ee1215cbd7922d388170b7509f0",
  //         "title": "Self"
  //         }
  //         }
  //       },
  //       {
  //         "recipe": {
  //         "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_50604d7a0799f7f955672ba8883788f2",
  //         "label": "Crisp Baked Tofu",
  //         "image": "https://edamam-product-images.s3.amazonaws.com/web-img/6cd/6cd13b7e55c94924654c2718100e7800.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ff63efe278f5a2b8e5d2eea07457a01583db1ad6268468d88f39129744fa35e9",
  //         "images": {
  //         "THUMBNAIL": {
  //         "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6cd/6cd13b7e55c94924654c2718100e7800-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b07c1c5ad09e29e9ac3855fd24c7e9e632df4bcd1598a30264dceab261c1dd49",
  //         "width": 100,
  //         "height": 100
  //         },
  //         "SMALL": {
  //         "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6cd/6cd13b7e55c94924654c2718100e7800-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1fdf24c153fdf91932ec464aa5b08cb474f84540f228af6e58faa61fb1a2d84f",
  //         "width": 200,
  //         "height": 200
  //         },
  //         "REGULAR": {
  //         "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6cd/6cd13b7e55c94924654c2718100e7800.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ff63efe278f5a2b8e5d2eea07457a01583db1ad6268468d88f39129744fa35e9",
  //         "width": 300,
  //         "height": 300
  //         },
  //         "LARGE": {
  //         "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6cd/6cd13b7e55c94924654c2718100e7800-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=172a8a011e7d7eb64f76f4650e53babeae6eff836d4bdd89120f05972a243d81",
  //         "width": 600,
  //         "height": 600
  //         }
  //         },
  //         "source": "Lottie + Doof",
  //         "url": "http://www.lottieanddoof.com/2014/09/crisp-baked-tofu/",
  //         "shareAs": "http://www.edamam.com/recipe/crisp-baked-tofu-50604d7a0799f7f955672ba8883788f2/-",
  //         "yield": 4,
  //         "dietLabels": [
  //         "Low-Carb"
  //         ],
  //         "healthLabels": [
  //         "Sugar-Conscious",
  //         "Kidney-Friendly",
  //         "Keto-Friendly",
  //         "Vegan",
  //         "Vegetarian",
  //         "Pescatarian",
  //         "Dairy-Free",
  //         "Egg-Free",
  //         "Peanut-Free",
  //         "Tree-Nut-Free",
  //         "Fish-Free",
  //         "Shellfish-Free",
  //         "Pork-Free",
  //         "Red-Meat-Free",
  //         "Crustacean-Free",
  //         "Celery-Free",
  //         "Mustard-Free",
  //         "Lupine-Free",
  //         "Mollusk-Free",
  //         "Alcohol-Free",
  //         "Kosher"
  //         ],
  //         "cautions": [
  //         "Gluten",
  //         "Wheat",
  //         "Sulfites"
  //         ],
  //         "ingredientLines": [
  //         "1 pound firm or extra-firm tofu",
  //         "1 tablespoon toasted sesame oil",
  //         "1 1/2 tablespoons soy sauce or tamari",
  //         "1 1/2 tablespoons rice vinegar or cider vinegar",
  //         "2 garlic cloves, peeled and finely chopped/minced",
  //         "2 teaspoons peeled minced fresh ginger",
  //         "2 tablespoons water",
  //         "2 teaspoons Sriracha or Asian chili paste",
  //         "1 teaspoon sea salt or kosher salt",
  //         "1-2 tablespoons corn starch (original recipe calls for 1, but it never seems like enough to me)"
  //         ],
  //         "ingredients": [
  //         {
  //         "text": "1 pound firm or extra-firm tofu",
  //         "quantity": 1,
  //         "measure": "pound",
  //         "food": "tofu",
  //         "weight": 453.59237,
  //         "foodCategory": "plant-based protein",
  //         "foodId": "food_a269ixea1yf51xbfwgnq2boiwc7x",
  //         "image": "https://www.edamam.com/food-img/b6a/b6ae13c3cfe37e16f820840f90231bff.jpg"
  //         },
  //         {
  //         "text": "1 tablespoon toasted sesame oil",
  //         "quantity": 1,
  //         "measure": "tablespoon",
  //         "food": "toasted sesame oil",
  //         "weight": 13.6,
  //         "foodCategory": "Oils",
  //         "foodId": "food_b2id9opa0l5afvbw2do5xa1fnz4q",
  //         "image": "https://www.edamam.com/food-img/b87/b874ddcfb6770adc7a155355a902ffb8.jpg"
  //         },
  //         {
  //         "text": "1 1/2 tablespoons soy sauce or tamari",
  //         "quantity": 1.5,
  //         "measure": "tablespoon",
  //         "food": "soy sauce",
  //         "weight": 24,
  //         "foodCategory": "plant-based protein",
  //         "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
  //         "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
  //         },
  //         {
  //         "text": "1 1/2 tablespoons rice vinegar or cider vinegar",
  //         "quantity": 1.5,
  //         "measure": "tablespoon",
  //         "food": "rice vinegar",
  //         "weight": 22.35,
  //         "foodCategory": "Condiments and sauces",
  //         "foodId": "food_axlcd4tack2d20bveizm4ayu0h2w",
  //         "image": "https://www.edamam.com/food-img/5f6/5f69b84c399d778c4728e9ab4f8065a2.jpg"
  //         },
  //         {
  //         "text": "2 garlic cloves, peeled and finely chopped/minced",
  //         "quantity": 2,
  //         "measure": "clove",
  //         "food": "garlic",
  //         "weight": 6,
  //         "foodCategory": "vegetables",
  //         "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
  //         "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
  //         },
  //         {
  //         "text": "2 teaspoons peeled minced fresh ginger",
  //         "quantity": 2,
  //         "measure": "teaspoon",
  //         "food": "fresh ginger",
  //         "weight": 4,
  //         "foodCategory": "vegetables",
  //         "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
  //         "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
  //         },
  //         {
  //         "text": "2 tablespoons water",
  //         "quantity": 2,
  //         "measure": "tablespoon",
  //         "food": "water",
  //         "weight": 29.573529562,
  //         "foodCategory": "water",
  //         "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
  //         "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
  //         },
  //         {
  //         "text": "2 teaspoons Sriracha or Asian chili paste",
  //         "quantity": 2,
  //         "measure": "teaspoon",
  //         "food": "chili paste",
  //         "weight": 10.20833333385111,
  //         "foodCategory": "canned soup",
  //         "foodId": "food_ayjzfd9bhvwqorb6m5iq3bekq7cj",
  //         "image": "https://www.edamam.com/food-img/12f/12f4b9a8e738f35b7dd787a5360e4a45.jpg"
  //         },
  //         {
  //         "text": "1 teaspoon sea salt or kosher salt",
  //         "quantity": 1,
  //         "measure": "teaspoon",
  //         "food": "sea salt",
  //         "weight": 4.854166666912875,
  //         "foodCategory": "Condiments and sauces",
  //         "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
  //         "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
  //         },
  //         {
  //         "text": "1-2 tablespoons corn starch (original recipe calls for 1, but it never seems like enough to me)",
  //         "quantity": 1.5,
  //         "measure": "tablespoon",
  //         "food": "starch",
  //         "weight": 11.999999999797117,
  //         "foodCategory": "grains",
  //         "foodId": "food_a6r17hrba37cqeabesko5a2gk233",
  //         "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
  //         }
  //         ],
  //         "calories": 514.4854089993358,
  //         "totalWeight": 575.3242328956482,
  //         "totalTime": 0,
  //         "cuisineType": [
  //         "asian"
  //         ],
  //         "mealType": [
  //         "lunch/dinner"
  //         ],
  //         "dishType": [
  //         "starter"
  //         ],
  //         "totalNutrients": {
  //         "ENERC_KCAL": {
  //         "label": "Energy",
  //         "quantity": 514.4854089993358,
  //         "unit": "kcal"
  //         },
  //         "FAT": {
  //         "label": "Fat",
  //         "quantity": 32.77885182900302,
  //         "unit": "g"
  //         },
  //         "FASAT": {
  //         "label": "Saturated",
  //         "quantity": 5.885928819767063,
  //         "unit": "g"
  //         },
  //         "FATRN": {
  //         "label": "Trans",
  //         "quantity": 0,
  //         "unit": "g"
  //         },
  //         "FAMS": {
  //         "label": "Monounsaturated",
  //         "quantity": 11.032058706202097,
  //         "unit": "g"
  //         },
  //         "FAPU": {
  //         "label": "Polyunsaturated",
  //         "quantity": 13.903421284466999,
  //         "unit": "g"
  //         },
  //         "CHOCDF": {
  //         "label": "Carbs",
  //         "quantity": 22.902776052835023,
  //         "unit": "g"
  //         },
  //         "CHOCDF.net": {
  //         "label": "Carbohydrates (net)",
  //         "quantity": 18.24298638949989,
  //         "unit": "g"
  //         },
  //         "FIBTG": {
  //         "label": "Fiber",
  //         "quantity": 4.6597896633351334,
  //         "unit": "g"
  //         },
  //         "SUGAR": {
  //         "label": "Sugars",
  //         "quantity": 3.2148067200132036,
  //         "unit": "g"
  //         },
  //         "SUGAR.added": {
  //         "label": "Sugars, added",
  //         "quantity": 0,
  //         "unit": "g"
  //         },
  //         "PROCNT": {
  //         "label": "Protein",
  //         "quantity": 39.68029010300414,
  //         "unit": "g"
  //         },
  //         "CHOLE": {
  //         "label": "Cholesterol",
  //         "quantity": 0,
  //         "unit": "mg"
  //         },
  //         "NA": {
  //         "label": "Sodium",
  //         "quantity": 1379.5531089159242,
  //         "unit": "mg"
  //         },
  //         "CA": {
  //         "label": "Calcium",
  //         "quantity": 934.5276195869026,
  //         "unit": "mg"
  //         },
  //         "MG": {
  //         "label": "Magnesium",
  //         "quantity": 190.91341219567605,
  //         "unit": "mg"
  //         },
  //         "K": {
  //         "label": "Potassium",
  //         "quantity": 874.7587076029141,
  //         "unit": "mg"
  //         },
  //         "FE": {
  //         "label": "Iron",
  //         "quantity": 7.890983823668304,
  //         "unit": "mg"
  //         },
  //         "ZN": {
  //         "label": "Zinc",
  //         "quantity": 4.084521523956855,
  //         "unit": "mg"
  //         },
  //         "P": {
  //         "label": "Phosphorus",
  //         "quantity": 603.3141010333899,
  //         "unit": "mg"
  //         },
  //         "VITA_RAE": {
  //         "label": "Vitamin A",
  //         "quantity": 2.3479166667857556,
  //         "unit": "µg"
  //         },
  //         "VITC": {
  //         "label": "Vitamin C",
  //         "quantity": 6.041684740155333,
  //         "unit": "mg"
  //         },
  //         "THIA": {
  //         "label": "Thiamin (B1)",
  //         "quantity": 0.2940962553333851,
  //         "unit": "mg"
  //         },
  //         "RIBF": {
  //         "label": "Riboflavin (B2)",
  //         "quantity": 0.342510693100466,
  //         "unit": "mg"
  //         },
  //         "NIA": {
  //         "label": "Niacin (B3)",
  //         "quantity": 1.1184182937031069,
  //         "unit": "mg"
  //         },
  //         "VITB6A": {
  //         "label": "Vitamin B6",
  //         "quantity": 0.4523622493673916,
  //         "unit": "mg"
  //         },
  //         "FOLDFE": {
  //         "label": "Folate equivalent (total)",
  //         "quantity": 91.28546696672365,
  //         "unit": "µg"
  //         },
  //         "FOLFD": {
  //         "label": "Folate (food)",
  //         "quantity": 91.28546696672365,
  //         "unit": "µg"
  //         },
  //         "FOLAC": {
  //         "label": "Folic acid",
  //         "quantity": 0,
  //         "unit": "µg"
  //         },
  //         "VITB12": {
  //         "label": "Vitamin B12",
  //         "quantity": 0,
  //         "unit": "µg"
  //         },
  //         "VITD": {
  //         "label": "Vitamin D",
  //         "quantity": 0,
  //         "unit": "µg"
  //         },
  //         "TOCPHA": {
  //         "label": "Vitamin E",
  //         "quantity": 0.287709237001864,
  //         "unit": "mg"
  //         },
  //         "VITK1": {
  //         "label": "Vitamin K",
  //         "quantity": 13.525775213368027,
  //         "unit": "µg"
  //         },
  //         "Sugar.alcohol": {
  //         "label": "Sugar alcohol",
  //         "quantity": 0,
  //         "unit": "g"
  //         },
  //         "WATER": {
  //         "label": "Water",
  //         "quantity": 470.40484601457507,
  //         "unit": "g"
  //         }
  //         },
  //         "totalDaily": {
  //         "ENERC_KCAL": {
  //         "label": "Energy",
  //         "quantity": 25.72427044996679,
  //         "unit": "%"
  //         },
  //         "FAT": {
  //         "label": "Fat",
  //         "quantity": 50.42900281385079,
  //         "unit": "%"
  //         },
  //         "FASAT": {
  //         "label": "Saturated",
  //         "quantity": 29.429644098835315,
  //         "unit": "%"
  //         },
  //         "CHOCDF": {
  //         "label": "Carbs",
  //         "quantity": 7.6342586842783415,
  //         "unit": "%"
  //         },
  //         "FIBTG": {
  //         "label": "Fiber",
  //         "quantity": 18.639158653340534,
  //         "unit": "%"
  //         },
  //         "PROCNT": {
  //         "label": "Protein",
  //         "quantity": 79.36058020600828,
  //         "unit": "%"
  //         },
  //         "CHOLE": {
  //         "label": "Cholesterol",
  //         "quantity": 0,
  //         "unit": "%"
  //         },
  //         "NA": {
  //         "label": "Sodium",
  //         "quantity": 57.4813795381635,
  //         "unit": "%"
  //         },
  //         "CA": {
  //         "label": "Calcium",
  //         "quantity": 93.45276195869026,
  //         "unit": "%"
  //         },
  //         "MG": {
  //         "label": "Magnesium",
  //         "quantity": 45.45557433230382,
  //         "unit": "%"
  //         },
  //         "K": {
  //         "label": "Potassium",
  //         "quantity": 18.611887395806683,
  //         "unit": "%"
  //         },
  //         "FE": {
  //         "label": "Iron",
  //         "quantity": 43.83879902037947,
  //         "unit": "%"
  //         },
  //         "ZN": {
  //         "label": "Zinc",
  //         "quantity": 37.13201385415323,
  //         "unit": "%"
  //         },
  //         "P": {
  //         "label": "Phosphorus",
  //         "quantity": 86.1877287190557,
  //         "unit": "%"
  //         },
  //         "VITA_RAE": {
  //         "label": "Vitamin A",
  //         "quantity": 0.2608796296428617,
  //         "unit": "%"
  //         },
  //         "VITC": {
  //         "label": "Vitamin C",
  //         "quantity": 6.712983044617037,
  //         "unit": "%"
  //         },
  //         "THIA": {
  //         "label": "Thiamin (B1)",
  //         "quantity": 24.508021277782095,
  //         "unit": "%"
  //         },
  //         "RIBF": {
  //         "label": "Riboflavin (B2)",
  //         "quantity": 26.34697639234354,
  //         "unit": "%"
  //         },
  //         "NIA": {
  //         "label": "Niacin (B3)",
  //         "quantity": 6.990114335644418,
  //         "unit": "%"
  //         },
  //         "VITB6A": {
  //         "label": "Vitamin B6",
  //         "quantity": 34.79709610518397,
  //         "unit": "%"
  //         },
  //         "FOLDFE": {
  //         "label": "Folate equivalent (total)",
  //         "quantity": 22.82136674168091,
  //         "unit": "%"
  //         },
  //         "VITB12": {
  //         "label": "Vitamin B12",
  //         "quantity": 0,
  //         "unit": "%"
  //         },
  //         "VITD": {
  //         "label": "Vitamin D",
  //         "quantity": 0,
  //         "unit": "%"
  //         },
  //         "TOCPHA": {
  //         "label": "Vitamin E",
  //         "quantity": 1.9180615800124268,
  //         "unit": "%"
  //         },
  //         "VITK1": {
  //         "label": "Vitamin K",
  //         "quantity": 11.271479344473356,
  //         "unit": "%"
  //         }
  //         },
  //         "digest": [
  //         {
  //         "label": "Fat",
  //         "tag": "FAT",
  //         "schemaOrgTag": "fatContent",
  //         "total": 32.77885182900302,
  //         "hasRDI": true,
  //         "daily": 50.42900281385079,
  //         "unit": "g",
  //         "sub": [
  //         {
  //         "label": "Saturated",
  //         "tag": "FASAT",
  //         "schemaOrgTag": "saturatedFatContent",
  //         "total": 5.885928819767063,
  //         "hasRDI": true,
  //         "daily": 29.429644098835315,
  //         "unit": "g"
  //         },
  //         {
  //         "label": "Trans",
  //         "tag": "FATRN",
  //         "schemaOrgTag": "transFatContent",
  //         "total": 0,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "g"
  //         },
  //         {
  //         "label": "Monounsaturated",
  //         "tag": "FAMS",
  //         "schemaOrgTag": null,
  //         "total": 11.032058706202097,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "g"
  //         },
  //         {
  //         "label": "Polyunsaturated",
  //         "tag": "FAPU",
  //         "schemaOrgTag": null,
  //         "total": 13.903421284466999,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "g"
  //         }
  //         ]
  //         },
  //         {
  //         "label": "Carbs",
  //         "tag": "CHOCDF",
  //         "schemaOrgTag": "carbohydrateContent",
  //         "total": 22.902776052835023,
  //         "hasRDI": true,
  //         "daily": 7.6342586842783415,
  //         "unit": "g",
  //         "sub": [
  //         {
  //         "label": "Carbs (net)",
  //         "tag": "CHOCDF.net",
  //         "schemaOrgTag": null,
  //         "total": 18.24298638949989,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "g"
  //         },
  //         {
  //         "label": "Fiber",
  //         "tag": "FIBTG",
  //         "schemaOrgTag": "fiberContent",
  //         "total": 4.6597896633351334,
  //         "hasRDI": true,
  //         "daily": 18.639158653340534,
  //         "unit": "g"
  //         },
  //         {
  //         "label": "Sugars",
  //         "tag": "SUGAR",
  //         "schemaOrgTag": "sugarContent",
  //         "total": 3.2148067200132036,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "g"
  //         },
  //         {
  //         "label": "Sugars, added",
  //         "tag": "SUGAR.added",
  //         "schemaOrgTag": null,
  //         "total": 0,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "g"
  //         }
  //         ]
  //         },
  //         {
  //         "label": "Protein",
  //         "tag": "PROCNT",
  //         "schemaOrgTag": "proteinContent",
  //         "total": 39.68029010300414,
  //         "hasRDI": true,
  //         "daily": 79.36058020600828,
  //         "unit": "g"
  //         },
  //         {
  //         "label": "Cholesterol",
  //         "tag": "CHOLE",
  //         "schemaOrgTag": "cholesterolContent",
  //         "total": 0,
  //         "hasRDI": true,
  //         "daily": 0,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Sodium",
  //         "tag": "NA",
  //         "schemaOrgTag": "sodiumContent",
  //         "total": 1379.5531089159242,
  //         "hasRDI": true,
  //         "daily": 57.4813795381635,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Calcium",
  //         "tag": "CA",
  //         "schemaOrgTag": null,
  //         "total": 934.5276195869026,
  //         "hasRDI": true,
  //         "daily": 93.45276195869026,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Magnesium",
  //         "tag": "MG",
  //         "schemaOrgTag": null,
  //         "total": 190.91341219567605,
  //         "hasRDI": true,
  //         "daily": 45.45557433230382,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Potassium",
  //         "tag": "K",
  //         "schemaOrgTag": null,
  //         "total": 874.7587076029141,
  //         "hasRDI": true,
  //         "daily": 18.611887395806683,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Iron",
  //         "tag": "FE",
  //         "schemaOrgTag": null,
  //         "total": 7.890983823668304,
  //         "hasRDI": true,
  //         "daily": 43.83879902037947,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Zinc",
  //         "tag": "ZN",
  //         "schemaOrgTag": null,
  //         "total": 4.084521523956855,
  //         "hasRDI": true,
  //         "daily": 37.13201385415323,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Phosphorus",
  //         "tag": "P",
  //         "schemaOrgTag": null,
  //         "total": 603.3141010333899,
  //         "hasRDI": true,
  //         "daily": 86.1877287190557,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Vitamin A",
  //         "tag": "VITA_RAE",
  //         "schemaOrgTag": null,
  //         "total": 2.3479166667857556,
  //         "hasRDI": true,
  //         "daily": 0.2608796296428617,
  //         "unit": "µg"
  //         },
  //         {
  //         "label": "Vitamin C",
  //         "tag": "VITC",
  //         "schemaOrgTag": null,
  //         "total": 6.041684740155333,
  //         "hasRDI": true,
  //         "daily": 6.712983044617037,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Thiamin (B1)",
  //         "tag": "THIA",
  //         "schemaOrgTag": null,
  //         "total": 0.2940962553333851,
  //         "hasRDI": true,
  //         "daily": 24.508021277782095,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Riboflavin (B2)",
  //         "tag": "RIBF",
  //         "schemaOrgTag": null,
  //         "total": 0.342510693100466,
  //         "hasRDI": true,
  //         "daily": 26.34697639234354,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Niacin (B3)",
  //         "tag": "NIA",
  //         "schemaOrgTag": null,
  //         "total": 1.1184182937031069,
  //         "hasRDI": true,
  //         "daily": 6.990114335644418,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Vitamin B6",
  //         "tag": "VITB6A",
  //         "schemaOrgTag": null,
  //         "total": 0.4523622493673916,
  //         "hasRDI": true,
  //         "daily": 34.79709610518397,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Folate equivalent (total)",
  //         "tag": "FOLDFE",
  //         "schemaOrgTag": null,
  //         "total": 91.28546696672365,
  //         "hasRDI": true,
  //         "daily": 22.82136674168091,
  //         "unit": "µg"
  //         },
  //         {
  //         "label": "Folate (food)",
  //         "tag": "FOLFD",
  //         "schemaOrgTag": null,
  //         "total": 91.28546696672365,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "µg"
  //         },
  //         {
  //         "label": "Folic acid",
  //         "tag": "FOLAC",
  //         "schemaOrgTag": null,
  //         "total": 0,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "µg"
  //         },
  //         {
  //         "label": "Vitamin B12",
  //         "tag": "VITB12",
  //         "schemaOrgTag": null,
  //         "total": 0,
  //         "hasRDI": true,
  //         "daily": 0,
  //         "unit": "µg"
  //         },
  //         {
  //         "label": "Vitamin D",
  //         "tag": "VITD",
  //         "schemaOrgTag": null,
  //         "total": 0,
  //         "hasRDI": true,
  //         "daily": 0,
  //         "unit": "µg"
  //         },
  //         {
  //         "label": "Vitamin E",
  //         "tag": "TOCPHA",
  //         "schemaOrgTag": null,
  //         "total": 0.287709237001864,
  //         "hasRDI": true,
  //         "daily": 1.9180615800124268,
  //         "unit": "mg"
  //         },
  //         {
  //         "label": "Vitamin K",
  //         "tag": "VITK1",
  //         "schemaOrgTag": null,
  //         "total": 13.525775213368027,
  //         "hasRDI": true,
  //         "daily": 11.271479344473356,
  //         "unit": "µg"
  //         },
  //         {
  //         "label": "Sugar alcohols",
  //         "tag": "Sugar.alcohol",
  //         "schemaOrgTag": null,
  //         "total": 0,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "g"
  //         },
  //         {
  //         "label": "Water",
  //         "tag": "WATER",
  //         "schemaOrgTag": null,
  //         "total": 470.40484601457507,
  //         "hasRDI": false,
  //         "daily": 0,
  //         "unit": "g"
  //         }
  //         ]
  //         },
  //         "_links": {
  //         "self": {
  //         "href": "https://api.edamam.com/api/recipes/v2/50604d7a0799f7f955672ba8883788f2?type=public&app_id=8717089a&app_key=35658ee1215cbd7922d388170b7509f0",
  //         "title": "Self"
  //         }
  //         }
  //         },
  //         {
  //           "recipe": {
  //           "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_3bcc452f49c2274deb130310608e0198",
  //           "label": "Asian Pear, Basil, and Lemon Juice Recipe",
  //           "image": "https://edamam-product-images.s3.amazonaws.com/web-img/4c5/4c5f8a36d7a89aed6afbcfee03038c04.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=35880a828b9b94291baf23bff0c0828f81940ab1f9c47ae9e84dfa8c65ec196d",
  //           "images": {
  //           "THUMBNAIL": {
  //           "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4c5/4c5f8a36d7a89aed6afbcfee03038c04-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=856af1d323722a2392b552096ea83c307028b9803c8693538ee0ddbcc70fb8db",
  //           "width": 100,
  //           "height": 100
  //           },
  //           "SMALL": {
  //           "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4c5/4c5f8a36d7a89aed6afbcfee03038c04-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6e37ef9b6c3825d304cd3bf23e24aa7d6321a09f65a09226d1db21eb9648fe59",
  //           "width": 200,
  //           "height": 200
  //           },
  //           "REGULAR": {
  //           "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4c5/4c5f8a36d7a89aed6afbcfee03038c04.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=35880a828b9b94291baf23bff0c0828f81940ab1f9c47ae9e84dfa8c65ec196d",
  //           "width": 300,
  //           "height": 300
  //           }
  //           },
  //           "source": "Serious Eats",
  //           "url": "http://www.seriouseats.com/recipes/2014/01/asian-pear-basil-lemon-celery-juice-recipe.html",
  //           "shareAs": "http://www.edamam.com/recipe/asian-pear-basil-and-lemon-juice-recipe-3bcc452f49c2274deb130310608e0198/-",
  //           "yield": 2,
  //           "dietLabels": [
  //           "Low-Fat",
  //           "Low-Sodium"
  //           ],
  //           "healthLabels": [
  //           "Vegan",
  //           "Vegetarian",
  //           "Pescatarian",
  //           "Mediterranean",
  //           "DASH",
  //           "Dairy-Free",
  //           "Gluten-Free",
  //           "Wheat-Free",
  //           "Egg-Free",
  //           "Peanut-Free",
  //           "Tree-Nut-Free",
  //           "Soy-Free",
  //           "Fish-Free",
  //           "Shellfish-Free",
  //           "Pork-Free",
  //           "Red-Meat-Free",
  //           "Crustacean-Free",
  //           "Mustard-Free",
  //           "Sesame-Free",
  //           "Lupine-Free",
  //           "Mollusk-Free",
  //           "Alcohol-Free",
  //           "No oil added",
  //           "Sulfite-Free",
  //           "Kosher"
  //           ],
  //           "cautions": [
  //           "Sulfites"
  //           ],
  //           "ingredientLines": [
  //           "1 cup (8 ounces) fresh Asian pear juice from about 4 Asian pears",
  //           "1/4 cup (2 ounces) fresh basil juice from about 2 packed cups basil leaves and stems",
  //           "1/4 cup (2 ounces) fresh lemon juice from about 2 lemons, peel and pith removed",
  //           "2/3 cup (about 5 ounces) fresh celery juice from about 4 large celery stalks"
  //           ],
  //           "ingredients": [
  //           {
  //           "text": "1 cup (8 ounces) fresh Asian pear juice from about 4 Asian pears",
  //           "quantity": 8,
  //           "measure": "ounce",
  //           "food": "pear juice",
  //           "weight": 226.796185,
  //           "foodCategory": "canned fruit",
  //           "foodId": "food_apbxej5a27mnr7b5suktub6brbs7",
  //           "image": "https://www.edamam.com/food-img/107/1071cfa28d94ef770124c96abfa950a5.jpg"
  //           },
  //           {
  //           "text": "1/4 cup (2 ounces) fresh basil juice from about 2 packed cups basil leaves and stems",
  //           "quantity": 2,
  //           "measure": "ounce",
  //           "food": "basil",
  //           "weight": 56.69904625,
  //           "foodCategory": "Condiments and sauces",
  //           "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
  //           "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
  //           },
  //           {
  //           "text": "1/4 cup (2 ounces) fresh lemon juice from about 2 lemons, peel and pith removed",
  //           "quantity": 2,
  //           "measure": "ounce",
  //           "food": "lemon juice",
  //           "weight": 56.69904625,
  //           "foodCategory": "100% juice",
  //           "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
  //           "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
  //           },
  //           {
  //           "text": "2/3 cup (about 5 ounces) fresh celery juice from about 4 large celery stalks",
  //           "quantity": 5,
  //           "measure": "ounce",
  //           "food": "celery",
  //           "weight": 141.747615625,
  //           "foodCategory": "vegetables",
  //           "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
  //           "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
  //           }
  //           ],
  //           "calories": 184.27190031250004,
  //           "totalWeight": 481.941893125,
  //           "totalTime": 5,
  //           "cuisineType": [
  //           "asian"
  //           ],
  //           "mealType": [
  //           "breakfast"
  //           ],
  //           "dishType": [
  //           "main course"
  //           ],
  //           "totalNutrients": {
  //           "ENERC_KCAL": {
  //           "label": "Energy",
  //           "quantity": 184.27190031250004,
  //           "unit": "kcal"
  //           },
  //           "FAT": {
  //           "label": "Fat",
  //           "quantity": 0.7626021720625,
  //           "unit": "g"
  //           },
  //           "FASAT": {
  //           "label": "Saturated",
  //           "quantity": 0.10772818787500002,
  //           "unit": "g"
  //           },
  //           "FATRN": {
  //           "label": "Trans",
  //           "quantity": 0,
  //           "unit": "g"
  //           },
  //           "FAMS": {
  //           "label": "Monounsaturated",
  //           "quantity": 0.105460226025,
  //           "unit": "g"
  //           },
  //           "FAPU": {
  //           "label": "Polyunsaturated",
  //           "quantity": 0.35125059151875004,
  //           "unit": "g"
  //           },
  //           "CHOCDF": {
  //           "label": "Carbs",
  //           "quantity": 45.367741856937506,
  //           "unit": "g"
  //           },
  //           "CHOCDF.net": {
  //           "label": "Carbohydrates (net)",
  //           "quantity": 40.66172101818751,
  //           "unit": "g"
  //           },
  //           "FIBTG": {
  //           "label": "Fiber",
  //           "quantity": 4.706020838750001,
  //           "unit": "g"
  //           },
  //           "SUGAR": {
  //           "label": "Sugars",
  //           "quantity": 37.880632799625005,
  //           "unit": "g"
  //           },
  //           "SUGAR.added": {
  //           "label": "Sugars, added",
  //           "quantity": 0,
  //           "unit": "g"
  //           },
  //           "PROCNT": {
  //           "label": "Protein",
  //           "quantity": 3.2120009700625003,
  //           "unit": "g"
  //           },
  //           "CHOLE": {
  //           "label": "Cholesterol",
  //           "quantity": 0,
  //           "unit": "mg"
  //           },
  //           "NA": {
  //           "label": "Sodium",
  //           "quantity": 125.30489221250001,
  //           "unit": "mg"
  //           },
  //           "CA": {
  //           "label": "Calcium",
  //           "quantity": 171.7981101375,
  //           "unit": "mg"
  //           },
  //           "MG": {
  //           "label": "Magnesium",
  //           "quantity": 62.08545564375,
  //           "unit": "mg"
  //           },
  //           "K": {
  //           "label": "Potassium",
  //           "quantity": 623.6895087500001,
  //           "unit": "mg"
  //           },
  //           "FE": {
  //           "label": "Iron",
  //           "quantity": 2.7158843153750003,
  //           "unit": "mg"
  //           },
  //           "ZN": {
  //           "label": "Zinc",
  //           "quantity": 0.8306410275625002,
  //           "unit": "mg"
  //           },
  //           "P": {
  //           "label": "Phosphorus",
  //           "quantity": 77.1107029,
  //           "unit": "mg"
  //           },
  //           "VITA_RAE": {
  //           "label": "Vitamin A",
  //           "quantity": 180.86995753750003,
  //           "unit": "µg"
  //           },
  //           "VITC": {
  //           "label": "Vitamin C",
  //           "quantity": 39.037293343125,
  //           "unit": "mg"
  //           },
  //           "THIA": {
  //           "label": "Thiamin (B1)",
  //           "quantity": 0.06718836980625001,
  //           "unit": "mg"
  //           },
  //           "RIBF": {
  //           "label": "Riboflavin (B2)",
  //           "quantity": 0.16187577704375,
  //           "unit": "mg"
  //           },
  //           "NIA": {
  //           "label": "Niacin (B3)",
  //           "quantity": 1.3069130160625002,
  //           "unit": "mg"
  //           },
  //           "VITB6A": {
  //           "label": "Vitamin B6",
  //           "quantity": 0.25060978442500004,
  //           "unit": "mg"
  //           },
  //           "FOLDFE": {
  //           "label": "Folate equivalent (total)",
  //           "quantity": 103.192264175,
  //           "unit": "µg"
  //           },
  //           "FOLFD": {
  //           "label": "Folate (food)",
  //           "quantity": 103.192264175,
  //           "unit": "µg"
  //           },
  //           "FOLAC": {
  //           "label": "Folic acid",
  //           "quantity": 0,
  //           "unit": "µg"
  //           },
  //           "VITB12": {
  //           "label": "Vitamin B12",
  //           "quantity": 0,
  //           "unit": "µg"
  //           },
  //           "VITD": {
  //           "label": "Vitamin D",
  //           "quantity": 0,
  //           "unit": "µg"
  //           },
  //           "TOCPHA": {
  //           "label": "Vitamin E",
  //           "quantity": 1.0347575940625,
  //           "unit": "mg"
  //           },
  //           "VITK1": {
  //           "label": "Vitamin K",
  //           "quantity": 280.802026553125,
  //           "unit": "µg"
  //           },
  //           "Sugar.alcohol": {
  //           "label": "Sugar alcohol",
  //           "quantity": 0,
  //           "unit": "g"
  //           },
  //           "WATER": {
  //           "label": "Water",
  //           "quantity": 430.3372561805626,
  //           "unit": "g"
  //           }
  //           },
  //           "totalDaily": {
  //           "ENERC_KCAL": {
  //           "label": "Energy",
  //           "quantity": 9.213595015625001,
  //           "unit": "%"
  //           },
  //           "FAT": {
  //           "label": "Fat",
  //           "quantity": 1.1732341108653848,
  //           "unit": "%"
  //           },
  //           "FASAT": {
  //           "label": "Saturated",
  //           "quantity": 0.5386409393750001,
  //           "unit": "%"
  //           },
  //           "CHOCDF": {
  //           "label": "Carbs",
  //           "quantity": 15.12258061897917,
  //           "unit": "%"
  //           },
  //           "FIBTG": {
  //           "label": "Fiber",
  //           "quantity": 18.824083355000003,
  //           "unit": "%"
  //           },
  //           "PROCNT": {
  //           "label": "Protein",
  //           "quantity": 6.424001940125001,
  //           "unit": "%"
  //           },
  //           "CHOLE": {
  //           "label": "Cholesterol",
  //           "quantity": 0,
  //           "unit": "%"
  //           },
  //           "NA": {
  //           "label": "Sodium",
  //           "quantity": 5.221037175520833,
  //           "unit": "%"
  //           },
  //           "CA": {
  //           "label": "Calcium",
  //           "quantity": 17.17981101375,
  //           "unit": "%"
  //           },
  //           "MG": {
  //           "label": "Magnesium",
  //           "quantity": 14.78225134375,
  //           "unit": "%"
  //           },
  //           "K": {
  //           "label": "Potassium",
  //           "quantity": 13.269989547872342,
  //           "unit": "%"
  //           },
  //           "FE": {
  //           "label": "Iron",
  //           "quantity": 15.088246196527779,
  //           "unit": "%"
  //           },
  //           "ZN": {
  //           "label": "Zinc",
  //           "quantity": 7.551282068750002,
  //           "unit": "%"
  //           },
  //           "P": {
  //           "label": "Phosphorus",
  //           "quantity": 11.0158147,
  //           "unit": "%"
  //           },
  //           "VITA_RAE": {
  //           "label": "Vitamin A",
  //           "quantity": 20.096661948611114,
  //           "unit": "%"
  //           },
  //           "VITC": {
  //           "label": "Vitamin C",
  //           "quantity": 43.37477038125,
  //           "unit": "%"
  //           },
  //           "THIA": {
  //           "label": "Thiamin (B1)",
  //           "quantity": 5.599030817187502,
  //           "unit": "%"
  //           },
  //           "RIBF": {
  //           "label": "Riboflavin (B2)",
  //           "quantity": 12.451982849519231,
  //           "unit": "%"
  //           },
  //           "NIA": {
  //           "label": "Niacin (B3)",
  //           "quantity": 8.168206350390626,
  //           "unit": "%"
  //           },
  //           "VITB6A": {
  //           "label": "Vitamin B6",
  //           "quantity": 19.277675725,
  //           "unit": "%"
  //           },
  //           "FOLDFE": {
  //           "label": "Folate equivalent (total)",
  //           "quantity": 25.79806604375,
  //           "unit": "%"
  //           },
  //           "VITB12": {
  //           "label": "Vitamin B12",
  //           "quantity": 0,
  //           "unit": "%"
  //           },
  //           "VITD": {
  //           "label": "Vitamin D",
  //           "quantity": 0,
  //           "unit": "%"
  //           },
  //           "TOCPHA": {
  //           "label": "Vitamin E",
  //           "quantity": 6.898383960416667,
  //           "unit": "%"
  //           },
  //           "VITK1": {
  //           "label": "Vitamin K",
  //           "quantity": 234.00168879427085,
  //           "unit": "%"
  //           }
  //           },
  //           "digest": [
  //           {
  //           "label": "Fat",
  //           "tag": "FAT",
  //           "schemaOrgTag": "fatContent",
  //           "total": 0.7626021720625,
  //           "hasRDI": true,
  //           "daily": 1.1732341108653848,
  //           "unit": "g",
  //           "sub": [
  //           {
  //           "label": "Saturated",
  //           "tag": "FASAT",
  //           "schemaOrgTag": "saturatedFatContent",
  //           "total": 0.10772818787500002,
  //           "hasRDI": true,
  //           "daily": 0.5386409393750001,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Trans",
  //           "tag": "FATRN",
  //           "schemaOrgTag": "transFatContent",
  //           "total": 0,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Monounsaturated",
  //           "tag": "FAMS",
  //           "schemaOrgTag": null,
  //           "total": 0.105460226025,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Polyunsaturated",
  //           "tag": "FAPU",
  //           "schemaOrgTag": null,
  //           "total": 0.35125059151875004,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           }
  //           ]
  //           },
  //           {
  //           "label": "Carbs",
  //           "tag": "CHOCDF",
  //           "schemaOrgTag": "carbohydrateContent",
  //           "total": 45.367741856937506,
  //           "hasRDI": true,
  //           "daily": 15.12258061897917,
  //           "unit": "g",
  //           "sub": [
  //           {
  //           "label": "Carbs (net)",
  //           "tag": "CHOCDF.net",
  //           "schemaOrgTag": null,
  //           "total": 40.66172101818751,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Fiber",
  //           "tag": "FIBTG",
  //           "schemaOrgTag": "fiberContent",
  //           "total": 4.706020838750001,
  //           "hasRDI": true,
  //           "daily": 18.824083355000003,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Sugars",
  //           "tag": "SUGAR",
  //           "schemaOrgTag": "sugarContent",
  //           "total": 37.880632799625005,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Sugars, added",
  //           "tag": "SUGAR.added",
  //           "schemaOrgTag": null,
  //           "total": 0,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           }
  //           ]
  //           },
  //           {
  //           "label": "Protein",
  //           "tag": "PROCNT",
  //           "schemaOrgTag": "proteinContent",
  //           "total": 3.2120009700625003,
  //           "hasRDI": true,
  //           "daily": 6.424001940125001,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Cholesterol",
  //           "tag": "CHOLE",
  //           "schemaOrgTag": "cholesterolContent",
  //           "total": 0,
  //           "hasRDI": true,
  //           "daily": 0,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Sodium",
  //           "tag": "NA",
  //           "schemaOrgTag": "sodiumContent",
  //           "total": 125.30489221250001,
  //           "hasRDI": true,
  //           "daily": 5.221037175520833,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Calcium",
  //           "tag": "CA",
  //           "schemaOrgTag": null,
  //           "total": 171.7981101375,
  //           "hasRDI": true,
  //           "daily": 17.17981101375,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Magnesium",
  //           "tag": "MG",
  //           "schemaOrgTag": null,
  //           "total": 62.08545564375,
  //           "hasRDI": true,
  //           "daily": 14.78225134375,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Potassium",
  //           "tag": "K",
  //           "schemaOrgTag": null,
  //           "total": 623.6895087500001,
  //           "hasRDI": true,
  //           "daily": 13.269989547872342,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Iron",
  //           "tag": "FE",
  //           "schemaOrgTag": null,
  //           "total": 2.7158843153750003,
  //           "hasRDI": true,
  //           "daily": 15.088246196527779,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Zinc",
  //           "tag": "ZN",
  //           "schemaOrgTag": null,
  //           "total": 0.8306410275625002,
  //           "hasRDI": true,
  //           "daily": 7.551282068750002,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Phosphorus",
  //           "tag": "P",
  //           "schemaOrgTag": null,
  //           "total": 77.1107029,
  //           "hasRDI": true,
  //           "daily": 11.0158147,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Vitamin A",
  //           "tag": "VITA_RAE",
  //           "schemaOrgTag": null,
  //           "total": 180.86995753750003,
  //           "hasRDI": true,
  //           "daily": 20.096661948611114,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Vitamin C",
  //           "tag": "VITC",
  //           "schemaOrgTag": null,
  //           "total": 39.037293343125,
  //           "hasRDI": true,
  //           "daily": 43.37477038125,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Thiamin (B1)",
  //           "tag": "THIA",
  //           "schemaOrgTag": null,
  //           "total": 0.06718836980625001,
  //           "hasRDI": true,
  //           "daily": 5.599030817187502,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Riboflavin (B2)",
  //           "tag": "RIBF",
  //           "schemaOrgTag": null,
  //           "total": 0.16187577704375,
  //           "hasRDI": true,
  //           "daily": 12.451982849519231,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Niacin (B3)",
  //           "tag": "NIA",
  //           "schemaOrgTag": null,
  //           "total": 1.3069130160625002,
  //           "hasRDI": true,
  //           "daily": 8.168206350390626,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Vitamin B6",
  //           "tag": "VITB6A",
  //           "schemaOrgTag": null,
  //           "total": 0.25060978442500004,
  //           "hasRDI": true,
  //           "daily": 19.277675725,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Folate equivalent (total)",
  //           "tag": "FOLDFE",
  //           "schemaOrgTag": null,
  //           "total": 103.192264175,
  //           "hasRDI": true,
  //           "daily": 25.79806604375,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Folate (food)",
  //           "tag": "FOLFD",
  //           "schemaOrgTag": null,
  //           "total": 103.192264175,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Folic acid",
  //           "tag": "FOLAC",
  //           "schemaOrgTag": null,
  //           "total": 0,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Vitamin B12",
  //           "tag": "VITB12",
  //           "schemaOrgTag": null,
  //           "total": 0,
  //           "hasRDI": true,
  //           "daily": 0,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Vitamin D",
  //           "tag": "VITD",
  //           "schemaOrgTag": null,
  //           "total": 0,
  //           "hasRDI": true,
  //           "daily": 0,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Vitamin E",
  //           "tag": "TOCPHA",
  //           "schemaOrgTag": null,
  //           "total": 1.0347575940625,
  //           "hasRDI": true,
  //           "daily": 6.898383960416667,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Vitamin K",
  //           "tag": "VITK1",
  //           "schemaOrgTag": null,
  //           "total": 280.802026553125,
  //           "hasRDI": true,
  //           "daily": 234.00168879427085,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Sugar alcohols",
  //           "tag": "Sugar.alcohol",
  //           "schemaOrgTag": null,
  //           "total": 0,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Water",
  //           "tag": "WATER",
  //           "schemaOrgTag": null,
  //           "total": 430.3372561805626,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           }
  //           ]
  //           },
  //           "_links": {
  //           "self": {
  //           "href": "https://api.edamam.com/api/recipes/v2/3bcc452f49c2274deb130310608e0198?type=public&app_id=8717089a&app_key=35658ee1215cbd7922d388170b7509f0",
  //           "title": "Self"
  //           }
  //           }
  //           },
  //           {
  //           "recipe": {
  //           "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c40642181e1b43c8fcacbd2c103f2b01",
  //           "label": "Tofu with Crab Sauce Recipe",
  //           "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f82/f82e90f38a4b6efe455e62e113b12f33.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=69f1fb2726e8eeafc1736011055775d0098ee0ade636b6230f88ea1fcf6ac4b8",
  //           "images": {
  //           "THUMBNAIL": {
  //           "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f82/f82e90f38a4b6efe455e62e113b12f33-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ef5f3a8ae224d38f5b4dee8dd4fc7e53eaea7227954b517802ba57c8d1f224b",
  //           "width": 100,
  //           "height": 100
  //           },
  //           "SMALL": {
  //           "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f82/f82e90f38a4b6efe455e62e113b12f33-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c7c2f9a312fe775c1a540386094fcfed834307489c1d6266a77e271dc3a942f1",
  //           "width": 200,
  //           "height": 200
  //           },
  //           "REGULAR": {
  //           "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f82/f82e90f38a4b6efe455e62e113b12f33.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=69f1fb2726e8eeafc1736011055775d0098ee0ade636b6230f88ea1fcf6ac4b8",
  //           "width": 300,
  //           "height": 300
  //           },
  //           "LARGE": {
  //           "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f82/f82e90f38a4b6efe455e62e113b12f33-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=60335c2be86aabae0acd33020881d40edbfa1143e2ee5f83340ba2f1f99c6093",
  //           "width": 600,
  //           "height": 600
  //           }
  //           },
  //           "source": "No Recipes",
  //           "url": "https://norecipes.com/tofu-with-crab-sauce-recipe",
  //           "shareAs": "http://www.edamam.com/recipe/tofu-with-crab-sauce-recipe-c40642181e1b43c8fcacbd2c103f2b01/-",
  //           "yield": 4,
  //           "dietLabels": [
  //           "High-Protein",
  //           "Low-Carb"
  //           ],
  //           "healthLabels": [
  //           "Sugar-Conscious",
  //           "Keto-Friendly",
  //           "Mediterranean",
  //           "Dairy-Free",
  //           "Egg-Free",
  //           "Peanut-Free",
  //           "Tree-Nut-Free",
  //           "Fish-Free",
  //           "Pork-Free",
  //           "Red-Meat-Free",
  //           "Celery-Free",
  //           "Mustard-Free",
  //           "Sesame-Free",
  //           "Lupine-Free",
  //           "Mollusk-Free",
  //           "Alcohol-Free",
  //           "No oil added"
  //           ],
  //           "cautions": [
  //           "Gluten",
  //           "Wheat",
  //           "Sulfites"
  //           ],
  //           "ingredientLines": [
  //           "400 grams soft tofu (divided into 4 blocks)",
  //           "140 grams canned crab meat",
  //           "1/2 cup dashi",
  //           "2 teaspoons potato starch",
  //           "1 teaspoon fresh ginger (grated)",
  //           "1/2 teaspoon usukuchi soy sauce (Japanese light soy sauce)",
  //           "mitsuba (for garnish)"
  //           ],
  //           "ingredients": [
  //           {
  //           "text": "400 grams soft tofu (divided into 4 blocks)",
  //           "quantity": 400,
  //           "measure": "gram",
  //           "food": "soft tofu",
  //           "weight": 400,
  //           "foodCategory": "plant-based protein",
  //           "foodId": "food_bfacxi5apeni5hb2rdqzra339ypr",
  //           "image": "https://www.edamam.com/food-img/cec/cecb0d976b985fb6e8a10842b89dc412.jpg"
  //           },
  //           {
  //           "text": "140 grams canned crab meat",
  //           "quantity": 140,
  //           "measure": "gram",
  //           "food": "crab meat",
  //           "weight": 140,
  //           "foodCategory": "seafood",
  //           "foodId": "food_ao6g1pnapm2qazallo96ybafy3ie",
  //           "image": "https://www.edamam.com/food-img/ac5/ac53a456f302ed1167f8bdc818161188.jpg"
  //           },
  //           {
  //           "text": "1/2 cup dashi",
  //           "quantity": 0.5,
  //           "measure": "cup",
  //           "food": "dashi",
  //           "weight": 116.5,
  //           "foodCategory": "canned soup",
  //           "foodId": "food_a00wj3maedk41kbwmbl4hb3s5gua",
  //           "image": "https://www.edamam.com/food-img/e07/e07d7b7a8320da9f235be9d663b7a9f4.jpg"
  //           },
  //           {
  //           "text": "2 teaspoons potato starch",
  //           "quantity": 2,
  //           "measure": "teaspoon",
  //           "food": "potato starch",
  //           "weight": 5.33333333360384,
  //           "foodCategory": "grains",
  //           "foodId": "food_b84cpw8b4ow2ulbapa2agas4f9ev",
  //           "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
  //           },
  //           {
  //           "text": "1 teaspoon fresh ginger (grated)",
  //           "quantity": 1,
  //           "measure": "teaspoon",
  //           "food": "fresh ginger",
  //           "weight": 2,
  //           "foodCategory": "vegetables",
  //           "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
  //           "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
  //           },
  //           {
  //           "text": "1/2 teaspoon usukuchi soy sauce (Japanese light soy sauce)",
  //           "quantity": 0.5,
  //           "measure": "teaspoon",
  //           "food": "soy sauce",
  //           "weight": 2.65,
  //           "foodCategory": "plant-based protein",
  //           "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
  //           "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
  //           }
  //           ],
  //           "calories": 402.16450000103066,
  //           "totalWeight": 666.4833333336038,
  //           "totalTime": 0,
  //           "cuisineType": [
  //           "asian"
  //           ],
  //           "mealType": [
  //           "snack"
  //           ],
  //           "dishType": [
  //           "condiments and sauces"
  //           ],
  //           "totalNutrients": {
  //           "ENERC_KCAL": {
  //           "label": "Energy",
  //           "quantity": 402.16450000103066,
  //           "unit": "kcal"
  //           },
  //           "FAT": {
  //           "label": "Fat",
  //           "quantity": 16.7724216666668,
  //           "unit": "g"
  //           },
  //           "FASAT": {
  //           "label": "Saturated",
  //           "quantity": 2.6563695000000247,
  //           "unit": "g"
  //           },
  //           "FATRN": {
  //           "label": "Trans",
  //           "quantity": 0.019600000000000003,
  //           "unit": "g"
  //           },
  //           "FAMS": {
  //           "label": "Monounsaturated",
  //           "quantity": 3.7178053333333767,
  //           "unit": "g"
  //           },
  //           "FAPU": {
  //           "label": "Polyunsaturated",
  //           "quantity": 8.857352833333401,
  //           "unit": "g"
  //           },
  //           "CHOCDF": {
  //           "label": "Carbs",
  //           "quantity": 12.553778333580224,
  //           "unit": "g"
  //           },
  //           "CHOCDF.net": {
  //           "label": "Carbohydrates (net)",
  //           "quantity": 11.64457833357779,
  //           "unit": "g"
  //           },
  //           "FIBTG": {
  //           "label": "Fiber",
  //           "quantity": 0.9092000000024346,
  //           "unit": "g"
  //           },
  //           "SUGAR": {
  //           "label": "Sugars",
  //           "quantity": 2.8446,
  //           "unit": "g"
  //           },
  //           "SUGAR.added": {
  //           "label": "Sugars, added",
  //           "quantity": 0,
  //           "unit": "g"
  //           },
  //           "PROCNT": {
  //           "label": "Protein",
  //           "quantity": 54.13087666666737,
  //           "unit": "g"
  //           },
  //           "CHOLE": {
  //           "label": "Cholesterol",
  //           "quantity": 136.965,
  //           "unit": "mg"
  //           },
  //           "NA": {
  //           "label": "Sodium",
  //           "quantity": 1148.2445000000243,
  //           "unit": "mg"
  //           },
  //           "CA": {
  //           "label": "Calcium",
  //           "quantity": 576.1961666666721,
  //           "unit": "mg"
  //           },
  //           "MG": {
  //           "label": "Magnesium",
  //           "quantity": 169.53600000000816,
  //           "unit": "mg"
  //           },
  //           "K": {
  //           "label": "Potassium",
  //           "quantity": 1030.347500000008,
  //           "unit": "mg"
  //           },
  //           "FE": {
  //           "label": "Iron",
  //           "quantity": 5.227141666667939,
  //           "unit": "mg"
  //           },
  //           "ZN": {
  //           "label": "Zinc",
  //           "quantity": 7.996955000000162,
  //           "unit": "mg"
  //           },
  //           "P": {
  //           "label": "Phosphorus",
  //           "quantity": 766.6123333333685,
  //           "unit": "mg"
  //           },
  //           "VITA_RAE": {
  //           "label": "Vitamin A",
  //           "quantity": 3.7300000000000004,
  //           "unit": "µg"
  //           },
  //           "VITC": {
  //           "label": "Vitamin C",
  //           "quantity": 5.6365,
  //           "unit": "mg"
  //           },
  //           "THIA": {
  //           "label": "Thiamin (B1)",
  //           "quantity": 0.2600195,
  //           "unit": "mg"
  //           },
  //           "RIBF": {
  //           "label": "Riboflavin (B2)",
  //           "quantity": 0.3717925,
  //           "unit": "mg"
  //           },
  //           "NIA": {
  //           "label": "Niacin (B3)",
  //           "quantity": 7.440684,
  //           "unit": "mg"
  //           },
  //           "VITB6A": {
  //           "label": "Vitamin B6",
  //           "quantity": 0.47662699999999997,
  //           "unit": "mg"
  //           },
  //           "FOLDFE": {
  //           "label": "Folate equivalent (total)",
  //           "quantity": 250.32100000000003,
  //           "unit": "µg"
  //           },
  //           "FOLFD": {
  //           "label": "Folate (food)",
  //           "quantity": 250.32100000000003,
  //           "unit": "µg"
  //           },
  //           "FOLAC": {
  //           "label": "Folic acid",
  //           "quantity": 0,
  //           "unit": "µg"
  //           },
  //           "VITB12": {
  //           "label": "Vitamin B12",
  //           "quantity": 5.4658500000000005,
  //           "unit": "µg"
  //           },
  //           "VITD": {
  //           "label": "Vitamin D",
  //           "quantity": 0,
  //           "unit": "µg"
  //           },
  //           "TOCPHA": {
  //           "label": "Vitamin E",
  //           "quantity": 2.8192500000000003,
  //           "unit": "mg"
  //           },
  //           "VITK1": {
  //           "label": "Vitamin K",
  //           "quantity": 8.422,
  //           "unit": "µg"
  //           },
  //           "Sugar.alcohol": {
  //           "label": "Sugar alcohol",
  //           "quantity": 0,
  //           "unit": "g"
  //           },
  //           "WATER": {
  //           "label": "Water",
  //           "quantity": 577.0520083333558,
  //           "unit": "g"
  //           }
  //           },
  //           "totalDaily": {
  //           "ENERC_KCAL": {
  //           "label": "Energy",
  //           "quantity": 20.108225000051533,
  //           "unit": "%"
  //           },
  //           "FAT": {
  //           "label": "Fat",
  //           "quantity": 25.803725641025846,
  //           "unit": "%"
  //           },
  //           "FASAT": {
  //           "label": "Saturated",
  //           "quantity": 13.281847500000122,
  //           "unit": "%"
  //           },
  //           "CHOCDF": {
  //           "label": "Carbs",
  //           "quantity": 4.184592777860074,
  //           "unit": "%"
  //           },
  //           "FIBTG": {
  //           "label": "Fiber",
  //           "quantity": 3.6368000000097385,
  //           "unit": "%"
  //           },
  //           "PROCNT": {
  //           "label": "Protein",
  //           "quantity": 108.26175333333475,
  //           "unit": "%"
  //           },
  //           "CHOLE": {
  //           "label": "Cholesterol",
  //           "quantity": 45.655,
  //           "unit": "%"
  //           },
  //           "NA": {
  //           "label": "Sodium",
  //           "quantity": 47.843520833334345,
  //           "unit": "%"
  //           },
  //           "CA": {
  //           "label": "Calcium",
  //           "quantity": 57.619616666667206,
  //           "unit": "%"
  //           },
  //           "MG": {
  //           "label": "Magnesium",
  //           "quantity": 40.36571428571623,
  //           "unit": "%"
  //           },
  //           "K": {
  //           "label": "Potassium",
  //           "quantity": 21.922287234042724,
  //           "unit": "%"
  //           },
  //           "FE": {
  //           "label": "Iron",
  //           "quantity": 29.039675925932993,
  //           "unit": "%"
  //           },
  //           "ZN": {
  //           "label": "Zinc",
  //           "quantity": 72.69959090909238,
  //           "unit": "%"
  //           },
  //           "P": {
  //           "label": "Phosphorus",
  //           "quantity": 109.51604761905263,
  //           "unit": "%"
  //           },
  //           "VITA_RAE": {
  //           "label": "Vitamin A",
  //           "quantity": 0.4144444444444445,
  //           "unit": "%"
  //           },
  //           "VITC": {
  //           "label": "Vitamin C",
  //           "quantity": 6.262777777777777,
  //           "unit": "%"
  //           },
  //           "THIA": {
  //           "label": "Thiamin (B1)",
  //           "quantity": 21.66829166666667,
  //           "unit": "%"
  //           },
  //           "RIBF": {
  //           "label": "Riboflavin (B2)",
  //           "quantity": 28.599423076923078,
  //           "unit": "%"
  //           },
  //           "NIA": {
  //           "label": "Niacin (B3)",
  //           "quantity": 46.504275,
  //           "unit": "%"
  //           },
  //           "VITB6A": {
  //           "label": "Vitamin B6",
  //           "quantity": 36.663615384615376,
  //           "unit": "%"
  //           },
  //           "FOLDFE": {
  //           "label": "Folate equivalent (total)",
  //           "quantity": 62.58025000000001,
  //           "unit": "%"
  //           },
  //           "VITB12": {
  //           "label": "Vitamin B12",
  //           "quantity": 227.74375000000003,
  //           "unit": "%"
  //           },
  //           "VITD": {
  //           "label": "Vitamin D",
  //           "quantity": 0,
  //           "unit": "%"
  //           },
  //           "TOCPHA": {
  //           "label": "Vitamin E",
  //           "quantity": 18.795,
  //           "unit": "%"
  //           },
  //           "VITK1": {
  //           "label": "Vitamin K",
  //           "quantity": 7.0183333333333335,
  //           "unit": "%"
  //           }
  //           },
  //           "digest": [
  //           {
  //           "label": "Fat",
  //           "tag": "FAT",
  //           "schemaOrgTag": "fatContent",
  //           "total": 16.7724216666668,
  //           "hasRDI": true,
  //           "daily": 25.803725641025846,
  //           "unit": "g",
  //           "sub": [
  //           {
  //           "label": "Saturated",
  //           "tag": "FASAT",
  //           "schemaOrgTag": "saturatedFatContent",
  //           "total": 2.6563695000000247,
  //           "hasRDI": true,
  //           "daily": 13.281847500000122,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Trans",
  //           "tag": "FATRN",
  //           "schemaOrgTag": "transFatContent",
  //           "total": 0.019600000000000003,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Monounsaturated",
  //           "tag": "FAMS",
  //           "schemaOrgTag": null,
  //           "total": 3.7178053333333767,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Polyunsaturated",
  //           "tag": "FAPU",
  //           "schemaOrgTag": null,
  //           "total": 8.857352833333401,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           }
  //           ]
  //           },
  //           {
  //           "label": "Carbs",
  //           "tag": "CHOCDF",
  //           "schemaOrgTag": "carbohydrateContent",
  //           "total": 12.553778333580224,
  //           "hasRDI": true,
  //           "daily": 4.184592777860074,
  //           "unit": "g",
  //           "sub": [
  //           {
  //           "label": "Carbs (net)",
  //           "tag": "CHOCDF.net",
  //           "schemaOrgTag": null,
  //           "total": 11.64457833357779,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Fiber",
  //           "tag": "FIBTG",
  //           "schemaOrgTag": "fiberContent",
  //           "total": 0.9092000000024346,
  //           "hasRDI": true,
  //           "daily": 3.6368000000097385,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Sugars",
  //           "tag": "SUGAR",
  //           "schemaOrgTag": "sugarContent",
  //           "total": 2.8446,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Sugars, added",
  //           "tag": "SUGAR.added",
  //           "schemaOrgTag": null,
  //           "total": 0,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           }
  //           ]
  //           },
  //           {
  //           "label": "Protein",
  //           "tag": "PROCNT",
  //           "schemaOrgTag": "proteinContent",
  //           "total": 54.13087666666737,
  //           "hasRDI": true,
  //           "daily": 108.26175333333475,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Cholesterol",
  //           "tag": "CHOLE",
  //           "schemaOrgTag": "cholesterolContent",
  //           "total": 136.965,
  //           "hasRDI": true,
  //           "daily": 45.655,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Sodium",
  //           "tag": "NA",
  //           "schemaOrgTag": "sodiumContent",
  //           "total": 1148.2445000000243,
  //           "hasRDI": true,
  //           "daily": 47.843520833334345,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Calcium",
  //           "tag": "CA",
  //           "schemaOrgTag": null,
  //           "total": 576.1961666666721,
  //           "hasRDI": true,
  //           "daily": 57.619616666667206,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Magnesium",
  //           "tag": "MG",
  //           "schemaOrgTag": null,
  //           "total": 169.53600000000816,
  //           "hasRDI": true,
  //           "daily": 40.36571428571623,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Potassium",
  //           "tag": "K",
  //           "schemaOrgTag": null,
  //           "total": 1030.347500000008,
  //           "hasRDI": true,
  //           "daily": 21.922287234042724,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Iron",
  //           "tag": "FE",
  //           "schemaOrgTag": null,
  //           "total": 5.227141666667939,
  //           "hasRDI": true,
  //           "daily": 29.039675925932993,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Zinc",
  //           "tag": "ZN",
  //           "schemaOrgTag": null,
  //           "total": 7.996955000000162,
  //           "hasRDI": true,
  //           "daily": 72.69959090909238,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Phosphorus",
  //           "tag": "P",
  //           "schemaOrgTag": null,
  //           "total": 766.6123333333685,
  //           "hasRDI": true,
  //           "daily": 109.51604761905263,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Vitamin A",
  //           "tag": "VITA_RAE",
  //           "schemaOrgTag": null,
  //           "total": 3.7300000000000004,
  //           "hasRDI": true,
  //           "daily": 0.4144444444444445,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Vitamin C",
  //           "tag": "VITC",
  //           "schemaOrgTag": null,
  //           "total": 5.6365,
  //           "hasRDI": true,
  //           "daily": 6.262777777777777,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Thiamin (B1)",
  //           "tag": "THIA",
  //           "schemaOrgTag": null,
  //           "total": 0.2600195,
  //           "hasRDI": true,
  //           "daily": 21.66829166666667,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Riboflavin (B2)",
  //           "tag": "RIBF",
  //           "schemaOrgTag": null,
  //           "total": 0.3717925,
  //           "hasRDI": true,
  //           "daily": 28.599423076923078,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Niacin (B3)",
  //           "tag": "NIA",
  //           "schemaOrgTag": null,
  //           "total": 7.440684,
  //           "hasRDI": true,
  //           "daily": 46.504275,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Vitamin B6",
  //           "tag": "VITB6A",
  //           "schemaOrgTag": null,
  //           "total": 0.47662699999999997,
  //           "hasRDI": true,
  //           "daily": 36.663615384615376,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Folate equivalent (total)",
  //           "tag": "FOLDFE",
  //           "schemaOrgTag": null,
  //           "total": 250.32100000000003,
  //           "hasRDI": true,
  //           "daily": 62.58025000000001,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Folate (food)",
  //           "tag": "FOLFD",
  //           "schemaOrgTag": null,
  //           "total": 250.32100000000003,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Folic acid",
  //           "tag": "FOLAC",
  //           "schemaOrgTag": null,
  //           "total": 0,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Vitamin B12",
  //           "tag": "VITB12",
  //           "schemaOrgTag": null,
  //           "total": 5.4658500000000005,
  //           "hasRDI": true,
  //           "daily": 227.74375000000003,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Vitamin D",
  //           "tag": "VITD",
  //           "schemaOrgTag": null,
  //           "total": 0,
  //           "hasRDI": true,
  //           "daily": 0,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Vitamin E",
  //           "tag": "TOCPHA",
  //           "schemaOrgTag": null,
  //           "total": 2.8192500000000003,
  //           "hasRDI": true,
  //           "daily": 18.795,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Vitamin K",
  //           "tag": "VITK1",
  //           "schemaOrgTag": null,
  //           "total": 8.422,
  //           "hasRDI": true,
  //           "daily": 7.0183333333333335,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Sugar alcohols",
  //           "tag": "Sugar.alcohol",
  //           "schemaOrgTag": null,
  //           "total": 0,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Water",
  //           "tag": "WATER",
  //           "schemaOrgTag": null,
  //           "total": 577.0520083333558,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           }
  //           ]
  //           },
  //           "_links": {
  //           "self": {
  //           "href": "https://api.edamam.com/api/recipes/v2/c40642181e1b43c8fcacbd2c103f2b01?type=public&app_id=8717089a&app_key=35658ee1215cbd7922d388170b7509f0",
  //           "title": "Self"
  //           }
  //           }
  //           },
  //           {
  //           "recipe": {
  //           "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_5b35a77b8353869fab4f95743e2a7186",
  //           "label": "Lemon Cucumber Tofu Salad recipes",
  //           "image": "https://edamam-product-images.s3.amazonaws.com/web-img/7f9/7f9cb5e1a67f05de2529f9cffed09bcb?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d8afdb416b28b392374d6f375ba33beaf52d7487796f726c07e75a08c1b1e031",
  //           "images": {
  //           "THUMBNAIL": {
  //           "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7f9/7f9cb5e1a67f05de2529f9cffed09bcb-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c15afbdd87468b16460924fbec262d2262a6551251a29e17f818b2b807a05711",
  //           "width": 100,
  //           "height": 100
  //           },
  //           "SMALL": {
  //           "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7f9/7f9cb5e1a67f05de2529f9cffed09bcb-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=49d2fe75acca2022f837717d20ffabaed418c3c855278de7cd9f1790719eb39d",
  //           "width": 200,
  //           "height": 200
  //           },
  //           "REGULAR": {
  //           "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7f9/7f9cb5e1a67f05de2529f9cffed09bcb?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d8afdb416b28b392374d6f375ba33beaf52d7487796f726c07e75a08c1b1e031",
  //           "width": 300,
  //           "height": 300
  //           }
  //           },
  //           "source": "101 Cookbooks",
  //           "url": "http://www.101cookbooks.com/archives/lemon-cucumber-tofu-salad-recipe.html",
  //           "shareAs": "http://www.edamam.com/recipe/lemon-cucumber-tofu-salad-recipes-5b35a77b8353869fab4f95743e2a7186/-",
  //           "yield": 2,
  //           "dietLabels": [
  //           "High-Fiber",
  //           "Low-Carb"
  //           ],
  //           "healthLabels": [
  //           "Vegan",
  //           "Vegetarian",
  //           "Pescatarian",
  //           "Mediterranean",
  //           "DASH",
  //           "Dairy-Free",
  //           "Gluten-Free",
  //           "Wheat-Free",
  //           "Egg-Free",
  //           "Peanut-Free",
  //           "Fish-Free",
  //           "Shellfish-Free",
  //           "Pork-Free",
  //           "Red-Meat-Free",
  //           "Crustacean-Free",
  //           "Celery-Free",
  //           "Mustard-Free",
  //           "Sesame-Free",
  //           "Lupine-Free",
  //           "Mollusk-Free",
  //           "Alcohol-Free",
  //           "Sulfite-Free",
  //           "Kosher"
  //           ],
  //           "cautions": [
  //           "Gluten",
  //           "Wheat",
  //           "Sulfites"
  //           ],
  //           "ingredientLines": [
  //           "2 lemon cucumbers, quartered then sliced into 1/4 inch thick slices",
  //           "1 handful of fresh dill (about 2/3 cup loosely packed)",
  //           "1/4 cup extra virgin olive oil",
  //           "1/4 cup fresh lemon juice",
  //           "2 big pinches of salt",
  //           "8 ounces nigari extra firm tofu",
  //           "1/4 cup pine nuts",
  //           "1/2 of a large, ripe avocado"
  //           ],
  //           "ingredients": [
  //           {
  //           "text": "2 lemon cucumbers, quartered then sliced into 1/4 inch thick slices",
  //           "quantity": 2,
  //           "measure": "<unit>",
  //           "food": "cucumbers",
  //           "weight": 602,
  //           "foodCategory": "vegetables",
  //           "foodId": "food_bv7aggjag9rxsaatklqzobca5fzn",
  //           "image": "https://www.edamam.com/food-img/501/5015da0e5fc2b384696b3d949aefef86.jpg"
  //           },
  //           {
  //           "text": "1 handful of fresh dill (about 2/3 cup loosely packed)",
  //           "quantity": 1,
  //           "measure": "handful",
  //           "food": "fresh dill",
  //           "weight": 1.1125,
  //           "foodCategory": "Condiments and sauces",
  //           "foodId": "food_avhhd2padkkzx8a9swnmlb1km3qb",
  //           "image": "https://www.edamam.com/food-img/874/8740aacb8e1a348cd5eead1f0bb552d4.jpg"
  //           },
  //           {
  //           "text": "1/4 cup extra virgin olive oil",
  //           "quantity": 0.25,
  //           "measure": "cup",
  //           "food": "extra virgin olive oil",
  //           "weight": 54,
  //           "foodCategory": "Oils",
  //           "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
  //           "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
  //           },
  //           {
  //           "text": "1/4 cup fresh lemon juice",
  //           "quantity": 0.25,
  //           "measure": "cup",
  //           "food": "lemon juice",
  //           "weight": 61,
  //           "foodCategory": "100% juice",
  //           "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
  //           "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
  //           },
  //           {
  //           "text": "2 big pinches of salt",
  //           "quantity": 2,
  //           "measure": "pinch",
  //           "food": "salt",
  //           "weight": 0.760416667630894,
  //           "foodCategory": "Condiments and sauces",
  //           "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
  //           "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
  //           },
  //           {
  //           "text": "8 ounces nigari extra firm tofu",
  //           "quantity": 8,
  //           "measure": "ounce",
  //           "food": "firm tofu",
  //           "weight": 226.796185,
  //           "foodCategory": "plant-based protein",
  //           "foodId": "food_bu9fz3paqr6xcebft7onna22v8ve",
  //           "image": "https://www.edamam.com/food-img/c44/c44799e4beb77540acad305ac9f9ef7e.jpg"
  //           },
  //           {
  //           "text": "1/4 cup pine nuts",
  //           "quantity": 0.25,
  //           "measure": "cup",
  //           "food": "pine nuts",
  //           "weight": 33.75,
  //           "foodCategory": "plant-based protein",
  //           "foodId": "food_b5d59t6bhqudbqalw7k4fb6ncio8",
  //           "image": "https://www.edamam.com/food-img/52f/52fa29cb9d1ab6502f137a98c8a63f09.jpg"
  //           },
  //           {
  //           "text": "1/2 of a large, ripe avocado",
  //           "quantity": 0.5,
  //           "measure": "<unit>",
  //           "food": "avocado",
  //           "weight": 125.625,
  //           "foodCategory": "fruit",
  //           "foodId": "food_b0yuze4b1g3afpanijno5abtiu28",
  //           "image": "https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg"
  //           }
  //           ],
  //           "calories": 1338.55034325,
  //           "totalWeight": 1105.044101667631,
  //           "totalTime": 40,
  //           "cuisineType": [
  //           "asian"
  //           ],
  //           "mealType": [
  //           "lunch/dinner"
  //           ],
  //           "dishType": [
  //           "salad"
  //           ],
  //           "totalNutrients": {
  //           "ENERC_KCAL": {
  //           "label": "Energy",
  //           "quantity": 1338.55034325,
  //           "unit": "kcal"
  //           },
  //           "FAT": {
  //           "label": "Fat",
  //           "quantity": 116.08918733200001,
  //           "unit": "g"
  //           },
  //           "FASAT": {
  //           "label": "Saturated",
  //           "quantity": 14.88822739285,
  //           "unit": "g"
  //           },
  //           "FATRN": {
  //           "label": "Trans",
  //           "quantity": 0,
  //           "unit": "g"
  //           },
  //           "FAMS": {
  //           "label": "Monounsaturated",
  //           "quantity": 62.45029256125001,
  //           "unit": "g"
  //           },
  //           "FAPU": {
  //           "label": "Polyunsaturated",
  //           "quantity": 30.82987963885,
  //           "unit": "g"
  //           },
  //           "CHOCDF": {
  //           "label": "Carbs",
  //           "quantity": 50.954207099499996,
  //           "unit": "g"
  //           },
  //           "CHOCDF.net": {
  //           "label": "Carbohydrates (net)",
  //           "quantity": 32.8559073445,
  //           "unit": "g"
  //           },
  //           "FIBTG": {
  //           "label": "Fiber",
  //           "quantity": 18.098299755000003,
  //           "unit": "g"
  //           },
  //           "SUGAR": {
  //           "label": "Sugars",
  //           "quantity": 13.63135,
  //           "unit": "g"
  //           },
  //           "SUGAR.added": {
  //           "label": "Sugars, added",
  //           "quantity": 0,
  //           "unit": "g"
  //           },
  //           "PROCNT": {
  //           "label": "Protein",
  //           "quantity": 47.086305493000005,
  //           "unit": "g"
  //           },
  //           "CHOLE": {
  //           "label": "Cholesterol",
  //           "quantity": 0,
  //           "unit": "mg"
  //           },
  //           "NA": {
  //           "label": "Sodium",
  //           "quantity": 350.3511329403819,
  //           "unit": "mg"
  //           },
  //           "CA": {
  //           "label": "Calcium",
  //           "quantity": 1672.5094435502317,
  //           "unit": "mg"
  //           },
  //           "MG": {
  //           "label": "Magnesium",
  //           "quantity": 335.22501646667627,
  //           "unit": "mg"
  //           },
  //           "K": {
  //           "label": "Potassium",
  //           "quantity": 2304.8567917834107,
  //           "unit": "mg"
  //           },
  //           "FE": {
  //           "label": "Iron",
  //           "quantity": 10.702714146003183,
  //           "unit": "mg"
  //           },
  //           "ZN": {
  //           "label": "Zinc",
  //           "quantity": 7.786959271167632,
  //           "unit": "mg"
  //           },
  //           "P": {
  //           "label": "Phosphorus",
  //           "quantity": 840.3945015000002,
  //           "unit": "mg"
  //           },
  //           "VITA_RAE": {
  //           "label": "Vitamin A",
  //           "quantity": 43.5255,
  //           "unit": "µg"
  //           },
  //           "VITC": {
  //           "label": "Vitamin C",
  //           "quantity": 54.694717370000006,
  //           "unit": "mg"
  //           },
  //           "THIA": {
  //           "label": "Thiamin (B1)",
  //           "quantity": 0.7431819723000002,
  //           "unit": "mg"
  //           },
  //           "RIBF": {
  //           "label": "Riboflavin (B2)",
  //           "quantity": 0.6823601087,
  //           "unit": "mg"
  //           },
  //           "NIA": {
  //           "label": "Niacin (B3)",
  //           "quantity": 5.191004714850001,
  //           "unit": "mg"
  //           },
  //           "VITB6A": {
  //           "label": "Vitamin B6",
  //           "quantity": 0.8341518652,
  //           "unit": "mg"
  //           },
  //           "FOLDFE": {
  //           "label": "Folate equivalent (total)",
  //           "quantity": 235.01089365,
  //           "unit": "µg"
  //           },
  //           "FOLFD": {
  //           "label": "Folate (food)",
  //           "quantity": 235.01089365,
  //           "unit": "µg"
  //           },
  //           "FOLAC": {
  //           "label": "Folic acid",
  //           "quantity": 0,
  //           "unit": "µg"
  //           },
  //           "VITB12": {
  //           "label": "Vitamin B12",
  //           "quantity": 0,
  //           "unit": "µg"
  //           },
  //           "VITD": {
  //           "label": "Vitamin D",
  //           "quantity": 0,
  //           "unit": "µg"
  //           },
  //           "TOCPHA": {
  //           "label": "Vitamin E",
  //           "quantity": 13.7704125,
  //           "unit": "mg"
  //           },
  //           "VITK1": {
  //           "label": "Vitamin K",
  //           "quantity": 175.80849999999998,
  //           "unit": "µg"
  //           },
  //           "Sugar.alcohol": {
  //           "label": "Sugar alcohol",
  //           "quantity": 0,
  //           "unit": "g"
  //           },
  //           "WATER": {
  //           "label": "Water",
  //           "quantity": 881.6878780688354,
  //           "unit": "g"
  //           }
  //           },
  //           "totalDaily": {
  //           "ENERC_KCAL": {
  //           "label": "Energy",
  //           "quantity": 66.9275171625,
  //           "unit": "%"
  //           },
  //           "FAT": {
  //           "label": "Fat",
  //           "quantity": 178.59874974153846,
  //           "unit": "%"
  //           },
  //           "FASAT": {
  //           "label": "Saturated",
  //           "quantity": 74.44113696425,
  //           "unit": "%"
  //           },
  //           "CHOCDF": {
  //           "label": "Carbs",
  //           "quantity": 16.984735699833333,
  //           "unit": "%"
  //           },
  //           "FIBTG": {
  //           "label": "Fiber",
  //           "quantity": 72.39319902000001,
  //           "unit": "%"
  //           },
  //           "PROCNT": {
  //           "label": "Protein",
  //           "quantity": 94.17261098600002,
  //           "unit": "%"
  //           },
  //           "CHOLE": {
  //           "label": "Cholesterol",
  //           "quantity": 0,
  //           "unit": "%"
  //           },
  //           "NA": {
  //           "label": "Sodium",
  //           "quantity": 14.597963872515912,
  //           "unit": "%"
  //           },
  //           "CA": {
  //           "label": "Calcium",
  //           "quantity": 167.2509443550232,
  //           "unit": "%"
  //           },
  //           "MG": {
  //           "label": "Magnesium",
  //           "quantity": 79.81548011111339,
  //           "unit": "%"
  //           },
  //           "K": {
  //           "label": "Potassium",
  //           "quantity": 49.039506208157675,
  //           "unit": "%"
  //           },
  //           "FE": {
  //           "label": "Iron",
  //           "quantity": 59.45952303335102,
  //           "unit": "%"
  //           },
  //           "ZN": {
  //           "label": "Zinc",
  //           "quantity": 70.79053882879666,
  //           "unit": "%"
  //           },
  //           "P": {
  //           "label": "Phosphorus",
  //           "quantity": 120.05635735714289,
  //           "unit": "%"
  //           },
  //           "VITA_RAE": {
  //           "label": "Vitamin A",
  //           "quantity": 4.836166666666667,
  //           "unit": "%"
  //           },
  //           "VITC": {
  //           "label": "Vitamin C",
  //           "quantity": 60.7719081888889,
  //           "unit": "%"
  //           },
  //           "THIA": {
  //           "label": "Thiamin (B1)",
  //           "quantity": 61.93183102500001,
  //           "unit": "%"
  //           },
  //           "RIBF": {
  //           "label": "Riboflavin (B2)",
  //           "quantity": 52.48923913076923,
  //           "unit": "%"
  //           },
  //           "NIA": {
  //           "label": "Niacin (B3)",
  //           "quantity": 32.443779467812504,
  //           "unit": "%"
  //           },
  //           "VITB6A": {
  //           "label": "Vitamin B6",
  //           "quantity": 64.16552809230768,
  //           "unit": "%"
  //           },
  //           "FOLDFE": {
  //           "label": "Folate equivalent (total)",
  //           "quantity": 58.752723412499996,
  //           "unit": "%"
  //           },
  //           "VITB12": {
  //           "label": "Vitamin B12",
  //           "quantity": 0,
  //           "unit": "%"
  //           },
  //           "VITD": {
  //           "label": "Vitamin D",
  //           "quantity": 0,
  //           "unit": "%"
  //           },
  //           "TOCPHA": {
  //           "label": "Vitamin E",
  //           "quantity": 91.80275,
  //           "unit": "%"
  //           },
  //           "VITK1": {
  //           "label": "Vitamin K",
  //           "quantity": 146.50708333333333,
  //           "unit": "%"
  //           }
  //           },
  //           "digest": [
  //           {
  //           "label": "Fat",
  //           "tag": "FAT",
  //           "schemaOrgTag": "fatContent",
  //           "total": 116.08918733200001,
  //           "hasRDI": true,
  //           "daily": 178.59874974153846,
  //           "unit": "g",
  //           "sub": [
  //           {
  //           "label": "Saturated",
  //           "tag": "FASAT",
  //           "schemaOrgTag": "saturatedFatContent",
  //           "total": 14.88822739285,
  //           "hasRDI": true,
  //           "daily": 74.44113696425,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Trans",
  //           "tag": "FATRN",
  //           "schemaOrgTag": "transFatContent",
  //           "total": 0,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Monounsaturated",
  //           "tag": "FAMS",
  //           "schemaOrgTag": null,
  //           "total": 62.45029256125001,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Polyunsaturated",
  //           "tag": "FAPU",
  //           "schemaOrgTag": null,
  //           "total": 30.82987963885,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           }
  //           ]
  //           },
  //           {
  //           "label": "Carbs",
  //           "tag": "CHOCDF",
  //           "schemaOrgTag": "carbohydrateContent",
  //           "total": 50.954207099499996,
  //           "hasRDI": true,
  //           "daily": 16.984735699833333,
  //           "unit": "g",
  //           "sub": [
  //           {
  //           "label": "Carbs (net)",
  //           "tag": "CHOCDF.net",
  //           "schemaOrgTag": null,
  //           "total": 32.8559073445,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Fiber",
  //           "tag": "FIBTG",
  //           "schemaOrgTag": "fiberContent",
  //           "total": 18.098299755000003,
  //           "hasRDI": true,
  //           "daily": 72.39319902000001,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Sugars",
  //           "tag": "SUGAR",
  //           "schemaOrgTag": "sugarContent",
  //           "total": 13.63135,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Sugars, added",
  //           "tag": "SUGAR.added",
  //           "schemaOrgTag": null,
  //           "total": 0,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           }
  //           ]
  //           },
  //           {
  //           "label": "Protein",
  //           "tag": "PROCNT",
  //           "schemaOrgTag": "proteinContent",
  //           "total": 47.086305493000005,
  //           "hasRDI": true,
  //           "daily": 94.17261098600002,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Cholesterol",
  //           "tag": "CHOLE",
  //           "schemaOrgTag": "cholesterolContent",
  //           "total": 0,
  //           "hasRDI": true,
  //           "daily": 0,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Sodium",
  //           "tag": "NA",
  //           "schemaOrgTag": "sodiumContent",
  //           "total": 350.3511329403819,
  //           "hasRDI": true,
  //           "daily": 14.597963872515912,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Calcium",
  //           "tag": "CA",
  //           "schemaOrgTag": null,
  //           "total": 1672.5094435502317,
  //           "hasRDI": true,
  //           "daily": 167.2509443550232,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Magnesium",
  //           "tag": "MG",
  //           "schemaOrgTag": null,
  //           "total": 335.22501646667627,
  //           "hasRDI": true,
  //           "daily": 79.81548011111339,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Potassium",
  //           "tag": "K",
  //           "schemaOrgTag": null,
  //           "total": 2304.8567917834107,
  //           "hasRDI": true,
  //           "daily": 49.039506208157675,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Iron",
  //           "tag": "FE",
  //           "schemaOrgTag": null,
  //           "total": 10.702714146003183,
  //           "hasRDI": true,
  //           "daily": 59.45952303335102,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Zinc",
  //           "tag": "ZN",
  //           "schemaOrgTag": null,
  //           "total": 7.786959271167632,
  //           "hasRDI": true,
  //           "daily": 70.79053882879666,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Phosphorus",
  //           "tag": "P",
  //           "schemaOrgTag": null,
  //           "total": 840.3945015000002,
  //           "hasRDI": true,
  //           "daily": 120.05635735714289,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Vitamin A",
  //           "tag": "VITA_RAE",
  //           "schemaOrgTag": null,
  //           "total": 43.5255,
  //           "hasRDI": true,
  //           "daily": 4.836166666666667,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Vitamin C",
  //           "tag": "VITC",
  //           "schemaOrgTag": null,
  //           "total": 54.694717370000006,
  //           "hasRDI": true,
  //           "daily": 60.7719081888889,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Thiamin (B1)",
  //           "tag": "THIA",
  //           "schemaOrgTag": null,
  //           "total": 0.7431819723000002,
  //           "hasRDI": true,
  //           "daily": 61.93183102500001,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Riboflavin (B2)",
  //           "tag": "RIBF",
  //           "schemaOrgTag": null,
  //           "total": 0.6823601087,
  //           "hasRDI": true,
  //           "daily": 52.48923913076923,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Niacin (B3)",
  //           "tag": "NIA",
  //           "schemaOrgTag": null,
  //           "total": 5.191004714850001,
  //           "hasRDI": true,
  //           "daily": 32.443779467812504,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Vitamin B6",
  //           "tag": "VITB6A",
  //           "schemaOrgTag": null,
  //           "total": 0.8341518652,
  //           "hasRDI": true,
  //           "daily": 64.16552809230768,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Folate equivalent (total)",
  //           "tag": "FOLDFE",
  //           "schemaOrgTag": null,
  //           "total": 235.01089365,
  //           "hasRDI": true,
  //           "daily": 58.752723412499996,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Folate (food)",
  //           "tag": "FOLFD",
  //           "schemaOrgTag": null,
  //           "total": 235.01089365,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Folic acid",
  //           "tag": "FOLAC",
  //           "schemaOrgTag": null,
  //           "total": 0,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Vitamin B12",
  //           "tag": "VITB12",
  //           "schemaOrgTag": null,
  //           "total": 0,
  //           "hasRDI": true,
  //           "daily": 0,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Vitamin D",
  //           "tag": "VITD",
  //           "schemaOrgTag": null,
  //           "total": 0,
  //           "hasRDI": true,
  //           "daily": 0,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Vitamin E",
  //           "tag": "TOCPHA",
  //           "schemaOrgTag": null,
  //           "total": 13.7704125,
  //           "hasRDI": true,
  //           "daily": 91.80275,
  //           "unit": "mg"
  //           },
  //           {
  //           "label": "Vitamin K",
  //           "tag": "VITK1",
  //           "schemaOrgTag": null,
  //           "total": 175.80849999999998,
  //           "hasRDI": true,
  //           "daily": 146.50708333333333,
  //           "unit": "µg"
  //           },
  //           {
  //           "label": "Sugar alcohols",
  //           "tag": "Sugar.alcohol",
  //           "schemaOrgTag": null,
  //           "total": 0,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           },
  //           {
  //           "label": "Water",
  //           "tag": "WATER",
  //           "schemaOrgTag": null,
  //           "total": 881.6878780688354,
  //           "hasRDI": false,
  //           "daily": 0,
  //           "unit": "g"
  //           }
  //           ]
  //           },
  //           "_links": {
  //           "self": {
  //           "href": "https://api.edamam.com/api/recipes/v2/5b35a77b8353869fab4f95743e2a7186?type=public&app_id=8717089a&app_key=35658ee1215cbd7922d388170b7509f0",
  //           "title": "Self"
  //           }
  //           }
  //           },
  //           {
  //             "recipe": {
  //             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d6452a86e2edb13bbeb305904fd2a7f1",
  //             "label": "Noodle Kugel recipes",
  //             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/129/1299cd9a98464c5f76952710aa71aaba?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=95adb87969cc090d441958625233881e4d6e0c8c6af6a66adeb86933ee62157d",
  //             "images": {
  //             "THUMBNAIL": {
  //             "url": "https://edamam-product-images.s3.amazonaws.com/web-img/129/1299cd9a98464c5f76952710aa71aaba-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=83d8a3ecc406ae88b134c9a1efef98125f9aa6ea6e0d889ab9bf39604325d35a",
  //             "width": 100,
  //             "height": 100
  //             },
  //             "SMALL": {
  //             "url": "https://edamam-product-images.s3.amazonaws.com/web-img/129/1299cd9a98464c5f76952710aa71aaba-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=032675cd1528165e0199f4ea24b6984d277ea0e7057021de06271fbbd4d4002c",
  //             "width": 200,
  //             "height": 200
  //             },
  //             "REGULAR": {
  //             "url": "https://edamam-product-images.s3.amazonaws.com/web-img/129/1299cd9a98464c5f76952710aa71aaba?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=95adb87969cc090d441958625233881e4d6e0c8c6af6a66adeb86933ee62157d",
  //             "width": 300,
  //             "height": 300
  //             }
  //             },
  //             "source": "Smitten Kitchen",
  //             "url": "https://smittenkitchen.com/2007/09/noodle-kugel/",
  //             "shareAs": "http://www.edamam.com/recipe/noodle-kugel-recipes-d6452a86e2edb13bbeb305904fd2a7f1/-",
  //             "yield": 4,
  //             "dietLabels": [
  //             "Balanced",
  //             "High-Fiber"
  //             ],
  //             "healthLabels": [
  //             "Vegetarian",
  //             "Pescatarian",
  //             "Peanut-Free",
  //             "Tree-Nut-Free",
  //             "Soy-Free",
  //             "Fish-Free",
  //             "Shellfish-Free",
  //             "Pork-Free",
  //             "Red-Meat-Free",
  //             "Crustacean-Free",
  //             "Celery-Free",
  //             "Mustard-Free",
  //             "Sesame-Free",
  //             "Lupine-Free",
  //             "Mollusk-Free",
  //             "Alcohol-Free",
  //             "Kosher"
  //             ],
  //             "cautions": [
  //             "Sulfites"
  //             ],
  //             "ingredientLines": [
  //             "1 pound wide egg noodles",
  //             "2 8-ounce packages cream cheese, softened",
  //             "1 pound (16 ounces) creamed cottage cheese, full fat",
  //             "1 1/2 cups sugar",
  //             "1 stick salted butter, melted, plus more for greasing the baking dish",
  //             "8 eggs",
  //             "2 teaspoons vanilla",
  //             "1 teaspoon cinnamon",
  //             "1 cup dried cherries"
  //             ],
  //             "ingredients": [
  //             {
  //             "text": "1 pound wide egg noodles",
  //             "quantity": 1,
  //             "measure": "pound",
  //             "food": "wide egg noodles",
  //             "weight": 453.59237,
  //             "foodCategory": "grains",
  //             "foodId": "food_aefg3gqa71nrtpbhjfo3yb36kd81",
  //             "image": "https://www.edamam.com/food-img/800/800c9c0d7cef6b5474723682ffa2878d.jpg"
  //             },
  //             {
  //             "text": "2 8-ounce packages cream cheese, softened",
  //             "quantity": 16,
  //             "measure": "ounce",
  //             "food": "cream cheese",
  //             "weight": 453.59237,
  //             "foodCategory": "Cheese",
  //             "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
  //             "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
  //             },
  //             {
  //             "text": "1 pound (16 ounces) creamed cottage cheese, full fat",
  //             "quantity": 1,
  //             "measure": "pound",
  //             "food": "cottage cheese",
  //             "weight": 453.59237,
  //             "foodCategory": "Cheese",
  //             "foodId": "food_adqkk4ta6dggveb3hy192aqzdfnv",
  //             "image": "https://www.edamam.com/food-img/8ee/8ee7b75071fc907cce2819031a9ae563.jpg"
  //             },
  //             {
  //             "text": "1 1/2 cups sugar",
  //             "quantity": 1.5,
  //             "measure": "cup",
  //             "food": "sugar",
  //             "weight": 300,
  //             "foodCategory": "sugars",
  //             "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
  //             "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
  //             },
  //             {
  //             "text": "1 stick salted butter, melted, plus more for greasing the baking dish",
  //             "quantity": 1,
  //             "measure": "stick",
  //             "food": "salted butter",
  //             "weight": 113,
  //             "foodCategory": "Dairy",
  //             "foodId": "food_axwam0ga2lqqlabfq1kqtbloozm3",
  //             "image": "https://www.edamam.com/food-img/515/515af390107678fce1533a31ee4cc35b.jpeg"
  //             },
  //             {
  //             "text": "8 eggs",
  //             "quantity": 8,
  //             "measure": "<unit>",
  //             "food": "eggs",
  //             "weight": 344,
  //             "foodCategory": "Eggs",
  //             "foodId": "food_bhpradua77pk16aipcvzeayg732r",
  //             "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
  //             },
  //             {
  //             "text": "2 teaspoons vanilla",
  //             "quantity": 2,
  //             "measure": "teaspoon",
  //             "food": "vanilla",
  //             "weight": 8.4,
  //             "foodCategory": "Condiments and sauces",
  //             "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
  //             "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
  //             },
  //             {
  //             "text": "1 teaspoon cinnamon",
  //             "quantity": 1,
  //             "measure": "teaspoon",
  //             "food": "cinnamon",
  //             "weight": 2.6,
  //             "foodCategory": "Condiments and sauces",
  //             "foodId": "food_atjxtznauw5zabaixm24xa787onz",
  //             "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
  //             },
  //             {
  //             "text": "1 cup dried cherries",
  //             "quantity": 1,
  //             "measure": "cup",
  //             "food": "dried cherries",
  //             "weight": 160,
  //             "foodCategory": "sugar jam",
  //             "foodId": "food_am5qn60a2zxubua23hvaebukpcne",
  //             "image": "https://www.edamam.com/food-img/330/330dd43a630a5649ff5b0d2e5c18fa08.jpg"
  //             }
  //             ],
  //             "calories": 6764.1451288,
  //             "totalWeight": 2288.77711,
  //             "totalTime": 75,
  //             "cuisineType": [
  //             "asian"
  //             ],
  //             "mealType": [
  //             "lunch/dinner"
  //             ],
  //             "dishType": [
  //             "main course"
  //             ],
  //             "totalNutrients": {
  //             "ENERC_KCAL": {
  //             "label": "Energy",
  //             "quantity": 6764.1451288,
  //             "unit": "kcal"
  //             },
  //             "FAT": {
  //             "label": "Fat",
  //             "quantity": 320.5279806260001,
  //             "unit": "g"
  //             },
  //             "FASAT": {
  //             "label": "Saturated",
  //             "quantity": 169.69483690300004,
  //             "unit": "g"
  //             },
  //             "FATRN": {
  //             "label": "Trans",
  //             "quantity": 4.111551345700001,
  //             "unit": "g"
  //             },
  //             "FAMS": {
  //             "label": "Monounsaturated",
  //             "quantity": 84.93527340499999,
  //             "unit": "g"
  //             },
  //             "FAPU": {
  //             "label": "Polyunsaturated",
  //             "quantity": 23.438289416700005,
  //             "unit": "g"
  //             },
  //             "CHOCDF": {
  //             "label": "Carbs",
  //             "quantity": 791.430453664,
  //             "unit": "g"
  //             },
  //             "CHOCDF.net": {
  //             "label": "Carbohydrates (net)",
  //             "quantity": 771.081305454,
  //             "unit": "g"
  //             },
  //             "FIBTG": {
  //             "label": "Fiber",
  //             "quantity": 20.349148210000003,
  //             "unit": "g"
  //             },
  //             "SUGAR": {
  //             "label": "Sugars",
  //             "quantity": 444.49838791199994,
  //             "unit": "g"
  //             },
  //             "SUGAR.added": {
  //             "label": "Sugars, added",
  //             "quantity": 299.4,
  //             "unit": "g"
  //             },
  //             "PROCNT": {
  //             "label": "Protein",
  //             "quantity": 187.841858677,
  //             "unit": "g"
  //             },
  //             "CHOLE": {
  //             "label": "Cholesterol",
  //             "quantity": 2479.7099007,
  //             "unit": "mg"
  //             },
  //             "NA": {
  //             "label": "Sodium",
  //             "quantity": 4641.828775000002,
  //             "unit": "mg"
  //             },
  //             "CA": {
  //             "label": "Calcium",
  //             "quantity": 1290.2955192,
  //             "unit": "mg"
  //             },
  //             "MG": {
  //             "label": "Magnesium",
  //             "quantity": 421.50227749999993,
  //             "unit": "mg"
  //             },
  //             "K": {
  //             "label": "Potassium",
  //             "quantity": 3337.5369182,
  //             "unit": "mg"
  //             },
  //             "FE": {
  //             "label": "Iron",
  //             "quantity": 27.737219702,
  //             "unit": "mg"
  //             },
  //             "ZN": {
  //             "label": "Zinc",
  //             "quantity": 17.862784070999997,
  //             "unit": "mg"
  //             },
  //             "P": {
  //             "label": "Phosphorus",
  //             "quantity": 3063.1853922,
  //             "unit": "mg"
  //             },
  //             "VITA_RAE": {
  //             "label": "Vitamin A",
  //             "quantity": 3454.397954,
  //             "unit": "µg"
  //             },
  //             "VITC": {
  //             "label": "Vitamin C",
  //             "quantity": 30.978800000000003,
  //             "unit": "mg"
  //             },
  //             "THIA": {
  //             "label": "Thiamin (B1)",
  //             "quantity": 5.589935966000001,
  //             "unit": "mg"
  //             },
  //             "RIBF": {
  //             "label": "Riboflavin (B2)",
  //             "quantity": 5.076795521799999,
  //             "unit": "mg"
  //             },
  //             "NIA": {
  //             "label": "Niacin (B3)",
  //             "quantity": 40.91254945470001,
  //             "unit": "mg"
  //             },
  //             "VITB6A": {
  //             "label": "Vitamin B6",
  //             "quantity": 2.1032513389000003,
  //             "unit": "mg"
  //             },
  //             "FOLDFE": {
  //             "label": "Folate equivalent (total)",
  //             "quantity": 1965.4440141,
  //             "unit": "µg"
  //             },
  //             "FOLFD": {
  //             "label": "Folate (food)",
  //             "quantity": 418.6940324000001,
  //             "unit": "µg"
  //             },
  //             "FOLAC": {
  //             "label": "Folic acid",
  //             "quantity": 911.7206637000002,
  //             "unit": "µg"
  //             },
  //             "VITB12": {
  //             "label": "Vitamin B12",
  //             "quantity": 7.653545989000001,
  //             "unit": "µg"
  //             },
  //             "VITD": {
  //             "label": "Vitamin D",
  //             "quantity": 13.1109237,
  //             "unit": "µg"
  //             },
  //             "TOCPHA": {
  //             "label": "Vitamin E",
  //             "quantity": 9.922503538,
  //             "unit": "mg"
  //             },
  //             "VITK1": {
  //             "label": "Vitamin K",
  //             "quantity": 33.33534058000001,
  //             "unit": "µg"
  //             },
  //             "Sugar.alcohol": {
  //             "label": "Sugar alcohol",
  //             "quantity": 0,
  //             "unit": "g"
  //             },
  //             "WATER": {
  //             "label": "Water",
  //             "quantity": 960.9266107880001,
  //             "unit": "g"
  //             }
  //             },
  //             "totalDaily": {
  //             "ENERC_KCAL": {
  //             "label": "Energy",
  //             "quantity": 338.20725644,
  //             "unit": "%"
  //             },
  //             "FAT": {
  //             "label": "Fat",
  //             "quantity": 493.1199701938463,
  //             "unit": "%"
  //             },
  //             "FASAT": {
  //             "label": "Saturated",
  //             "quantity": 848.4741845150002,
  //             "unit": "%"
  //             },
  //             "CHOCDF": {
  //             "label": "Carbs",
  //             "quantity": 263.81015122133334,
  //             "unit": "%"
  //             },
  //             "FIBTG": {
  //             "label": "Fiber",
  //             "quantity": 81.39659284000001,
  //             "unit": "%"
  //             },
  //             "PROCNT": {
  //             "label": "Protein",
  //             "quantity": 375.683717354,
  //             "unit": "%"
  //             },
  //             "CHOLE": {
  //             "label": "Cholesterol",
  //             "quantity": 826.5699669,
  //             "unit": "%"
  //             },
  //             "NA": {
  //             "label": "Sodium",
  //             "quantity": 193.40953229166675,
  //             "unit": "%"
  //             },
  //             "CA": {
  //             "label": "Calcium",
  //             "quantity": 129.02955192,
  //             "unit": "%"
  //             },
  //             "MG": {
  //             "label": "Magnesium",
  //             "quantity": 100.3576851190476,
  //             "unit": "%"
  //             },
  //             "K": {
  //             "label": "Potassium",
  //             "quantity": 71.01142379148936,
  //             "unit": "%"
  //             },
  //             "FE": {
  //             "label": "Iron",
  //             "quantity": 154.09566501111112,
  //             "unit": "%"
  //             },
  //             "ZN": {
  //             "label": "Zinc",
  //             "quantity": 162.38894609999997,
  //             "unit": "%"
  //             },
  //             "P": {
  //             "label": "Phosphorus",
  //             "quantity": 437.59791317142856,
  //             "unit": "%"
  //             },
  //             "VITA_RAE": {
  //             "label": "Vitamin A",
  //             "quantity": 383.82199488888887,
  //             "unit": "%"
  //             },
  //             "VITC": {
  //             "label": "Vitamin C",
  //             "quantity": 34.42088888888889,
  //             "unit": "%"
  //             },
  //             "THIA": {
  //             "label": "Thiamin (B1)",
  //             "quantity": 465.8279971666668,
  //             "unit": "%"
  //             },
  //             "RIBF": {
  //             "label": "Riboflavin (B2)",
  //             "quantity": 390.5227324461538,
  //             "unit": "%"
  //             },
  //             "NIA": {
  //             "label": "Niacin (B3)",
  //             "quantity": 255.70343409187507,
  //             "unit": "%"
  //             },
  //             "VITB6A": {
  //             "label": "Vitamin B6",
  //             "quantity": 161.78856453076924,
  //             "unit": "%"
  //             },
  //             "FOLDFE": {
  //             "label": "Folate equivalent (total)",
  //             "quantity": 491.361003525,
  //             "unit": "%"
  //             },
  //             "VITB12": {
  //             "label": "Vitamin B12",
  //             "quantity": 318.89774954166677,
  //             "unit": "%"
  //             },
  //             "VITD": {
  //             "label": "Vitamin D",
  //             "quantity": 87.406158,
  //             "unit": "%"
  //             },
  //             "TOCPHA": {
  //             "label": "Vitamin E",
  //             "quantity": 66.15002358666668,
  //             "unit": "%"
  //             },
  //             "VITK1": {
  //             "label": "Vitamin K",
  //             "quantity": 27.77945048333334,
  //             "unit": "%"
  //             }
  //             },
  //             "digest": [
  //             {
  //             "label": "Fat",
  //             "tag": "FAT",
  //             "schemaOrgTag": "fatContent",
  //             "total": 320.5279806260001,
  //             "hasRDI": true,
  //             "daily": 493.1199701938463,
  //             "unit": "g",
  //             "sub": [
  //             {
  //             "label": "Saturated",
  //             "tag": "FASAT",
  //             "schemaOrgTag": "saturatedFatContent",
  //             "total": 169.69483690300004,
  //             "hasRDI": true,
  //             "daily": 848.4741845150002,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Trans",
  //             "tag": "FATRN",
  //             "schemaOrgTag": "transFatContent",
  //             "total": 4.111551345700001,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Monounsaturated",
  //             "tag": "FAMS",
  //             "schemaOrgTag": null,
  //             "total": 84.93527340499999,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Polyunsaturated",
  //             "tag": "FAPU",
  //             "schemaOrgTag": null,
  //             "total": 23.438289416700005,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             }
  //             ]
  //             },
  //             {
  //             "label": "Carbs",
  //             "tag": "CHOCDF",
  //             "schemaOrgTag": "carbohydrateContent",
  //             "total": 791.430453664,
  //             "hasRDI": true,
  //             "daily": 263.81015122133334,
  //             "unit": "g",
  //             "sub": [
  //             {
  //             "label": "Carbs (net)",
  //             "tag": "CHOCDF.net",
  //             "schemaOrgTag": null,
  //             "total": 771.081305454,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Fiber",
  //             "tag": "FIBTG",
  //             "schemaOrgTag": "fiberContent",
  //             "total": 20.349148210000003,
  //             "hasRDI": true,
  //             "daily": 81.39659284000001,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Sugars",
  //             "tag": "SUGAR",
  //             "schemaOrgTag": "sugarContent",
  //             "total": 444.49838791199994,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Sugars, added",
  //             "tag": "SUGAR.added",
  //             "schemaOrgTag": null,
  //             "total": 299.4,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             }
  //             ]
  //             },
  //             {
  //             "label": "Protein",
  //             "tag": "PROCNT",
  //             "schemaOrgTag": "proteinContent",
  //             "total": 187.841858677,
  //             "hasRDI": true,
  //             "daily": 375.683717354,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Cholesterol",
  //             "tag": "CHOLE",
  //             "schemaOrgTag": "cholesterolContent",
  //             "total": 2479.7099007,
  //             "hasRDI": true,
  //             "daily": 826.5699669,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Sodium",
  //             "tag": "NA",
  //             "schemaOrgTag": "sodiumContent",
  //             "total": 4641.828775000002,
  //             "hasRDI": true,
  //             "daily": 193.40953229166675,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Calcium",
  //             "tag": "CA",
  //             "schemaOrgTag": null,
  //             "total": 1290.2955192,
  //             "hasRDI": true,
  //             "daily": 129.02955192,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Magnesium",
  //             "tag": "MG",
  //             "schemaOrgTag": null,
  //             "total": 421.50227749999993,
  //             "hasRDI": true,
  //             "daily": 100.3576851190476,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Potassium",
  //             "tag": "K",
  //             "schemaOrgTag": null,
  //             "total": 3337.5369182,
  //             "hasRDI": true,
  //             "daily": 71.01142379148936,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Iron",
  //             "tag": "FE",
  //             "schemaOrgTag": null,
  //             "total": 27.737219702,
  //             "hasRDI": true,
  //             "daily": 154.09566501111112,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Zinc",
  //             "tag": "ZN",
  //             "schemaOrgTag": null,
  //             "total": 17.862784070999997,
  //             "hasRDI": true,
  //             "daily": 162.38894609999997,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Phosphorus",
  //             "tag": "P",
  //             "schemaOrgTag": null,
  //             "total": 3063.1853922,
  //             "hasRDI": true,
  //             "daily": 437.59791317142856,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Vitamin A",
  //             "tag": "VITA_RAE",
  //             "schemaOrgTag": null,
  //             "total": 3454.397954,
  //             "hasRDI": true,
  //             "daily": 383.82199488888887,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Vitamin C",
  //             "tag": "VITC",
  //             "schemaOrgTag": null,
  //             "total": 30.978800000000003,
  //             "hasRDI": true,
  //             "daily": 34.42088888888889,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Thiamin (B1)",
  //             "tag": "THIA",
  //             "schemaOrgTag": null,
  //             "total": 5.589935966000001,
  //             "hasRDI": true,
  //             "daily": 465.8279971666668,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Riboflavin (B2)",
  //             "tag": "RIBF",
  //             "schemaOrgTag": null,
  //             "total": 5.076795521799999,
  //             "hasRDI": true,
  //             "daily": 390.5227324461538,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Niacin (B3)",
  //             "tag": "NIA",
  //             "schemaOrgTag": null,
  //             "total": 40.91254945470001,
  //             "hasRDI": true,
  //             "daily": 255.70343409187507,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Vitamin B6",
  //             "tag": "VITB6A",
  //             "schemaOrgTag": null,
  //             "total": 2.1032513389000003,
  //             "hasRDI": true,
  //             "daily": 161.78856453076924,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Folate equivalent (total)",
  //             "tag": "FOLDFE",
  //             "schemaOrgTag": null,
  //             "total": 1965.4440141,
  //             "hasRDI": true,
  //             "daily": 491.361003525,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Folate (food)",
  //             "tag": "FOLFD",
  //             "schemaOrgTag": null,
  //             "total": 418.6940324000001,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Folic acid",
  //             "tag": "FOLAC",
  //             "schemaOrgTag": null,
  //             "total": 911.7206637000002,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Vitamin B12",
  //             "tag": "VITB12",
  //             "schemaOrgTag": null,
  //             "total": 7.653545989000001,
  //             "hasRDI": true,
  //             "daily": 318.89774954166677,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Vitamin D",
  //             "tag": "VITD",
  //             "schemaOrgTag": null,
  //             "total": 13.1109237,
  //             "hasRDI": true,
  //             "daily": 87.406158,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Vitamin E",
  //             "tag": "TOCPHA",
  //             "schemaOrgTag": null,
  //             "total": 9.922503538,
  //             "hasRDI": true,
  //             "daily": 66.15002358666668,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Vitamin K",
  //             "tag": "VITK1",
  //             "schemaOrgTag": null,
  //             "total": 33.33534058000001,
  //             "hasRDI": true,
  //             "daily": 27.77945048333334,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Sugar alcohols",
  //             "tag": "Sugar.alcohol",
  //             "schemaOrgTag": null,
  //             "total": 0,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Water",
  //             "tag": "WATER",
  //             "schemaOrgTag": null,
  //             "total": 960.9266107880001,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             }
  //             ]
  //             },
  //             "_links": {
  //             "self": {
  //             "href": "https://api.edamam.com/api/recipes/v2/d6452a86e2edb13bbeb305904fd2a7f1?type=public&app_id=8717089a&app_key=35658ee1215cbd7922d388170b7509f0",
  //             "title": "Self"
  //             }
  //             }
  //             },
  //             {
  //             "recipe": {
  //             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_aaa542a6a01a6bf9a3e0658246c651af",
  //             "label": "Seriously Asian: The Magic Of Miso Marination",
  //             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/ff5/ff5ec0deeb8f2c5a9ef2bcc55146783f.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c985b4a74ddd7dec338ef7dc129a262aeba8783dcf7f1a2080d327602d4b2869",
  //             "images": {
  //             "THUMBNAIL": {
  //             "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ff5/ff5ec0deeb8f2c5a9ef2bcc55146783f-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5e3c8e391ee9e8b1d374637f12347933cee903494dd8f8c1840dc8073e237d33",
  //             "width": 100,
  //             "height": 100
  //             },
  //             "SMALL": {
  //             "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ff5/ff5ec0deeb8f2c5a9ef2bcc55146783f-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e5edc8a1cb6032059044f698f9062908e95de76c93a7464372b90d49d24ca599",
  //             "width": 200,
  //             "height": 200
  //             },
  //             "REGULAR": {
  //             "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ff5/ff5ec0deeb8f2c5a9ef2bcc55146783f.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c985b4a74ddd7dec338ef7dc129a262aeba8783dcf7f1a2080d327602d4b2869",
  //             "width": 300,
  //             "height": 300
  //             },
  //             "LARGE": {
  //             "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ff5/ff5ec0deeb8f2c5a9ef2bcc55146783f-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ae6e532d006f188057e186eb4f1475dbcf19117fae2aa0e35189218524d8489",
  //             "width": 600,
  //             "height": 600
  //             }
  //             },
  //             "source": "Serious Eats",
  //             "url": "http://www.seriouseats.com/recipes/2009/08/miso-marination-asian-marinades-beef-fish.html",
  //             "shareAs": "http://www.edamam.com/recipe/seriously-asian-the-magic-of-miso-marination-aaa542a6a01a6bf9a3e0658246c651af/-",
  //             "yield": 6,
  //             "dietLabels": [
  //             "High-Protein",
  //             "Low-Carb"
  //             ],
  //             "healthLabels": [
  //             "Sugar-Conscious",
  //             "Keto-Friendly",
  //             "Dairy-Free",
  //             "Gluten-Free",
  //             "Wheat-Free",
  //             "Egg-Free",
  //             "Peanut-Free",
  //             "Tree-Nut-Free",
  //             "Fish-Free",
  //             "Shellfish-Free",
  //             "Pork-Free",
  //             "Crustacean-Free",
  //             "Celery-Free",
  //             "Mustard-Free",
  //             "Sesame-Free",
  //             "Lupine-Free",
  //             "Mollusk-Free",
  //             "No oil added",
  //             "Sulfite-Free",
  //             "Kosher"
  //             ],
  //             "cautions": [
  //             "Gluten",
  //             "Wheat",
  //             "Sulfites"
  //             ],
  //             "ingredientLines": [
  //             "Approximately 1 1/2 pounds of your choice of seafood or meat",
  //             "1/3 cup miso",
  //             "1/4 cup mirin",
  //             "3 tablespoons sake"
  //             ],
  //             "ingredients": [
  //             {
  //             "text": "Approximately 1 1/2 pounds of your choice of seafood or meat",
  //             "quantity": 1.5,
  //             "measure": "pound",
  //             "food": "meat",
  //             "weight": 680.388555,
  //             "foodCategory": "meats",
  //             "foodId": "food_bknby1la98smrsbwnthinbam42nj",
  //             "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
  //             },
  //             {
  //             "text": "1/3 cup miso",
  //             "quantity": 0.3333333333333333,
  //             "measure": "cup",
  //             "food": "miso",
  //             "weight": 91.66666666666666,
  //             "foodCategory": "plant-based protein",
  //             "foodId": "food_agp37bpbhswz7sa7hlwj7b8vzcbt",
  //             "image": "https://www.edamam.com/food-img/352/3525e5a38bb13c74aa34ef6c0273bf33.jpg"
  //             },
  //             {
  //             "text": "1/4 cup mirin",
  //             "quantity": 0.25,
  //             "measure": "cup",
  //             "food": "mirin",
  //             "weight": 58.2,
  //             "foodCategory": "cocktails and liquors",
  //             "foodId": "food_bm83c4ob7z5q3xac1potzakndqbv",
  //             "image": "https://www.edamam.com/food-img/bb7/bb76cdd34c080bf65908c09812fd9c8d.jpg"
  //             },
  //             {
  //             "text": "3 tablespoons sake",
  //             "quantity": 3,
  //             "measure": "tablespoon",
  //             "food": "sake",
  //             "weight": 43.649999999262015,
  //             "foodCategory": "cocktails and liquors",
  //             "foodId": "food_b4lx3glaxob844b6jpzb8ay9men8",
  //             "image": "https://www.edamam.com/food-img/bb7/bb76cdd34c080bf65908c09812fd9c8d.jpg"
  //             }
  //             ],
  //             "calories": 1203.400788165678,
  //             "totalWeight": 873.9052216659287,
  //             "totalTime": 0,
  //             "cuisineType": [
  //             "japanese",
  //             "asian"
  //             ],
  //             "mealType": [
  //             "lunch/dinner"
  //             ],
  //             "dishType": [
  //             "main course"
  //             ],
  //             "totalNutrients": {
  //             "ENERC_KCAL": {
  //             "label": "Energy",
  //             "quantity": 1203.400788165678,
  //             "unit": "kcal"
  //             },
  //             "FAT": {
  //             "label": "Fat",
  //             "quantity": 38.23585616216666,
  //             "unit": "g"
  //             },
  //             "FASAT": {
  //             "label": "Saturated",
  //             "quantity": 14.570207806733336,
  //             "unit": "g"
  //             },
  //             "FATRN": {
  //             "label": "Trans",
  //             "quantity": 1.7009713875,
  //             "unit": "g"
  //             },
  //             "FAMS": {
  //             "label": "Monounsaturated",
  //             "quantity": 18.2162527305,
  //             "unit": "g"
  //             },
  //             "FAPU": {
  //             "label": "Polyunsaturated",
  //             "quantity": 5.0462045205,
  //             "unit": "g"
  //             },
  //             "CHOCDF": {
  //             "label": "Carbs",
  //             "quantity": 30.173132932629763,
  //             "unit": "g"
  //             },
  //             "CHOCDF.net": {
  //             "label": "Carbohydrates (net)",
  //             "quantity": 25.223132932629767,
  //             "unit": "g"
  //             },
  //             "FIBTG": {
  //             "label": "Fiber",
  //             "quantity": 4.95,
  //             "unit": "g"
  //             },
  //             "SUGAR": {
  //             "label": "Sugars",
  //             "quantity": 5.683333333333334,
  //             "unit": "g"
  //             },
  //             "SUGAR.added": {
  //             "label": "Sugars, added",
  //             "quantity": 0,
  //             "unit": "g"
  //             },
  //             "PROCNT": {
  //             "label": "Protein",
  //             "quantity": 158.46116663532968,
  //             "unit": "g"
  //             },
  //             "CHOLE": {
  //             "label": "Cholesterol",
  //             "quantity": 428.64478965,
  //             "unit": "mg"
  //             },
  //             "NA": {
  //             "label": "Sodium",
  //             "quantity": 3956.8772917833185,
  //             "unit": "mg"
  //             },
  //             "CA": {
  //             "label": "Calcium",
  //             "quantity": 145.79301214996312,
  //             "unit": "mg"
  //             },
  //             "MG": {
  //             "label": "Magnesium",
  //             "quantity": 192.99259654995575,
  //             "unit": "mg"
  //             },
  //             "K": {
  //             "label": "Potassium",
  //             "quantity": 2755.8118101498158,
  //             "unit": "mg"
  //             },
  //             "FE": {
  //             "label": "Iron",
  //             "quantity": 16.60447079949926,
  //             "unit": "mg"
  //             },
  //             "ZN": {
  //             "label": "Zinc",
  //             "quantity": 39.17605749216652,
  //             "unit": "mg"
  //             },
  //             "P": {
  //             "label": "Phosphorus",
  //             "quantity": 1628.304164349956,
  //             "unit": "mg"
  //             },
  //             "VITA_RAE": {
  //             "label": "Vitamin A",
  //             "quantity": 17.27443776666667,
  //             "unit": "µg"
  //             },
  //             "VITC": {
  //             "label": "Vitamin C",
  //             "quantity": 0,
  //             "unit": "mg"
  //             },
  //             "THIA": {
  //             "label": "Thiamin (B1)",
  //             "quantity": 0.6341441773333334,
  //             "unit": "mg"
  //             },
  //             "RIBF": {
  //             "label": "Riboflavin (B2)",
  //             "quantity": 1.3702438768333334,
  //             "unit": "mg"
  //             },
  //             "NIA": {
  //             "label": "Niacin (B3)",
  //             "quantity": 34.08108868285,
  //             "unit": "mg"
  //             },
  //             "VITB6A": {
  //             "label": "Vitamin B6",
  //             "quantity": 4.047023659066666,
  //             "unit": "mg"
  //             },
  //             "FOLDFE": {
  //             "label": "Folate equivalent (total)",
  //             "quantity": 37.82832331666667,
  //             "unit": "µg"
  //             },
  //             "FOLFD": {
  //             "label": "Folate (food)",
  //             "quantity": 37.82832331666667,
  //             "unit": "µg"
  //             },
  //             "FOLAC": {
  //             "label": "Folic acid",
  //             "quantity": 0,
  //             "unit": "µg"
  //             },
  //             "VITB12": {
  //             "label": "Vitamin B12",
  //             "quantity": 15.518153531833335,
  //             "unit": "µg"
  //             },
  //             "VITD": {
  //             "label": "Vitamin D",
  //             "quantity": 0.6803885550000001,
  //             "unit": "µg"
  //             },
  //             "TOCPHA": {
  //             "label": "Vitamin E",
  //             "quantity": 1.233866065666667,
  //             "unit": "mg"
  //             },
  //             "VITK1": {
  //             "label": "Vitamin K",
  //             "quantity": 37.06416165833333,
  //             "unit": "µg"
  //             },
  //             "Sugar.alcohol": {
  //             "label": "Sugar alcohol",
  //             "quantity": 0,
  //             "unit": "g"
  //             },
  //             "WATER": {
  //             "label": "Water",
  //             "quantity": 611.3424029754215,
  //             "unit": "g"
  //             }
  //             },
  //             "totalDaily": {
  //             "ENERC_KCAL": {
  //             "label": "Energy",
  //             "quantity": 60.170039408283905,
  //             "unit": "%"
  //             },
  //             "FAT": {
  //             "label": "Fat",
  //             "quantity": 58.82439409564102,
  //             "unit": "%"
  //             },
  //             "FASAT": {
  //             "label": "Saturated",
  //             "quantity": 72.85103903366668,
  //             "unit": "%"
  //             },
  //             "CHOCDF": {
  //             "label": "Carbs",
  //             "quantity": 10.057710977543255,
  //             "unit": "%"
  //             },
  //             "FIBTG": {
  //             "label": "Fiber",
  //             "quantity": 19.8,
  //             "unit": "%"
  //             },
  //             "PROCNT": {
  //             "label": "Protein",
  //             "quantity": 316.92233327065935,
  //             "unit": "%"
  //             },
  //             "CHOLE": {
  //             "label": "Cholesterol",
  //             "quantity": 142.88159655,
  //             "unit": "%"
  //             },
  //             "NA": {
  //             "label": "Sodium",
  //             "quantity": 164.86988715763826,
  //             "unit": "%"
  //             },
  //             "CA": {
  //             "label": "Calcium",
  //             "quantity": 14.579301214996313,
  //             "unit": "%"
  //             },
  //             "MG": {
  //             "label": "Magnesium",
  //             "quantity": 45.95061822617994,
  //             "unit": "%"
  //             },
  //             "K": {
  //             "label": "Potassium",
  //             "quantity": 58.634293832974805,
  //             "unit": "%"
  //             },
  //             "FE": {
  //             "label": "Iron",
  //             "quantity": 92.24705999721812,
  //             "unit": "%"
  //             },
  //             "ZN": {
  //             "label": "Zinc",
  //             "quantity": 356.1459772015138,
  //             "unit": "%"
  //             },
  //             "P": {
  //             "label": "Phosphorus",
  //             "quantity": 232.6148806214223,
  //             "unit": "%"
  //             },
  //             "VITA_RAE": {
  //             "label": "Vitamin A",
  //             "quantity": 1.9193819740740743,
  //             "unit": "%"
  //             },
  //             "VITC": {
  //             "label": "Vitamin C",
  //             "quantity": 0,
  //             "unit": "%"
  //             },
  //             "THIA": {
  //             "label": "Thiamin (B1)",
  //             "quantity": 52.845348111111115,
  //             "unit": "%"
  //             },
  //             "RIBF": {
  //             "label": "Riboflavin (B2)",
  //             "quantity": 105.40337514102565,
  //             "unit": "%"
  //             },
  //             "NIA": {
  //             "label": "Niacin (B3)",
  //             "quantity": 213.0068042678125,
  //             "unit": "%"
  //             },
  //             "VITB6A": {
  //             "label": "Vitamin B6",
  //             "quantity": 311.3095122358974,
  //             "unit": "%"
  //             },
  //             "FOLDFE": {
  //             "label": "Folate equivalent (total)",
  //             "quantity": 9.457080829166667,
  //             "unit": "%"
  //             },
  //             "VITB12": {
  //             "label": "Vitamin B12",
  //             "quantity": 646.5897304930556,
  //             "unit": "%"
  //             },
  //             "VITD": {
  //             "label": "Vitamin D",
  //             "quantity": 4.535923700000001,
  //             "unit": "%"
  //             },
  //             "TOCPHA": {
  //             "label": "Vitamin E",
  //             "quantity": 8.225773771111113,
  //             "unit": "%"
  //             },
  //             "VITK1": {
  //             "label": "Vitamin K",
  //             "quantity": 30.886801381944444,
  //             "unit": "%"
  //             }
  //             },
  //             "digest": [
  //             {
  //             "label": "Fat",
  //             "tag": "FAT",
  //             "schemaOrgTag": "fatContent",
  //             "total": 38.23585616216666,
  //             "hasRDI": true,
  //             "daily": 58.82439409564102,
  //             "unit": "g",
  //             "sub": [
  //             {
  //             "label": "Saturated",
  //             "tag": "FASAT",
  //             "schemaOrgTag": "saturatedFatContent",
  //             "total": 14.570207806733336,
  //             "hasRDI": true,
  //             "daily": 72.85103903366668,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Trans",
  //             "tag": "FATRN",
  //             "schemaOrgTag": "transFatContent",
  //             "total": 1.7009713875,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Monounsaturated",
  //             "tag": "FAMS",
  //             "schemaOrgTag": null,
  //             "total": 18.2162527305,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Polyunsaturated",
  //             "tag": "FAPU",
  //             "schemaOrgTag": null,
  //             "total": 5.0462045205,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             }
  //             ]
  //             },
  //             {
  //             "label": "Carbs",
  //             "tag": "CHOCDF",
  //             "schemaOrgTag": "carbohydrateContent",
  //             "total": 30.173132932629763,
  //             "hasRDI": true,
  //             "daily": 10.057710977543255,
  //             "unit": "g",
  //             "sub": [
  //             {
  //             "label": "Carbs (net)",
  //             "tag": "CHOCDF.net",
  //             "schemaOrgTag": null,
  //             "total": 25.223132932629767,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Fiber",
  //             "tag": "FIBTG",
  //             "schemaOrgTag": "fiberContent",
  //             "total": 4.95,
  //             "hasRDI": true,
  //             "daily": 19.8,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Sugars",
  //             "tag": "SUGAR",
  //             "schemaOrgTag": "sugarContent",
  //             "total": 5.683333333333334,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Sugars, added",
  //             "tag": "SUGAR.added",
  //             "schemaOrgTag": null,
  //             "total": 0,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             }
  //             ]
  //             },
  //             {
  //             "label": "Protein",
  //             "tag": "PROCNT",
  //             "schemaOrgTag": "proteinContent",
  //             "total": 158.46116663532968,
  //             "hasRDI": true,
  //             "daily": 316.92233327065935,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Cholesterol",
  //             "tag": "CHOLE",
  //             "schemaOrgTag": "cholesterolContent",
  //             "total": 428.64478965,
  //             "hasRDI": true,
  //             "daily": 142.88159655,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Sodium",
  //             "tag": "NA",
  //             "schemaOrgTag": "sodiumContent",
  //             "total": 3956.8772917833185,
  //             "hasRDI": true,
  //             "daily": 164.86988715763826,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Calcium",
  //             "tag": "CA",
  //             "schemaOrgTag": null,
  //             "total": 145.79301214996312,
  //             "hasRDI": true,
  //             "daily": 14.579301214996313,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Magnesium",
  //             "tag": "MG",
  //             "schemaOrgTag": null,
  //             "total": 192.99259654995575,
  //             "hasRDI": true,
  //             "daily": 45.95061822617994,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Potassium",
  //             "tag": "K",
  //             "schemaOrgTag": null,
  //             "total": 2755.8118101498158,
  //             "hasRDI": true,
  //             "daily": 58.634293832974805,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Iron",
  //             "tag": "FE",
  //             "schemaOrgTag": null,
  //             "total": 16.60447079949926,
  //             "hasRDI": true,
  //             "daily": 92.24705999721812,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Zinc",
  //             "tag": "ZN",
  //             "schemaOrgTag": null,
  //             "total": 39.17605749216652,
  //             "hasRDI": true,
  //             "daily": 356.1459772015138,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Phosphorus",
  //             "tag": "P",
  //             "schemaOrgTag": null,
  //             "total": 1628.304164349956,
  //             "hasRDI": true,
  //             "daily": 232.6148806214223,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Vitamin A",
  //             "tag": "VITA_RAE",
  //             "schemaOrgTag": null,
  //             "total": 17.27443776666667,
  //             "hasRDI": true,
  //             "daily": 1.9193819740740743,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Vitamin C",
  //             "tag": "VITC",
  //             "schemaOrgTag": null,
  //             "total": 0,
  //             "hasRDI": true,
  //             "daily": 0,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Thiamin (B1)",
  //             "tag": "THIA",
  //             "schemaOrgTag": null,
  //             "total": 0.6341441773333334,
  //             "hasRDI": true,
  //             "daily": 52.845348111111115,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Riboflavin (B2)",
  //             "tag": "RIBF",
  //             "schemaOrgTag": null,
  //             "total": 1.3702438768333334,
  //             "hasRDI": true,
  //             "daily": 105.40337514102565,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Niacin (B3)",
  //             "tag": "NIA",
  //             "schemaOrgTag": null,
  //             "total": 34.08108868285,
  //             "hasRDI": true,
  //             "daily": 213.0068042678125,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Vitamin B6",
  //             "tag": "VITB6A",
  //             "schemaOrgTag": null,
  //             "total": 4.047023659066666,
  //             "hasRDI": true,
  //             "daily": 311.3095122358974,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Folate equivalent (total)",
  //             "tag": "FOLDFE",
  //             "schemaOrgTag": null,
  //             "total": 37.82832331666667,
  //             "hasRDI": true,
  //             "daily": 9.457080829166667,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Folate (food)",
  //             "tag": "FOLFD",
  //             "schemaOrgTag": null,
  //             "total": 37.82832331666667,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Folic acid",
  //             "tag": "FOLAC",
  //             "schemaOrgTag": null,
  //             "total": 0,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Vitamin B12",
  //             "tag": "VITB12",
  //             "schemaOrgTag": null,
  //             "total": 15.518153531833335,
  //             "hasRDI": true,
  //             "daily": 646.5897304930556,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Vitamin D",
  //             "tag": "VITD",
  //             "schemaOrgTag": null,
  //             "total": 0.6803885550000001,
  //             "hasRDI": true,
  //             "daily": 4.535923700000001,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Vitamin E",
  //             "tag": "TOCPHA",
  //             "schemaOrgTag": null,
  //             "total": 1.233866065666667,
  //             "hasRDI": true,
  //             "daily": 8.225773771111113,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Vitamin K",
  //             "tag": "VITK1",
  //             "schemaOrgTag": null,
  //             "total": 37.06416165833333,
  //             "hasRDI": true,
  //             "daily": 30.886801381944444,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Sugar alcohols",
  //             "tag": "Sugar.alcohol",
  //             "schemaOrgTag": null,
  //             "total": 0,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Water",
  //             "tag": "WATER",
  //             "schemaOrgTag": null,
  //             "total": 611.3424029754215,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             }
  //             ]
  //             },
  //             "_links": {
  //             "self": {
  //             "href": "https://api.edamam.com/api/recipes/v2/aaa542a6a01a6bf9a3e0658246c651af?type=public&app_id=8717089a&app_key=35658ee1215cbd7922d388170b7509f0",
  //             "title": "Self"
  //             }
  //             }
  //             },
  //             {
  //             "recipe": {
  //             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c8157dd223284d913f21a47291beb683",
  //             "label": "Tofu Terrine With Red Shiso Gelée",
  //             "image": "https://edamam-product-images.s3.amazonaws.com/web-img/696/6966c05ef288bfafc15ccb68b1fd9fcc.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fbccfe1bccae76b6618d7d02bccf21e953132e04d0524ad23a215213d745e36d",
  //             "images": {
  //             "THUMBNAIL": {
  //             "url": "https://edamam-product-images.s3.amazonaws.com/web-img/696/6966c05ef288bfafc15ccb68b1fd9fcc-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a55fa770c6820b59a0ea21c0e7b9fc1f115a093577b4a60cffa046645b20491f",
  //             "width": 100,
  //             "height": 100
  //             },
  //             "SMALL": {
  //             "url": "https://edamam-product-images.s3.amazonaws.com/web-img/696/6966c05ef288bfafc15ccb68b1fd9fcc-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9a1c32bf8c35f52a9b5b49b28018f677ecb9ec2898848ec6f955b61667920003",
  //             "width": 200,
  //             "height": 200
  //             },
  //             "REGULAR": {
  //             "url": "https://edamam-product-images.s3.amazonaws.com/web-img/696/6966c05ef288bfafc15ccb68b1fd9fcc.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fbccfe1bccae76b6618d7d02bccf21e953132e04d0524ad23a215213d745e36d",
  //             "width": 300,
  //             "height": 300
  //             },
  //             "LARGE": {
  //             "url": "https://edamam-product-images.s3.amazonaws.com/web-img/696/6966c05ef288bfafc15ccb68b1fd9fcc-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDfHO9YeYDE472zzOwWYyD4fyWh1uWIvqAMoMIhbw%2FWPAiEAiLAh%2Fqsg6tJb%2BBgjI6LvMceazRK8X%2FTIpP7FR8hSSUsqzAQIFxAAGgwxODcwMTcxNTA5ODYiDHk9D9jDGBl3kbbjRiqpBA8mflitypGEuQ3j6oyFPKV7mDB%2FQxm%2B5Coov2RoyR7mBKSbzd54WYI%2Fk8K%2BqjWu2DEkr0WX4bQhA8uuqnCDsslOhzMnn2HkhA2U1EiT2O9l4FjF9SS9qTDeayDE%2BPjS63qj%2Bo2X6yMi3Xqcan1Q6kiBmgzMj2Uinzr4KuZCCU5guSRRM5%2FoGmSl7aF%2BO0HXcasHNu5iuYVuy2Ir3SbEokljtC4t8%2FtwXqFUjmj%2F7%2BR2NXW2SG%2FiueX4kHBib85SW1rraBia19IWDtEVr3nRb5CgSKU9n9vdeIDxR4elAN6iQPfefuNh2Bmybn2gSjOCMH9oNJy2iKYQdr1k4LrnYWCgtk9loffSigswTo%2FcCcOzh%2FcI%2FynRwSyu088aUmamlf3P7cJime4oOkz7H0HWYl6m6aBms3KbzpzIVchPP8qor1o9fOZG4I32WFRYnvJtLUMizs5C4Xyu3XL2lur%2F6ewzSpIrujZ8Zuu30BrF%2Btoxmj9SNX6MI3FGGU%2F%2BPXJfIJR04Y3eYGFMqftPbZ%2BFyqw2OQ9wVab99naG0Pcc3GDoQl793T%2B%2FJ68gmBCcFSCcq%2Bsa0odNB%2B5%2B6XxwMdcbLLDf0Yi8eQB6t2jSCFgI4uh7qMaAqNgCeTShhcwbsMd8ekFhCFXc8zvcold4N6hJDyJPEEAye5XpuSK8JRInsn8WLW9I6vh9qnGs1%2Bw9Rh%2BP%2FIKsJeKLIuXmK0Bm1vuOS%2F6nGuGh8fgoWZcw9d%2FEngY6qQFdesdhB3gHy3R3P%2BE9P2ois%2FQ%2BiNAwUHI6skN9JT%2FpizjjUAujE%2FB6kos%2Bop2cm270wF%2BLsbvkCA0EFXfxoDYB%2BkdvvcnVLWWy5kfZgk8ovqRZaycNkEIt8N5JPAaRFFM5mAohkVA7wE%2BSpjzK6qDg2R6PJmB%2FGrErj%2FzhYAFSqKslUIPyIyFH%2BtyLQcQu7VxGPtc23ybEldGq5%2BPQ%2FV5fpx%2BTcmwsQNc4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T140636Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFFUVOZXF%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f10157df3df634b4c7648944ee8a95c125f6b46826a4b775b37dce4e6c498f6c",
  //             "width": 600,
  //             "height": 600
  //             }
  //             },
  //             "source": "No Recipes",
  //             "url": "http://norecipes.com/blog/2009/01/30/tofu-terrine-with-red-shiso-gelee/",
  //             "shareAs": "http://www.edamam.com/recipe/tofu-terrine-with-red-shiso-gel%C3%A9e-c8157dd223284d913f21a47291beb683/-",
  //             "yield": 4,
  //             "dietLabels": [
  //             "Low-Carb"
  //             ],
  //             "healthLabels": [
  //             "Sugar-Conscious",
  //             "Low Potassium",
  //             "Kidney-Friendly",
  //             "Keto-Friendly",
  //             "Dairy-Free",
  //             "Gluten-Free",
  //             "Wheat-Free",
  //             "Egg-Free",
  //             "Peanut-Free",
  //             "Tree-Nut-Free",
  //             "Fish-Free",
  //             "Shellfish-Free",
  //             "Red-Meat-Free",
  //             "Crustacean-Free",
  //             "Celery-Free",
  //             "Mustard-Free",
  //             "Lupine-Free",
  //             "Mollusk-Free",
  //             "Alcohol-Free",
  //             "No oil added",
  //             "FODMAP-Free"
  //             ],
  //             "cautions": [
  //             "Gluten",
  //             "Wheat",
  //             "Sulfites"
  //             ],
  //             "ingredientLines": [
  //             "3 Tbs water",
  //             "1/2 tsp gelatin",
  //             "1 1/2 tsp dried salted red shiso (or 2 shiso leaves from Umeboshi)",
  //             "2 tsp lemon juice",
  //             "8 oz tofu",
  //             "3 Tbs tahini",
  //             "3/4 tsp kosher salt",
  //             "1 tsp lemon juice"
  //             ],
  //             "ingredients": [
  //             {
  //             "text": "3 Tbs water",
  //             "quantity": 3,
  //             "measure": "tablespoon",
  //             "food": "water",
  //             "weight": 44.360294343,
  //             "foodCategory": "water",
  //             "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
  //             "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
  //             },
  //             {
  //             "text": "1/2 tsp gelatin",
  //             "quantity": 0.5,
  //             "measure": "teaspoon",
  //             "food": "gelatin",
  //             "weight": 1.15000000007777,
  //             "foodCategory": "candy",
  //             "foodId": "food_bh3w81wbiqrfmhbaw9hgwa3u7lky",
  //             "image": "https://www.edamam.com/food-img/47a/47a5b5c20c3cbfaf7332d572a5bfddbe.jpg"
  //             },
  //             {
  //             "text": "1 1/2 tsp dried salted red shiso (or 2 shiso leaves from Umeboshi)",
  //             "quantity": 1.5,
  //             "measure": "teaspoon",
  //             "food": "shiso",
  //             "weight": 2.8500000001927392,
  //             "foodCategory": "Condiments and sauces",
  //             "foodId": "food_bs6mvl8b2zwyx5b5u60upb1nd2ay",
  //             "image": "https://www.edamam.com/food-img/7f0/7f01cc4f71c5c6ad31051ed74b9c058b.jpg"
  //             },
  //             {
  //             "text": "2 tsp lemon juice",
  //             "quantity": 2,
  //             "measure": "teaspoon",
  //             "food": "lemon juice",
  //             "weight": 10.166666667182332,
  //             "foodCategory": "100% juice",
  //             "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
  //             "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
  //             },
  //             {
  //             "text": "8 oz tofu",
  //             "quantity": 8,
  //             "measure": "ounce",
  //             "food": "tofu",
  //             "weight": 226.796185,
  //             "foodCategory": "plant-based protein",
  //             "foodId": "food_a269ixea1yf51xbfwgnq2boiwc7x",
  //             "image": "https://www.edamam.com/food-img/b6a/b6ae13c3cfe37e16f820840f90231bff.jpg"
  //             },
  //             {
  //             "text": "3 Tbs tahini",
  //             "quantity": 3,
  //             "measure": "tablespoon",
  //             "food": "tahini",
  //             "weight": 45,
  //             "foodCategory": "plant-based protein",
  //             "foodId": "food_aa88tarawf1yl0bu5w3csaucrnx2",
  //             "image": "https://www.edamam.com/food-img/eed/eed4bb62c2763575b73a8f05963073fb.jpg"
  //             },
  //             {
  //             "text": "3/4 tsp kosher salt",
  //             "quantity": 0.75,
  //             "measure": "teaspoon",
  //             "food": "kosher salt",
  //             "weight": 3.6406250001846567,
  //             "foodCategory": "Condiments and sauces",
  //             "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
  //             "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
  //             },
  //             {
  //             "text": "1 tsp lemon juice",
  //             "quantity": 1,
  //             "measure": "teaspoon",
  //             "food": "lemon juice",
  //             "weight": 5.083333333591166,
  //             "foodCategory": "100% juice",
  //             "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
  //             "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
  //             }
  //             ],
  //             "calories": 434.96882950051554,
  //             "totalWeight": 337.2021850192879,
  //             "totalTime": 0,
  //             "cuisineType": [
  //             "asian"
  //             ],
  //             "mealType": [
  //             "lunch/dinner"
  //             ],
  //             "dishType": [
  //             "starter"
  //             ],
  //             "totalNutrients": {
  //             "ENERC_KCAL": {
  //             "label": "Energy",
  //             "quantity": 434.96882950051554,
  //             "unit": "kcal"
  //             },
  //             "FAT": {
  //             "label": "Fat",
  //             "quantity": 33.707955914503344,
  //             "unit": "g"
  //             },
  //             "FASAT": {
  //             "label": "Saturated",
  //             "quantity": 5.357649576550733,
  //             "unit": "g"
  //             },
  //             "FATRN": {
  //             "label": "Trans",
  //             "quantity": 0,
  //             "unit": "g"
  //             },
  //             "FAMS": {
  //             "label": "Monounsaturated",
  //             "quantity": 11.918738728100141,
  //             "unit": "g"
  //             },
  //             "FAPU": {
  //             "label": "Polyunsaturated",
  //             "quantity": 14.687070058900929,
  //             "unit": "g"
  //             },
  //             "CHOCDF": {
  //             "label": "Carbs",
  //             "quantity": 14.660290526569582,
  //             "unit": "g"
  //             },
  //             "CHOCDF.net": {
  //             "label": "Carbohydrates (net)",
  //             "quantity": 8.194574861554155,
  //             "unit": "g"
  //             },
  //             "FIBTG": {
  //             "label": "Fiber",
  //             "quantity": 6.465715665015428,
  //             "unit": "g"
  //             },
  //             "SUGAR": {
  //             "label": "Sugars",
  //             "quantity": 1.965577110019492,
  //             "unit": "g"
  //             },
  //             "SUGAR.added": {
  //             "label": "Sugars, added",
  //             "quantity": 0,
  //             "unit": "g"
  //             },
  //             "PROCNT": {
  //             "label": "Protein",
  //             "quantity": 27.356147551575624,
  //             "unit": "g"
  //             },
  //             "CHOLE": {
  //             "label": "Cholesterol",
  //             "quantity": 0,
  //             "unit": "mg"
  //             },
  //             "NA": {
  //             "label": "Sodium",
  //             "quantity": 779.9810595849875,
  //             "unit": "mg"
  //             },
  //             "CA": {
  //             "label": "Calcium",
  //             "quantity": 656.5411100428215,
  //             "unit": "mg"
  //             },
  //             "MG": {
  //             "label": "Magnesium",
  //             "quantity": 130.0896484503674,
  //             "unit": "mg"
  //             },
  //             "K": {
  //             "label": "Potassium",
  //             "quantity": 551.0465102557114,
  //             "unit": "mg"
  //             },
  //             "FE": {
  //             "label": "Iron",
  //             "quantity": 8.048104407252666,
  //             "unit": "mg"
  //             },
  //             "ZN": {
  //             "label": "Zinc",
  //             "quantity": 4.007940070612141,
  //             "unit": "mg"
  //             },
  //             "P": {
  //             "label": "Phosphorus",
  //             "quantity": 607.201883850208,
  //             "unit": "mg"
  //             },
  //             "VITA_RAE": {
  //             "label": "Vitamin A",
  //             "quantity": 7.135500000391261,
  //             "unit": "µg"
  //             },
  //             "VITC": {
  //             "label": "Vitamin C",
  //             "quantity": 6.734392370324978,
  //             "unit": "mg"
  //             },
  //             "THIA": {
  //             "label": "Thiamin (B1)",
  //             "quantity": 0.6912482110003554,
  //             "unit": "mg"
  //             },
  //             "RIBF": {
  //             "label": "Riboflavin (B2)",
  //             "quantity": 0.36565159655063223,
  //             "unit": "mg"
  //             },
  //             "NIA": {
  //             "label": "Niacin (B3)",
  //             "quantity": 2.7234371468525973,
  //             "unit": "mg"
  //             },
  //             "VITB6A": {
  //             "label": "Vitamin B6",
  //             "quantity": 0.2396737913506658,
  //             "unit": "mg"
  //             },
  //             "FOLDFE": {
  //             "label": "Folate equivalent (total)",
  //             "quantity": 93.57877515038042,
  //             "unit": "µg"
  //             },
  //             "FOLFD": {
  //             "label": "Folate (food)",
  //             "quantity": 93.57877515038042,
  //             "unit": "µg"
  //             },
  //             "FOLAC": {
  //             "label": "Folic acid",
  //             "quantity": 0,
  //             "unit": "µg"
  //             },
  //             "VITB12": {
  //             "label": "Vitamin B12",
  //             "quantity": 0,
  //             "unit": "µg"
  //             },
  //             "VITD": {
  //             "label": "Vitamin D",
  //             "quantity": 0,
  //             "unit": "µg"
  //             },
  //             "TOCPHA": {
  //             "label": "Vitamin E",
  //             "quantity": 0.15805461850116023,
  //             "unit": "mg"
  //             },
  //             "VITK1": {
  //             "label": "Vitamin K",
  //             "quantity": 5.4431084400000005,
  //             "unit": "µg"
  //             },
  //             "Sugar.alcohol": {
  //             "label": "Sugar alcohol",
  //             "quantity": 0,
  //             "unit": "g"
  //             },
  //             "WATER": {
  //             "label": "Water",
  //             "quantity": 255.02033461839656,
  //             "unit": "g"
  //             }
  //             },
  //             "totalDaily": {
  //             "ENERC_KCAL": {
  //             "label": "Energy",
  //             "quantity": 21.74844147502578,
  //             "unit": "%"
  //             },
  //             "FAT": {
  //             "label": "Fat",
  //             "quantity": 51.85839371462053,
  //             "unit": "%"
  //             },
  //             "FASAT": {
  //             "label": "Saturated",
  //             "quantity": 26.788247882753666,
  //             "unit": "%"
  //             },
  //             "CHOCDF": {
  //             "label": "Carbs",
  //             "quantity": 4.886763508856528,
  //             "unit": "%"
  //             },
  //             "FIBTG": {
  //             "label": "Fiber",
  //             "quantity": 25.862862660061708,
  //             "unit": "%"
  //             },
  //             "PROCNT": {
  //             "label": "Protein",
  //             "quantity": 54.71229510315125,
  //             "unit": "%"
  //             },
  //             "CHOLE": {
  //             "label": "Cholesterol",
  //             "quantity": 0,
  //             "unit": "%"
  //             },
  //             "NA": {
  //             "label": "Sodium",
  //             "quantity": 32.49921081604115,
  //             "unit": "%"
  //             },
  //             "CA": {
  //             "label": "Calcium",
  //             "quantity": 65.65411100428216,
  //             "unit": "%"
  //             },
  //             "MG": {
  //             "label": "Magnesium",
  //             "quantity": 30.973725821516048,
  //             "unit": "%"
  //             },
  //             "K": {
  //             "label": "Potassium",
  //             "quantity": 11.724393835227902,
  //             "unit": "%"
  //             },
  //             "FE": {
  //             "label": "Iron",
  //             "quantity": 44.7116911514037,
  //             "unit": "%"
  //             },
  //             "ZN": {
  //             "label": "Zinc",
  //             "quantity": 36.435818823746736,
  //             "unit": "%"
  //             },
  //             "P": {
  //             "label": "Phosphorus",
  //             "quantity": 86.74312626431542,
  //             "unit": "%"
  //             },
  //             "VITA_RAE": {
  //             "label": "Vitamin A",
  //             "quantity": 0.7928333333768067,
  //             "unit": "%"
  //             },
  //             "VITC": {
  //             "label": "Vitamin C",
  //             "quantity": 7.482658189249976,
  //             "unit": "%"
  //             },
  //             "THIA": {
  //             "label": "Thiamin (B1)",
  //             "quantity": 57.604017583362946,
  //             "unit": "%"
  //             },
  //             "RIBF": {
  //             "label": "Riboflavin (B2)",
  //             "quantity": 28.127045888510175,
  //             "unit": "%"
  //             },
  //             "NIA": {
  //             "label": "Niacin (B3)",
  //             "quantity": 17.021482167828733,
  //             "unit": "%"
  //             },
  //             "VITB6A": {
  //             "label": "Vitamin B6",
  //             "quantity": 18.436445488512753,
  //             "unit": "%"
  //             },
  //             "FOLDFE": {
  //             "label": "Folate equivalent (total)",
  //             "quantity": 23.394693787595106,
  //             "unit": "%"
  //             },
  //             "VITB12": {
  //             "label": "Vitamin B12",
  //             "quantity": 0,
  //             "unit": "%"
  //             },
  //             "VITD": {
  //             "label": "Vitamin D",
  //             "quantity": 0,
  //             "unit": "%"
  //             },
  //             "TOCPHA": {
  //             "label": "Vitamin E",
  //             "quantity": 1.0536974566744015,
  //             "unit": "%"
  //             },
  //             "VITK1": {
  //             "label": "Vitamin K",
  //             "quantity": 4.535923700000001,
  //             "unit": "%"
  //             }
  //             },
  //             "digest": [
  //             {
  //             "label": "Fat",
  //             "tag": "FAT",
  //             "schemaOrgTag": "fatContent",
  //             "total": 33.707955914503344,
  //             "hasRDI": true,
  //             "daily": 51.85839371462053,
  //             "unit": "g",
  //             "sub": [
  //             {
  //             "label": "Saturated",
  //             "tag": "FASAT",
  //             "schemaOrgTag": "saturatedFatContent",
  //             "total": 5.357649576550733,
  //             "hasRDI": true,
  //             "daily": 26.788247882753666,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Trans",
  //             "tag": "FATRN",
  //             "schemaOrgTag": "transFatContent",
  //             "total": 0,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Monounsaturated",
  //             "tag": "FAMS",
  //             "schemaOrgTag": null,
  //             "total": 11.918738728100141,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Polyunsaturated",
  //             "tag": "FAPU",
  //             "schemaOrgTag": null,
  //             "total": 14.687070058900929,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             }
  //             ]
  //             },
  //             {
  //             "label": "Carbs",
  //             "tag": "CHOCDF",
  //             "schemaOrgTag": "carbohydrateContent",
  //             "total": 14.660290526569582,
  //             "hasRDI": true,
  //             "daily": 4.886763508856528,
  //             "unit": "g",
  //             "sub": [
  //             {
  //             "label": "Carbs (net)",
  //             "tag": "CHOCDF.net",
  //             "schemaOrgTag": null,
  //             "total": 8.194574861554155,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Fiber",
  //             "tag": "FIBTG",
  //             "schemaOrgTag": "fiberContent",
  //             "total": 6.465715665015428,
  //             "hasRDI": true,
  //             "daily": 25.862862660061708,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Sugars",
  //             "tag": "SUGAR",
  //             "schemaOrgTag": "sugarContent",
  //             "total": 1.965577110019492,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Sugars, added",
  //             "tag": "SUGAR.added",
  //             "schemaOrgTag": null,
  //             "total": 0,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             }
  //             ]
  //             },
  //             {
  //             "label": "Protein",
  //             "tag": "PROCNT",
  //             "schemaOrgTag": "proteinContent",
  //             "total": 27.356147551575624,
  //             "hasRDI": true,
  //             "daily": 54.71229510315125,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Cholesterol",
  //             "tag": "CHOLE",
  //             "schemaOrgTag": "cholesterolContent",
  //             "total": 0,
  //             "hasRDI": true,
  //             "daily": 0,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Sodium",
  //             "tag": "NA",
  //             "schemaOrgTag": "sodiumContent",
  //             "total": 779.9810595849875,
  //             "hasRDI": true,
  //             "daily": 32.49921081604115,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Calcium",
  //             "tag": "CA",
  //             "schemaOrgTag": null,
  //             "total": 656.5411100428215,
  //             "hasRDI": true,
  //             "daily": 65.65411100428216,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Magnesium",
  //             "tag": "MG",
  //             "schemaOrgTag": null,
  //             "total": 130.0896484503674,
  //             "hasRDI": true,
  //             "daily": 30.973725821516048,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Potassium",
  //             "tag": "K",
  //             "schemaOrgTag": null,
  //             "total": 551.0465102557114,
  //             "hasRDI": true,
  //             "daily": 11.724393835227902,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Iron",
  //             "tag": "FE",
  //             "schemaOrgTag": null,
  //             "total": 8.048104407252666,
  //             "hasRDI": true,
  //             "daily": 44.7116911514037,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Zinc",
  //             "tag": "ZN",
  //             "schemaOrgTag": null,
  //             "total": 4.007940070612141,
  //             "hasRDI": true,
  //             "daily": 36.435818823746736,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Phosphorus",
  //             "tag": "P",
  //             "schemaOrgTag": null,
  //             "total": 607.201883850208,
  //             "hasRDI": true,
  //             "daily": 86.74312626431542,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Vitamin A",
  //             "tag": "VITA_RAE",
  //             "schemaOrgTag": null,
  //             "total": 7.135500000391261,
  //             "hasRDI": true,
  //             "daily": 0.7928333333768067,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Vitamin C",
  //             "tag": "VITC",
  //             "schemaOrgTag": null,
  //             "total": 6.734392370324978,
  //             "hasRDI": true,
  //             "daily": 7.482658189249976,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Thiamin (B1)",
  //             "tag": "THIA",
  //             "schemaOrgTag": null,
  //             "total": 0.6912482110003554,
  //             "hasRDI": true,
  //             "daily": 57.604017583362946,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Riboflavin (B2)",
  //             "tag": "RIBF",
  //             "schemaOrgTag": null,
  //             "total": 0.36565159655063223,
  //             "hasRDI": true,
  //             "daily": 28.127045888510175,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Niacin (B3)",
  //             "tag": "NIA",
  //             "schemaOrgTag": null,
  //             "total": 2.7234371468525973,
  //             "hasRDI": true,
  //             "daily": 17.021482167828733,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Vitamin B6",
  //             "tag": "VITB6A",
  //             "schemaOrgTag": null,
  //             "total": 0.2396737913506658,
  //             "hasRDI": true,
  //             "daily": 18.436445488512753,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Folate equivalent (total)",
  //             "tag": "FOLDFE",
  //             "schemaOrgTag": null,
  //             "total": 93.57877515038042,
  //             "hasRDI": true,
  //             "daily": 23.394693787595106,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Folate (food)",
  //             "tag": "FOLFD",
  //             "schemaOrgTag": null,
  //             "total": 93.57877515038042,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Folic acid",
  //             "tag": "FOLAC",
  //             "schemaOrgTag": null,
  //             "total": 0,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Vitamin B12",
  //             "tag": "VITB12",
  //             "schemaOrgTag": null,
  //             "total": 0,
  //             "hasRDI": true,
  //             "daily": 0,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Vitamin D",
  //             "tag": "VITD",
  //             "schemaOrgTag": null,
  //             "total": 0,
  //             "hasRDI": true,
  //             "daily": 0,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Vitamin E",
  //             "tag": "TOCPHA",
  //             "schemaOrgTag": null,
  //             "total": 0.15805461850116023,
  //             "hasRDI": true,
  //             "daily": 1.0536974566744015,
  //             "unit": "mg"
  //             },
  //             {
  //             "label": "Vitamin K",
  //             "tag": "VITK1",
  //             "schemaOrgTag": null,
  //             "total": 5.4431084400000005,
  //             "hasRDI": true,
  //             "daily": 4.535923700000001,
  //             "unit": "µg"
  //             },
  //             {
  //             "label": "Sugar alcohols",
  //             "tag": "Sugar.alcohol",
  //             "schemaOrgTag": null,
  //             "total": 0,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             },
  //             {
  //             "label": "Water",
  //             "tag": "WATER",
  //             "schemaOrgTag": null,
  //             "total": 255.02033461839656,
  //             "hasRDI": false,
  //             "daily": 0,
  //             "unit": "g"
  //             }
  //             ]
  //             },
  //             "_links": {
  //             "self": {
  //             "href": "https://api.edamam.com/api/recipes/v2/c8157dd223284d913f21a47291beb683?type=public&app_id=8717089a&app_key=35658ee1215cbd7922d388170b7509f0",
  //             "title": "Self"
  //             }
  //             }
  //             },]
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
    this.props.setProgress(0)
    let url =
      "https://api.edamam.com/api/recipes/v2?type=public&app_id=8717089a&app_key=35658ee1215cbd7922d388170b7509f0&cuisineType=Asian";
    this.setState({ loading: true });
    this.props.setProgress(30)
    let data = await fetch(url);
    this.props.setProgress(50)
    let parse_data = await data.json();
    this.props.setProgress(70)
    this.setState({
      article: parse_data.hits,
      starting_count: parse_data.from,
      ending_count: parse_data.to,
      next_page: parse_data._links.next.href,
      Home_page: url,
      loading: false,
    });
    this.props.setProgress(100)
  }

  render() {
    return (
      <>
         {this.state.loading && <Loader></Loader>}
        <div className="container my-2">
          <h1 className={`text-center text-${this.props.title}`}>Top-Recepies</h1>
       
          <div className="row">
            {!this.state.loading &&
              this.state.article.map((element) => {
                return (
                  <div className="col-md-6 mt-4" key={element.recipe.uri}>
                    <RecipeItem
                      topLeftColor={this.props.topLeftColor}
                      headingColor={this.props.headingColor}
                      title={element.recipe.label}
                      ImagesUrl={element.recipe.images.SMALL.url}
                      url={element.recipe.shareAs}
                      health_labels={element.recipe.healthLabels.slice(0,16)
                        .toString()
                        }
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
          <div className="d-flex justify-content-between my-3">
            {/* <button
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
            </button> */}
            
             <Button type ={this.props.type} label ="Home" onClick={this.home_handler}  disabled={this.state.starting_count <= 1} size="large"  textcolor={this.props.textcolor}></Button>
           
           
           <Button type ={this.props.type} label ="Next" onClick={this.next_handler}  size = "large"  textcolor={this.props.textcolor}></Button>
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

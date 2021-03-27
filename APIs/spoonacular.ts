import { spoonacular } from "./config.json"

const IdentificationEndpointURL = 'https://api.spoonacular.com/recipes/findByIngredients'

export function getRecipes(ingredients: Array<string>, callback: (recipies: Array<Recipe>) => void) {
  fetch(`${IdentificationEndpointURL}?ingredients=${ingredients.reduce((acc, cur) => acc)}&apiKey=${spoonacular.API_KEY}`)
    .then((reponse: any) => {
      const recipes: Array<Recipe> = new Array()
      callback(recipes)
    })
}

type Recipe = {}
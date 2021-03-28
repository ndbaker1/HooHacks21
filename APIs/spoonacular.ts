import { spoonacular } from "./config.json"

const IdentificationEndpointURL = 'https://api.spoonacular.com/recipes/findByIngredients'

export async function getRecipes(ingredients: Array<string>): Promise<Array<any>> {
  const ingredientCSV = ingredients.reduce((acc, cur, index) => acc + cur + (index !== ingredients.length - 1 ? ',+' : ''), 'ingredients=')
  const response = await fetch(`${IdentificationEndpointURL}?${ingredientCSV}&apiKey=${spoonacular.API_KEY}`, { method: 'GET' })
  try {
    const responseText = await response.text()
    const responseObj = JSON.parse(responseText) as Array<any>
    return responseObj
      .filter((recipe: any) => recipe.missedIngredientCount <= 5)
      .map<Recipe>((recipe: any) => ({ title: recipe.title, image_url: recipe.image }))
  } catch {
    return []
  }
}

type Recipe = {
  title: string
  image_url: string
}
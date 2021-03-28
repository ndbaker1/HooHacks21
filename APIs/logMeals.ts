import { flaskEndpoint } from './endpoints'
type Ingredients = Array<string>

export async function getImageIngredients(imageBase64: string): Promise<Ingredients> {
  const response = await fetch(flaskEndpoint, { method: 'POST', body: imageBase64 })
  try {
    const responseText = await response.text()
    return JSON.parse(responseText).results
  } catch {
    return []
  }
}
import imageCompression from 'browser-image-compression';
import { logMeals } from './config.json'

const IdentificationEndpointURL = 'https://api.logmeal.es/v2/recognition/complete'

export function getImageIngredients(image: File, callback: (ingredients: Array<string>) => void) {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true
  }

  const headers = {
    'Authorization': 'Bearer ' + logMeals.API_KEY,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  imageCompression(image, options)
    .then(compressed => {
      const reader = new FileReader()
      reader.onload = function () {
        fetch(IdentificationEndpointURL, { method: 'POST', headers, body: JSON.stringify({ image: this.result }) })
          .then(response => {
            const ingredients: Array<string> = new Array()
            callback(ingredients)
          })
      }
      reader.readAsBinaryString(compressed)
    })
}

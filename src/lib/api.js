const BASE_URL = 'http://localhost:4000'

export default {
  saveCars: async carsData => {
    let response = await fetch(`${BASE_URL}/cars`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(carsData)
    })
    return await response.json()
  }
}

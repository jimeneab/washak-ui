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
  },
  saveUser: async userData => {
    let response = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    return await response.json()
  },
  saveProfile: async profileData => {
    let response = await fetch(`${BASE_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profileData)
    })
    return await response.json()
  },
  saveAddress: async addressData => {
    let response = await fetch(`${BASE_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addressData)
    })
    return await response.json()
  },
  saveDate: async dateData => {
    let response = await fetch(`${BASE_URL}/services`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dateData)
    })
    return await response.json()
  },
  saveRateService: async rateData => {
    let response = await fetch(`${BASE_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rateData)
    })
    return await response.json()
  }
}

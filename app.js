const request = require('postman-request')
const geocode = require('./utils/geocode')

// const urlWeatherStack = 'http://api.weatherstack.com/current?access_key=166e3027b4d07ae8a47207559cb6c2cc&query=37.8267,-122.4233&units=m'
// const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5zaHVsa2lzaG9yZSIsImEiOiJja2czbnkzMncwYnFnMndwamhiOThvaTdmIn0.xxpTwBdBJ65MP9Jnu4bMrA'

// request({url: urlWeatherStack, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service !')
//     } else if (response.body.error) {
//         console.log('Unable to find location !')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' 
//         + response.body.current.temperature + ' degrees out.')    
//     }
// })

geocode('Boston', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})

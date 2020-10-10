const request = require('postman-request')

const urlWeatherStack = 'http://api.weatherstack.com/current?access_key=166e3027b4d07ae8a47207559cb6c2cc&query=37.8267,-122.4233&units=m'
const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5zaHVsa2lzaG9yZSIsImEiOiJja2czbnkzMncwYnFnMndwamhiOThvaTdmIn0.xxpTwBdBJ65MP9Jnu4bMrA'

request({url: urlWeatherStack, json: true}, (error, response) => {
    // console.log(response.body.current)
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out.')
})

//GeoCoding
//Address -> Lat/Long -> Weather
request({url: geoCodeURL, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
})
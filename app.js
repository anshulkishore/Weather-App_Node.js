const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=166e3027b4d07ae8a47207559cb6c2cc&query=37.8267,-122.4233&units=m'

request({url: url, json: true}, (error, response) => {
    console.log(response.body.current)
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out.')
})
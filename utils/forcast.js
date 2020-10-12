const request = require('postman-request')

const forcast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=166e3027b4d07ae8a47207559cb6c2cc&query=' 
                            + latitude + ',' + longitude + '&units=m'

    // console.log('forcast url: ', url)

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service !', undefined)
        } else if (response.body.error) {
            callback('Unable to find location !', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' 
                    + response.body.current.temperature + ' degrees out.')    
        }
    })
}

module.exports = forcast
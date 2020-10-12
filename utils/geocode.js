const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW5zaHVsa2lzaG9yZSIsImEiOiJja2czbnkzMncwYnFnMndwamhiOThvaTdmIn0.xxpTwBdBJ65MP9Jnu4bMrA'

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to geocoding service !', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find geocode. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0], 
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
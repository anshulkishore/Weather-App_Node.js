const request = require('postman-request')
const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide a location')
} else {
    if(address) {
        geocode(address, (error, geocodeData) => {
            if (error) {
                return console.log('error')
            }
        
            forcast(geocodeData.latitude, geocodeData.longitude, (error, forcastData) => {
                if (error) {
                    return console.log(error)
                }
                console.log(geocodeData.location)
                console.log(forcastData)
            })
        })
    }
}
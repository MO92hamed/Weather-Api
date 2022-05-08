const express = require('express')
const request = require('request')

const app = express()

app.get('/', (req, res) => {
    let city = req.query.city;
    const request = require('request');
    request(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={youApiId}`,
     function (error, response, body) {
        let data = JSON.parse(body)   
        if(response.statusCode === 200)
          {
              res.send(`The weather in your city "${city}" is ${data.weather[0].description}`)
           }
});
})

app.listen(3000, () => console.log('the server started on port 3000'))
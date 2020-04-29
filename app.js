const express = require('express')
const app = express()
const PORT =  3000

app.get('/', function (req, res) {
    res.send('Hello world from Docker').status(200)
});

app.listen(PORT, () => {
    console.log(`Server run in ${PORT}`)
})
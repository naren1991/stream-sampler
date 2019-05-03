const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log("Server is listening on port 3000");
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Welcome to the the set of web services to sample the Kafka stream"});
});

module.exports = app;


//feed source
const streamRouter = require('./api/routes/stream.route.js');
app.use('/stream', streamRouter);




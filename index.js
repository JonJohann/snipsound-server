const express = require('express');
const server = express()
const mongoose = require('mongoose');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
require('dotenv').config();

const port = process.env.PORT || 3074;

mongoose.connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

mongoose.Promise = global.Promise;

server.use(bodyParser.json());

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

server.use('/', routes);

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
});



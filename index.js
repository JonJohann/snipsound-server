const express = require('express');
const server = express()
const fs = require('fs');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3074;;

server.use(bodyParser.json());

server.post('/upload', (req, res) => {
  req.pipe(fs.createWriteStream('./uploads/sound' + Date.now() + '.caf'));
  res.end('OK');
});

server.get("/", (req, res) => {
  res.sendFile('/Users/jonathan/Programmering/prosjektoppgave-4/server/uploads/sound1604794200050.caf')
  console.log("sent file!")
});

server.post('/', (req, res) => {
    res.send(req.body)
    console.log(req.body)
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
  });

  

const express = require('express');
const router = express.Router();
const Sound = require('../models/sound');
const convertCafToMp3 = require('../utils/convert')
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/upload', (req, res) => {
    const filename = 'sound' + Date.now()
    req.pipe(fs.createWriteStream('./uploads/' + filename + '.caf'));
    convertCafToMp3(filename)
    console.log("file sent!")
    res.end(filename+".mp3");
});

router.post('/', req => {
    Sound.create(req.body)
})

router.get("/", async (_req, res) => {
    const posts = await Sound.findOne({})
    res.send(posts)
})

router.use(express.static('uploads'))

router.post('/', (req, res) => {
    res.send(req.body)
    console.log(req.body)
})

module.exports = router;
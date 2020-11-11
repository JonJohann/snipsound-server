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
    console.log(req.body)
    Sound.create(req.body)
})

router.get('/', async(req, res, next) => {

    const { page = 1, limit = 5, sortby = "likes", search = "", category ="" } = req.query;
    console.log(req.query)
    console.log("hey")
    const searchRegExp = new RegExp(search, 'i');
    const filter = new RegExp(category, 'i');
    const category_filter = category == "" ? filter : category
    try {
        // execute query with page and limit values
        const posts = await Sound.find({"owner": searchRegExp, "category": category_filter})
	    .sort(sortby) 
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        // get total documents in the Posts collection 
        const count = await Sound.countDocuments({"category": category_filter});

        // return response with posts, total pages, and current page
        res.json({
            posts,
            totalPages: count,//Math.ceil(count / limit),
            currentPage: page,

        });
    } catch (err) {
        console.error(err.message);
    }
});

router.use(express.static('uploads'))

router.post('/', (req, res) => {
    res.send(req.body)
    console.log(req.body)
})

module.exports = router;
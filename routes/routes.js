const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/username', (req, res) => { 
    res.render('username')
});

router.get('/new-word/', (req, res) => {
    const word = req.params.word;
    axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
        .then(response => {
            console.log(response.data);
        })
   
});

module.exports = router;
const express = require('express');
const router = express.Router();

//Search
//Ini Jadinya site.com/search/ => jangan di tulisin search lagi

router.get('/', (req, res, next) => {
    const name = req.params.name;
    res.status(200).json({
        message : 'Upcoming Kitab'
    })
}) 


module.exports = router;
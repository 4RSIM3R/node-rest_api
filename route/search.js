const express = require('express');
const db = require('../model/connection')
const router = express.Router();

//Search
//Ini Jadinya site.com/search/ => jangan di tulisin search lagi

router.post('/:name', (req, res, next) => {
    //Menagkap parameter yang dikirim kan
    const name = req.params.name;
    var query = "SELECT * FROM kitab WHERE nama LIKE ?"
    var keyword = `%${req.params.name}%`
    if (req.headers.api_key != "4BD03LS03KU") {
        res.status(200).json({
            message : 'API key anda tidak Valid',
        })
        res.end()
        return
    }
    db.query(query, [keyword], (err, rows, field) => {
        if (err) {
            res.status.json({
                mesage : err
            })
            res.end()
            return
        }
        if (Object.keys(rows).length > 0) {
            res.status(200).json({
                message : 'Hasil Pencarian Anda',
                item_lenght :  Object.keys(rows).length,
                item : rows
            })
        }
        else{
            res.status(200).json({
                message : 'Hasil Pencarian Anda',
                item_lenght :  Object.keys(rows).length,
                item : 'Maaf Tidak Di Temukan Hasil yang cocok'
            }) 
        }
        
    })
}) 





module.exports = router;
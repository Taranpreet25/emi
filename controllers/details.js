const express = require('express');
const moment = require('./moment')
const router = express.Router();


router.post('/',(req,res) =>{
    // console.log(req.body)
    const {booking_date,checkin_date,amount} = req.body
    console.log(moment(booking_date,checkin_date,amount))
    // res.status.json({msg:{"Left Days"}})


})







module.exports = router;
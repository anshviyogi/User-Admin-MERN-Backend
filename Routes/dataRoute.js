const express = require('express')
const router = express.Router()
const Data = require('../model/dataSchema')

router.route('/submit').post((req,res)=>{
    const state = req.body.state;
    const years = req.body.years;
    const months = req.body.months;
    const activeUsers = req.body.activeUsers;
    const totalUsers = req.body.totalUsers;
    const resources = req.body.resources;
    const videosWatched = req.body.videoWatched;
    const teacher = req.body.teacher;
    const assignments = req.body.assignments;

    const saveData = new Data({
    state,
    years,
    months,
    activeUsers,
    totalUsers,
    resources,
    videosWatched,
    teacher,
    assignments
    })

    saveData.save()
    console.log("Data saved in DB")
})

router.get('/fetch',(req,res)=>{
    Data.find((err,result)=>{
        if(err) console.log(err)
        else res.status(200).send(result)
    })
})

module.exports = router
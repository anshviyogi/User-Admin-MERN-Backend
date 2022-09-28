const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    state:{
        type:String
    },
    years:{
        type:Number
    },
    months:{
        type:String
    },
    activeUsers:{
        type:Number
    },
    totalUsers:{
        type:Number
    },
    resources:{
        type:String
    },
    videosWatched:{
        type:String
    },
    teacher:{
        type:String
    },
    assignments:{
        type:String
    }
})

let Data = new mongoose.model('data',dataSchema)

module.exports = Data
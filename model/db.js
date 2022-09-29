const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI||'mongodb+srv://ansh:anshviyogi@cluster0.nszljun.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log("Mongodb connected")
})
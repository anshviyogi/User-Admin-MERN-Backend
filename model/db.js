const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ansh:anshviyogi@cluster0.syyc1cg.mongodb.net/?retryWrites=true&w=majority')
    .then(()=> console.log("Mongodb connected!!"))
    .catch((ERR)=> console.log(ERR))
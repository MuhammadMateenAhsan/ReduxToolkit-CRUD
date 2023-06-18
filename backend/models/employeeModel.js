const mongoose = require('mongoose')

const employeeScheema = mongoose.Schema({
    name :{
        type:String,
    },
    email :{
        type:String,
    },
    phone:{
        type:String,
    },
    salary:{
        type:Number,
    }
})

module.exports=mongoose.model("reduxEmployee",employeeScheema)
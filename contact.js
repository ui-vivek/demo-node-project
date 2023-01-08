const mongoose=require('mongoose')

const CotectSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    }
})
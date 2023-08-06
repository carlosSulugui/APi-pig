import mongoose from "mongoose"


const providerScheme = new mongoose.Schema({
    "name": {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    "telephone": {
        type: String,
        trim: String
    },
    "address":{
        type: String,
        required: true,
        trim: true,
    },
    "isCansel":{
        type:Boolean,

        default: false
    },
    "price":{
        type: Number,
        require: true,
        trim: true,
    }
    ,
    "weight":{
      type: String,
      trim: true
    },

    "photo":{
        type: String,
        trim:true
    }

})

export const  ProviderUser = mongoose.model("Provider",providerScheme)
const {type} =require("@testing-labrary/user-event/dist/type");
const mondoose=require("mongoose");

const userSchema = new mongoose.model({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password{
        type:String,
        required:true
    }
})

module.exports= userSchema
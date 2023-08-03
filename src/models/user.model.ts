import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
const profileDetail = new mongoose.Schema({
    name:{
        type:String,
    },
    bio:{
        type:String,
    },
    picture:{
           type:String,
    },
    totalPosts:{
        type:Number
    },
    totalFollowers:{
      type:Number
    },
    totalFollowing:{
        type:Number
    }
})

const users = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
       type:String,
       required:true 
    },
    ProfileData: {
        type: [profileDetail],
    },
})



const sessionSchema = new Schema({
    user_id:{type:String},
    session_id:{type:String},
    device_type:{type:String},
    device_id:{type:String}
})
export const sessionModel = mongoose.model('Session',sessionSchema)

export const UserData = mongoose.model('UserData',users)

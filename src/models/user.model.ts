import mongoose from "mongoose";
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



export const hashPassword = async (password: any) => {
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);
    return passwordHash;
  };
// users.methods.generateAuth = async() =>{}
export const UserData = mongoose.model('UserData',users)

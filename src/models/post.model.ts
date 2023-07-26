import mongoose from "mongoose";
import { UserData } from "./user.model";

const mediaDetails = new mongoose.Schema({
  
    media_category:[
        {
        image:{
            type:String
        },
        reels:{
            type:String
        },
        videos:{
            type:String
        }

        }
    ]
})

const posts = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        ref:UserData
    },
    description:{
        type:String,
        required:true
    },
    mediaData: {
        type: [mediaDetails],
    },

  
})

export const PostData = mongoose.model('postData',posts)


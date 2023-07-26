import mongoose from "mongoose";
import { UserData } from "./user.model";


const commentDetails = new mongoose.Schema({
      comments:[
        {
            commentOnPost:{
                type:String
            },
            replyOnComment:{
                type:String
            }

        }
      ]
})
const likeDetails= new mongoose.Schema({
    likes:[
      {
          likeOnPost:{
              type:Number
          },
          likeOnComment:{
              type:Number
          }

      }
    ]
})


const actions = new mongoose.Schema({
    userId:{
        type:String,
        ref:UserData
    },
    postId:{
        type:String,
    },
    commentData: {
        type: [commentDetails],
    },  
     likesData: {
        type: [likeDetails],
    },
    

})

export const actionData = mongoose.model('ActionData',actions)

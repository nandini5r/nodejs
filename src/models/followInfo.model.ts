import mongoose from "mongoose";
import { UserData } from "./user.model";

const followInfo = new mongoose.Schema({
    sendersId:{
        type:String,
        required:true,
        ref:UserData
    },
    receiversId:{
        type:String,
        required:true,
        ref:UserData
    },
    status:[
        {
        accepted:{
            type:Boolean
        },
        rejected:{
            type:Boolean
        },
        pending:{
            type:Boolean
        }

        }
    ]
})

export const followData = mongoose.model('followData',followInfo)

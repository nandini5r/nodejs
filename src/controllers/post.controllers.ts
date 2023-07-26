import mongoose from "mongoose";
import { PostData } from "../models/post.model";

export const create_post = async(req:any, res:any)=>{
    console.log(req.body);
    try{
      const {id} = req.body.tokenData;
      let userID = new mongoose.Types.ObjectId(id);
      
      let ans = await PostData.aggregate([
            {
                $match: {_id:userID}
            } , 
            {
                $lookup: {
                       from: "posts",
                       localField: "_id",
                       foreignField: "userId",
                       as: "user_posts"
                }
            }
          ])

        res.send(ans);


    }
    catch (error) {
        console.error('Error creating new post:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }

}
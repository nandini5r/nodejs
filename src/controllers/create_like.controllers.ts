import mongoose from "mongoose";
import { actionData } from "../models/actions.model"
import { PostData } from "../models/post.model";

export const likeOnPost = async(req:any,res:any)=>{
    try{
      let {actionType, comment_content, postId, tokenData } = req.body;

        
        
      if(actionType === 'LIKE'){
          postId = new mongoose.Types.ObjectId(postId);
         await PostData.findOneAndUpdate({_id:postId},{$inc:{likeCount:1}})
         
          let ans = await actionData.create({
              action: 'LIKE',
              userId: new mongoose.Types.ObjectId(tokenData.id),
              postId: new mongoose.Types.ObjectId(postId),

         })

                     

          res.send(ans);
 
    return res.status(204).send({message:"post liked "});
           
    }
  }
    catch (error) {
        console.error('Error liking the post:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
}
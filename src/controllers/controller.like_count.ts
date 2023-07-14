import { Comment } from "../model/comments.model";
export const like_count =async(req:any,res:any)=>{
    const commentId = req.params.id;
    
      try{
        const likes:any = await Comment.findOne({where:{id :commentId}});

        res.send(likes)
        console.log(likes,"LIKE COUNT");
        
        const comment = await Comment.update(
            {like_count: likes.like_count+1},
           { where:{
                comment_id : commentId
            }}
        )
       
      }
        
    catch(err){
      console.error('Error incrementing like:', err);
      return res.status(500).json({ error: 'Internal server error' });


    }

}

import { Comment } from '../model/comments.model';

  export const Create_comment =(req:any, res:any)=>{
    console.log(req.body,"uuu");
    try{
        Comment.create({
            ...req.body
            
        })
        return res.status(204).end();

    }
    catch(error){
        console.error('Error creating new post:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
   

}

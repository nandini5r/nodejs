import { Post } from "../model/post.model";

 export const Create_post = async(req:any, res:any)=>{
    console.log(req.body);
    try{
      await  Post.create({
            ...req.body   
        })
        return res.status(204).end();

    }
    catch (error) {
        console.error('Error creating new post:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }

}
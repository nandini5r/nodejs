import { Post } from "../model/post.model";

export const recent_comments= async(req:any,res:any) => {
    try{

        Post.findAll({
            order: [['id', 'DESC']]
          }).then((result:any) => {
              for (let i = 0; i < 3; i++) {
                console.log(`user_id: ${result[i].user_id}`);
                console.log(`url: ${result[i].post_url}`);
              }
            })
            .catch((error:any) => {
                console.log(error);
            });
        
        res.status(200).json({status : "success"});
    }
    catch(err){
        console.error('Error getting comments and likes:', err);
        return res.status(500).json({ error: 'Internal server error' });
  
}
}

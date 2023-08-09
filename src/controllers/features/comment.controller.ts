import Comment from "../../models/comment.model";
import Reply from "../../models/reply.model";


export const createComment = async (req: any, res: any) => {
    try {
        let { user_id, pin_id, comment_content, like_count } = req.body;

        let commentInfo = await Comment.create(
            {
                user_id: user_id,
                pin_id: pin_id,
                comment_content: comment_content,
                like_count: like_count

            }
        )
        return res.send(commentInfo)
    }
    catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });
    }

}

export const like_on_comment = async (req: any, res: any) => {
    let id = req.params.id
    try {
        const likes: any = await Comment.findOne({ where: { id: id } });

        res.send(likes)
        console.log(likes, "LIKE COUNT");

        const comment = await Comment.update(
            { like_count: likes.like_count + 1 },
            {
                where: {
                    id: id
                }
            }
        )

    }

    catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

export const reply = async(req:any,res:any) =>{
    try{ 
        const {reply_content,comment_id,user_id} = req.body
         const reply = await Reply.create(
          {
             user_id:user_id,
             reply_content:reply_content,
             comment_id:comment_id
          }
        
           
         )
        res.send(reply)

    }
    catch(error){
        console.error('Error:',error);
        return res.status(500).json({error:"Internal server error"});
    }
}

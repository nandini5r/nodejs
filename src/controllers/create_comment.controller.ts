import { actionData } from "../models/actions.model"

export const create_comment = async(req:any,res:any)=>{
    try{
         await actionData.create(
            req.body
         )
         res.send("comment created")

    return res.status(204).send({message:"comment created "});
           
    }
    catch (error) {
        console.error('Error creating a new comment:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
}
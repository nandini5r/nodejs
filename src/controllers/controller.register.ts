import { User } from "../model/user.model";

export const Sign_up= async (req:any, res:any)=>{
    console.log(req.body);
    try{
      await User.create({
            ...req.body
            
        })
        return res.status(204).end();
    }
    catch (error) {
        console.error('Error registering new user:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }

}
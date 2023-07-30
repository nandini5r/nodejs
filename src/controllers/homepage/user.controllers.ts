import User from "../../models/user.model";

export const getUserProfile = async(req:any , res:any) =>{
    try{

        let userInfo = await User.findAll(
          {where:{ id:req.body.id}}
        )
      
       return res.send( "result")
    }
    catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });
       
    }
  }
  


export const deleteUserProfile = async(req:any, res:any)=>{
    try{
        const user = await User.destroy({where:{id:req.body.userId}})
        res.send( "User Deleted successfully")

    } catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });
       
    }
}



export const updateUserProfile = async (req: any, res: any) => {
    try {
      if(req.body){
        const user_id = req.body.id
        const updateUserInfo = await User.update(
          req.body,{ where: { id: user_id } }
        );
        res.send('UserInfo Updated')
      }
      else{
        res.send('Invalid Info')
      }
      
    }  
      catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });
       
    }
    
  };
  
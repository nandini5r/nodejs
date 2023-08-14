import User from "../../models/user.model";
import { updateUserValidation } from "../../validations/feature.validations";


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
        const user = await User.destroy({where:{id:req.body.id}})
        res.send( "User Deleted successfully")

    } catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });
       
    }
}



export const updateUserProfile = async (req: any, res: any) => {
  try {
    let { error } = await updateUserValidation.validateAsync(req.body)

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


  
  export const profilePicture = async(req:any, res:any)=>{

    const {id} = req.params;
    if(req.file){
        try{
            
           const  file = req.file.buffer
            let userImage = await User.update({ profilePic:file }, {
                where: {
                  id: id,
                }, 
            })

            res.send(userImage)
               
        }catch (error) {
            console.error('Error :', error);
            return res.status(500).json({ error: 'Internal server error' });
    
        }
    }
}
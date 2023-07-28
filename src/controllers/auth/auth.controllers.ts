import User from "../../models/user.model";
import jwt from "jsonwebtoken";
import { loginValidate, registerValidate } from "../../Validations/validations";
const Key = "key"



export const sign_up = async (req: any, res: any) => {
    console.log(req.body,"re>>>>>>>>>>>>>>>>>>>>>>>>");
    // let {error} = await registerValidate.validateAsync(req.body)

    try {
        await User.create(
            req.body
        )
        console.log("SignUp succesfull");
        return res.status(204).send({ message: "Signup successfull" });
        ;
    }
    catch (error) {
        console.error('Error creating new user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }

}


export const login = async (req: any, res: any, next: any) => {
    console.log(req.body,"reqq>>>>>>>>>>>")
    const { email, password } = req.body
    // let {error} = await loginValidate.validateAsync(req.body)
    try {
      
    
  
    let user_exist:any = await User.findOne({where:{email: email,password:password}});

        console.log(user_exist, "AA");

        if (!user_exist) {
            const errormessage = "Unauthorized user "
            res.status(500).json({ error: errormessage })
        }

       const token =  jwt.sign({ userid:user_exist?.userId}, Key, { expiresIn: '24h' })
      return res.status(200).json({
        message:"Login succesfull",
        token:token
       })
    }
   
    catch (error) {
        console.error('Error :', error);
        next(error)
        return res.status(500).json({ error: 'Internal server error' });
       
    }

}




// export const logout = async(req:any, res:any)=>{
//     try{

    
//         res.send( "User LoggedOut")

//     } catch (error) {
//         console.error('Error :', error);
//         return res.status(500).json({ error: 'Internal server error' });
       
//     }
// }

// export const forgetPassword = async(req:any,res:any) =>{
//     try{
//       
//     }
//     catch{

//     }
// }
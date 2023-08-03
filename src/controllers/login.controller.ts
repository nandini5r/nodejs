import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { UserData } from "../models/user.model";
import redis from "redis"
import { loginValidate } from "../validations/validations";
const Key = "key"


export const login = async (req: any, res: any, next: any) => {
    const { email, password } = req.body
    let {error} = await loginValidate.validateAsync(req.body)

    try {
      
  
let user_exist = await UserData.findOne({ email: email, password: password });

        console.log(user_exist, "AA");

        if (!user_exist) {
            const errormessage = "Unauthorized user "
            res.status(500).json({ error: errormessage })
        }
        else {
            const matchPassword = await bcrypt.compare(
                        req.body.password,
                user_exist.password
            );
        }

        console.log(password, "ggggggggggg")

       const token = await jwt.sign({ userid:user_exist?._id}, Key, { expiresIn: '24h' })
       res.status(200).json({
        message:"Login succesfull",
        token:token
       })
    }
   
    catch (error) {
        console.error('Error creating new user:', error);
        next(error)
        return res.status(500).json({ error: 'Internal server error' });
       
    }

}





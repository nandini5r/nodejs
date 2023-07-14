import { User } from "../model/user.model";

 export const Login = async(req: any, res: any)=> {
    const user_info = req.body;
    console.log(user_info,"infoo")
    try{
        const isUser = await User.findOne({where:{userName: user_info.userName,password:user_info.password}});
        if(isUser!=null){
            console.log(isUser);
            res.status(200).json({status: "loggedIn Successfully"});
        }
        else{
            res.status(404).json({status: "not found"});
        }
    }
    catch(err){
        res.status(500).json({status: "Server Error"});
    }
}

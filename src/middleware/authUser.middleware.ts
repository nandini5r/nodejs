import jwt, { verify } from "jsonwebtoken";
import Session from "../models/session.model";

export const authUser = async(req:any,res:any,next:any)=>{
try{
 const authToken = req.headers.authorization;
 console.log(req.headers.authorization,"header")
if(!authToken){
    const  errmessage = "User is not authorized"

}   
    try{
        let token:any = jwt.verify(authToken,"key")
        console.log(token,"token")
        console.log("Aaaaaaaa")
        next()
    }catch(error){
        res.send(error,"UNAUTHORISED ACCESS")
    }


}
catch (error) {
    console.error('Error :', error);
    return res.status(500).json({ error: 'Internal server error' });
   
}
}



export const sessionManagement = async(req:any, res:any, next:any)=>{
    
    
    try{
        const {tokenData} = req.body;
        let sessionDetails = await Session.findOne({
            where:{sessionId:tokenData.sessionId, userId:tokenData.userId}
        })    
                
        if(sessionDetails){
            next()
        }else{
            res.status(401).send("Authorisation Error")
        }

    }catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });
       
    }
    

}


import jwt, { verify } from "jsonwebtoken";

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
catch{

}




}
import jwt, { verify } from "jsonwebtoken";

export const authUser = async(req:any,res:any,next:any)=>{
try{
 const authToken = req.headers.authorization;
 console.log(req.headers.authorization,"header")
if(!authToken){
    const  errmessage = "User is not authorized"

}   
    try{
        let token = jwt.verify(authToken,"key")
        next()
    }catch(e){
        res.send("UNAUTHORISED ACCESS")
    }


}
catch{

}




}
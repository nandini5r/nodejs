import jwt, { verify } from "jsonwebtoken";
import { sessionModel } from "../models/user.model";
import { createClient } from "redis";
const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));


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
        let session_payload:any={
            user_id:token?.userid,
            device_id:"1234",
            device_type:"google chrome"
        }
        await sessionModel.insertMany([
            session_payload
        ])
        console.log("11111111111resss")
        let result = await client.set('session',JSON.stringify(session_payload))
          console.log(result,"resss")
        next()
    }catch(e){
        res.send("UNAUTHORISED ACCESS")
    }


}
catch{

}




}
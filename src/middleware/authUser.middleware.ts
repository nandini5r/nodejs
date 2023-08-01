import jwt, { verify } from "jsonwebtoken";
import Session from "../models/session.model";
import { client } from "../database/db";

export const authUser = async (req: any, res: any, next: any) => {
    try {
        const authToken = req.headers.authorization;
        console.log(req.headers.authorization, "header")
        if (!authToken) {
            const errmessage = "User is not authorized"

        }
        try {
            let token: any = jwt.verify(authToken, "key")
            console.log(token, "token")
            console.log("Aaaaaaaa")
            
            let findSession:any = (await client.get(`${token.userId}_session`)) ||  (await Session.findOne({ where: {userId : token.userId}}));
            if(findSession){
                next()
            }
        } catch (error) {
            res.send(error, "UNAUTHORISED ACCESS")
        }


    }
    catch (error) {
        console.error('Error :', error);
        return res.status(500).json({ error: 'Internal server error' });

    }
}





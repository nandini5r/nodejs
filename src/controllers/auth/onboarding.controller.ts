import User from "../../models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { loginValidate, registerValidate } from "../../validations/onboarding.validations";
import Session from "../../models/session.model";
import { client } from "../../database/redis";

const Key = "key"


export const sign_up = async (req: any, res: any) => {

    try {
        const existingUser = await User.findOne({ where: { email: req.body.email } });
        let { error } = await registerValidate.validateAsync(req.body)

        if (existingUser) {
            return res.status(409).json({ error: "User already exists" });
        }
        await User.create(
            req.body
        )
        console.log("SignUp succesfull");
        return res.status(204).send("Signup successfull");

    }
    catch (error) {
        console.error('Error creating new user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

export const login = async (req: any, res: any, next: any) => {
    const { email, password } = req.body
    let { error } = await loginValidate.validateAsync(req.body)
    try {

        let user_exist: any = await User.findOne({ where: { email: email }, attributes: ['id'] },);


        if (!user_exist) {
            const errormessage = "Unauthorized user "
            res.status(500).json({ error: errormessage })
        } else {
            let session_payload: any = {
                user_id: +user_exist.dataValues.id,
                device_type: "google",
                device_id: 123,
            }
            let session = await Session.create({
                session_payload

            })
            const session_storage = JSON.stringify(session_payload)


            const result = await client.set("session", session_storage)
            const token: any = jwt.sign({ userid: user_exist.dataValues.id }, Key, { expiresIn: '24h' })

            return res.status(200).json({
                message: "Login succesfull",
                token: token
            })
        }


    }

    catch (error) {
        console.error('Error :', error);
        next(error)
        return res.status(500).json({ error: 'Internal server error' });

    }

}

export const forgetPassword = async (req: any, res: any) => {
    console.log(req.body);

    try {
        if (req.body) {

            if (req.body.newPassword == req.body.confirmPassword) {
                let encrypPassword = await bcrypt.hash(req.body.newPassword, 5);
                const updatePassword = await User.update(
                    { password: encrypPassword },
                    { where: { id: req.body.id } }
                );

                res.send('Password has successfully changed')
            }
            else {
                res.send('Password does not match')
            }
        }
    } catch (error) {
        console.error('Error creating new user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }

}

export const logOut = async (req: any, res: any) => {

    try {

        let result = await Session.destroy({ where: { user_id: req.body.user_id } })
        return res.send("user successfully logout")

    } catch (error) {
        console.error('Error creating new user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}



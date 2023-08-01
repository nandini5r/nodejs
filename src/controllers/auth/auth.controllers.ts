import User from "../../models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { loginValidate, registerValidate } from "../../Validations/validations";
import Session from "../../models/session.model";
import { client } from "../../database/db";
const Key = "key"



export const sign_up = async (req: any, res: any) => {
    console.log(req.body, "re>>>>>>>>>>>>>>>>>>>>>>>>");
    // let {error} = await registerValidate.validateAsync(req.body)


    try {
        const existingUser = await User.findOne({ where: { email: req.body.email } });

        if (existingUser) {
            return res.status(409).json({ error: "User already exists" });
        }
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
    console.log(req.body, "reqq>>>>>>>>>>>")
    const { email, password } = req.body
    // let {error} = await loginValidate.validateAsync(req.body)
    try {

        let user_exist: any = await User.findOne({ where: { email: email }, attributes:['id'] }, );

        console.log(user_exist.dataValues.id, "OTLAOTLAOTLAOTLA-------------------------");

        if (!user_exist) {
            const errormessage = "Unauthorized user "
            res.status(500).json({ error: errormessage })
        } else {
            let session_payload:any={
                userId:user_exist.dataValues.id,
            }
            console.log(session_payload,'SPLSPLSPDFLSDFSDFKJSDHKFHKJSDFJHSDHFKSJDFJKSDFK');
            
            let session=  await Session.create({
                userId:+user_exist.dataValues.id
            })

            let result =  await client.set(
                        `${user_exist.dataValues.id}_session`,session_payload
                    )
            const token: any = jwt.sign({ userid:user_exist.dataValues.id }, Key, { expiresIn: '24h' })
          
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
                    { where: { id: req.body.userId } }
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

        let result = await Session.destroy({ where: { userId: req.body.userId } })
            return  res.send("user successfully logout")

    } catch (error) {
        console.error('Error creating new user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}



import { UserData } from "../models/user.model";
import { registerValidate } from "../validations/validations";

export const sign_up = async (req: any, res: any) => {
  console.log(req.body);
  let {error} = await registerValidate.validateAsync(req.body)

  try {
    await UserData.create(
      req.body
    )
    console.log("SignUp succesfull");

    return res.status(204).json({message:"Signup successfull"});
    ;

  }
  catch (error) {
    console.error('Error creating new user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }

}
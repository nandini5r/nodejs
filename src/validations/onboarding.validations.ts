import Joi from "joi"

export const registerValidate = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}).required(),
    userName:Joi.string().min(4).max(20).required(),
    password: Joi.string().token().min(2).max(30).required(),
    firstName: Joi.string().pattern(new RegExp('^[a-zA-Z]*$')).min(2).max(30).required(),
    lastName: Joi.string().pattern(new RegExp('^[a-zA-Z]*$')).min(2).max(30).required(),
    phoneNumber: Joi.required(),
    gender: Joi.string().valid("Male", "Female", "other").required(),
    dob:Joi.required()
})


export const loginValidate = Joi.object({
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}).required(),
    password:Joi.string().min(2).max(10).required()
})


  export const forgetPasswordValidate = Joi.object({
    newPassword: Joi.string().token().min(5).max(30).required(),
    confirmPassword: Joi.string().required(),
  });
  

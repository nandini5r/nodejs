import Joi from "joi"

export const registerValidate = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}).required(),
    username:Joi.string().min(4).max(20).required(),
    password: Joi.string().token().min(2).max(30).required(),
    firstName: Joi.string().pattern(new RegExp('^[a-zA-Z]*$')).min(2).max(30).required(),
    lastName: Joi.string().pattern(new RegExp('^[a-zA-Z]*$')).min(2).max(30).required(),
})


export const loginValidate = Joi.object({
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}).required(),
    password:Joi.string().min(2).max(10).required()
})

  export const addressValidate = Joi.object({
    street: Joi.string().alphanum().trim().min(3).max(50).required(),
    house_no: Joi.string().alphanum().trim().min(3).max(50).required(),
    landmark: Joi.string().alphanum().trim().min(3).max(50).required(),
    city: Joi.string().trim().min(3).max(50).required(),
    country: Joi.string().trim().min(3).max(50).required(),
    state: Joi.binary().required(),
    address_type: Joi.string().max(10).required(),
    zipcode: Joi.number().max(6).required(),
  });
  
  
  export const forgetPasswordValidate = Joi.object({
    newPassword: Joi.string().token().min(5).max(30).required(),
    confirmPassword: Joi.string().token().min(5).max(30).required(),
  });
  

import Joi from "joi"

export const registerValidate = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}).required(),
    username:Joi.string().min(4).max(20).token().required(),
    password: Joi.string().token().min(8).max(30).required(),
    firstName: Joi.string().pattern(new RegExp('^[a-zA-Z]*$')).min(2).max(30).required(),
    lastName: Joi.string().pattern(new RegExp('^[a-zA-Z]*$')).min(2).max(30).required(),
})


export const loginValidate = Joi.object({
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}).required(),
    password:Joi.string().min(2).max(30).required()
})
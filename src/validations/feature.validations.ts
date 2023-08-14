import Joi from "joi"

export const updateUserValidation = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).optional(),
    userName: Joi.string().min(4).max(20).optional(),
    firstName: Joi.string().pattern(new RegExp('^[a-zA-Z]*$')).min(2).max(30).optional(),
    lastName: Joi.string().pattern(new RegExp('^[a-zA-Z]*$')).min(2).max(30).optional(),
    phoneNumber: Joi.optional(),
    gender: Joi.string().valid("Male", "Female", "other").optional(),
    dob: Joi.optional()
})

export const createPinValid = Joi.object({
    title:Joi.string().min(2).max(20).required(),
    category_id:Joi.number().required(),
    user_id:Joi.number().required(),
    description:Joi.string().min(4).max(20).required(),
    like_count:Joi.number().required(),
    comment_count:Joi.number().required(),
    image:Joi.optional()
})

export const updatePinValid = Joi.object({
    title:Joi.string().min(2).max(20).optional(),
    category_id:Joi.number().optional(),
    user_id:Joi.number().optional(),
    description:Joi.string().min(4).max(20).optional(),
    like_count:Joi.number().optional(),
    comment_count:Joi.number().optional(),
    image:Joi.optional()
})


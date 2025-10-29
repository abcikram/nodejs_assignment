import Joi from "joi";

export const createUserSchema = Joi.object({
    name: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .required()
        .messages({
            "string.empty": "Name is required",
            "string.min": "Name must be at least 2 characters",
            "string.max": "Name should not be longer than 50 characters",
        }),

    email: Joi.string()
        .email()
        .required()
        .messages({
            "string.email": "Please enter a valid email address",
            "string.empty": "Email is required",
        }),
});

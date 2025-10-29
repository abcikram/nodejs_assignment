import userService from "../services/user.service.js";
import { sendError } from "../utils/sendError.js";
import { createUserSchema } from "../validation/user.validation.js";

export class UserController {
    constructor() {}

    async getUsers(req, res) { 
        try {
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;
            const users = await userService.getAllUsers({ isDeleted: false }, page, limit);
            res.status(200).json({ success: true, data: users, message: "Users fetched successfully" });
        } catch (err) {
            return sendError(res, err.message, err.statusCode || 500);
        }
    }

    async createUser(req, res) {
        try {
            const { name, email } = req.body;
            const { error } = createUserSchema.validate(req.body);
            if (error) {
                const messages = error.details.map((err) => err.message);
                return res.status(400).json({ success: false, errors: messages });
            }

            const user = await userService.createUser({ name, email });

            return res
                .status(201)
                .json({ success: true, message: "User created successfully", data: user });

        } catch (err) {
            return sendError(res, err.message, err.statusCode || 500);
        }
    };
}

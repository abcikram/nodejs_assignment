import { UserRepository } from "../repositories/user.repository.js";
import  createHttpError from 'http-errors'

class UserService {
    constructor() {
        this.userRepo = new UserRepository();
    }

    async getAllUsers(data, page = 1, limit = 10) {
        return this.userRepo.paginatedUsers(data, page, limit);
    }
    async createUser(data) {
        const check = await this.userRepo.findByEmail(data.email);
        if (check) {
            throw createHttpError.BadRequest("Email already exists");
        }
        return await this.userRepo.create(data);
    }
}

export default new UserService();
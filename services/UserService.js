import ApiError from "../exceptions/ApiError.js";
import TokenService from "./TokenService.js";

const users = []

class UserService {
    static async create(user) {
        if (users.find(item => item.email === user.email)) {
            throw ApiError.BadRequest('Пользователь уже существует')
        }
        users.push(user);
        return await TokenService.generateToken(user)
    }
    static async getUser(email) {
        const user = users.find(item => item.email === email);
        if (!user) throw ApiError.BadRequest('Такого пользователя нет');
        return user;
    }
    static async activate(email) {
        return true;
    }
}

export default UserService;

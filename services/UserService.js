import ApiError from "../exceptions/ApiError.js";

const users = []
class UserService {
    static async create(user){
        if (users.find(item => item.email === user.email)) {
            throw ApiError.BadRequest('Пользователь уже существует')
        };
        users.push(user);
        return users;
    }
}

export default UserService;

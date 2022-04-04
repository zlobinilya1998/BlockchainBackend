import UserService from "./UserService.js";
import TokenService from "./TokenService.js";

class AuthService {
    static async login(email,password) {
        return await UserService.getUser(email);
    }
}

export default AuthService;

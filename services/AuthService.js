import UserService from "./UserService.js";
import TokenService from "./TokenService.js";

class AuthService {
    static async login(email) {
        const user = await UserService.getUser(email);
        return user;
    }
}

export default AuthService;

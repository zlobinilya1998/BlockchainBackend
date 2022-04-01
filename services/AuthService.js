import UserService from "./UserService.js";
import TokenService from "./TokenService.js";

class AuthService {
    static async login(email) {
        await UserService.getUser(email);
        return TokenService.generateToken(email);
    }
}

export default AuthService;

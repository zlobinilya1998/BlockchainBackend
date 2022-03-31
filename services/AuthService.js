import ApiError from "../exceptions/ApiError.js";
import UserService from "./UserService.js";

class AuthService {
    static async login(email) {
        await UserService.getUser(email);
        return await this.generateToken();
    }

    static async generateToken() {
        return 'Bearer loremdasdasvdwcqmkemcikqwenmbqjkwnmejkmqwkemk';
    }
}

export default AuthService;

import jwt from "jsonwebtoken";
import ApiError from "../exceptions/ApiError.js";
class TokenService {
    static async generateToken(payload) {
        try {
            const accessToken = jwt.sign(payload,process.env.JWT_SECRET);
            return accessToken;
        } catch (e) {
            throw new ApiError(500,'env.JWT_SECRET are not provided',e)
        }
    }
}

export default TokenService;

import jwt from "jsonwebtoken";
class TokenService {
    static async generateToken(payload) {
        const accessToken = jwt.sign(payload,process.env.JWT_SECRET);
        return accessToken;
    }
}

export default TokenService;

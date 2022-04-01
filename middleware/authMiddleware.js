import ApiError from "../exceptions/ApiError.js";

const authMiddleware = (req, res, next) => {
    try {
        const {authorization} = req.headers;
        const token = authorization.split(' ')[1];
        if (token) return next();
        throw ApiError.Unauthorized()
    } catch
        (e) {
        throw ApiError.Unauthorized();
    }
}

export default authMiddleware;

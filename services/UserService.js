import ApiError from "../exceptions/ApiError.js";
import TokenService from "./TokenService.js";
import db from "../db.js";

const users = []

class UserService {
    static async create(user) {
        const {login, email, password} = user;
        //Check if user exists
        const {rowCount} = await db.query('SELECT email FROM users where email = $1', [email]);

        if (rowCount > 0) {
            throw ApiError.BadRequest('Пользователь уже существует');
        }
        const newUser = await db.query('INSERT INTO users (login,email,password) values ($1, $2, $3) RETURNING *', [login, email, password]);
        return await TokenService.generateToken(newUser.rows[0])
    }

    static async getAll() {
        const data = await db.query('SELECT * from users');
        return data.rows;
    }

    static async getUser(email) {
        const data = await db.query('SELECT login, email from users where email = $1',[email]);
        if (data.rowCount === 0) throw ApiError.BadRequest('Такого пользователя нет');
        return data.rows[0];
    }

    static async activate(email) {
        return true;
    }
}

export default UserService;

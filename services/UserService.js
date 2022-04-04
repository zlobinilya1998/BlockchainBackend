import ApiError from "../exceptions/ApiError.js";
import TokenService from "./TokenService.js";
import db from "../db.js";
import bcrypt from "bcrypt";


class UserService {
    static async create(user) {
        const {login, email, password} = user;
        //Check if user exists
        const {rowCount} = await db.query('SELECT email FROM users where email = $1', [email]);

        if (rowCount > 0) {
            throw ApiError.BadRequest('Пользователь уже существует');
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const newUser = await this.createUser({...user,password: hashPassword});
        return await TokenService.generateToken(newUser);
    }

    static async createUser(user){
        const newUser = await db.query('INSERT INTO users (login,email,password) values ($1, $2, $3) RETURNING *', [user.login, user.email, user.password]);
        return newUser.rows[0];
    }

    static async getAll() {
        const data = await db.query('SELECT * from users');
        return data.rows;
    }

    static async getUser(email) {
        const data = await db.query('SELECT login, email, password from users where email = $1',[email]);
        if (data.rowCount === 0) throw ApiError.BadRequest('Такого пользователя нет');
        return data.rows[0];
    }

    static async activate(email) {
        return true;
    }
}

export default UserService;

import ApiError from "../exceptions/ApiError.js";
const errorMiddleware = (err,req,res,next) => {
    console.log(err)
    if (err instanceof ApiError) return res.status(err.status).send({message: err.message, errors: err.errors})
    return res.status(500).json({message: 'Необработанная ошибка'})
}

export default errorMiddleware;

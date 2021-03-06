

class ApiError extends Error {
    status;
    errors;
    constructor(status,message = '',errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static Unauthorized(){
        return new ApiError(401,'Пользователь не авторизован')
    }
    static BadRequest(message = 'Ошибка в теле запроса',errors = []){
        return new ApiError(400,message,errors);
    }

}
export default ApiError

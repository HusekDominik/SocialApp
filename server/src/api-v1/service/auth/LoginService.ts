import {LoginRequest, RegisterRequest} from "../../interface/auth/AuthInterface";

const loginUser = (user: LoginRequest) => {
    if(!user) return ;
    return "lol";
}

export default {
    loginUser
}
import {RegisterRequest} from "../../interface/auth/AuthInterface";
import pool from "../../security/database";

export const registerUser = async(user: RegisterRequest) => {
    try {
       console.log(user);
    }
    catch (error){

    }
}
import  { Request, Response } from "express";
import LoginService from "../service/auth/LoginService";


/**
 * @description Zaregistruje uživatele
 */
const registerNewUser = (req : Request, res : Response) => {
    const user = LoginService.loginUser(req.body);
}


/**
 * @description přihláší uživatele
 */
const loginUser = (req : Request, res: Response) => {

}


export default {
    registerNewUser,
    loginUser
};
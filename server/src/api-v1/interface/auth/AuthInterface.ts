export interface RegisterRequest {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}
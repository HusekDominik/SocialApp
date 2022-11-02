declare global {
    namespace NodeJS {
        interface ProcessEnv extends IProcessEnv { }
    }
}


export interface IProcessEnv {
    SERVER_PORT: number;
    CLIENT_URL: string;
    DATABASE: string;
    DATBASE_USER: string;
    DATBASE_HOST: string;
    DATBASE_PASSWORD: string;
    DATABASE_PORT: number;
}

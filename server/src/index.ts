import  express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import V1AuthRoutes from "./api-v1/routes/AuthRoutes";


const app = express();
dotenv.config();

app.use(cookieParser());
app.use(cors(
    {
        origin: process.env.CLIENT_URL
    }
));

app.use(process.env.API_PREFIX + "/auth", V1AuthRoutes);

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.listen(SERVER_PORT, () => console.log("server is listening on port " + SERVER_PORT));
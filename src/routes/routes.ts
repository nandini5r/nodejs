import { Application } from "express";
import { login, sign_up } from "../controllers/auth/auth.controllers";

export default function routes(app:Application){

    app.post('/signup',sign_up)
    app.post('/login',login)
}
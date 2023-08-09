import { Application } from "express";
import { forgetPassword, logOut, login, sign_up } from "../controllers/auth/onboarding.controller";

export const onboardingRoutes = (app: Application) => {


    app.post('/signup', sign_up),

    app.post('/login', login),

    app.get('/logout', logOut),

    app.post('/forgetPass', forgetPassword)

}
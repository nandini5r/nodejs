import { Application } from "express";
import { forgetPassword, logOut, login, sign_up } from "../controllers/auth/onboarding.controller";
import { pinRoutes } from "./pin.routes";
import { categoryRoutes } from "./category.routes";
import { commentsRoutes } from "./comment.routes";
import { userRoutes } from "./user.routes";

export const onboardingRoutes = (app: Application) => {
    app.post('/signup', sign_up),
    app.post('/login', login),
    app.post('/logout', logOut),
    app.post('/forgetPass', forgetPassword)

}

export const featureRoutes = (app: Application) => {
    pinRoutes(app);
    categoryRoutes(app);
    commentsRoutes(app);
    userRoutes(app)
}
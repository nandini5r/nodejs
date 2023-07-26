import { Application } from "express";
import { create_post } from "../controllers/post.controllers";
import { sign_up } from "../controllers/user.controller";
import { login } from "../controllers/login.controller";
import { create_comment } from "../controllers/create_comment.controller";
import { authUser } from "../middlewares/auth.middleware";
import { likeOnPost } from "../controllers/create_like.controllers";

export default function routes(app:Application){

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Authenticate user
 *     description: Authenticate a user with their credentials.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
    app.post("/login",login);
/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Authenticate user
 *     description: Authenticate a user with their credentials.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               username:
 *                 type:string
 *               profileData:
 *                  type:string
 *                
 *
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

    app.post("/signup",sign_up);

    app.post("/create-post",authUser,create_post);
    app.post("/create-comment",authUser,create_comment)
     app.post("/like",authUser,likeOnPost);
    //  app.get("/userdata",authUser,fetchUserInfo)
}

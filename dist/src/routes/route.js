"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_controllers_1 = require("../controllers/post.controllers");
const user_controller_1 = require("../controllers/user.controller");
const login_controller_1 = require("../controllers/login.controller");
const create_comment_controller_1 = require("../controllers/create_comment.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const create_like_controllers_1 = require("../controllers/create_like.controllers");
function routes(app) {
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
    app.post("/login", login_controller_1.login);
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
    app.post("/signup", user_controller_1.sign_up);
    app.post("/create-post", auth_middleware_1.authUser, post_controllers_1.create_post);
    app.post("/create-comment", auth_middleware_1.authUser, create_comment_controller_1.create_comment);
    app.post("/like", auth_middleware_1.authUser, create_like_controllers_1.likeOnPost);
    //  app.get("/userdata",authUser,fetchUserInfo)
}
exports.default = routes;

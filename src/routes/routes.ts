import { Application } from "express";
import { logOut, login, sign_up } from "../controllers/auth/auth.controllers";
import { deleteUserProfile, getUserProfile, updateUserProfile } from "../controllers/homepage/user.controllers";
import { PlaceBid, ProductImage, addProduct, deleteProduct, getProductDetails, updateProductDetails } from "../controllers/homepage/product.controller";
import { addAddress, deleteAddress, updateAddress } from "../controllers/homepage/address.controller";
import { authUser } from "../middleware/authUser.middleware";
import { Multer } from "../Validations/multer";

export default function routes(app:Application){
/**
 * @openapi
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
 *               firstName:
 *                  type: string
 *               lastName:
 *                   type:string
 *               userName:
 *                   type:string
 *               gender:
 *                   type:string
 *               dob:
 *                   type:date
 *               phoneNumber:
 *                   type:bigInt
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Successful Signup
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
    app.post('/signup',sign_up),


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
    app.post('/login',login),

        /**
 * @swagger
 * /logout:
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
 *               required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Successful logout
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
    app.get('/logout',authUser, logOut )
         //user




            /**
 * @swagger
 * /userProfile:
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
 *              email:
 *                 type: string
 *              password:
 *                 type: string
 *              userName:
 *                  type:string
 *              gender:
 *                  type:string
 *              dob:
 *                  type:date
 *              phoneNumber:
 *                  type:bigint
 *              firstName:
 *                  type:string
 *              lastName:
 *                  type:string
 *               required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User Profile 
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
    app.get('/userProfile',authUser,getUserProfile),

    app.delete('/deleteUser',authUser,deleteUserProfile),
    app.post('/updateUser',authUser,updateUserProfile)
    //home routes
    //Product
    app.post('/addProduct',authUser,addProduct),
    app.post('/updateProduct',updateProductDetails),
    app.delete('/deleteProduct/:id',deleteProduct)
    app.get('/getProductDetails',getProductDetails)
    app.post('/placeBid',authUser,PlaceBid),
    app.post('/product-image/:id',authUser, Multer.single("image"),ProductImage) 


    //address
    app.post('/addAddress',authUser,addAddress),
    app.patch('/updateAddress',authUser,updateAddress),
    app.delete('/deleteAddress/:id',authUser,deleteAddress)
}
   










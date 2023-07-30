import { Application } from "express";
import { logOut, login, sign_up } from "../controllers/auth/auth.controllers";
import { deleteUserProfile, getUserProfile, updateUserProfile } from "../controllers/homepage/user.controllers";
import { PlaceBid, ProductImage, addProduct, deleteProduct, getProductDetails, updateProductDetails } from "../controllers/homepage/product.controller";
import { addAddress, deleteAddress, updateAddress } from "../controllers/homepage/address.controller";
import { authUser, sessionManagement } from "../middleware/authUser.middleware";
import { Multer } from "../Validations/multer";

export default function routes(app:Application){
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
 *               firstName:
 *                  type: string
 *               lastName:
 *                   type:string
 *               userName:
 *                   type:string
 *               gender:
 *                   type:string
 *                  dob:
 *                   type:date
 *                phoneNumber
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
    app.get('/logout',authUser,sessionManagement, logOut )
         //user
    app.get('/userProfile',authUser,sessionManagement,getUserProfile),
    app.delete('/deleteUser',authUser,sessionManagement,deleteUserProfile),
    app.post('/updateUser',authUser,sessionManagement,updateUserProfile)
//home routes
//Product
    app.post('/addProduct',sessionManagement,addProduct),
    app.post('/updateProduct',sessionManagement,updateProductDetails),
    app.delete('/deleteProduct/:id',sessionManagement,deleteProduct)
    app.get('/getProductDetails',sessionManagement,getProductDetails)
    app.post('/placeBid',authUser,sessionManagement,PlaceBid),
    app.post('/product-image/:id',authUser,sessionManagement, Multer.single("image"),ProductImage) 


//address
    app.post('/addAddress',authUser,sessionManagement,addAddress),
    app.patch('/updateAddress',authUser,sessionManagement,updateAddress),
    app.delete('/deleteAddress/:id',authUser,sessionManagement,deleteAddress)
}
   










import { Application } from "express"
import { authUser } from "../middlewares/authUser.middleware"
import { deleteUserProfile, getUserProfile, profilePicture, updateUserProfile } from "../controllers/features/user.controller"
import { upload } from "../middlewares/multer"

export const userRoutes = (app: Application) => {
  
        app.get('/userProfile/:id', authUser, getUserProfile),
        app.delete('/deleteUserProfile/:id', authUser, deleteUserProfile),
        app.post('/updateUserProfile/:id', authUser, updateUserProfile),
        app.post('/profilePic/:id', authUser, upload.single("image"), profilePicture)
}
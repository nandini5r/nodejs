import { Application } from "express"
import { deleteUserProfile, getUserProfile, profilePicture, updateUserProfile } from "../controllers/features/user.controller"
import { upload } from "../middlewares/multer"
import { categoryImage, createCategory, deleteCategory, getCategoryDetails, updateCategory } from "../controllers/features/category.controller"
import { comment_count, createPin, getAllRecentPins, like_count, pinImage, pinOnTop, pinPicture, save_pin, searchFilter, setRecentPins, updatePin } from "../controllers/features/pin.controller"
import { createComment, like_on_comment, reply } from "../controllers/features/comment.controller"
import { authUser } from "../middlewares/authUser.middleware"

export const featureRoutes = (app: Application) => {
    //user
    app.get('/userProfile', authUser, getUserProfile),
    app.delete('/deleteUserProfile', authUser, deleteUserProfile),
    app.post('/updateUserProfile', authUser, updateUserProfile),
    app.post('/profilePic/:id', authUser, upload.single("image"), profilePicture)

    //category

    app.post('/createCategory', createCategory),
    app.get('/getCategory/:id',authUser, getCategoryDetails),
    app.post('updateCategory', authUser, updateCategory),
    app.delete('deleteCategory', authUser, deleteCategory),
    app.post('/categoryImage/:id', authUser, upload.single("image"), categoryImage)

    //pin

    app.post('/pin', authUser, createPin),
    app.post('/updatePin', authUser, updatePin),
    app.post('/pinImage/:id', authUser, upload.single("image"), pinImage)
    app.post('/like/:id', authUser, like_count),
    app.post('/comment_count/:id', authUser, comment_count),
    app.post('/save', authUser, save_pin),
    app.get('/search', searchFilter),
    app.get('/recentPins', authUser, setRecentPins),
    app.get('/getRecentPins', authUser, getAllRecentPins),
    app.post('/pinPicture', authUser, pinPicture);
    app.post('/pinOnTop', authUser, pinOnTop);

    //comment
    app.post('/comment', authUser, createComment),
    app.post('/likeComment/:id', authUser, like_on_comment)
    app.post('/reply', authUser, reply)
}
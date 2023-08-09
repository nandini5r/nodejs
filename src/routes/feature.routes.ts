import { Application } from "express"
import { deleteUserProfile, getUserProfile, profilePicture, updateUserProfile } from "../controllers/features/user.controller"
import { upload } from "../middlewares/multer"
import { categoryImage, createCategory, deleteCategory, getCategoryDetails, updateCategory } from "../controllers/features/category.controller"
import { comment_count, createPin, getAllRecentPins, like_count, pinImage, pinOnTop, pinPicture, save_pin, searchFilter, setRecentPins, updatePin } from "../controllers/features/pin.controller"
import { createComment, like_on_comment, reply } from "../controllers/features/comment.controller"

export const featureRoutes = (app: Application) => {
    //user
        app.get('/userProfile', getUserProfile),
        app.delete('/deleteUserProfile', deleteUserProfile),
        app.post('/updateUserProfile', updateUserProfile),
        app.post('/profilePic/:id', upload.single("image"), profilePicture)

    //category

        app.post('/createCategory', createCategory),
        app.get('/getCategory', getCategoryDetails),
        app.post('updateCategory', updateCategory),
        app.delete('deleteCategory', deleteCategory),
        app.post('/categoryImage/:id', upload.single("image"), categoryImage)

    //pin

        app.post('/pin', createPin),
        app.post('/updatePin', updatePin),
        app.post('/pinImage/:id', upload.single("image"), pinImage)
        app.post('/like/:id', like_count),
        app.post('/comment_count/:id', comment_count),
        app.post('/save', save_pin),
        app.get('/search', searchFilter),
        app.get('/recentPins', setRecentPins),
        app.get('/getRecentPins', getAllRecentPins),
        app.post('/pinPicture', pinPicture);
        app.post('/pinOnTop', pinOnTop);

    //comment
        app.post('/comment', createComment),
        app.post('/likeComment/:id', like_on_comment)
        app.post('/reply', reply)
}
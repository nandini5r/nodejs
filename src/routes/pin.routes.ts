import { Application } from "express";
import { comment_count, createPin, getAllRecentPins, like_count, pinImage, pinOnTop, pinPicture, save_pin, searchFilter, setRecentPins, updatePin } from "../controllers/features/pin.controller";
import { authUser } from "../middlewares/authUser.middleware";
import { upload } from "../middlewares/multer";


export const pinRoutes = (app: Application) => {

app.post('/pin', authUser, createPin),
app.post('/updatePin', authUser, updatePin),
app.post('/pinImage/:id',authUser, upload.single("image"), pinImage)
app.post('/like/:id', authUser, like_count),
app.post('/comment_count/:id', authUser, comment_count),
app.post('/save', authUser, save_pin),
app.get('/search', searchFilter),
app.get('/recentPins', authUser, setRecentPins),
app.get('/getRecentPins', authUser, getAllRecentPins),
app.post('/pinPicture', authUser, pinPicture);
app.post('/pinOnTop', authUser, pinOnTop);
}
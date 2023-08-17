import { Application } from "express"
import { categoryImage, createCategory, deleteCategory, getCategoryDetails, updateCategory } from "../controllers/features/category.controller"
import { authUser } from "../middlewares/authUser.middleware"
import { upload } from "../middlewares/multer"

export const categoryRoutes = (app: Application) => {

        app.post('/createCategory', createCategory),
        app.get('/getCategory/:id', authUser, getCategoryDetails),
        app.post('/updateCategory/:id', authUser, updateCategory),
        app.delete('/deleteCategory/:id', authUser, deleteCategory),
        app.post('/categoryImage/:id', authUser, upload.single("image"), categoryImage)
}
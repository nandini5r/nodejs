import { Application } from "express"
import { createComment, like_on_comment, reply } from "../controllers/features/comment.controller"
import { authUser } from "../middlewares/authUser.middleware"

export const commentsRoutes = (app: Application) => {

  app.post('/comment', authUser, createComment),
  app.post('/likeComment/:id', authUser, like_on_comment)
  app.post('/reply', authUser, reply)
}
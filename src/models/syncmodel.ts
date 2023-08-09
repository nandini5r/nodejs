import Category from "./category.model"
import Comment from "./comment.model"
import Like from "./like.model"
import Pin from "./pin.model"
import Reply from "./reply.model"
import Saved from "./saved.model"
import Session from "./session.model"
import User from "./user.model"

export const syncModels = () => {
    Pin.sync({alter:true}).then(() => {
        console.log("Pin model synced")
    })
    User.sync().then(() => {
        console.log("User model synced")
    })
    Session.sync().then(() => {
        console.log("Session model synced")
    })
    Saved.sync().then(() => {
        console.log("Saved model synced")
    })
    Reply.sync().then(() => {
        console.log("Reply model synced")
    })
    Like.sync().then(() => {
        console.log("Like model synced")
    })
    Comment.sync({alter:true}).then(() => {
        console.log("Comment model synced")
    })
    Category.sync().then(() => {
        console.log("Category model synced")
    })
}
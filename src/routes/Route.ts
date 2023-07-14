import { Application } from "express";
import { Sign_up } from "../controllers/controller.register";
import { Login } from "../controllers/controller.login";
import { Create_post } from "../controllers/controller.create-post";
import { Create_comment } from "../controllers/controller.create-comment";
import { Delete_comments } from "../controllers/controller.delete-comment";
import { like_count } from "../controllers/controller.like_count";
import { recent_comments } from "../controllers/controller.recent-comments";

export default function routes(app:Application){

    app.post('/login',Login)
    
    app.post("/register", Sign_up);
    
    app.post("/create-post",Create_post);

    app.get("/create_comment",  Create_comment)

    app.delete("'/comments/:id" ,Delete_comments);

    app.put("/comments/:id",like_count)
    
    app.get("/recentComment",recent_comments);
}


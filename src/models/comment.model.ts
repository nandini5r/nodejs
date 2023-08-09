import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db"

class Comment extends Model {
    public id!: number
    public user_id!: number;
    public pin_id!: number;
    public comment_content!: string;
    public like_count!:number;
}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER
    },

    pin_id: {
        type: DataTypes.INTEGER
    },
    comment_content: {
        type: DataTypes.STRING
    },
    like_count: {
        type: DataTypes.INTEGER
    }


}, {
    sequelize,
    modelName: 'Comment'
});

export default Comment;
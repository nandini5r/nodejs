import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db"

class Reply extends Model {
    public user_id!: number;
    public reply_content!:string;
    public comment_id!:number
}

Reply.init({

    user_id: {
        type: DataTypes.INTEGER
    },

    reply_content: {
        type: DataTypes.STRING
    },
    comment_id: {
        type: DataTypes.INTEGER
    }

}, {
    sequelize,
    modelName: 'Reply'
});


export default Reply;
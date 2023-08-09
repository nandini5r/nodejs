import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db"
import Category from "./category.model";

class Pin extends Model {
    public id!: number;
    public user_id!: number;
    public category_id!: number;
    public description!:string;
    public image!:Blob;
    public title!:string;
    public like_count!:number;
    public comment_count!:number;
    public pinned!:boolean;


}

Pin.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER
    },

    category_id: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.BLOB
    },
    title: {
        type: DataTypes.STRING
    },
    like_count: {
        type: DataTypes.INTEGER
    },
    comment_count: {
        type: DataTypes.INTEGER
    },
    pinned:{
        type:DataTypes.BOOLEAN
    }


}, {
    sequelize,
    modelName: 'Pin'
});


export default Pin;
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db"

class Like extends Model {
    public id!:number
    public user_id!: number;
    public pin_id!:number;
}

Like.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    user_id: {
        type: DataTypes.INTEGER
    },

    pin_id: {
        type: DataTypes.INTEGER
    },
  

}, {
    sequelize,
    modelName: 'Like'
});


export default Like;
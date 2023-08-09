import { DataTypes,Model } from "sequelize";
import {sequelize} from "../database/db"

class Saved extends Model {
    public pin_id!:number;
    public user_id!:number
}

Saved.init({
   
    pin_id:{
        type:DataTypes.INTEGER,
      
    },
    user_id:{
        type:DataTypes.INTEGER
    }

}, {
  sequelize,
  modelName: 'Saved' 
});


export default Saved;
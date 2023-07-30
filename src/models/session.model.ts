import { DataTypes,Model } from "sequelize";
import {sequelize} from "../database/db"

class Session extends Model {}

Session.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    userId:{
        type:DataTypes.INTEGER
    },
    device_type:{
        type:DataTypes.STRING
    },
    deviceId:
    {
        type:DataTypes.INTEGER
    }
}, {
  sequelize, // We need to pass the connection instance
  modelName: 'Product' // We need to choose the model name
});
// Session.sync().then(()=>{
//     console.log("Session model synced")
// })
console.log(Session === sequelize.models.Session); 

export default Session;
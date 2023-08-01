import { DataTypes,Model } from "sequelize";
import {sequelize} from "../database/db"

class Session extends Model {
    public id!:number;
    public userId!:number;
    public device_type!: string;
    public deviceId!:number;


}

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
        type:DataTypes.STRING,
        defaultValue:null
    },
    deviceId:{
        type:DataTypes.INTEGER,
        defaultValue:null
    }
}, {
  sequelize, // We need to pass the connection instance
  modelName: 'Session' // We need to choose the model name
});




Session.sync({alter:true}).then(()=>{
    console.log("Session model synced")
})
console.log(Session === sequelize.models.Session); 

export default Session;
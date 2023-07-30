import { DataTypes,Model } from "sequelize";
import {sequelize} from "../database/db"

class User extends Model {}

User.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
 
    gender:{
        type:DataTypes.STRING,
        
    },
    dob:{
        type:DataTypes.DATE,
    },
    phoneNumber:{
        type:DataTypes.BIGINT,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
}, {
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});
// User.sync().then(()=>{
//     console.log("user model synced")
// })
console.log(User === sequelize.models.User); 

export default User;
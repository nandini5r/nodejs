import { DataTypes } from "sequelize";
import { sequelize } from "../database/db";


export const User = sequelize.define('User', {
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email_id: {
    type: DataTypes.STRING,
    allowNull :false
  },
  password:{
    type:DataTypes.STRING,
    allowNull :false

  }
}, {
  // Other model options go here
});
User.sync().then(()=>{
    console.log("user model synced")
})
// `sequelize.define` also returns the model
console.log(User === sequelize.models.User)

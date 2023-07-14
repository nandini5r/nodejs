import { DataTypes } from "sequelize";
import { sequelize } from "../database/db";


export const Comment = sequelize.define('Comment', {
  comment_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comment_content: {
    type: DataTypes.STRING,
    allowNull :false
  },
    like_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  like_count:{
    type:DataTypes.INTEGER,
    allowNull :false
  },
  post_id:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_id:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
});
Comment.sync().then(()=>{
    console.log("Comment model synced")
})
// `sequelize.define` also returns the model
console.log(Comment === sequelize.models.Comment)

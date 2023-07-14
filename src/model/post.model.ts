import { DataTypes } from "sequelize";
import { sequelize } from "../database/db";


export const Post = sequelize.define('Post', {
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull :false
  },
  post_url:{
    type:DataTypes.STRING,
    allowNull :false
  }
}, {
  // Other model options go here
});
Post.sync().then(()=>{
    console.log("post model synced")
})
// `sequelize.define` also returns the model
console.log(Post === sequelize.models.Post)

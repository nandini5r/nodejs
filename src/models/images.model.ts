import { DataTypes,Model } from "sequelize";
import {sequelize} from "../database/db"

class Image extends Model {}

Image.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    productId:{
     type:DataTypes.INTEGER
    },
    images:{
        type:DataTypes.BLOB
    }

  
}, {
  sequelize, // We need to pass the connection instance
  modelName: 'Image' // We need to choose the model name
});
Image.sync().then(()=>{
    console.log("Image model synced")
})
console.log(Image === sequelize.models.Image); 

export default Image;
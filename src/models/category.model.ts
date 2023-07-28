import { DataTypes,Model } from "sequelize";
import {sequelize} from "../database/db"

class Category extends Model {}

Category.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    categoryName: {
        type:DataTypes.STRING
    },
    categoryImage: {
        type:DataTypes.BLOB
    }
}, {
  sequelize, // We need to pass the connection instance
  modelName: 'Category' // We need to choose the model name
});
Category.sync().then(()=>{
    console.log("Category model synced")
})
console.log(Category === sequelize.models.Category); 

export default Category;
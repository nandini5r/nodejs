import { DataTypes,Model } from "sequelize";
import {sequelize} from "../database/db"

class Product extends Model {
    public id!:number;
    public productName!:string;
    public userId!:number;
    public categoryId!:number;
    public title!:string;
    public description!:string;
    public addressId!:number;
    public base_price!:number;
    public latest_bid!:number;
    public bidder_id!:number;
}

Product.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    productName:{
     type:DataTypes.STRING
    },
    userId: {
        type:DataTypes.INTEGER
    },
    categoryId: {
        type:DataTypes.INTEGER
    },
    title: {
        type:DataTypes.STRING
    },
    description: {
       type: DataTypes.STRING
    },
    addressId: {
        type:DataTypes.INTEGER
    },
    base_price:{
         type:DataTypes.INTEGER
        },
    latest_bid:{
        type: DataTypes.INTEGER
    },
    bidderId: {
        type:DataTypes.INTEGER
    }
}, {
  sequelize, // We need to pass the connection instance
  modelName: 'Product' // We need to choose the model name
});
// Product.sync().then(()=>{
//     console.log("Product model synced")
// })
console.log(Product === sequelize.models.Product); 

export default Product;
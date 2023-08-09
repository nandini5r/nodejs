import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db"
import Pin from "./pin.model";

class Category extends Model {
    public id!: number
    public name!: string;
    public parent_id!: number;
    public image!: Blob;

}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    parent_id: {
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.BLOB
    },


}, {
    sequelize,
    modelName: 'Category'
});


Category.hasMany(Pin);
Pin.belongsTo(Category, { foreignKey: 'category_id' });

export default Category;
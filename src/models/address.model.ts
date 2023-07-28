import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db"

class Address extends Model { }

Address.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    house_no: {
        type: DataTypes.STRING
    },

    street: {
        type: DataTypes.STRING
    },

    landmark: {
        type: DataTypes.STRING
    },

    country: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    zipCode: {
        type: DataTypes.BIGINT
    },

    userId: {
        type: DataTypes.INTEGER
    },
    state: {
        type: DataTypes.STRING
    },

    address_type: {
        type: DataTypes.ENUM("Work", "Home", "others"),

    },
    
}, {
    sequelize, // We need to pass the connection instance
    modelName: 'Address' // We need to choose the model name
});
Address.sync().then(() => {
    console.log("Address model synced")
})
console.log(Address === sequelize.models.Address);

export default Address;
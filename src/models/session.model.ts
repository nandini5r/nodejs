import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db"

class Session extends Model {
    public id!: number;
    public user_id!: number;
    public device_type!: string;
    public device_id!: number;
}

Session.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    device_type: {
        type: DataTypes.STRING,

    },
    device_id: {
        type: DataTypes.INTEGER,

    }
}, {
    sequelize,
    modelName: 'Session'
});


export default Session;
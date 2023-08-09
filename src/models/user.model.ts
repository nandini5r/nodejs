import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db"

class User extends Model {
    public id!: number;
    public userName!: string;
    public email!: string;
    public password!: string;
    public gender!: string;
    public dob!: Date;
    public profilePic!:Blob;
    public phoneNumber!: bigint;
    public firstName!: string;
    public lastName!: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profilePic:{
        type: DataTypes.BLOB,
    },
    gender: {
        type: DataTypes.STRING,

    },
    dob: {
        type: DataTypes.DATE,
    },
    phoneNumber: {
        type: DataTypes.BIGINT,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'User'
});



export default User;
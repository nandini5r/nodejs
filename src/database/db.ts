import { Dialect, Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config()
 export const sequelize = new Sequelize('Pinterest', 'postgres', 'newpassword', {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  
  });

 
 export const connectDB = async  () =>{

    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}
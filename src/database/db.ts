import { Sequelize } from "sequelize";
import {createClient} from "redis"
 export const sequelize = new Sequelize('advertisement', 'postgres', 'newpassword', {
    host: 'localhost',
    dialect: 'postgres'
  
  });

 
 export const connectDB = async  () =>{

    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully 11.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}
 export const client = createClient()
  client.on("error", (err:Error) => console.log("Redis Client Error", err));



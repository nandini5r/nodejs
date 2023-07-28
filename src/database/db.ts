import { Sequelize } from "sequelize";

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



import { Sequelize } from "sequelize";

 const sequelize = new Sequelize('user_crud', 'postgres', 'newpassword', {
    host: 'localhost',
    dialect: 'postgres'
  
  });

 
  const connectDB = async  () =>{

    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully 11.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}


export {connectDB, sequelize};
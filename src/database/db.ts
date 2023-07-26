import mongoose from 'mongoose';
// import * as models from "../models/syncControllers"
const DATABASE_URL = "mongodb://localhost:27017/instagram";


const connectDB = async () => {
  try {
    // models.PostData
    await mongoose.connect(DATABASE_URL);
    console.log('Connected Successfully...')
  } catch (error) {
    console.log(error)

  }
}

export default connectDB
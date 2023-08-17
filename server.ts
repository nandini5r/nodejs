import express, { Application } from "express";
import dotenv from 'dotenv';
import { connectDB } from "./src/database/db";
import { syncModels } from "./src/models/syncmodel";
import { featureRoutes, onboardingRoutes } from "./src/routes/onboarding.routes";
import { redis } from "./src/database/redis";
import swaggerDocs from "./src/swagger/swagger";

dotenv.config();
const app: Application = express();
const port = process.env.PORT;


app.use(express.json());



app.listen(port, () => {
    connectDB()
    // syncModels()
    onboardingRoutes(app)
    featureRoutes(app)
    redis()
    swaggerDocs(app,port);
    console.log(`[Server]: I am running at https://localhost:${port}`);
});
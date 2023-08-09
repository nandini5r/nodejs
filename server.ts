import express, { Application } from "express";
import dotenv from 'dotenv';
import { connectDB } from "./src/database/db";
import { syncModels } from "./src/models/syncmodel";
import { onboardingRoutes } from "./src/routes/onboarding.routes";
import { featureRoutes } from "./src/routes/feature.routes";
import { redis } from "./src/database/redis";
// import YAML from 'yamljs';
import swaggerDocs from "./src/swagger/swagger";
// const onboardingDoc = YAML.load('src/swagger/onboarding.yaml')

dotenv.config();
const app: Application = express();
const port = process.env.PORT;


app.use(express.json());

app.get('/', (req: any, res: any) => {
    res.send('Hello, this is Express + TypeScript');
});

app.listen(port, () => {
    connectDB()
    // syncModels()
    onboardingRoutes(app)
    featureRoutes(app)
    redis()
    swaggerDocs(app,port);
    console.log(`[Server]: I am running at https://localhost:${port}`);
});
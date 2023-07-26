import express, {Application} from 'express';
import connectDB from './src/database/db';
import routes from './src/routes/route';
import axios from 'axios';
// import { redis } from './src/database/redis';
import swaggerDocs from './src/swagger/swagger';
const app: Application = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: any, res: any)=>{
    res.send('Hello, this is Express + TypeScript');
});

app.listen(port, ()=> {
    connectDB();
    routes(app);
    swaggerDocs(app, 3000)
    // redis()
    console.log(`[Server]: I am running at https://localhost:${port}`);
});
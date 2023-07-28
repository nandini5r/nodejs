import express, {Application} from 'express';
import { connectDB } from './database/db';
import routes from './routes/routes';
const app: Application = express();
const port = 4000;

app.use(express.json());

app.get('/', (req: any, res: any)=>{
    res.send('Hello, this is Express + TypeScript');
});

app.listen(port, ()=> {
    connectDB();
    routes(app)
    console.log(`[Server]: I am running at https://localhost:${port}`);
});
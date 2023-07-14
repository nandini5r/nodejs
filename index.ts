import express, {Application} from 'express';
import { connectDB } from './src/database/db';

import routes from './src/routes/Route';
const app: Application = express();
const port = 3200;

app.use(express.json());
app.get('/', (req: any, res: any)=>{
    res.send('Hello, this is Express + TypeScript');
});
app.listen(port, ()=> {
    connectDB();
    routes(app);
    console.log(`[Server]: I am running at https://localhost:${port}`);
});



 
import express, {Application} from 'express';
import { connectDB } from './database/db';
import routes from './routes/routes';
import swaggerDocs from './swagger/swagger';
import sessions from 'express-session'
const app: Application = express();
const port = 4000;

app.use(express.json());
const oneDay = 1000 * 60 * 60 * 24;
// app.use(sessions({
//     secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
//     saveUninitialized:true,
//     cookie: { maxAge: oneDay },
//     resave: false 
// }));
app.get('/', (req: any, res: any)=>{
    res.send('Hello, this is Express + TypeScript');
});

app.listen(port, ()=> {
    connectDB();
    routes(app);
    swaggerDocs(app,7001);
    console.log(`[Server]: I am running at https://localhost:${port}`);
});
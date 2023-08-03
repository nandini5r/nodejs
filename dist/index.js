"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./src/database/db"));
const route_1 = __importDefault(require("./src/routes/route"));
// import { redis } from './src/database/redis';
const swagger_1 = __importDefault(require("./src/swagger/swagger"));
const redis_1 = require("./src/database/redis");
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello, this is Express + TypeScript');
});
app.listen(port, () => {
    (0, db_1.default)();
    (0, route_1.default)(app);
    (0, swagger_1.default)(app, 3000);
    (0, redis_1.redis)();
    console.log(`[Server]: I am running at https://localhost:${port}`);
});

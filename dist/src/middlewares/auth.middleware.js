"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const redis_1 = require("redis");
const client = (0, redis_1.createClient)();
client.on("error", (err) => console.log("Redis Client Error", err));
const authUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authToken = req.headers.authorization;
        console.log(req.headers.authorization, "header");
        if (!authToken) {
            const errmessage = "User is not authorized";
        }
        try {
            let token = jsonwebtoken_1.default.verify(authToken, "key");
            console.log(token, "token");
            console.log("Aaaaaaaa");
            let session_payload = {
                user_id: token === null || token === void 0 ? void 0 : token.userid,
                device_id: "1234",
                device_type: "google chrome"
            };
            yield user_model_1.sessionModel.insertMany([
                session_payload
            ]);
            console.log("11111111111resss");
            let result = yield client.set('session', JSON.stringify(session_payload));
            console.log(result, "resss");
            next();
        }
        catch (e) {
            res.send("UNAUTHORISED ACCESS");
        }
    }
    catch (_a) {
    }
});
exports.authUser = authUser;

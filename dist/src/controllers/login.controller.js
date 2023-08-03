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
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = require("../models/user.model");
const validations_1 = require("../validations/validations");
const Key = "key";
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    let { error } = yield validations_1.loginValidate.validateAsync(req.body);
    try {
        let user_exist = yield user_model_1.UserData.findOne({ email: email, password: password });
        console.log(user_exist, "AA");
        if (!user_exist) {
            const errormessage = "Unauthorized user ";
            res.status(500).json({ error: errormessage });
        }
        else {
            const matchPassword = yield bcrypt_1.default.compare(req.body.password, user_exist.password);
        }
        console.log(password, "ggggggggggg");
        const token = yield jsonwebtoken_1.default.sign({ userid: user_exist === null || user_exist === void 0 ? void 0 : user_exist._id }, Key, { expiresIn: '24h' });
        res.status(200).json({
            message: "Login succesfull",
            token: token
        });
    }
    catch (error) {
        console.error('Error creating new user:', error);
        next(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});
exports.login = login;

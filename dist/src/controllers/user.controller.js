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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sign_up = void 0;
const user_model_1 = require("../models/user.model");
const validations_1 = require("../validations/validations");
const sign_up = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    let { error } = yield validations_1.registerValidate.validateAsync(req.body);
    try {
        yield user_model_1.UserData.create(req.body);
        console.log("SignUp succesfull");
        return res.status(204).json({ message: "Signup successfull" });
        ;
    }
    catch (error) {
        console.error('Error creating new user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});
exports.sign_up = sign_up;

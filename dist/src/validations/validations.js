"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidate = exports.registerValidate = void 0;
const joi_1 = __importDefault(require("joi"));
exports.registerValidate = joi_1.default.object({
    email: joi_1.default.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    username: joi_1.default.string().min(4).max(20).token().required(),
    password: joi_1.default.string().token().min(8).max(30).required(),
    firstName: joi_1.default.string().pattern(new RegExp('^[a-zA-Z]*$')).min(2).max(30).required(),
    lastName: joi_1.default.string().pattern(new RegExp('^[a-zA-Z]*$')).min(2).max(30).required(),
});
exports.loginValidate = joi_1.default.object({
    email: joi_1.default.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: joi_1.default.string().min(2).max(30).required()
});

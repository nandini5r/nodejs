"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.followData = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = require("./user.model");
const followInfo = new mongoose_1.default.Schema({
    sendersId: {
        type: String,
        required: true,
        ref: user_model_1.UserData
    },
    receiversId: {
        type: String,
        required: true,
        ref: user_model_1.UserData
    },
    status: [
        {
            accepted: {
                type: Boolean
            },
            rejected: {
                type: Boolean
            },
            pending: {
                type: Boolean
            }
        }
    ]
});
exports.followData = mongoose_1.default.model('followData', followInfo);

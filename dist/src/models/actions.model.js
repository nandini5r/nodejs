"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionData = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = require("./user.model");
const commentDetails = new mongoose_1.default.Schema({
    comments: [
        {
            commentOnPost: {
                type: String
            },
            replyOnComment: {
                type: String
            }
        }
    ]
});
const likeDetails = new mongoose_1.default.Schema({
    likes: [
        {
            likeOnPost: {
                type: Number
            },
            likeOnComment: {
                type: Number
            }
        }
    ]
});
const actions = new mongoose_1.default.Schema({
    userId: {
        type: String,
        ref: user_model_1.UserData
    },
    postId: {
        type: String,
    },
    commentData: {
        type: [commentDetails],
    },
    likesData: {
        type: [likeDetails],
    },
});
exports.actionData = mongoose_1.default.model('ActionData', actions);

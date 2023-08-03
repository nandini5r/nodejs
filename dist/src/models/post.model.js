"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostData = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = require("./user.model");
const mediaDetails = new mongoose_1.default.Schema({
    media_category: [
        {
            image: {
                type: String
            },
            reels: {
                type: String
            },
            videos: {
                type: String
            }
        }
    ]
});
const posts = new mongoose_1.default.Schema({
    userId: {
        type: String,
        required: true,
        ref: user_model_1.UserData
    },
    description: {
        type: String,
        required: true
    },
    mediaData: {
        type: [mediaDetails],
    },
});
exports.PostData = mongoose_1.default.model('postData', posts);

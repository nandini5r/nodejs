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
exports.create_post = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const post_model_1 = require("../models/post.model");
const create_post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const { id } = req.body.tokenData;
        let userID = new mongoose_1.default.Types.ObjectId(id);
        let ans = yield post_model_1.PostData.aggregate([
            {
                $match: { _id: userID }
            },
            {
                $lookup: {
                    from: "posts",
                    localField: "_id",
                    foreignField: "userId",
                    as: "user_posts"
                }
            }
        ]);
        res.send(ans);
    }
    catch (error) {
        console.error('Error creating new post:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});
exports.create_post = create_post;

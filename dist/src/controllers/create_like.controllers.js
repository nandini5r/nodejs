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
exports.likeOnPost = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const actions_model_1 = require("../models/actions.model");
const post_model_1 = require("../models/post.model");
const likeOnPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { actionType, comment_content, postId, tokenData } = req.body;
        if (actionType === 'LIKE') {
            postId = new mongoose_1.default.Types.ObjectId(postId);
            yield post_model_1.PostData.findOneAndUpdate({ _id: postId }, { $inc: { likeCount: 1 } });
            let ans = yield actions_model_1.actionData.create({
                action: 'LIKE',
                userId: new mongoose_1.default.Types.ObjectId(tokenData.id),
                postId: new mongoose_1.default.Types.ObjectId(postId),
            });
            res.send(ans);
            return res.status(204).send({ message: "post liked " });
        }
    }
    catch (error) {
        console.error('Error liking the post:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});
exports.likeOnPost = likeOnPost;

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
exports.create_comment = void 0;
const actions_model_1 = require("../models/actions.model");
const create_comment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield actions_model_1.actionData.create(req.body);
        res.send("comment created");
        return res.status(204).send({ message: "comment created " });
    }
    catch (error) {
        console.error('Error creating a new comment:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});
exports.create_comment = create_comment;

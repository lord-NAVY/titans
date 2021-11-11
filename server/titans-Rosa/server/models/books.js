"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const BookSchema = new Schema({
    Question: String,
    Description: String,
    OptionA: String,
    OptionB: String,
    OptionC: String,
    OptionD: String
}, {
    collection: "books"
});
const Model = mongoose_1.default.model('Book', BookSchema);
exports.default = Model;
//# sourceMappingURL=books.js.map
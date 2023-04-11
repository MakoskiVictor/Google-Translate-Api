"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const translate_1 = require("../controllers/translate");
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    res.send("Backend of Google Translate Api");
});
router.get("/translate", (req, res) => {
    try {
        const [fromLanguage, toLanguage, text] = req.body;
        res.send((0, translate_1.translate)({ fromLanguage, toLanguage, text }));
    }
    catch (error) {
        res.send(error);
    }
});
exports.default = router;

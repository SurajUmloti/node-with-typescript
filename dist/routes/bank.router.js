"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var bank_service_1 = __importDefault(require("../services/bank.service"));
var bankRouter = express_1.Router();
var bankService = new bank_service_1.default();
bankRouter.get('/balance', function (req, res) {
    res.json(bankService.getBalance());
});
bankRouter.get('withdrawl', function (req, res) {
});
exports.default = bankRouter;
//# sourceMappingURL=bank.router.js.map
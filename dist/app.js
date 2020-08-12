"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var main_router_1 = __importDefault(require("./routes/main.router"));
var bank_router_1 = __importDefault(require("./routes/bank.router"));
dotenv_1.default.config();
var app = express_1.default();
// app.use();
app.use('', main_router_1.default);
app.use('/api/v1/account', bank_router_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
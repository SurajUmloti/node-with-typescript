"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mainRouter = express_1.Router();
mainRouter.get('/status', function (req, res) {
    res.send('Health Check - Server running - Ok');
});
exports.default = mainRouter;
//# sourceMappingURL=main.router.js.map
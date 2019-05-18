"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yoga_1 = require("yoga");
var context_1 = require("./dataSources/context");
exports.default = yoga_1.yogaContext(function (_a) {
    var req = _a.req;
    return new context_1.Context(req);
});
//# sourceMappingURL=context.js.map
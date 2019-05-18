"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_client_1 = require("../../.yoga/prisma-client");
var AuthSource_1 = require("./AuthSource");
var EmailSource_1 = require("./EmailSource");
var StripeSource_1 = require("./StripeSource");
var Context = /** @class */ (function () {
    // eslint-disable-next-line @typescript-eslint/no-parameter-properties
    function Context(req) {
        this.req = req;
        this.auth = new AuthSource_1.AuthSource(this);
        this.email = new EmailSource_1.EmailSource(this);
        this.prisma = prisma_client_1.prisma;
        this.stripe = new StripeSource_1.StripeSource(this);
    }
    return Context;
}());
exports.Context = Context;
//# sourceMappingURL=context.js.map
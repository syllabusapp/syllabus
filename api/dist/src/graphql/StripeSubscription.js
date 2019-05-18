"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yoga_1 = require("yoga");
exports.StripeSubscription = yoga_1.prismaObjectType({
    name: 'StripeSubscription',
    definition: function (t) {
        t.prismaFields({ filter: ['id', 'createdBy', 'updatedBy'] });
    },
});
exports.StripeSubscriptionQuery = yoga_1.prismaExtendType({
    type: 'Query',
    definition: function (t) {
        // t.prismaFields(['stripeSubscription', 'stripeSubscriptions']);
        t.prismaFields([]);
    },
});
exports.StripeSubscriptionMutation = yoga_1.prismaExtendType({
    type: 'Mutation',
    definition: function (t) {
        // t.prismaFields([
        //   'createStripeSubscription',
        //   'deleteStripeSubscription',
        //   'updateStripeSubscription',
        // ]);
        t.prismaFields([]);
    },
});
//# sourceMappingURL=StripeSubscription.js.map
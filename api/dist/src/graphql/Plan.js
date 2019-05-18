"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yoga_1 = require("yoga");
exports.Plan = yoga_1.prismaObjectType({
    name: 'Plan',
    definition: function (t) {
        t.prismaFields({ filter: ['id', 'createdBy', 'updatedBy'] });
    },
});
exports.PlanQuery = yoga_1.prismaExtendType({
    type: 'Query',
    definition: function (t) {
        // t.prismaFields(['plan', 'plans']);
        t.prismaFields([]);
    },
});
exports.PlanMutation = yoga_1.prismaExtendType({
    type: 'Mutation',
    definition: function (t) {
        // t.prismaFields(['createPlan', 'deletePlan', 'updatePlan']);
        t.prismaFields([]);
    },
});
//# sourceMappingURL=Plan.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yoga_1 = require("yoga");
exports.Organization = yoga_1.prismaObjectType({
    name: 'Organization',
    definition: function (t) {
        t.prismaFields({ filter: ['id', 'createdBy', 'updatedBy'] });
    },
});
exports.OrganizationQuery = yoga_1.prismaExtendType({
    type: 'Query',
    definition: function (t) {
        // t.prismaFields(['organization', 'organizations']);
        t.prismaFields([]);
    },
});
exports.OrganizationMutation = yoga_1.prismaExtendType({
    type: 'Mutation',
    definition: function (t) {
        // t.prismaFields([
        //   'createOrganization',
        //   'deleteOrganization',
        //   'updateOrganization',
        // ]);
        t.prismaFields([]);
    },
});
//# sourceMappingURL=Organization.js.map
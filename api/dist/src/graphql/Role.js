"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yoga_1 = require("yoga");
exports.Role = yoga_1.prismaObjectType({
    name: 'Role',
    definition: function (t) {
        t.prismaFields({ filter: ['id', 'createdBy', 'updatedBy'] });
    },
});
exports.RoleQuery = yoga_1.prismaExtendType({
    type: 'Query',
    definition: function (t) {
        // t.prismaFields(['role', 'roles']);
        t.prismaFields([]);
    },
});
exports.RoleMutation = yoga_1.prismaExtendType({
    type: 'Mutation',
    definition: function (t) {
        // t.prismaFields(['createRole', 'deleteRole', 'updateRole']);
        t.prismaFields([]);
    },
});
//# sourceMappingURL=Role.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yoga_1 = require("yoga");
exports.Setting = yoga_1.prismaObjectType({
    name: 'Setting',
    definition: function (t) {
        t.prismaFields({ filter: ['id', 'createdBy', 'updatedBy'] });
    },
});
exports.SettingQuery = yoga_1.prismaExtendType({
    type: 'Query',
    definition: function (t) {
        // t.prismaFields(['setting', 'settings']);
        t.prismaFields([]);
    },
});
exports.SettingMutation = yoga_1.prismaExtendType({
    type: 'Mutation',
    definition: function (t) {
        // t.prismaFields(['createSetting', 'deleteSetting', 'updateSetting']);
        t.prismaFields([]);
    },
});
//# sourceMappingURL=Setting.js.map
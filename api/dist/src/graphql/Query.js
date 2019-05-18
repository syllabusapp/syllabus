"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yoga_1 = require("yoga");
/*
  type Query {
    currentUser: User
  }
*/
exports.Query = yoga_1.prismaObjectType({
    name: 'Query',
    definition: function (t) {
        t.string('helloWorld', {
            args: {
                name: yoga_1.stringArg(),
            },
            resolve: function (_parent, _a, _b) {
                var name = _a.name;
                var auth = _b.auth;
                return auth.helloWorld(name);
            },
        });
    },
});
//# sourceMappingURL=Query.js.map
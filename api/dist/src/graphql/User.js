"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var yoga_1 = require("yoga");
var utils_1 = require("../utils/utils");
exports.UserUpdateInput = yoga_1.inputObjectType({
    name: 'UserUpdateInput',
    definition: function (t) {
        t.string('email');
        t.string('firstName');
        t.string('lastName');
    },
});
exports.SignUpInput = yoga_1.inputObjectType({
    name: 'SignUpInput',
    definition: function (t) {
        t.string('email');
        t.string('firstName');
        t.string('lastName');
        t.string('password');
    },
});
exports.AuthPayload = yoga_1.objectType({
    name: 'AuthPayload',
    definition: function (t) {
        t.string('token');
        t.field('user', { type: 'User' });
    },
});
exports.TriggerEmailPayload = yoga_1.objectType({
    name: 'TriggerEmailPayload',
    definition: function (t) {
        t.boolean('ok');
    },
});
exports.UserIdPayload = yoga_1.objectType({
    name: 'UserIdPayload',
    definition: function (t) {
        t.string('id');
    },
});
exports.User = yoga_1.prismaObjectType({
    name: 'User',
    definition: function (t) {
        t.prismaFields({
            filter: [
                'id',
                'emailConfirmToken',
                'lastLogin',
                'password',
                'resetExpires',
                'resetToken',
                'createdBy',
                'deletedAt',
                'updatedBy',
            ],
        });
    },
});
exports.UserQuery = yoga_1.prismaExtendType({
    type: 'Query',
    definition: function (t) {
        // t.prismaFields(['user', 'users']);
        t.prismaFields([]);
        t.field('currentUser', {
            type: 'User',
            resolve: function (_parent, _args, ctx) {
                var userId = utils_1.getUserId(ctx);
                return ctx.prisma.user({ id: userId });
            },
        });
    },
});
exports.UserMutation = yoga_1.prismaExtendType({
    type: 'Mutation',
    definition: function (t) {
        var _this = this;
        // t.prismaFields(['createUser', 'deleteUser', 'updateUser']);
        t.prismaFields([]);
        t.field('changePassword', {
            type: 'UserIdPayload',
            args: {
                oldPassword: yoga_1.stringArg(),
                newPassword: yoga_1.stringArg(),
            },
            resolve: function (_, _a, _b) {
                var oldPassword = _a.oldPassword, newPassword = _a.newPassword;
                var auth = _b.auth;
                return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, auth.changePassword(oldPassword, newPassword)];
                        case 1: return [2 /*return*/, _c.sent()];
                    }
                }); });
            },
        });
        t.field('confirmAccount', {
            type: 'AuthPayload',
            args: {
                email: yoga_1.stringArg(),
                emailConfirmToken: yoga_1.stringArg(),
            },
            resolve: function (_, _a, _b) {
                var email = _a.email, emailConfirmToken = _a.emailConfirmToken;
                var auth = _b.auth;
                return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, auth.confirmEmail(email, emailConfirmToken)];
                        case 1: return [2 /*return*/, _c.sent()];
                    }
                }); });
            },
        });
        t.field('login', {
            type: 'AuthPayload',
            args: {
                email: yoga_1.stringArg(),
                password: yoga_1.stringArg(),
            },
            resolve: function (_, _a, _b) {
                var email = _a.email, password = _a.password;
                var auth = _b.auth;
                return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, auth.login(email, password)];
                        case 1: return [2 /*return*/, _c.sent()];
                    }
                }); });
            },
        });
        t.field('resetPassword', {
            type: 'UserIdPayload',
            args: {
                email: yoga_1.stringArg(),
                newPassword: yoga_1.stringArg(),
                resetToken: yoga_1.stringArg(),
            },
            resolve: function (_, _a, _b) {
                var email = _a.email, newPassword = _a.newPassword, resetToken = _a.resetToken;
                var auth = _b.auth;
                return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, auth.resetPassword(email, newPassword, resetToken)];
                        case 1: return [2 /*return*/, _c.sent()];
                    }
                }); });
            },
        });
        t.field('signup', {
            type: 'AuthPayload',
            args: {
                data: yoga_1.arg({
                    type: 'SignUpInput',
                    required: true,
                }),
            },
            resolve: function (_, _a, _b) {
                var data = _a.data;
                var auth = _b.auth;
                return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, auth.signup(data)];
                        case 1: return [2 /*return*/, _c.sent()];
                    }
                }); });
            },
        });
        t.field('triggerAccountConfirmationEmail', {
            type: 'TriggerEmailPayload',
            args: {
                email: yoga_1.stringArg(),
            },
            resolve: function (_, _a, _b) {
                var email = _a.email;
                var auth = _b.auth;
                return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, auth.triggerAccountConfirmationEmail(email)];
                        case 1: return [2 /*return*/, _c.sent()];
                    }
                }); });
            },
        });
        t.field('triggerPasswordReset', {
            type: 'TriggerEmailPayload',
            args: {
                email: yoga_1.stringArg(),
            },
            resolve: function (_, _a, _b) {
                var email = _a.email;
                var auth = _b.auth;
                return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, auth.triggerPasswordReset(email)];
                        case 1: return [2 /*return*/, _c.sent()];
                    }
                }); });
            },
        });
    },
});
//# sourceMappingURL=User.js.map
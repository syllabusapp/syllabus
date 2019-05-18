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
var bcrypt_1 = require("bcrypt");
var uuid_1 = require("uuid");
var yup_1 = require("yup");
var errors_1 = require("../utils/errors");
var utils_1 = require("../utils/utils");
var AuthSource = /** @class */ (function () {
    // eslint-disable-next-line @typescript-eslint/no-parameter-properties
    function AuthSource(ctx) {
        this.ctx = ctx;
    }
    AuthSource.prototype.helloWorld = function (name) {
        return "Hello " + (name || 'World');
    };
    AuthSource.prototype.canPerformAdminAction = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // @TODO update after roles is fixed
                // const user = await getUser(this.ctx);
                // return user.roles.hasAdmin?
                return [2 /*return*/, true];
            });
        });
    };
    AuthSource.prototype.changePassword = function (oldPassword, newPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var user, valid, password, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils_1.getUser(this.ctx)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new errors_1.InvalidUserError();
                        }
                        return [4 /*yield*/, bcrypt_1.compare(oldPassword, user.password)];
                    case 2:
                        valid = _a.sent();
                        if (!valid) {
                            throw new errors_1.InvalidOldPasswordError();
                        }
                        return [4 /*yield*/, utils_1.validatePassword(newPassword)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, utils_1.getHashedPassword(newPassword)];
                    case 4:
                        password = _a.sent();
                        return [4 /*yield*/, this.ctx.prisma.updateUser({
                                data: { password: password, updatedBy: { connect: { id: user.id } } },
                                where: { id: user.id },
                            })];
                    case 5:
                        newUser = _a.sent();
                        // @TODO: Handle when password was changed but email fails
                        return [4 /*yield*/, this.ctx.email.sendPasswordChangedEmail(newUser.email, newUser.firstName)];
                    case 6:
                        // @TODO: Handle when password was changed but email fails
                        _a.sent();
                        return [2 /*return*/, {
                                id: newUser.id,
                            }];
                }
            });
        });
    };
    AuthSource.prototype.confirmEmail = function (email, emailConfirmToken) {
        return __awaiter(this, void 0, void 0, function () {
            var user, updatedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!emailConfirmToken || !email) {
                            throw new errors_1.MissingDataError();
                        }
                        return [4 /*yield*/, this.ctx.prisma.user({ email: email })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new errors_1.UserNotFoundError();
                        }
                        if (user.emailConfirmToken !== emailConfirmToken || user.emailConfirmed) {
                            throw new errors_1.InvalidEmailConfirmTokenError();
                        }
                        return [4 /*yield*/, this.ctx.prisma.updateUser({
                                data: {
                                    emailConfirmToken: '',
                                    emailConfirmed: true,
                                    updatedBy: { connect: { id: user.id } },
                                },
                                where: { id: user.id },
                            })];
                    case 2:
                        updatedUser = _a.sent();
                        return [4 /*yield*/, this.ctx.email.sendWelcomeEmail(updatedUser.email, updatedUser.firstName)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, {
                                token: utils_1.generateToken(updatedUser, true),
                                user: updatedUser,
                            }];
                }
            });
        });
    };
    AuthSource.prototype.login = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user, valid, updatedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ctx.prisma.user({ email: email })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new errors_1.InvalidLoginError();
                        }
                        if (user.deletedAt) {
                            throw new errors_1.UserDeletedError();
                        }
                        return [4 /*yield*/, bcrypt_1.compare(password, user.password)];
                    case 2:
                        valid = _a.sent();
                        if (!valid) {
                            throw new errors_1.InvalidLoginError();
                        }
                        return [4 /*yield*/, this.ctx.prisma.updateUser({
                                data: {
                                    lastLogin: new Date().toISOString(),
                                    updatedBy: { connect: { id: user.id } },
                                },
                                where: { id: user.id },
                            })];
                    case 3:
                        updatedUser = _a.sent();
                        return [2 /*return*/, {
                                token: utils_1.generateToken(updatedUser, true),
                                user: updatedUser,
                            }];
                }
            });
        });
    };
    AuthSource.prototype.resetPassword = function (email, newPassword, resetToken) {
        return __awaiter(this, void 0, void 0, function () {
            var user, hashedPassword;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!resetToken || !newPassword) {
                            throw new errors_1.MissingDataError();
                        }
                        return [4 /*yield*/, this.ctx.prisma.user({ email: email })];
                    case 1:
                        user = _a.sent();
                        if (!user || !user.resetExpires || user.resetToken !== resetToken) {
                            throw new errors_1.VagueError();
                        }
                        if (new Date() > new Date(user.resetExpires)) {
                            throw new errors_1.ResetTokenExpiredError();
                        }
                        return [4 /*yield*/, utils_1.validatePassword(newPassword)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, utils_1.getHashedPassword(newPassword)];
                    case 3:
                        hashedPassword = _a.sent();
                        return [4 /*yield*/, this.ctx.prisma.updateUser({
                                data: {
                                    password: hashedPassword,
                                    resetExpires: undefined,
                                    resetToken: '',
                                    updatedBy: { connect: { id: user.id } },
                                },
                                where: { id: user.id },
                            })];
                    case 4:
                        _a.sent();
                        // @TODO: Handle when password was changed but email fails
                        return [4 /*yield*/, this.ctx.email.sendPasswordChangedEmail(user.email, user.firstName)];
                    case 5:
                        // @TODO: Handle when password was changed but email fails
                        _a.sent();
                        return [2 /*return*/, {
                                id: user.id,
                            }];
                }
            });
        });
    };
    AuthSource.prototype.signup = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var userExists, hashedPassword, emailConfirmToken, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!data.email) {
                            throw new errors_1.MissingDataError();
                        }
                        return [4 /*yield*/, this.ctx.prisma.user({ email: data.email })];
                    case 1:
                        userExists = _a.sent();
                        if (userExists) {
                            throw new errors_1.UserEmailExistsError();
                        }
                        return [4 /*yield*/, utils_1.validatePassword(data.password)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, utils_1.getHashedPassword(data.password)];
                    case 3:
                        hashedPassword = _a.sent();
                        emailConfirmToken = uuid_1.v4();
                        return [4 /*yield*/, this.ctx.prisma.createUser({
                                email: data.email,
                                emailConfirmToken: emailConfirmToken,
                                emailConfirmed: false,
                                firstName: data.firstName,
                                lastName: data.lastName,
                                organization: {
                                    create: {
                                        name: data.email,
                                    },
                                },
                                roles: {
                                    connect: [{ name: 'user' }],
                                },
                                password: hashedPassword,
                            })];
                    case 4:
                        newUser = _a.sent();
                        return [4 /*yield*/, this.ctx.prisma.updateUser({
                                data: { createdBy: { connect: { id: newUser.id } } },
                                where: { id: newUser.id },
                            })];
                    case 5:
                        _a.sent();
                        // @TODO: Handle when user, organization is saved to DB but email fails to send
                        return [4 /*yield*/, this.ctx.email.sendAccountConfirmationEmail(data.email, data.firstName, emailConfirmToken)];
                    case 6:
                        // @TODO: Handle when user, organization is saved to DB but email fails to send
                        _a.sent();
                        return [2 /*return*/, {
                                token: utils_1.generateToken(newUser, true),
                                user: newUser,
                            }];
                }
            });
        });
    };
    AuthSource.prototype.triggerAccountConfirmationEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var user, emailConfirmToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!yup_1.string()
                            .email()
                            .isValid(email)) {
                            throw new errors_1.InvalidEmailError();
                        }
                        return [4 /*yield*/, this.ctx.prisma.user({ email: email })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, { ok: true }];
                        }
                        if (user.emailConfirmed === true) {
                            return [2 /*return*/, { ok: true }];
                        }
                        emailConfirmToken = uuid_1.v4();
                        return [4 /*yield*/, this.ctx.prisma.updateUser({
                                data: { emailConfirmToken: emailConfirmToken, updatedBy: { connect: { id: user.id } } },
                                where: { id: user.id },
                            })];
                    case 2:
                        _a.sent();
                        // @TODO: Handle when resetExpires and resetToken is saved but email fails
                        return [4 /*yield*/, this.ctx.email.sendAccountConfirmationEmail(user.email, user.firstName, emailConfirmToken)];
                    case 3:
                        // @TODO: Handle when resetExpires and resetToken is saved but email fails
                        _a.sent();
                        return [2 /*return*/, {
                                ok: true,
                            }];
                }
            });
        });
    };
    AuthSource.prototype.triggerPasswordReset = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var user, resetToken, now, resetExpires;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!yup_1.string()
                            .email()
                            .isValid(email)) {
                            throw new errors_1.InvalidEmailError();
                        }
                        return [4 /*yield*/, this.ctx.prisma.user({ email: email })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, { ok: true }];
                        }
                        resetToken = uuid_1.v4();
                        now = new Date();
                        resetExpires = new Date(now.getTime() + 7200000).toISOString();
                        return [4 /*yield*/, this.ctx.prisma.updateUser({
                                data: {
                                    resetExpires: resetExpires,
                                    resetToken: resetToken,
                                    updatedBy: { connect: { id: user.id } },
                                },
                                where: { id: user.id },
                            })];
                    case 2:
                        _a.sent();
                        // @TODO: Handle when resetExpires and resetToken is saved but email fails
                        return [4 /*yield*/, this.ctx.email.sendPasswordResetEmail(user.email, user.firstName, resetToken)];
                    case 3:
                        // @TODO: Handle when resetExpires and resetToken is saved but email fails
                        _a.sent();
                        return [2 /*return*/, {
                                ok: true,
                            }];
                }
            });
        });
    };
    return AuthSource;
}());
exports.AuthSource = AuthSource;
//# sourceMappingURL=AuthSource.js.map
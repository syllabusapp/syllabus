"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var jsonwebtoken_1 = require("jsonwebtoken");
var yup_1 = require("yup");
var errors_1 = require("./errors");
var AuthError = /** @class */ (function (_super) {
    __extends(AuthError, _super);
    function AuthError() {
        return _super.call(this, 'Not authorized') || this;
    }
    return AuthError;
}(Error));
exports.AuthError = AuthError;
function getUserId(context) {
    var Authorization = context.req.get('Authorization');
    if (Authorization) {
        var token = Authorization.replace('Bearer ', '');
        var verifiedToken = jsonwebtoken_1.verify(token, process.env
            .APP_SECRET);
        return verifiedToken && verifiedToken.sub;
    }
    throw new AuthError();
}
exports.getUserId = getUserId;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getUser(ctx) {
    return ctx.prisma.user({ id: getUserId(ctx) });
}
exports.getUser = getUser;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function validatePassword(password) {
    return __awaiter(this, void 0, void 0, function () {
        var isString, tooShort, tooLong, repeating, contextSpecific;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, yup_1.string()
                        .required()
                        .isValid(password)];
                case 1:
                    isString = _a.sent();
                    return [4 /*yield*/, yup_1.string()
                            .min(8)
                            .isValid(password)];
                case 2:
                    tooShort = _a.sent();
                    return [4 /*yield*/, yup_1.string()
                            .max(64)
                            .isValid(password)];
                case 3:
                    tooLong = _a.sent();
                    return [4 /*yield*/, yup_1.string()
                            .matches(/([a-zA-Z0-9])\1{1,}/)
                            .isValid(password)];
                case 4:
                    repeating = _a.sent();
                    return [4 /*yield*/, !yup_1.string()
                            .matches(/syllabus|school|lms|login|portal|app/)
                            .isValid(password)];
                case 5:
                    contextSpecific = _a.sent();
                    if (!isString) {
                        throw new errors_1.PasswordNotStringError();
                    }
                    else if (!tooShort) {
                        throw new errors_1.PasswordTooShortError();
                    }
                    else if (!tooLong) {
                        throw new errors_1.PasswordTooLongError();
                    }
                    else if (repeating) {
                        throw new errors_1.RepeatingCharactersOrDigitsError();
                    }
                    else if (contextSpecific) {
                        // @TODO change to load in a list of context specific matches
                        throw new errors_1.ContextSpecificPasswordError();
                    }
                    // @TODO return new SequentialCharactersOrDigitsError()
                    // @TODO return new CommonPasswordError()
                    return [2 /*return*/];
            }
        });
    });
}
exports.validatePassword = validatePassword;
function getHashedPassword(password) {
    return bcrypt_1.hash(password, 10);
}
exports.getHashedPassword = getHashedPassword;
function generateToken(user, isAdmin) {
    return jsonwebtoken_1.sign({
        // iat set automatically
        // exp is set to 1 week from current
        exp: Math.floor(Date.now() / 1000) + 60 * 10080,
        sub: user.id,
        aud: 'https://syllabusapp.com',
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        emailConfirmed: user.emailConfirmed,
        isAdmin: isAdmin,
    }, process.env.APP_SECRET);
}
exports.generateToken = generateToken;
//# sourceMappingURL=utils.js.map
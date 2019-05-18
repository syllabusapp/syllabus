"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_errors_1 = require("apollo-errors");
exports.InvalidEmailConfirmTokenError = apollo_errors_1.createError('InvalidEmailConfirmTokenError', {
    message: 'Email confirmation token is invalid',
});
exports.InvalidEmailError = apollo_errors_1.createError('InvalidEmailError', {
    message: 'Email is invalid',
});
exports.InvalidLoginError = apollo_errors_1.createError('InvalidLoginError', {
    message: 'Email and/or password invalid',
});
exports.InvalidOldPasswordError = apollo_errors_1.createError('InvalidOldPasswordError', {
    message: 'Old password is invalid',
});
exports.InvalidUserError = apollo_errors_1.createError('InvalidUserError', {
    message: 'Not a valid user',
});
exports.MissingDataError = apollo_errors_1.createError('MissingDataError', {
    message: 'Not all required fields are provided',
});
exports.ResetTokenExpiredError = apollo_errors_1.createError('ResetTokenExpiredError', {
    message: 'Reset password token is expired',
});
exports.UserDeletedError = apollo_errors_1.createError('UserDeletedError', {
    message: 'User has been deleted',
});
exports.UserEmailExistsError = apollo_errors_1.createError('UserEmailExistsError', {
    message: 'User already exists with this email',
});
exports.UserNotFoundError = apollo_errors_1.createError('UserNotFoundError', {
    message: 'User is not found',
});
exports.VagueError = apollo_errors_1.createError('VagueError', {
    message: 'Incorrect data',
});
exports.RepeatingCharactersOrDigitsError = apollo_errors_1.createError('RepeatingCharactersOrDigitsError', {
    message: 'Password given has repeating characters or digits',
});
exports.SequentialCharactersOrDigitsError = apollo_errors_1.createError('SequentialCharactersOrDigitsError', { message: 'Password given has sequential characters or digits' });
exports.CommonPasswordError = apollo_errors_1.createError('CommonPasswordError', {
    message: 'Password given contains common words',
});
exports.ContextSpecificPasswordError = apollo_errors_1.createError('ContextSpecificPasswordError', { message: 'Password given is context specific' });
exports.PasswordNotStringError = apollo_errors_1.createError('PasswordNotStringError', {
    message: 'Password given is not a string',
});
exports.PasswordTooLongError = apollo_errors_1.createError('PasswordTooLongError', {
    message: 'Password given is too long (maximum 64 characters)',
});
exports.PasswordTooShortError = apollo_errors_1.createError('PasswordTooShortError', {
    message: 'Password given is too short (minimum 8 characters)',
});
exports.UnknownIssueError = apollo_errors_1.createError('UnknownIssueError', {
    message: 'There was an unknown error. We have reported it to our team. Please try again.',
});
exports.EmailSendError = apollo_errors_1.createError('EmailSendError', {
    message: 'There was an error while sending an email. We have reported it to our team. Please try again.',
});
exports.ProductCreationError = apollo_errors_1.createError('ProductCreationError', {
    message: 'There was an error while creating the product. Please try again.',
});
//# sourceMappingURL=errors.js.map
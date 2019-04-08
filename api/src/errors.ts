import { createError } from 'apollo-errors';

export const InvalidEmailConfirmTokenError = createError(
  'InvalidEmailConfirmTokenError',
  {
    message: 'Email confirmation token is invalid',
  },
);
export const InvalidEmailError = createError('InvalidEmailError', {
  message: 'Email is invalid',
});
export const InvalidLoginError = createError('InvalidLoginError', {
  message: 'Email and/or password invalid',
});
export const InvalidOldPasswordError = createError('InvalidOldPasswordError', {
  message: 'Old password is invalid',
});
export const InvalidUserError = createError('InvalidUserError', {
  message: 'Not a valid user',
});
export const MissingDataError = createError('MissingDataError', {
  message: 'Not all required fields are provided',
});
export const ResetTokenExpiredError = createError('ResetTokenExpiredError', {
  message: 'Reset password token is expired',
});
export const UserDeletedError = createError('UserDeletedError', {
  message: 'User has been deleted',
});
export const UserEmailExistsError = createError('UserEmailExistsError', {
  message: 'User already exists with this email',
});
export const UserNotFoundError = createError('UserNotFoundError', {
  message: 'User is not found',
});
export const VagueError = createError('VagueError', {
  message: 'Incorrect data',
});

export const RepeatingCharactersOrDigitsError = createError(
  'RepeatingCharactersOrDigitsError',
  {
    message: 'Password given has repeating characters or digits',
  },
);
export const SequentialCharactersOrDigitsError = createError(
  'SequentialCharactersOrDigitsError',
  { message: 'Password given has sequential characters or digits' },
);
export const CommonPasswordError = createError('CommonPasswordError', {
  message: 'Password given contains common words',
});
export const ContextSpecificPasswordError = createError(
  'ContextSpecificPasswordError',
  { message: 'Password given is context specific' },
);
export const PasswordNotStringError = createError('PasswordNotStringError', {
  message: 'Password given is not a string',
});
export const PasswordTooLongError = createError('PasswordTooLongError', {
  message: 'Password given is too long (maximum 64 characters)',
});
export const PasswordTooShortError = createError('PasswordTooShortError', {
  message: 'Password given is too short (minimum 8 characters)',
});
export const UnknownIssueError = createError('UnknownIssueError', {
  message:
    'There was an unknown error. We have reported it to our team. Please try again.',
});
export const EmailSendError = createError('EmailSendError', {
  message:
    'There was an error while sending an email. We have reported it to our team. Please try again.',
});
export const ProductCreationError = createError('ProductCreationError', {
  message: 'There was an error while creating the product. Please try again.',
});

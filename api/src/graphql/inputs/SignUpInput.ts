import { inputObjectType } from 'yoga';

export const SignUpInput = inputObjectType({
  name: 'SignUpInput',
  definition(t) {
    t.string('email');
    t.string('firstName');
    t.string('lastName');
    t.string('password');
  },
});

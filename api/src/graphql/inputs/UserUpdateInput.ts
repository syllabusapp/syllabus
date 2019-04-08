import { inputObjectType } from 'yoga';

export const UserUpdateInput = inputObjectType({
  name: 'UserUpdateInput',
  definition(t) {
    t.string('email');
    t.string('firstName');
    t.string('lastName');
  },
});

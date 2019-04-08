import { objectType } from 'yoga';

export const UserIdPayload = objectType({
  name: 'UserIdPayload',
  definition(t) {
    t.string('id');
  },
});

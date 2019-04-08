import { objectType } from 'yoga';

export const TriggerEmailPayload = objectType({
  name: 'TriggerEmailPayload',
  definition(t) {
    t.boolean('ok');
  },
});

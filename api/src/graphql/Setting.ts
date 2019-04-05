import { prismaExtendType, prismaObjectType } from 'yoga';

export const Setting = prismaObjectType({
  name: 'Setting',
  definition(t) {
    t.prismaFields({ filter: ['id', 'createdBy', 'updatedBy'] });
  },
});

export const SettingQuery = prismaExtendType({
  type: 'Query',
  definition(t) {
    // t.prismaFields(['setting', 'settings']);
    t.prismaFields([]);
  },
});

export const SettingMutation = prismaExtendType({
  type: 'Mutation',
  definition(t) {
    // t.prismaFields(['createSetting', 'deleteSetting', 'updateSetting']);
    t.prismaFields([]);
  },
});

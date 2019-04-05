import { prisma } from '../.yoga/prisma-client';

async function main(): Promise<void> {
  const user1 = await prisma.createUser({
    email: 'devan@devanb.us',
    firstName: 'Devan',
    lastName: 'Beitel',
    password: '$2b$10$dqyYw5XovLjpmkYNiRDEWuwKaRAvLaG45fnXE5b3KTccKZcRPka2m',
    //"secret42"
    organization: {
      create: {
        name: 'Syllabus',
      },
    },
  });
  await prisma.updateUser({
    where: {
      id: user1.id,
    },
    data: {
      roles: {
        create: [
          {
            name: 'admin',
            createdBy: {
              connect: { id: user1.id },
            },
          },
        ],
      },
    },
  });
  const user2 = await prisma.createUser({
    email: 'devan@devanthe.dev',
    firstName: 'Devan',
    lastName: 'Beitel',
    password: '$2b$10$o6KioO.taArzboM44Ig85O3ZFZYZpR3XD7mI8T29eP4znU/.xyJbW',
    //"secret43"
    organization: {
      connect: {
        name: 'Syllabus',
      },
    },
  });
  await prisma.updateUser({
    where: {
      id: user1.id,
    },
    data: {
      roles: {
        create: [
          {
            name: 'user',
            createdBy: {
              connect: { id: user2.id },
            },
          },
        ],
      },
    },
  });
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
main().catch(e => console.error(e));

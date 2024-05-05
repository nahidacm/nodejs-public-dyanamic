import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      username: 'alice',
      email: 'alice@admin.io',
      name: 'Alice',
      password: '$2b$10$bWNoNPYTwGmnTrxFnHNSIe45D0XysVtHFQ21nakAnjvK9.LlrnVEq', //haveapass
      role: 'admin',
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      username: 'bob',
      email: 'bob@user.io',
      name: 'Bob',
      password: '$2b$10$bWNoNPYTwGmnTrxFnHNSIe45D0XysVtHFQ21nakAnjvK9.LlrnVEq', //haveapass
      role: 'user',
    },
  });
  console.log({ alice, bob });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    username: 'JDelgad8',
    email: 'jordydelgado@hotmail.com',
    birthday: new Date('1993-05-31'),
    firstName: 'Jordy Harickson',
    lastName: 'Delgado Leon',
    phone: '3207850855',
    userType: 'ADMIN',
  },
  {
    username: 'VCorreag16',
    email: 'valerincorrea1601@gmail.com',
    birthday: new Date('1998-01-16'),
    firstName: 'Valerin Tatiana',
    lastName: 'Correa Garzon',
    phone: '3135620929',
    userType: 'ADMIN',
  },
];

async function main() {
  try {
    console.log(`Cleaning previous records`);
    await prisma.user.deleteMany({});
    console.log('Deleted all the users');
    console.log(`Start seeding ...`);
    const users = await prisma.user.createMany({ data: userData });
    console.log(`created users: ${users}`);
    console.log('Seeding finished');
  } catch (e) {
    console.error(e);
  }
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

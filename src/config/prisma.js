const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

module.exports = prisma
// Teste de conexão
async function testConnection() {
  try {
    await prisma.$connect();
    console.log('Connected to the database!');
  } catch (error) {
    console.error('Database connection error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
import { PrismaClient, Project } from "@prisma/client";

let db: PrismaClient;

const globalForPrisma = global as unknown as {
  db: PrismaClient | undefined;
};

if (!globalForPrisma.db) {
  globalForPrisma.db = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });
}
db = globalForPrisma.db;

export default db;

import { PrismaClient } from "@prisma/client";

declare global {
  // Allow global ‘prisma’ in development to survive HMR
  var prisma: PrismaClient | undefined;
}

export const prisma =
  globalThis.prisma ||
  new PrismaClient({
    // Optimized for VPN connections
    datasources: { db: { url: process.env.DATABASE_URL } },
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
    errorFormat: "pretty",
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

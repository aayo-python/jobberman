import express from "express";
import config from "config";
import cors from "cors";
import helmet from "helmet";
import router from "./routes";
import { prisma } from "./scripts";

async function main() {
  const app = express();

  // Security and middleware
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Routes
  app.use(router);

  const port = config.get<number>("port");

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// Error handling for the main function
main()
  .then(async () => {
    console.log("Server started successfully");
  })
  .catch(async (error) => {
    console.log(`Failed to start server: ${error}`);
    await prisma.$disconnect();
    process.exit(1);
  });

// Handle graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  await prisma.$disconnect();
  process.exit(0);
});

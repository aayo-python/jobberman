import express from "express";
import config from "config";
import cors from "cors";
import helmet from "helmet";

async function main() {
  const app = express();

  // Security and middleware
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const port = config.get<number>("port");

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

main().catch((error) => {
  console.error("Error starting the server:", error);
  process.exit(1);
});

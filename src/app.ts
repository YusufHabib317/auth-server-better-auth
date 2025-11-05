import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";

import { env } from "@/config";
import { errorHandler, notFoundHandler } from "@/middleware";
import router from "@/routes";

export const createApp = (): Application => {
  const app = express();

  // Security middleware
  app.use(helmet());

  // CORS configuration
  app.use(
    cors({
      origin: env.NODE_ENV === "production" ? [env.BETTER_AUTH_URL] : true,
      credentials: true,
    })
  );

  // Body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Logging middleware
  if (env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  } else {
    app.use(morgan("combined"));
  }

  // Root welcome endpoint
  app.get("/", (_req, res) => {
    res.json({
      name: "Kasroad Auth Server",
      version: "1.0.0",
      status: "ready",
      endpoints: {
        health: "/health",
        api: "/api",
      },
    });
  });

  // Health check endpoint
  app.get("/health", (req, res) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      environment: env.NODE_ENV,
    });
  });

  // API routes
  app.use("/api", router);

  // Error handling
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};

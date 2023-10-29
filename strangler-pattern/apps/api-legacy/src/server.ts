import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";

export const createServer = () => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(
      cors({
        origin: "*",
        methods: ["GET", "POST", "PATCH", "OPTIONS"],
      })
    )
    .get("/healthz", (req, res) => {
      return res.json({ ok: true });
    });

  return app;
};

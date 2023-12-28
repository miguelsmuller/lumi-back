import express from "express";
import cors from "cors";

import Routers from "../routers/Routers";
import { EnvVarManager } from "../config/EnvVarManager";

export class Server {
  private envVarManager: EnvVarManager;
  private app: express.Application;

  constructor() {
    this.envVarManager = EnvVarManager.getInstance();
    this.app = express();

    this.configureMiddleware();
    this.routes();
  }

  private configureMiddleware(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes(): void {
    this.app.use("/", Routers);
  }

  public start(): void {
    const port = Number(this.envVarManager.get("PORT", "1234"));

    this.app.listen(port, () => {
      console.log(`Server Listening on PORT: ${port}`);
    });
  }
}

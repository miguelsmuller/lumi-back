import express from "express";
import cors from "cors";

import Routers from "../routers/Routers";

export class Server {
  private app: express.Application;

  constructor() {
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
    this.app.listen(3000, () => {
      console.log("Server Listening on PORT: 3000");
    });
  }
}

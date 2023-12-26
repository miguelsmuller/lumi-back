import { Request, Response } from "express";

export class GetHealth {
  public get(req: Request, res: Response): void {
    const health = {
      message: "Welcome to Express and PostgreSQL",
      status: "success",
    };
    res.json(health);
  }
}

import { Request, Response } from "express";

export class GetInvoices {
  static get(req: Request, res: Response): void {
    const data = {
      message: "Data retrieved successfully",
      status: "success",
    };
    res.json(data);
  }
}

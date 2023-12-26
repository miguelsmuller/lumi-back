import { Request, Response } from "express";
import { DataSource } from "typeorm";

import { DataBaseManager } from "../config/DataBaseManager";
import { EnergyInvoiceModel } from "../models/EnergyInvoiceModel";

export class GetInvoices {
  private static DataBaseManager: DataSource;

  constructor() {
    if (!GetInvoices.DataBaseManager) {
      const dbConfig = new DataBaseManager();
      GetInvoices.DataBaseManager = dbConfig.getManager();
    }
  }

  public async get(req: Request, res: Response): Promise<void> {
    const { page = 1, limit = 10, startAt, endAt } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const invoiceRepository =
      GetInvoices.DataBaseManager.getRepository(EnergyInvoiceModel);

    let query = invoiceRepository.createQueryBuilder("invoice");

    if (startAt && endAt) {
      query = query.where("invoice.invoiceDate BETWEEN :startAt AND :endAt", {
        startAt,
        endAt,
      });
    }

    const invoices = await query.skip(skip).take(Number(limit)).getMany();

    const data = {
      status: "success",
      count: invoices.length,
      data: invoices,
    };

    res.json(data);
  }
}

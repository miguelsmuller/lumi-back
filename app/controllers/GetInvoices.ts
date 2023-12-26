import { Request, Response } from "express";
import { DataSource } from "typeorm";

import { EnergyInvoiceModel } from "../models/EnergyInvoiceModel";

export class GetInvoices {
  private static DataBaseManager: DataSource;

  constructor() {
    if (!GetInvoices.DataBaseManager) {
      GetInvoices.DataBaseManager = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "root",
        database: "lumi",
        synchronize: true,
        logging: true,
        entities: [EnergyInvoiceModel],
      });

      GetInvoices.DataBaseManager.initialize()
        .then(() => {
          console.log("DataBase initialized!");
        })
        .catch((error) => console.log(error));
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
      message: "Data retrieved successfully",
      status: "success",
      data: invoices,
    };

    res.json(data);
  }
}

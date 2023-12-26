import { DataSource } from "typeorm";
import { EnergyInvoiceModel } from "../models/EnergyInvoiceModel";

export class DataBaseManager {
  private databaseManager: DataSource;

  constructor() {
    this.databaseManager = new DataSource({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "lumi",
      synchronize: true,
      logging: false,
      entities: [EnergyInvoiceModel],
    });

    this.initialize();
  }

  private async initialize(): Promise<void> {
    try {
      await this.databaseManager.initialize();
      console.log("DataBase initialized!");
    } catch (error) {
      console.log(error);
    }
  }

  public getManager(): DataSource {
    return this.databaseManager;
  }
}

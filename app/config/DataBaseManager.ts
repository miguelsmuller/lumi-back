import { DataSource } from "typeorm";

import { EnvVarManager } from "../config/EnvVarManager";
import { EnergyInvoiceModel } from "../models/EnergyInvoiceModel";

export class DataBaseManager {
  private databaseManager: DataSource;
  private envVarManager: EnvVarManager;

  constructor() {
    this.envVarManager = EnvVarManager.getInstance();

    this.databaseManager = new DataSource({
      type: "postgres",
      host: this.envVarManager.get("DB_HOST"),
      port: Number(this.envVarManager.get("DB_PORT", "5432")),
      username: this.envVarManager.get("DB_USERNAME", "admin"),
      password: this.envVarManager.get("DB_PASSWORD", "admin"),
      database: this.envVarManager.get("DB_DATABASE", "database"),
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
      console.log("Erro ao conectar ao banco de dados:", error.message);
    }
  }

  public getManager(): DataSource {
    return this.databaseManager;
  }
}

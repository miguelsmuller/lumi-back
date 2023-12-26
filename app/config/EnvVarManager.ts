import dotenv from "dotenv";

export class EnvVarManager {
  private static instance: EnvVarManager;

  private constructor() {
    dotenv.config();
  }

  public static getInstance(): EnvVarManager {
    if (!EnvVarManager.instance) {
      EnvVarManager.instance = new EnvVarManager();
    }
    return EnvVarManager.instance;
  }

  public get(key: string, defaultValue?: string): string {
    const value = process.env[key] || defaultValue;

    if (!value) {
      throw new Error(`Environment variable ${key} is not set`);
    }

    return value;
  }
}

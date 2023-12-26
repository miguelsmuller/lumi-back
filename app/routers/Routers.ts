import { Router } from "express";

import { GetHealth } from "../controllers/GetHealth";
import { GetInvoices } from "../controllers/GetInvoices";

const Routers = Router();

Routers.get("/health", new GetHealth().get);
Routers.get("/invoices", new GetInvoices().get);

export default Routers;

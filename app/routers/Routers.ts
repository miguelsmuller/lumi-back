import express from "express";
import { GetHealth } from "../controllers/GetHealth";
import { GetInvoices } from "../controllers/GetInvoices";

const Routers = express.Router();

Routers.get("/health", GetHealth.get.bind(GetHealth));
Routers.get("/invoices", GetInvoices.get.bind(GetInvoices));

export default Routers;

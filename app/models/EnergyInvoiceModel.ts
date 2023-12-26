import { Entity, Column, PrimaryColumn, Index } from "typeorm";

@Entity("invoices")
export class EnergyInvoiceModel {
  @PrimaryColumn()
  id: number;

  @Column({ name: "client_id" })
  @Index()
  clientId: string;

  @Column({ name: "invoice_date", type: "date" })
  @Index()
  invoiceDate: string;

  @Column({ name: "reference_month" })
  @Index()
  referenceMonth: string;

  @Column({ name: "electrical_energy_quantity", type: "float" })
  electricalEnergyQuantity: number;

  @Column({ name: "electrical_energy_amount", type: "float" })
  electricalEnergyAmount: number;

  @Column({ name: "electrical_energy_scee_quantity", type: "float" })
  electricalEnergySceeQuantity: number;

  @Column({ name: "electrical_energy_scee_amount", type: "float" })
  electricalEnergySceeAmount: number;

  @Column({ name: "electrical_energy_gdi_quantity", type: "float" })
  electricalEnergyGdiQuantity: number;

  @Column({ name: "electrical_energy_gdi_amount", type: "float" })
  electricalEnergyGdiAmount: number;

  @Column({ name: "municipal_public_lighting_contribution", type: "float" })
  municipalPublicLightingContribution: number;

  @Column({ name: "creation_at", type: "timestamptz" })
  createdAt: Date;

  toString(): string {
    return `<Invoice (id='${this.id}', \
    clientId='${this.clientId}', \
    electricalEnergyQuantity=${this.electricalEnergyQuantity}, \
    electricalEnergyAmount=${this.electricalEnergyAmount})>`;
  }
}

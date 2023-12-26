import { Entity, Column, Index, CreateDateColumn } from "typeorm";

@Entity("invoices")
export class EnergyInvoiceModel {
  @Column()
  @Index()
  id: number;

  @Column()
  @Index()
  clientId: string;

  @Column()
  @Index()
  invoice_date: string;

  @Column()
  @Index()
  referenceMonth: string;

  @Column("float")
  electricalEnergyQuantity: number;

  @Column("float")
  electricalEnergyAmount: number;

  @Column("float")
  electricalEnergySceeQuantity: number;

  @Column("float")
  electricalEnergySceeAmount: number;

  @Column("float")
  electricalEnergyGdiQuantity: number;

  @Column("float")
  electricalEnergyGdiAmount: number;

  @Column("float")
  municipalPublicLightingContribution: number;

  @CreateDateColumn({ type: "timestamp", nullable: false })
  createdAt: Date;

  toString(): string {
    return `<Invoice (id='${this.id}', clientId='${this.clientId}', electricalEnergyQuantity=${this.electricalEnergyQuantity}, electricalEnergyAmount=${this.electricalEnergyAmount})>`;
  }
}

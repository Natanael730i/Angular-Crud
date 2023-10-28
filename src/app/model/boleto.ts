export interface Boleto {
  id:number;
  dataVencimento:Date;
  valor:number;
  pessoa:string;
  status:number;
  createdAt: Date;
}

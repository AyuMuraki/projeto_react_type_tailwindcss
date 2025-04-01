export interface Processo {
  numero: string;
  reclamante: string;
  reclamada: string;
  status: "Ativo" | "Encerrado";
  valorCausa: number;
  dataAjuizamento: string;
  cidade: string;
  uf: string;
  vara: string;
}

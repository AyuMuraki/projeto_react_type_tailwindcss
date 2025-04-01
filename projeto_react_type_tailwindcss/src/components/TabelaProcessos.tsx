import React from "react";
import { Processo } from "../types/Processo";

interface TabelaProcessosProps {
  processos: Processo[];
  onEditar: (index: number) => void;
  onDeletar: (numeroProcesso: string) => void;
}

const TabelaProcessos: React.FC<TabelaProcessosProps> = ({
  processos,
  onEditar,
  onDeletar,
}) => {
  return (
    <div className="overflow-x-auto max-w-full shadow-md rounded-lg">
      <table className="w-full border-collapse bg-white text-xs">
        <thead className="bg-gray-800 text-white">
          <tr>
            {[
              "Número",
              "Reclamante",
              "Reclamada",
              "Status",
              "Valor da Causa",
              "Data",
              "Cidade/UF",
              "Vara",
              "Ações",
            ].map((header) => (
              <th
                key={header}
                className="px-3 py-2 text-left font-medium uppercase tracking-wide"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {processos.map((processo, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="px-3 py-2 whitespace-nowrap">{processo.numero}</td>
              <td className="px-3 py-2">{processo.reclamante}</td>
              <td className="px-3 py-2">{processo.reclamada}</td>
              <td className="px-3 py-2">
                <span
                  className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${
                    processo.status === "Encerrado"
                      ? "bg-red-100 text-red-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {processo.status}
                </span>
              </td>
              <td className="px-3 py-2">
                {processo.valorCausa.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td className="px-3 py-2 whitespace-nowrap">
                {new Date(processo.dataAjuizamento).toLocaleDateString("pt-BR")}
              </td>
              <td className="px-3 py-2">
                {processo.cidade} / {processo.uf}
              </td>
              <td className="px-3 py-2">{processo.vara}</td>
              <td className="px-3 py-2 whitespace-nowrap">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEditar(index)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDeletar(processo.numero)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaProcessos;

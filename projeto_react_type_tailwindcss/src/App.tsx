import React, { useState, useEffect } from "react";
import { Processo } from "./types/Processo";
import ModalProcesso from "./components/ModalProcesso";
import TabelaProcessos from "./components/TabelaProcessos";

const STORAGE_KEY = "processos";

const App: React.FC = () => {
  const [processos, setProcessos] = useState<Processo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [modalAberto, setModalAberto] = useState<boolean>(false);
  const [processoSelecionado, setProcessoSelecionado] =
    useState<Processo | null>(null);

  // Carregar processos
  useEffect(() => {
    const storedProcessos = localStorage.getItem(STORAGE_KEY);
    if (storedProcessos) {
      setProcessos(JSON.parse(storedProcessos));
      setIsLoading(false);
    } else {
      fetchProcessos();
    }
  }, []);

  // Salvar processos
  useEffect(() => {
    if (processos.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(processos));
    }
  }, [processos]);

  const fetchProcessos = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/processos.json");

      if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

      const data = await response.json();
      setProcessos(data);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (err) {
      console.error("Erro ao carregar processos:", err);
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setIsLoading(false);
    }
  };

  // Funções de manipulação
  const abrirModalNovo = () => {
    setProcessoSelecionado(null);
    setModalAberto(true);
  };

  const abrirModalEditar = (processo: Processo) => {
    setProcessoSelecionado(processo);
    setModalAberto(true);
  };

  const salvarProcesso = (novoProcesso: Processo) => {
    setProcessos((prev) =>
      processoSelecionado
        ? prev.map((p) => (p.numero === novoProcesso.numero ? novoProcesso : p))
        : [...prev, novoProcesso]
    );
    setModalAberto(false);
  };

  // Estados de carregamento
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold text-blue-600 animate-pulse">
          Carregando processos...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Erro: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Gerenciamento de Processos
        </h1>
        <div className="border-b border-gray-200"></div>
      </header>

      <div className="mb-6 flex justify-between items-center">
        <button
          onClick={abrirModalNovo}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow transition-colors"
        >
          Adicionar Novo Processo
        </button>
      </div>

      <TabelaProcessos
        processos={processos}
        onEditar={(index) => abrirModalEditar(processos[index])}
        onDeletar={(numero) =>
          setProcessos((prev) => prev.filter((p) => p.numero !== numero))
        }
      />

      <ModalProcesso
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
        onSave={salvarProcesso}
        processo={processoSelecionado}
      />
    </div>
  );
};

export default App;

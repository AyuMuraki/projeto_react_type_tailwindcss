# Gerenciador de Processos Judiciais - React + TypeScript + TailwindCSS

## 📌 Sobre o Projeto

Este projeto tem como objetivo recriar a funcionalidade de gerenciamento de processos judiciais utilizando **ReactJS**, **TypeScript** e **TailwindCSS**.

### ✅ Funcionalidades Implementadas

- 📂 **Carregar dados** do arquivo `processos.json` utilizando `fetch()` e `useEffect`.
- 📋 **Exibir processos** em uma tabela estilizada com TailwindCSS.
- ➕ **Adicionar novo processo** via modal com formulário.
- ✏️ **Editar processo existente**, abrindo o modal preenchido.
- 💾 **Atualizar e salvar os dados** dinamicamente.

---

## 🔄 Fluxo de Funcionamento

### 🔍 Leitura de Dados

Os dados são carregados inicialmente do arquivo `processos.json` usando `fetch()` dentro do `useEffect()`:

```tsx
useEffect(() => {
  fetch("/processos.json")
    .then((response) => response.json())
    .then((data) => setProcessos(data));
}, []);
```

📌 **Passos do carregamento:**

1️⃣ **Busca os dados do arquivo JSON**

2️⃣ **Armazena os processos no estado com `useState`**

3️⃣ **Re-renderiza a tabela automaticamente**


---

## 📁 Estrutura dos Dados

Os processos seguem este formato JSON:

```json
[
  {
    "numero": "7572812-53.2007.5.09.7387",
    "reclamante": "Henrique Fernandes",
    "reclamada": "da Rosa da Conceição Ltda.",
    "status": "Encerrado",
    "valorCausa": 46574.8,
    "dataAjuizamento": "2020-04-10",
    "cidade": "Nascimento",
    "uf": "MS",
    "vara": "2ª Vara do Trabalho"
  }
]
```

---

## 📦 Componentização

Para melhor organização, o projeto utiliza **componentes separados**:

### 📋 `TabelaProcessos.tsx`
- Exibe os processos em uma tabela responsiva.
- Botões de **Editar** e **Excluir** para cada linha.

### 📝 `ModalProcesso.tsx`
- Exibe um formulário para adicionar/editar processos.
- Controlado via estado do React (`useState`).

Exemplo de estado e função de edição:
```tsx
const [processoAtual, setProcessoAtual] = useState<Processo | null>(null);

const editarProcesso = (index: number) => {
  setProcessoAtual(processos[index]);
  setModalAberto(true);
};
```

---

## 💄 Estilização com TailwindCSS

A interface foi estilizada com **TailwindCSS**, garantindo responsividade e um design moderno.

### 📌 **Tabela**
- `rounded-md` nas bordas
- Cabeçalho com `bg-gray-800 text-white`
- Linhas alternadas com `even:bg-gray-100`

### 📌 **Modal**
- `shadow-lg`, `bg-white`, `rounded-lg`
- Sobreposição escura (`bg-black/50`)
- Botões com `hover`, `focus`, e feedback visual

Exemplo de botão estilizado:
```tsx
<button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
  Salvar
</button>
```

---

## 🧠 Tecnologias e Conceitos Utilizados

| 🛠 **Tecnologia** | 📌 **O que faz?** | 🚀 **Como usamos no projeto?** |
|------------------|----------------|----------------------|
| **ReactJS** | Permite criar páginas web interativas e dinâmicas, dividindo a interface em pequenos blocos chamados "componentes". | Criamos componentes como **TabelaProcessos** e **ModalProcesso** para organizar melhor o código e reutilizar partes da interface. |
| **TypeScript** | É uma versão do JavaScript que adiciona "tipos", ajudando a evitar erros e tornando o código mais seguro. | Definimos uma estrutura para os processos com a `interface Processo`, garantindo que os dados tenham sempre o formato esperado. |
| **TailwindCSS** | Uma ferramenta que facilita a estilização dos elementos da página, sem precisar criar arquivos CSS separados. | Usamos classes como `bg-gray-800` e `rounded-md` para estilizar rapidamente a tabela e o modal. |
| `useState` (React) | Permite guardar e atualizar informações dentro do site, sem precisar recarregar a página. | Armazenamos a lista de processos e o estado do modal (se está aberto ou fechado). |
| `useEffect` (React) | Executa ações automáticas quando a página carrega ou quando algo muda no site. | Usamos para buscar os processos do arquivo JSON assim que o site é aberto. |

---

## 🚀 Como Executar o Projeto

### 📌 Pré-requisitos
- **Node.js** instalado
- **Gerenciador de pacotes npm ou yarn**

### 📂 Estrutura do Projeto

```
/semana2/
├── public/
│   └── processos.json
├── src/
│   ├── components/
│   │   ├── TabelaProcessos.tsx
│   │   ├── ModalProcesso.tsx
│   ├── types/
│   │   └── Processo.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── tsconfig.json
└── package.json

```

### 📂 Estrutura dos Arquivos

| 📄 **Arquivo**              | 📌 **O que faz?** | 🔍 **Explicação rápida** |
|----------------------------|------------------|------------------------|
| **App.tsx** | Componente principal da aplicação. | Aqui juntamos todos os componentes (Tabela, Modal) e gerenciamos o estado geral da aplicação. |
| **index.css** | Arquivo de estilos do TailwindCSS. | Contém as configurações globais de estilo que afetam toda a aplicação. |
| **main.tsx** | Ponto de entrada do React. | É onde o React insere o **App.tsx** dentro do HTML (`#root`). Sem ele, a página não renderiza. |
| **TabelaProcessos.tsx** | Componente da tabela de processos. | Exibe os processos carregados do JSON e permite editar ou excluir cada linha. |
| **ModalProcesso.tsx** | Componente do modal de cadastro e edição. | Abre um formulário para adicionar um novo processo ou editar um existente. |
| **processo.ts (em /types)** | Define a estrutura dos dados. | Guarda a `interface Processo`, garantindo que os dados tenham sempre o formato correto (ex: número, reclamante, status, etc.). |


### 🔧 Passo a Passo

1️⃣ **Instalar dependências:**
```sh
npm install
```

2️⃣ **Executar o projeto:**
```sh
npm run dev
```

---

## 🎯 Conclusão

Este projeto demonstra a recriação da funcionalidade de **gerenciamento de processos** utilizando **ReactJS**, **TypeScript** e **TailwindCSS**, aplicando conceitos modernos de desenvolvimento frontend. 🚀

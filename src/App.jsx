import React, { useState } from "react";
import "./index.css";
import logo from "./assets/logo.png";
import shortLink from "./components/ShortLink";
import CpfGenerator from "./components/CpfGenerator";
import CnpjGenerator from "./components/CnpjGenerator";
import RgGenerator from "./components/RgGenerator";
import LoremIpsumGenerator from "./components/LoremIpsumGenerator";
import PasswordGenerator from "./components/PasswordGenerator";
import NumberSorter from "./components/NumberSorter";
import CepSearcher from "./components/CepSearcher";
import MyIp from "./components/MyIp";
import TimerConverter from './components/ConversorHora'

const tools = {
  shortLink,
  CpfGenerator,
  CnpjGenerator,
  RgGenerator,
  LoremIpsumGenerator,
  PasswordGenerator,
  NumberSorter,
  CepSearcher,
  MyIp,
  TimerConverter
};

const App = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  return (
    <div className="flex flex-col bg-[#10172A] text-white min-h-screen">
      {/* Navbar */}
      <header className="p-4 text-center text-xl font-bold border-b border-gray-700 bg-[#1E293B] w-full flex items-center justify-center space-x-3">
        <img src={logo} alt="Tools 4People Logo" className="w-12 h-12" />
        <span className="text-[#FACC15]">Tools 4People</span>
      </header>

      {/* Corpo do site */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Lista de Funções */}
        <aside className="w-full md:w-1/5 bg-[#1E293B] p-4 border-b md:border-r border-gray-700 overflow-y-auto">
          <h2 className="text-lg font-semibold text-[#FACC15] mb-3">
            Funções
          </h2>
          <ul className="space-y-2">
            <li>
              <button onClick={() => setSelectedTool("shortLink")} className="w-full text-left text-sm bg-[#374151] hover:bg-[#FACC15] hover:text-[#10172A] p-2 rounded transition mb-2"> Encurtador de Link </button>
              <button onClick={() => setSelectedTool("CpfGenerator")} className="w-full text-left text-sm bg-[#374151] hover:bg-[#FACC15] hover:text-[#10172A] p-2 rounded transition mb-2"> Gerador de CPF </button>
              <button onClick={() => setSelectedTool("CnpjGenerator")} className="w-full text-left text-sm bg-[#374151] hover:bg-[#FACC15] hover:text-[#10172A] p-2 rounded transition mb-2"> Gerador de CNPJ </button>
              <button onClick={() => setSelectedTool("CepSearcher")} className="w-full text-left text-sm bg-[#374151] hover:bg-[#FACC15] hover:text-[#10172A] p-2 rounded transition mb-2"> Buscador de CEP </button>
              <button onClick={() => setSelectedTool("RgGenerator")} className="w-full text-left text-sm bg-[#374151] hover:bg-[#FACC15] hover:text-[#10172A] p-2 rounded transition mb-2"> Gerador de RG </button>
              <button onClick={() => setSelectedTool("LoremIpsumGenerator")} className="w-full text-left text-sm bg-[#374151] hover:bg-[#FACC15] hover:text-[#10172A] p-2 rounded transition mb-2"> Gerador de LoremIpsum </button>
              <button onClick={() => setSelectedTool("PasswordGenerator")} className="w-full text-left text-sm bg-[#374151] hover:bg-[#FACC15] hover:text-[#10172A] p-2 rounded transition mb-2"> Gerador de Senhas </button>
              <button onClick={() => setSelectedTool("NumberSorter")} className="w-full text-left text-sm bg-[#374151] hover:bg-[#FACC15] hover:text-[#10172A] p-2 rounded transition mb-2"> Sorteio de Números </button>
              <button onClick={() => setSelectedTool("MyIp")} className="w-full text-left text-sm bg-[#374151] hover:bg-[#FACC15] hover:text-[#10172A] p-2 rounded transition mb-2"> Meu IP </button>
              <button onClick={() => setSelectedTool("TimerConverter")} className="w-full text-left text-sm bg-[#374151] hover:bg-[#FACC15] hover:text-[#10172A] p-2 rounded transition mb-2"> Conversor de Tempo </button>
            </li>
          </ul>
        </aside>

        {/* Corpo da opção */}
        <main className="w-full md:w-4/5 flex flex-col h-screen">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {selectedTool ? (React.createElement(tools[selectedTool])) : (<p>Selecione uma ferramenta...</p>)}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="p-4 text-center text-sm border-t border-gray-700 bg-[#1E293B] w-full bottom-0">
        © 2025 Tools 4People | Criado por Lucas | Contato: lukasbcunha@gmail.com
      </footer>
    </div>
  );
};

export default App;

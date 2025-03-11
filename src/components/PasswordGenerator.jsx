import React, { useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const specialChars = "!@#$%^&*()_-+=<>?/{}[]";
    let chars = "";

    if (includeUppercase) chars += upperChars;
    if (includeLowercase) chars += lowerChars;
    if (includeSpecial) chars += specialChars;

    if (chars.length === 0) {
      setPassword("Select at least one option!");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Senha copiada!");
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold">Gerador de Senha</h1>

      <div className="mt-4 space-y-3">
        <div>
          <label className="font-medium">Tamanho: {length}</label>
          <input
            type="range"
            min="6"
            max="50"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="ml-2"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          <label>Incluir letras minúsculas</label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
          <label>Incluir letras minúsculas</label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeSpecial}
            onChange={() => setIncludeSpecial(!includeSpecial)}
          />
          <label>Incluir caractere especial</label>
        </div>

        <button
          onClick={generatePassword}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Gerar Senha
        </button>
      </div>

      {password && (
        <div className="mt-4 flex items-center space-x-2 border p-2 rounded-md bg-gray-100 dark:bg-gray-800">
          <span className="font-mono text-lg">{password}</span>
          <button
            onClick={copyToClipboard}
            className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Copiar
          </button>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
import React, { useState } from 'react';

let number_random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const NumberSorter = () => {
  const [numberGenerated, setNumberGenerated] = useState([]);
  const [quantity, setQuantity] = useState('');
  const [minRange, setMinRange] = useState('');
  const [maxRange, setMaxRange] = useState('');

  const gerar = () => {
    // Validando as entradas do usuário
    if (!quantity || !minRange || !maxRange || isNaN(quantity) || isNaN(minRange) || isNaN(maxRange)) {
      alert('Por favor, insira valores válidos!');
      return;
    }

    const numbers = [];
    const totalNumbers = parseInt(quantity);

    // Gerando números aleatórios dentro do intervalo definido
    for (let i = 0; i < totalNumbers; i++) {
      numbers.push(number_random(parseInt(minRange), parseInt(maxRange)));
    }

    setNumberGenerated(numbers);
  };

  const copiar = () => {
    if (numberGenerated.length === 0) return;

    // Copiando os números sorteados para a área de transferência
    navigator.clipboard.writeText(numberGenerated.join(', '))
      .then(() => alert('Números copiados para a área de transferência!'))
      .catch((err) => console.error('Erro ao copiar números', err));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Sorteio de Números</h1>

      <div className="flex flex-col items-center mt-4">
        <label htmlFor="quantity" className="mb-2">Quantos números deseja sortear?</label>
        <input
          id="quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mb-4 text-black"
          placeholder="Ex: 3"
          required
        />

        <label htmlFor="minRange" className="mb-2">Qual o valor mínimo do intervalo?</label>
        <input
          id="minRange"
          type="number"
          value={minRange}
          onChange={(e) => setMinRange(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mb-4 text-black"
          placeholder="Ex: 1"
          required
        />

        <label htmlFor="maxRange" className="mb-2">Qual o valor máximo do intervalo?</label>
        <input
          id="maxRange"
          type="number"
          value={maxRange}
          onChange={(e) => setMaxRange(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mb-4 text-black"
          placeholder="Ex: 100"
          required
        />
      </div>

      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
        onClick={gerar}>
        Gerar Números
      </button>

      {numberGenerated.length > 0 && (
        <main className="flex flex-col mt-4 items-center justify-center space-y-3">
          <span><strong>Números Sorteados:</strong></span>

          {/* Exibindo os números sorteados em um campo de texto */}
          <input
            type="text"
            value={numberGenerated.join(', ')}
            readOnly
            className="p-2 border border-gray-300 rounded-md mb-4 text-center text-black"
            required
          />

          <button
            type="button"
            onClick={copiar}
            disabled={numberGenerated.length === 0}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">
            Copiar
          </button>
        </main>
      )}
    </div>
  );
};

export default NumberSorter;
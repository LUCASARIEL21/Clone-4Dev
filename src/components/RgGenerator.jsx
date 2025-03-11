import React, { useState } from 'react';

let create_array = (total, numero) => Array.from(Array(total), () => number_random(numero));
let number_random = (number) => Math.floor(Math.random() * number);
let mod = (dividendo, divisor) => Math.abs(dividendo % divisor);

const rg = () => {
  let total_array = 9;
  let n = 9;
  let [n1, n2, n3, n4, n5, n6, n7, n8, n9] = create_array(total_array, n);

  return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}-${n9}`;
}

const RgGenerator = () => {
  const [rgGenerated, setRgGenerated] = useState(''); // Usar estado para armazenar o Rg gerado

  const gerar = () => {
    const generatedRg = rg();
    setRgGenerated(generatedRg); // Atualiza o Rg gerado no estado
  }

  const copiar = () => {
    if (!rgGenerated) return;

    navigator.clipboard.writeText(rgGenerated)
      .then(() => alert('Rg copiado para a área de transferência!'))
      .catch((err) => console.error('Erro ao copiar Rg', err));
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Gerador de Rg</h1>
      <button 
        type="button" 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
        onClick={gerar}>
        Gerar
      </button>
      <main className="flex flex-row mt-2 items-center justify-center space-x-3">
        <span>Rg: </span>
        <span>{rgGenerated}</span>
        <button 
          type="button" 
          onClick={copiar}
          disabled={!rgGenerated} // Desabilita o botão até que um Rg seja gerado
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">
          Copiar
        </button>
      </main>
    </div>
  );
}

export default RgGenerator;
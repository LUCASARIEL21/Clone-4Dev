import React, { useState } from 'react';

let create_array = (total, numero) => Array.from(Array(total), () => number_random(numero));
let number_random = (number) => Math.floor(Math.random() * number);
let mod = (dividendo, divisor) => Math.abs(dividendo % divisor);

const cpf = () => {
  let total_array = 9;
  let n = 9;
  let [n1, n2, n3, n4, n5, n6, n7, n8, n9] = create_array(total_array, n);

  let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
  d1 = 11 - mod(d1, 11);
  if (d1 >= 10) d1 = 0;

  let d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
  d2 = 11 - mod(d2, 11);
  if (d2 >= 10) d2 = 0;

  return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`;
}

const CpfGenerator = () => {
  const [cpfGenerated, setCpfGenerated] = useState(''); // Usar estado para armazenar o CPF gerado

  const gerar = () => {
    const generatedCpf = cpf();
    setCpfGenerated(generatedCpf); // Atualiza o CPF gerado no estado
  }

  const copiar = () => {
    if (!cpfGenerated) return;

    navigator.clipboard.writeText(cpfGenerated)
      .then(() => alert('CPF copiado para a área de transferência!'))
      .catch((err) => console.error('Erro ao copiar CPF', err));
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Gerador de CPF</h1>
      <button 
        type="button" 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
        onClick={gerar}>
        Gerar
      </button>
      <main className="flex flex-row mt-2 items-center justify-center space-x-3">
        <span>CPF: </span>
        <span>{cpfGenerated}</span>
        <button 
          type="button" 
          onClick={copiar}
          disabled={!cpfGenerated} // Desabilita o botão até que um CPF seja gerado
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">
          Copiar
        </button>
      </main>
    </div>
  );
}

export default CpfGenerator;
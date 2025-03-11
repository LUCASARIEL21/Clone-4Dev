import React, { useState } from 'react';

let create_array = (total, numero) => Array.from(Array(total), () => number_random(numero));
let number_random = (number) => Math.floor(Math.random() * number);
let mod = (dividendo, divisor) => Math.abs(dividendo % divisor);

const cnpj = () => {
  let total_array = 8;
  let n = 9;
  let [n1, n2, n3, n4, n5, n6, n7, n8] = create_array(total_array, n);
  let n9 = 0;
  let n10 = 0;
  let n11 = 0;
  let n12 = 1;

  let d1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
  d1 = 11 - mod(d1, 11);
  if (d1 >= 10) d1 = 0;

  let d2 = d1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
  d2 = 11 - mod(d2, 11);
  if (d2 >= 10) d2 = 0;

  return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${d1}${d2}`;
}

const CnpjGenerator = () => {
  const [cnpjGenerated, setCnpjGenerated] = useState(''); // Usar estado para armazenar o Cnpj gerado

  const gerar = () => {
    const generatedCnpj = cnpj();
    setCnpjGenerated(generatedCnpj); // Atualiza o Cnpj gerado no estado
  }

  const copiar = () => {
    if (!cnpjGenerated) return;

    navigator.clipboard.writeText(cnpjGenerated)
      .then(() => alert('CNPJ copiado para a área de transferência!'))
      .catch((err) => console.error('Erro ao copiar CNPJ', err));
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Gerador de CNPJ</h1>
      <button 
        type="button" 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
        onClick={gerar}>
        Gerar
      </button>
      <main className="flex flex-row mt-2 items-center justify-center space-x-3">
        <span>CNPJ: </span>
        <span>{cnpjGenerated}</span>
        <button 
          type="button" 
          onClick={copiar}
          disabled={!cnpjGenerated} // Desabilita o botão até que um Cnpj seja gerado
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">
          Copiar
        </button>
      </main>
    </div>
  );
}

export default CnpjGenerator;
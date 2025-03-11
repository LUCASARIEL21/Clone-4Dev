import React, { useState } from 'react'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})

const CepSearcher = () => {
  const [input, setInput] = useState('')
  const [cepData, setCepData] = useState(null)

  async function handleSearch(e) {
    e.preventDefault() // Evite que o envio do formulário atualize a página
    const response = await api.get(`${input}/json`)
    setCepData(response.data) // Armazene os dados de resposta da API
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Buscador de CEP</h1>
      
      <form className="mt-2" onSubmit={handleSearch}>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="search"
            id="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Digite o CEP..."
            required
          />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Buscar
          </button>
        </div>
      </form>

      <main className="flex flex-col mt-2">
        {cepData && (
          <>
            <span>CEP: {cepData.cep}</span>
            <span>RUA: {cepData.logradouro}</span>
            <span>BAIRRO: {cepData.bairro}</span>
            <span>CIDADE: {cepData.localidade}</span>
            <span>ESTADO: {cepData.uf}</span>
            <span>DDD: {cepData.ddd}</span>
          </>
        )}
      </main>
    </div>
  )
}

export default CepSearcher
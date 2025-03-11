import React, { useState } from "react";
import axios from 'axios';

const BITLY_API_URL = 'https://api-ssl.bitly.com/v4/shorten';
const BITLY_ACCESS_TOKEN = import.meta.env.VITE_BITLY_ACCESS_TOKEN; // Utilize VITE_ para variáveis no Vite

const shortenUrl = async (url) => {
  try {
    const response = await axios.post(
      BITLY_API_URL,
      {
        long_url: url,
      },
      {
        headers: {
          Authorization: `Bearer ${BITLY_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.link; // Retorna a URL encurtada
  } catch (error) {
    console.error("Erro ao encurtar a URL", error);
    return null;
  }
};

const ShortLink = () => {
  const [shortenedUrl, setShortenedUrl] = useState(null);
  const [inputUrl, setInputUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;

    const shortUrl = await shortenUrl(inputUrl.trim());
    setShortenedUrl(shortUrl);
  };

  const handleCopy = () => {
    if (!shortenedUrl) return;
    navigator.clipboard.writeText(shortenedUrl)
      .then(() => alert('URL copiada para a área de transferência!'))
      .catch((err) => console.error('Erro ao copiar a URL', err));
  };

  return (
    <div className="flex flex-col items-center justify-center space-x-3">
      <h1>Encurtador de Link</h1>

      <form className="mt-2" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className="block w-full p-4 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite o link..."
            required
          />
          <button 
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Encurtar
          </button>
        </div>
      </form>

      {shortenedUrl && (
        <main className="flex flex-col mt-2">
          <span>Novo Link: </span>
          <span className="text-blue-500 underline">{shortenedUrl}</span>
          <button 
            type="button" 
            onClick={handleCopy}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mt-2"
          >
            Copiar
          </button>
        </main>
      )}
    </div>
  );
};

export default ShortLink;
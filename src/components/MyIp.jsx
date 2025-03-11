import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ipinfo.io/'
});

const MyIp = () => {
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIp() {
      try {
        const response = await api.get('json');
        setIpData(response.data);
      } catch (error) {
        console.error('Erro ao buscar IP:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchIp();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-lg font-bold mb-2">SEU IP</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : ipData ? (
        <div className="p-4 bg-slate-500 rounded-lg">
          <p><strong>IP:</strong> {ipData.ip}</p>
        </div>
      ) : (
        <p>Não foi possível obter os dados.</p>
      )}
    </div>
  );
};

export default MyIp;
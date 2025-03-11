import { useState } from "react";

const TimeConverter = () => {
  const [value, setValue] = useState("");
  const [conversion, setConversion] = useState("hoursToMinutes");

  const convertTime = (val, type) => {
    const num = parseInt(val);
    if (isNaN(num)) return "";
    
    switch (type) {
      case "hoursToMinutes": {
        const minutes = Math.floor(num * 60);
        const remainingSeconds = (num * 60) % 1;
        return `${minutes} minutos${remainingSeconds ? ` ${remainingSeconds.toFixed(0)} segundos` : ''}`;
      }
      case "minutesToHours": {
        const hours = Math.floor(num / 60);
        const remainingMinutes = num % 60;
        return `${hours} horas e ${remainingMinutes} minutos`;
      }
      case "secondsToMinutes": {
        const minutes = Math.floor(num / 60);
        const remainingSeconds = num % 60;
        return `${minutes} minutos e ${remainingSeconds} segundos`;
      }
      case "hoursToDays": {
        const days = Math.floor(num / 24);
        const remainingHours = num % 24;
        return `${days} dias e ${remainingHours} horas`;
      }
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-6 w-96 shadow-lg bg-white rounded-lg text-black">
        <label className="block mb-2 font-semibold">Escolha a conversão:</label>
        <select 
          value={conversion} 
          onChange={(e) => setConversion(e.target.value)} 
          className="w-full p-2 border rounded mb-4"
        >
          <option value="hoursToMinutes">Horas para Minutos</option>
          <option value="minutesToHours">Minutos para Horas</option>
          <option value="secondsToMinutes">Segundos para Minutos</option>
          <option value="hoursToDays">Horas para Dias</option>
        </select>
        <label className="block mb-2 font-semibold">Insira o valor:</label>
        <input 
          type="number" 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          className="w-full p-2 border rounded mb-4"
        />
        <p className="text-lg font-semibold">Resultado: {convertTime(value, conversion)}</p>
      </div>
    </div>
  );
}

export default TimeConverter
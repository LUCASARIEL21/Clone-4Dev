import React, { useState, useEffect } from "react";

const generateParagraph = () => {
  const words = [
    "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
    "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
    "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
    "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea",
    "commodo", "consequat"
  ];
  let paragraph = [];
  let numWords = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
  
  for (let i = 0; i < numWords; i++) {
    let word = words[Math.floor(Math.random() * words.length)];
    if (i === 0) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    paragraph.push(word);
  }

  return paragraph.join(" ") + ".";
};

const LoremIpsumGenerator = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  useEffect(() => {
    let amount = Math.max(1, Math.min(50, parseInt(count, 10) || 1));
    let newText = Array.from({ length: amount }, generateParagraph);
    setText(newText);
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold">Generador de texto Lorem Ipsum</h1>
      <form className="mt-4 flex flex-row space-x-2 items-center">
        <label htmlFor="amount" className="font-medium">Parágrafos</label>
        <input
          onChange={(e) => setCount(e.target.value)}
          type="number"
          name="amount"
          id="amount"
          value={count}
          min="1"
          max="25"
          className="block w-20 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </form>
      <main className="mt-4 space-y-3 max-w-2xl text-justify">
        {text.map((item, index) => (
          <p key={index} className="text-gray-800 dark:text-gray-200">{item}</p>
        ))}
      </main>
    </div>
  );
};

export default LoremIpsumGenerator;

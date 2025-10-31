import React, { useState, useEffect } from "react";
import quotesData from "../data/mountainQuotes.json";

const Quotes = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const random = quotesData[Math.floor(Math.random() * quotesData.length)];
    setQuote(random);
  }, []);

  return (
    <div className="mt-10 text-center max-w-2xl">
      <p className="text-2xl italic text-gray-200">"{quote.quote}"</p>
      <p className="mt-2 text-lg text-gray-300">— {quote.author}</p>
    </div>
  );
};

export default Quotes;

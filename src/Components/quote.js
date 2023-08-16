import React, { useState, useEffect } from 'react';

function ShowQuotes() {
  const [showQuote, setShowQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getQuotes = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
        headers: {
          'X-Api-Key': 'bkz8prsJU2WZD2MQRKH+/g==IVDJaiWsEnD8EZxu',
        },
      });
      const text = await response.json();
      const { quote } = text[0];
      setShowQuote(quote);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getQuotes();
  }, []);

  if (isLoading) {
    return <p className="load">Loading...🤔</p>;
  }

  if (error) {
    return (
      <p className="quote">
        <span>Error:</span>
        <br />
        <h4>{error}</h4>
      </p>
    );
  }

  return (
    <div className="quotes">
      <b>Quote:</b>
      <br />
      {`"${showQuote}"`}
    </div>
  );
}

export default ShowQuotes;

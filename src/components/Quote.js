import { useEffect, useState } from 'react';

function Quote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const apiKey = 'bAgDfivs+lp8yIeRxHvVvg==x5Jx1oz04SKsYQsz';
    fetch('https://api.api-ninjas.com/v1/quotes', {
      headers: { 'X-Api-Key': apiKey }
    })
    .then(res => res.json())
    .then(data => setQuote(data[0]))
    .catch(err => console.error(err));
  }, []);

  if (!quote) return <div style={{ gridArea: 'quote', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>Loading quote...</div>;

  return (
    <div style={{ gridArea: 'quote', background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
      <div style={{ fontStyle: 'italic' }}>{quote.quote}</div>
      <div style={{ fontWeight: 'bold' }}>— {quote.author}</div>
    </div>
  );
}

export default Quote;
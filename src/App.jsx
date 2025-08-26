import React, { useState } from 'react';

function App() {
  const [checkins, setCheckins] = useState([]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Meu App Check-in</h1>
      <button onClick={() => setCheckins([...checkins, 'Novo check-in'])}>
        Adicionar Check-in
      </button>
      <ul>
        {checkins.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
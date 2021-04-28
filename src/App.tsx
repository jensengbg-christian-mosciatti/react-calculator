import React from 'react';
import './App.css';

function App() {

  const a: number = 1;
  const b: number = 2;
  let sum: number = 0;

  sum = a + b;

  return (
    <div className="App">
      <div className="CalcField">{sum}</div>
      <div className="info">Vidareutveckla applikationen så att den blir en enkel miniräknare med siffror och några räknesätt.</div>
    </div>
  );
}

export default App;

import React /* eslint-disable-next-line */ from 'react';
import './App.css';
import TaxCalculator from './TaxCalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.svg" className="App-logo" alt="logo" />
        <h1>Scalable Tax Calculation Service</h1>
      </header>
      <main>
        <TaxCalculator />
      </main>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(String(eval(input)));
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{input || '0'}</div>

        <div className="buttons">
          <button onClick={handleClear} className="btn-operator">C</button>
          <button onClick={() => handleButtonClick('/')} className="btn-operator">÷</button>
          <button onClick={() => handleButtonClick('*')} className="btn-operator">×</button>
          <button onClick={() => handleButtonClick('-')} className="btn-operator">-</button>

          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('+')} className="btn-operator">+</button>

          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={handleCalculate} className="btn-equal">=</button>

          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('0')} className="btn-zero">0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
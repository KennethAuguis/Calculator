import React, { useState } from 'react';
import './App.css';

function CalcButton({ label, onClick }) {
  return (
    <button onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

function CalcDisplay({ display }) {
  return (
    <div className='CalcDisplay'>
      {display}
    </div>
  );
}

function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [calculation, setCalculation] = useState('');

  const handleButtonClick = (buttonLabel) => {
    if (buttonLabel === '=') {
      try {
        
        const result = eval(calculation);
        setDisplayValue(result.toString());
        setCalculation(result.toString());
      } catch (error) {
        
        setDisplayValue('Error');
        setCalculation('');
      }
    } else if (buttonLabel === 'C') {
      
      setDisplayValue('');
      setCalculation('');
    } else {
    
      setCalculation((prevCalculation) => prevCalculation + buttonLabel);
      setDisplayValue((prevDisplayValue) => prevDisplayValue + buttonLabel);
    }
  };
  const handleSurnameButtonClick = () => {
    // Add your full name to the display
    setDisplayValue('Kenneth Clark G. Auguis');
  };


  return (
    <div className='CalcContainer'>
 <h1 className='CalculatorTitle'>Calculator of Kenneth Clark G. Auguis - IT3A</h1>
      <CalcDisplay display={displayValue} />
      <div className='ButtonContainer'>
        <CalcButton label={7} onClick={handleButtonClick} />
        <CalcButton label={8} onClick={handleButtonClick} />
        <CalcButton label={9} onClick={handleButtonClick} />
        <CalcButton label="+" onClick={handleButtonClick} />
        <CalcButton label={4} onClick={handleButtonClick} />
        <CalcButton label={5} onClick={handleButtonClick} />
        <CalcButton label={6} onClick={handleButtonClick} />
        <CalcButton label="-" onClick={handleButtonClick} />
        <CalcButton label={1} onClick={handleButtonClick} />
        <CalcButton label={2} onClick={handleButtonClick} />
        <CalcButton label={3} onClick={handleButtonClick} />
        <CalcButton label="*" onClick={handleButtonClick} />
        <CalcButton label="C" onClick={handleButtonClick} />
        <CalcButton label={0} onClick={handleButtonClick} />
        <CalcButton label="=" onClick={handleButtonClick} />
        <CalcButton label="/" onClick={handleButtonClick} />

         {/* Surname button */}
         <div className='Surname'>
         <CalcButton label="AUGUIS" onClick={handleSurnameButtonClick} />
         </div>
      </div>
    </div>
  );
}

export default App;

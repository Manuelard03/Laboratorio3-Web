import React, { useState } from 'react';
import './BudgetInput.css';

interface BudgetInputProps {
  setBudget: (budget: number) => void;
}

const BudgetInput: React.FC<BudgetInputProps> = ({ setBudget }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const budget = parseFloat(inputValue);
    if (!isNaN(budget) && budget > 0) {
      setBudget(budget);
    } else {
      alert('Por favor, ingresa un presupuesto válido.');
    }
  };

  return (
    <form className="Budget" onSubmit={handleSubmit}>
      <input className='form' 
        type="number"
        placeholder="Ingresa tu presupuesto"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className='button-budget' type="submit">Establecer El Presupuesto</button>
    </form>
  );
};

export default BudgetInput;

import React, { useState } from 'react';
import './NewExpenseModal.css'

interface NewExpenseModalProps {
  onAddExpense: (expense: { name: string; amount: number; category: string; date: string }) => void;
  onClose: () => void;
}

const NewExpenseModal: React.FC<NewExpenseModalProps> = ({ onAddExpense, onClose }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('Savings');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    onAddExpense({ name, amount, category, date });
    onClose();
  };

  return (
    <div className="modal">
      <h2>Add New Expense</h2>
      <input 
        type="text" 
        placeholder="Expense Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Amount" 
        value={amount} 
        onChange={(e) => setAmount(parseFloat(e.target.value))} 
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Savings">Savings</option>
        <option value="Food">Food</option>
        <option value="House">House</option>
        <option value="Miscellaneous">Miscellaneous</option>
        <option value="Leisure">Leisure</option>
        <option value="Health">Health</option>
        <option value="Subscriptions">Subscriptions</option>
      </select>
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />
      <button onClick={handleSubmit}>Register Expense</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default NewExpenseModal;

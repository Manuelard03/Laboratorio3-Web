import React, { useState } from 'react';
import BudgetScreen from '../BudgetScreen/BudgetScreen';
import './MainContainer.css'

const MainSection: React.FC = () => {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleReset = () => {
    setBudget(0);
    setExpenses([]);
  };

  return (
    <div>
      <BudgetScreen
        budget={budget}
        expenses={expenses}
        handleAddExpense={handleAddExpense}
        handleReset={handleReset}
        showModal={showModal}
        setShowModal={setShowModal}
        setBudget={setBudget}
      />
    </div>
  );
};

export default MainSection;

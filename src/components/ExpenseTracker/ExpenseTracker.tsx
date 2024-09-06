import React from 'react';

interface ExpenseTrackerProps {
  budget: number;
  expenses: number;
}

const ExpenseTracker: React.FC<ExpenseTrackerProps> = ({ budget, expenses }) => {
  const remaining = budget - expenses;

  return (
    <div>
      <h2>Budget: ${budget}</h2>
      <h3>Spent: ${expenses}</h3>
      <h3>Remaining: ${remaining}</h3>
    </div>
  );
};

export default ExpenseTracker;
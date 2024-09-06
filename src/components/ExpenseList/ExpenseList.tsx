import React from 'react';

interface Expense {
  name: string;
  amount: number;
  category: string;
  date: string;
}

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <div>
      <h4>Expenses:</h4>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name} - ${expense.amount} - {expense.category} - {expense.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;

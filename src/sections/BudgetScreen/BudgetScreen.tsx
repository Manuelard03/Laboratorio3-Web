import React from 'react';
import BudgetInput from '../../components/BudgetInput/BudgetInput';
import ExpenseTracker from '../../components/ExpenseTracker/ExpenseTracker';
import ExpenseList from '../../components/ExpenseList/ExpenseList';
import NewExpenseModal from '../../components/NewExpenseModal/NewExpenseModal';
import ResetButton from '../../components/ResetButton/ResetButton';
import './BudgetScreen.css'

interface BudgetScreenProps {
  budget: number;
  expenses: Array<{ name: string; amount: number; category: string; date: string }>;
  handleAddExpense: (expense: { name: string; amount: number; category: string; date: string }) => void;
  handleReset: () => void;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  setBudget: (budget: number) => void;
}

const BudgetScreen: React.FC<BudgetScreenProps> = ({ 
  budget, 
  expenses, 
  handleAddExpense, 
  handleReset, 
  showModal, 
  setShowModal, 
  setBudget 
}) => {

  return (
    <div>
      {/* Si el presupuesto es 0, muestra la pantalla de definición de presupuesto */}
      {budget === 0 ? (
        <BudgetInput setBudget={setBudget} />
      ) : (
        <>
          {/* Si el presupuesto ya está definido, muestra la pantalla principal */}
          <ExpenseTracker budget={budget} expenses={expenses.reduce((total, expense) => total + expense.amount, 0)} />
          <ExpenseList expenses={expenses} />
          <button onClick={() => setShowModal(true)}>Add Expense</button>
          {showModal && (
            <NewExpenseModal onAddExpense={handleAddExpense} onClose={() => setShowModal(false)} />
          )}
          <ResetButton onClick={handleReset} />
        </>
      )}
    </div>
  );
};

export default BudgetScreen;

import React from 'react';
import ExpenseList from '../../components/ExpenseList/ExpenseList';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';

interface ExpenseScreenProps {
  expenses: any[];
  setFilteredCategory: (category: string) => void;
  filteredCategory: string;
}

const ExpenseScreen: React.FC<ExpenseScreenProps> = ({ expenses, setFilteredCategory, filteredCategory }) => {
  return (
    <div className='body'>
      <CategoryFilter onSelectCategory={setFilteredCategory} />
      <ExpenseList expenses={expenses.filter(exp => exp.category === filteredCategory)} />
    </div>
  );
};

export default ExpenseScreen;
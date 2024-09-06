import React from 'react';

const categories = ['Savings', 'Food', 'House', 'Miscellaneous', 'Leisure', 'Health', 'Subscriptions'];

interface CategoryFilterProps {
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onSelectCategory }) => {
  return (
    <div>
      <h4>Filter by Category:</h4>
      <select onChange={(e) => onSelectCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;

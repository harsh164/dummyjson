import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '../actions/categoryActions';

const CategoryList = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector((state) => state.categories);

  
  const styles = {
    container: {
      padding: '24px',
      backgroundColor: '#00796b', 
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      maxWidth: '800px', 
      margin: '0 auto', 
    },
    heading: {
      color: '#ffffff',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px',
      textAlign: 'center',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: '16px', 
    },
    button: {
      padding: '12px',
      borderRadius: '4px',
      border: 'none',
      color: '#ffffff',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      textAlign: 'center', 
    },
    selectedButton: {
      backgroundColor: '#4caf50', 
    },
    unselectedButton: {
      backgroundColor: '#000',
    },
    noCategories: {
      color: '#ffffff',
      textAlign: 'center',
      marginTop: '16px',
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Categories</h3>
      {categories.length > 0 ? (
        <div style={styles.grid}>
          {categories.map((category, index) => (
            <button
              key={category.slug || index}
              onClick={() => dispatch(setSelectedCategory(category.slug))}
              style={{
                ...styles.button,
                ...(category.slug === selectedCategory ? styles.selectedButton : styles.unselectedButton),
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'; 
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
      ) : (
        <p style={styles.noCategories}>No categories available.</p>
      )}
    </div>
  );
};

export default CategoryList;

import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../actions/productActions';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value)); // Dispatch the search term to Redux.
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
        transition: 'transform 0.3s ease', 
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)'; 
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <div style={{ width: '100%', maxWidth: '600px', position: 'relative' }}>
        <input
          type="text"
          placeholder="Search products..."
          onChange={handleSearch}
          style={{
            padding: '10px',
            borderRadius: '20px', 
            border: '1px solid #ccc',
            outline: 'none',
            width: '100%',
          }}
        />
        <button
          style={{
            padding: '10px 15px',
            borderRadius: '20px',
            border: '1px solid #B28DFF',
            backgroundColor: '#B28DFF',
            color: 'white',
            cursor: 'pointer',
            position: 'absolute',
            right: '0',
            top: '0',
            height: '100%',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white" 
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.742 10.344a6 6 0 1 0-1.15 1.15l3.646 3.646a1 1 0 0 0 1.414-1.414l-3.646-3.646zM6 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

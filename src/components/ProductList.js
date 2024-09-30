import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, clearProducts } from '../actions/productActions';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, searchTerm, totalCount } = useSelector((state) => state.products);
  const { selectedCategory } = useSelector((state) => state.categories);

 
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedReviews, setExpandedReviews] = useState(new Set());
  const itemsPerPage = 10; 

  
  useEffect(() => {
    dispatch(clearProducts()); 
    dispatch(fetchProducts(selectedCategory, currentPage, itemsPerPage)); 
  }, [dispatch, selectedCategory, currentPage]);

 
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const totalPages = Math.ceil(totalCount / itemsPerPage);


  const styles = {
    container: {
      backgroundColor: '#00796b', 
      padding: '24px',
      minHeight: '100vh',
    },
    heading: {
      color: '#ffffff',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px',
    },
    loadingText: {
      color: '#ffffff',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
      gap: '24px',
    },
    productCard: {
      backgroundColor: '#000000',
      color: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      padding: '16px',
    },
    productImage: {
      width: '100%',
      height: '160px',
      objectFit: 'cover',
      borderRadius: '4px',
      marginBottom: '16px',
    },
    title: {
      fontWeight: '600',
    },
    price: {
      fontWeight: 'bold',
    },
    reviewButton: {
      backgroundColor: '#2196f3', 
      color: '#ffffff',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      border: 'none',
      marginTop: '8px',
    },
    reviewSection: {
      marginTop: '8px',
      padding: '8px',
      backgroundColor: '#333', 
      borderRadius: '4px',
    },
    pagination: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '24px',
    },
    button: {
      backgroundColor: '#2196f3', 
      color: '#ffffff',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      border: 'none',
    },
    disabledButton: {
      backgroundColor: '#2196f3',
      color: '#ffffff',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'not-allowed',
      border: 'none',
      opacity: 0.5,
    },
  };

 
  const toggleReviews = (productId) => {
    setExpandedReviews((prev) => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(productId)) {
        newExpanded.delete(productId);
      } else {
        newExpanded.add(productId);
      }
      return newExpanded;
    });
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Products</h3>
      {loading ? (
        <p style={styles.loadingText}>Loading...</p>
      ) : filteredProducts.length > 0 ? (
        <div style={styles.grid}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={styles.productCard}>
              <img 
                src={product.thumbnail} 
                alt={product.title} 
                style={styles.productImage}
              />
              <h4 style={styles.title}>{product.title}</h4>
              <p>{product.description}</p>
              <p style={styles.price}>{product.price}</p>
              <button 
                onClick={() => toggleReviews(product.id)} 
                style={styles.reviewButton}
              >
                {expandedReviews.has(product.id) ? 'Hide Reviews' : 'Show Reviews'}
              </button>
              {expandedReviews.has(product.id) && (
                <div style={styles.reviewSection}>
                  <h5>Ratings and Reviews:</h5>
                  {product.reviews && product.reviews.length > 0 ? (
                    product.reviews.map((review, index) => (
                      <div key={index}>
                        <p><strong>{review.reviewerName}</strong>: {review.comment} (Rating: {review.rating})</p>
                      </div>
                    ))
                  ) : (
                    <p>No reviews available.</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p style={styles.loadingText}>No products found.</p>
      )}

      
      <div style={styles.pagination}>
        <button 
          style={currentPage === 1 ? styles.disabledButton : styles.button} 
          disabled={currentPage === 1} 
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        <span style={styles.loadingText}>Page {currentPage} of {totalPages}</span>
        <button 
          style={currentPage === totalPages || totalPages === 0 ? styles.disabledButton : styles.button} 
          disabled={currentPage === totalPages || totalPages === 0} 
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;

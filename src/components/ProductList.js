import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!products) {
    return <div>Loading product...</div>;
  }
  return (
    <div className="product-list">
      <h1 className='prod'>Product List</h1>
      <ul>
        <div className='items'>
          {products.map((product) => (
            <div key={product.id} class="card cardssss" style={{ width: '18rem' }}>
              <img src={product.image} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">{product.title.slice(0, 10)}...</h5>
                <h3 class="">${product.price}</h3>
                <h5 class="">Category: {product.category}</h5>


                <p class="card-text">{product.description.slice(0, 30)}....</p>

                <button style={{ marginLeft: '30px' }} class='btn btn-primary'><NavLink style={{ textDecoration: 'none', color: 'white', fontSize: '15px', paddingBottom: '10px' }} to={`/products/${product.id}`}>Show Details</NavLink></button>
              </div>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default ProductList;
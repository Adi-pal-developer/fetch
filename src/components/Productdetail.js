import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <>
      <div style={{}} className="col-md-6">
        <img style={{ paddingTop: '80px', marginLeft: '50px' }} src={product.image} alt={product.title} height='400px' width='400px' />

      </div>
      <div className="col-md-6" style={{ position: 'relative', bottom: '300px', left: '550px' }}>
        <h4 className="text-uppercase text-black-50">{product.category}</h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead fw-bolder">
          Rating {product.rating && product.rating.rate}
          <i className="fa fa-star"></i>
        </p>
        <h3 className="display-6 fw-bold my-4"> ${product.price}</h3>
        <p className="lead">{product.description}</p>
        <button class='btn btn-primary'>Buy Now</button>
        <button class='btn btn-primary' style={{ margin: '10px' }}>Add to Cart</button>
      </div>
    </>
  );
};

export default ProductDetail;
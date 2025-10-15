import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductGrid = () => {
  return (
    <Container className="py-5 pink-section" id="products">
      <Row className="justify-content-center mb-5">
        <Col xs={12} md={8}>
          <h2 className="text-center mb-4 pink-title">
            💖 Đồ tui mặc nhe mấy ní
          </h2>
        </Col>
      </Row>
      
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductGrid;
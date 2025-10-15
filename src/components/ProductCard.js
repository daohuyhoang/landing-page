import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    window.open(product.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card 
      className="product-card-horizontal h-100 shadow-lg border-0 pink-theme d-flex flex-row"
      onClick={() => window.open(product.link, '_blank', 'noopener,noreferrer')}
      style={{ cursor: 'pointer', transition: 'all 0.3s ease', minHeight: '200px' }}
    >
      {/* Ảnh bên trái */}
      <div className="product-image-left position-relative overflow-hidden flex-shrink-0">
        <Card.Img 
          src={product.image} 
          alt={product.title}
          className="img-fluid product-img-horizontal"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover'
          }}
        />
        <div className="image-overlay"></div>
        <div className="hot-badge">
          🔥 Hot
        </div>
      </div>
      
      {/* Nội dung bên phải */}
      <div className="card-content-right flex-grow-1 p-3 d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="product-title-horizontal mb-2 text-dark fw-bold">
            {product.title}
          </Card.Title>
          <Card.Text className="price-text-horizontal mb-3 pink-price fs-4 fw-bolder">
            {product.price}
          </Card.Text>
        </div>
        
        {/* Button mua hàng */}
        <div className="mt-auto">
          <Button 
            variant="pink" 
            className="w-100 py-2 fw-bold buy-btn"
            onClick={handleClick}
          >
            🛒 XEM
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
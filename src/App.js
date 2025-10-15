import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ProductGrid from './components/ProductGrid';
import ThankYouModal from './components/ThankYouModal'; // Import modal mới
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Trigger animation sau khi mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Hiển thị modal sau khi trang load xong
  useEffect(() => {
    const showWelcomeModal = () => {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 2000); // Hiển thị sau 2 giây
      return () => clearTimeout(timer);
    };

    showWelcomeModal();
  }, []);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const visitLink = "https://s.shopee.vn/9zp8ujToGJ"; // Thay bằng link của bạn

  return (
    <div className="App">
      {/* Thank You Modal */}
      <ThankYouModal 
        show={showModal}
        onHide={handleModalClose}
        visitLink={visitLink}
      />

      {/* Header với gradient hồng + animation */}
      <header className={`header ${isVisible ? 'header-animate' : ''}`}>
        {/* ... header content giữ nguyên ... */}
        <div className="header-overlay"></div>
        <Container className="header-content">
          <div className="header-text">
            <h1 className="display-4 fw-bold mb-3 animate-fade-in">
              🛍️ Tủ đồ của tui
            </h1>
            <p className="lead mb-4 animate-slide-up">
              Khám phá <span className="text-pink">ưu đãi</span> siêu hot, 
              giá sốc chỉ có ở đây 💖
            </p>
            <div className="header-buttons animate-bounce">
              <a 
                href="#products" 
                className="btn btn-pink btn-lg me-3"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('products').scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                🛒 Xem Ngay
              </a>
              <button className="btn btn-outline-pink btn-lg">
                🔥 Hot Deals
              </button>
            </div>
          </div>
          <div className="header-illustration">
            <div className="floating-card">💝</div>
            <div className="floating-card delay-1">🛍️</div>
            <div className="floating-card delay-2">⭐</div>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <main id="products">
        <ProductGrid />
      </main>

      {/* Footer */}
      <footer className="footer-pink py-4 mt-5">
        <Container className="text-center">
          <p className="mb-0">
            © 2025 <span className="text-pink">Deals Ngon</span>. 
            Tất cả quyền được bảo lưu. 💕
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
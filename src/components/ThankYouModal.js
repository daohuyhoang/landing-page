import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ThankYouModal.css'; // Tạo file CSS này

const ThankYouModal = ({ show, onHide, visitLink }) => {
  const handleClose = () => {
    onHide();
    // Chuyển hướng sau khi đóng modal
    setTimeout(() => {
      window.open(visitLink, '_blank', 'noopener,noreferrer');
    }, 300);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      backdropClassName="modal-backdrop-custom"
      dialogClassName="thankyou-modal-dialog"
      contentClassName="thankyou-modal-content"
    >
      <Modal.Header className="border-0 pb-0">
        <button 
          type="button" 
          className="btn-close-custom" 
          onClick={handleClose}
          aria-label="Close"
        >
          ×
        </button>
      </Modal.Header>
      
      <Modal.Body className="p-4 text-center">
        <div className="modal-icon mb-3">
          💖
        </div>
        <h3 className="modal-title mb-3 fw-bold text-pink">
          Cảm ơn bạn đã ghé thăm! 🥰
        </h3>
        <p className="modal-text mb-4">
          Hy vọng bạn tìm được những món đồ xinh xắn nhé! 
          Nhấn nút bên dưới để khám phá thêm nha 💕
        </p>
        
        <Button 
          variant="pink" 
          className="btn-visit w-100 py-3 fw-bold rounded-pill"
          onClick={handleClose}
          size="lg"
        >
          🚀 Khám phá ngay!
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ThankYouModal;
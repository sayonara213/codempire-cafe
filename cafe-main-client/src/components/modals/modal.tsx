import React from 'react';
import Modal from 'react-modal';
import * as Styled from './modal.styled';
import { IMAGES } from './../../constants/images';

interface GlobalModalProps {
  isOpen: boolean;
  onChange: any;
  children: string | JSX.Element | JSX.Element[];
  modalName: string;
}

const GlobalModal: React.FC<GlobalModalProps> = ({ isOpen, onChange, children, modalName }) => {
  const handleClose = () => {
    onChange(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      ariaHideApp={false}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '680px',
          minHeight: 'max-content',
          overflow: 'hidden',
          background: '#fff',
          borderRadius: '0',
          outline: 'none',
          padding: '20px',
          boxSizing: 'border-box',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
        },
      }}>
      <Styled.ModalHeader>
        <Styled.ModalTitle>{modalName}</Styled.ModalTitle>
        <Styled.ModalClose onClick={handleClose} src={IMAGES.close} />
      </Styled.ModalHeader>
      {children}
    </Modal>
  );
};

export default GlobalModal;

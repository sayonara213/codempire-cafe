import React from 'react';
import Button from '../../global/Button/button';
import * as Styled from './delete-modal.styled';

interface DeleteModalProps {
  closeModal?: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ closeModal }) => {
  return (
    <Styled.DeleteModalWrap>
      <Styled.DeleteModalText>Do you want to delete your account?</Styled.DeleteModalText>
      <Styled.DeleteModalButtons>
        <Button type={'button'} isActive={true} isCancel={true} onClick={closeModal}>
          CANCEL
        </Button>
        <Button type={'submit'} isActive={true}>
          DELETE
        </Button>
      </Styled.DeleteModalButtons>
    </Styled.DeleteModalWrap>
  );
};

export default DeleteModal;

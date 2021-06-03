import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop,
} from './Modal.styles';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}
export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isShown) {
      hide();
    }
  };

  useEffect(() => {
    isShown ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');
    document.addEventListener('keydown', onKeyDown, false);
    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
    // eslint-disable-next-line
  }, [isShown]);
  
  const modal = (
    <React.Fragment>
      <Backdrop onClick={hide} />
      <Wrapper aria-modal aria-labelledby={headerText} tabIndex={-1} role="dialog"></Wrapper>
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>{headerText}</HeaderText>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  );
  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
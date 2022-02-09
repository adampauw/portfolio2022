import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Wrapper,
  Header,
  StyledModal,
  CloseButton,
  Content,
  Backdrop,
} from './Modal.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';


export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
}
export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
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
      <Wrapper>
        <StyledModal onClick={event => event.stopPropagation()}>
          <Header>
            <CloseButton onClick={hide}><FontAwesomeIcon icon={faSkullCrossbones}/> esc</CloseButton>
          </Header>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  );
  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

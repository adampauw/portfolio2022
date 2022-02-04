import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { useModal } from "../Modals/useModal"
import { Modal } from "../Modals/Modal";
import { PURPLE } from "../../Constants/Colours.constants";
import { IProject } from "../../Models/Projects";

interface TaskProps extends IProject {
  children?: ReactNode;
}

export const Task = (props: TaskProps) => {
  const Task = styled.div`
    display: flex;
    padding: 20px;
    margin-bottom: 40px;
    width: 100%;
    @media (min-width: 767px) {
      width: 50%;
    }
    @media (min-width: 990px) {
      width: 33.3%;
    }
  `;

  const ModalButton = styled.button`
    border: none;
    background-color: unset;
    width: 100%;
  `;

  const TaskItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    transition: transform 0.5s;
    -webkit-transition: transform 0.5s;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
    }
  `;

  const TaskInfo = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 0 1rem;
    line-height: 1.5em;
  `;

  const TaskTitle = styled.h2`
    font-size: 25px;
    font-family: 'Zen Kurenaido';
    line-height: 1.1em;
    color: ${PURPLE};
    margin-bottom: 0.2em;
    text-align: center;
  `;

  const TaskDescription = styled.span`
    font-size: 15px;
    color: #32325d;
    margin-bottom: 0.2em;
  `;

  const ModalTitle = styled.h2`
    font-size: 25px;
    line-height: 1.1em;
    color: #32325d;
    margin-bottom: 0.2em;
    text-align: center;
    margin: 50px 0;
  `;

  const ModalImage = styled.div`
    height: 300px;
    overflow: hidden;
  `;

  const ModalTextWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 30px;
    @media (max-width: 426px) {
      flex-direction: column;
    }
  `;

  const ModalText = styled.div`
    width: 40%;
    @media (max-width: 426px) {
      width: 100%;
    }
  `;

  const { isShown, toggle } = useModal();
  const content = (
    <React.Fragment>
      <div className="modal-content-wrapper">
        <ModalImage />
        <ModalTitle>{props.title}</ModalTitle>
        <ModalTextWrapper>
          <ModalText>
            <h3>Instructions</h3>
            <span>
              Your challenge is to
            </span>
          </ModalText>
          <ModalText>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <h3>Getting Started</h3>
                <span>
                  Download the starter code
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3>Resources</h3>
              </div>
            </div>
          </ModalText>
        </ModalTextWrapper>
      </div>
    </React.Fragment>
  );

  return (
    <Task>
      <ModalButton onClick={toggle}>
        <TaskItem>
          <TaskInfo>
            <TaskTitle>{props.title}</TaskTitle>
            {props.children}
            <Modal
              isShown={isShown}
              hide={toggle}
              modalContent={content}
            />
          </TaskInfo>
        </TaskItem>
      </ModalButton>
    </Task>
  );
};

export default Task;

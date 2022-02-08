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
    padding: 10px;
    margin-bottom: 40px;
    width: 50%;
    @media (min-width: 990px) {
      width: 33.3%;
      padding: 20px;
    }
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
    @media(max-width: 990px) {
      padding: 0;
    }
    `;

  const TaskTitle = styled.h2`
    font-size: 2vw;
    font-family: 'Zen Kurenaido';
    line-height: 1.1em;
    color: ${PURPLE};
    margin-bottom: 0.2em;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 3.5vw;
    }
    `;

  const Link = styled.a`
    color: ${PURPLE};
    font-weight: initial;
  `;

  const ModalButton = styled.button`
    border: none;
    background-color: unset;
    width: 100%;
  `;

  const ModalTitle = styled.h2`
    font-size: 32px;
    line-height: 1.1em;
    color: #32325d;
    margin: 0 0 50px;
    text-align: center;
  `;

  const ModalTaskDescriptionBlock = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 50px 0 0;
    :nth-child(2n) {
    flex-direction: row-reverse;
    }
    @media (max-width: 425px) {
      flex-direction: column;
      :nth-child(2n) {
        flex-direction: column;
      }
    }
  `;

  const ModalTaskDescription = styled.div`
    font-size: 18px;
    color: #32325d;
    margin-bottom: 0.2em;
    padding: 15px;
    @media(max-width: 425px) {
      text-align: center;
      margin-bottom: 30px;
    } 
  `;

  const ModalTaskImage = styled.img`
    width: 50%;
    @media(max-width: 425px) {
      width: 100%;
      margin: auto;
    } 
  `;

  const ModalContentWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 30px;
    flex-direction: column;
    @media (max-width: 426px) {
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
        <ModalTitle>{props.title}</ModalTitle>
        <ModalContentWrapper>
          <ModalText>
            <h3>Domain: <Link href={props.link.url} target="_blank">{props.link.title}</Link></h3>
          </ModalText>
            <h3>Project</h3>
            <ModalTaskDescription>
              {props.goal}
            </ModalTaskDescription>
            <ModalTaskDescriptionBlock>
              <ModalTaskDescription>{props.description[0]}</ModalTaskDescription>
              <ModalTaskImage src={props.images[0]} alt=""/>
            </ModalTaskDescriptionBlock>
            <ModalTaskDescriptionBlock>
              <ModalTaskDescription>{props.description[1]}</ModalTaskDescription>
              <ModalTaskImage src={props.images[0]} alt=""/>
            </ModalTaskDescriptionBlock>
            <ModalTaskDescriptionBlock>
              <ModalTaskDescription>{props.description[2]}</ModalTaskDescription>
              <ModalTaskImage src={props.images[0]} alt=""/>
            </ModalTaskDescriptionBlock>
        </ModalContentWrapper>
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

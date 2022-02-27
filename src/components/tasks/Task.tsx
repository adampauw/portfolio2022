import React, { ReactNode } from 'react';
import { useModal } from '../Modals/useModal';
import { Modal } from '../Modals/Modal';
import { IProject } from '../../Models/Projects';
import {
  ModalContentWrapper,
  ModalText,
  ModalTitle,
  Link,
  ModalTaskDescription,
  ModalTaskDescriptionBlock,
  ModalTaskImage,
  Task,
  ModalButton,
  TaskItem,
  TaskInfo,
  TaskTitle,
} from './Task.styles';
import { Image } from '../Image/Image';

interface TaskProps extends IProject {
  children?: ReactNode;
}

export const TaskComponent = (props: TaskProps) => {
  const { isShown, toggle } = useModal();
  const content = (
    <React.Fragment>
      <div className="modal-content-wrapper">
        <ModalTitle>{props.title}</ModalTitle>
        <ModalContentWrapper>
          <ModalText>
            <h3>
              Domain:{' '}
              <Link href={props.link.url} target="_blank">
                {props.link.title}
              </Link>
            </h3>
          </ModalText>
          <h3>Project</h3>
          <ModalTaskDescription>{props.goal}</ModalTaskDescription>
          {props.images.map((key, index) => {
            return (
              <ModalTaskDescriptionBlock>
                <ModalTaskDescription>{props.description[index]}</ModalTaskDescription>
                <ModalTaskImage>
                  <Image url={props.images[index]} />
                </ModalTaskImage>
              </ModalTaskDescriptionBlock>
            );
          })}
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
            <Modal isShown={isShown} hide={toggle} modalContent={content} />
          </TaskInfo>
        </TaskItem>
      </ModalButton>
    </Task>
  );
};

export default TaskComponent;

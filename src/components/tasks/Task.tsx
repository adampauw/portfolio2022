import React, { ReactNode } from 'react';
import { useModal } from '../Modals/useModal';
import { Modal } from '../Modals/Modal';
import { IProject } from '../../Models/Projects';
import * as TaskStyles from './Task.styles';
import { Image } from '../Image/Image';

interface TaskProps extends Partial<IProject> {
  children?: ReactNode;
}

export const TaskComponent = (props: TaskProps) => {
  const { isShown, toggle } = useModal();
  const content = (
    <React.Fragment>
      <div className="modal-content-wrapper">
        <TaskStyles.ModalTitle>{props.title}</TaskStyles.ModalTitle>
        <TaskStyles.ModalContentWrapper>
          <TaskStyles.ModalText>
            <TaskStyles.ModalHeading>
              Domain:{' '}
              <TaskStyles.Link href={props.link?.url} target="_blank">
                {props.link?.title}
              </TaskStyles.Link>
            </TaskStyles.ModalHeading>
          </TaskStyles.ModalText>
          {props.goal && (
            <>
              <TaskStyles.ModalHeading>Project</TaskStyles.ModalHeading>
              <TaskStyles.ModalTaskObjective>{props.goal}</TaskStyles.ModalTaskObjective>
            </>
          )}
          {props.images?.map((key, index) => {
            return (
              <TaskStyles.ModalTaskDescriptionBlock>
                <TaskStyles.ModalTaskDescription>
                  {props.description![index]}
                </TaskStyles.ModalTaskDescription>
                <TaskStyles.ModalTaskImage>
                  <Image url={props.images![index]} />
                </TaskStyles.ModalTaskImage>
              </TaskStyles.ModalTaskDescriptionBlock>
            );
          })}
          {props.learnings && (
            <>
              <TaskStyles.ModalHeading>Key Learnings</TaskStyles.ModalHeading>
              <TaskStyles.ModalTaskObjective>{props.learnings}</TaskStyles.ModalTaskObjective>
            </>
          )}
        </TaskStyles.ModalContentWrapper>
      </div>
    </React.Fragment>
  );

  return (
    <TaskStyles.Task>
      <TaskStyles.ModalButton onClick={toggle}>
        <TaskStyles.TaskItem>
          <TaskStyles.TaskInfo>
            <TaskStyles.TaskTitle>{props.title}</TaskStyles.TaskTitle>
            {props.children}
            <Modal isShown={isShown} hide={toggle} modalContent={content} />
          </TaskStyles.TaskInfo>
        </TaskStyles.TaskItem>
      </TaskStyles.ModalButton>
    </TaskStyles.Task>
  );
};

export default TaskComponent;

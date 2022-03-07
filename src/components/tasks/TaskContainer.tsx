/** @jsx jsx */
import { FC } from 'react';
import TaskComponent from './Task';
import Footer from '../Footer/Footer';
import { jsx } from '@emotion/react';
import { IProject, Projects } from '../../Models/Projects';
import { IStudy, Studies } from '../../Models/Studies';
import { TaskContainer, TaskWrapper, Divider, ImageWrapper } from './Task.styles';
import { Image } from '../Image/Image';

export const TaskContainerComponent: FC = () => {
  return (
    <TaskWrapper>
      <TaskContainer id="work">
        {Projects.map((project: IProject) => (
          <TaskComponent
            title={project.title}
            goal={project.goal}
            description={project.description}
            images={project.images}
            link={project.link}
            learnings={project.learnings}>
            <ImageWrapper>
              <Image url={'browser'} />
            </ImageWrapper>
          </TaskComponent>
        ))}
        <Divider />
        {Studies.map((study: IStudy, index) => (
          <TaskComponent
            title={study.title}
            description={study.description}
            images={study.image}
            link={study.link}>
            <ImageWrapper>
              <Image url={'books'} width="65%" />
            </ImageWrapper>
          </TaskComponent>
        ))}
      </TaskContainer>
      <Footer />
    </TaskWrapper>
  );
};

export default TaskContainerComponent;

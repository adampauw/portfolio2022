/** @jsx jsx */
import { FC } from 'react';
import TaskComponent from './Task';
import Footer from '../Footer/Footer';
import Browser from '../../Assets/Images/browser.png';
import Books from '../../Assets/Images/books.png';
import { css, jsx } from '@emotion/react';
import { IProject, Projects } from '../../Models/Projects';
import { IStudy, Studies } from '../../Models/Studies';
import { TaskContainer, TaskWrapper, Image, Divider } from './Task.styles';

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
            link={project.link}>
            <Image src={Browser} />
          </TaskComponent>
        ))}
        <Divider />
        {Studies.map((study: IStudy) => (
          <TaskComponent
            title={study.title}
            goal="fix this"
            description={study.description}
            images={study.image}
            link={study.link}>
            <Image
              src={Books}
              css={css`
                width: 65%;
              `}
            />
          </TaskComponent>
        ))}
      </TaskContainer>
      <Footer />
    </TaskWrapper>
  );
};

export default TaskContainerComponent;

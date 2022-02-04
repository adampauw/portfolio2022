/** @jsx jsx */
import { FC } from "react";
import styled from "@emotion/styled";
import Task from "./Task";
import Footer from "../Footer/Footer";
import Browser from "../../Assets/Images/browser.png"
import Books from "../../Assets/Images/books.png"
import { PURPLE } from "../../Constants/Colours.constants";
import { css, jsx } from "@emotion/react";
import { IProject, Projects } from "../../Models/Projects";
import { IStudy, Studies } from "../../Models/Studies";

export const TaskContainer: FC = () => {
  const TaskContainer = styled.div`
    display: flex;
    -webkit-display: box;
    -moz-display: box;
    -ms-display: flexbox;
    -webkit-display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 150px 0;
  `;

  const TaskWrapper = styled.div`
      background: linear-gradient(149deg, #967baf 0%, #d5c2cd 40%);
      padding-bottom: 55px;
      margin-top: -100px;
      padding-top: 100px;
  `;

  const Divider = styled.div`
    width: 80%;
    border: 2px solid ${PURPLE};
    margin: 100px auto;
    border-radius: 40%;
  `;

  const Image = styled.img`
  width: 100%;
  height: auto;
  margin: auto;
  `;

  return (
      <TaskWrapper>
        <TaskContainer>
          {
            Projects.map((project: IProject) => (
              <Task 
                title={project.title} 
                description={project.description} 
                images={project.images}
                link={project.link}>
                <Image src={Browser}/>
              </Task>

          ))} 
          <Divider/>
          {
            Studies.map((study: IStudy) => (
              <Task 
                title={study.title} 
                description={study.description} 
                images={study.image}
                link={study.link}>
                <Image src={Books} css={css`width: 65%;`}/>
              </Task>
          ))}
        </TaskContainer>
        <Footer/>
      </TaskWrapper>
  );
};

export default TaskContainer;

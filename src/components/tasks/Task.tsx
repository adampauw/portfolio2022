import React from "react";
import styled from "@emotion/styled";

interface TaskProps {
  title: string;
  text: string;
  image: string;
}

export const Task = (props: TaskProps) => {
  const Task = styled.div`
  display: flex;
  padding: 20px;
  margin-bottom: 40px;
  width: 100%;
  @media(min-width: 767px) {
    width: 50%;
  }
  @media(min-width: 990px) {
    width: 33.3%;
  `;

  const TaskItem = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    border-radius: 6px;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    transition: transform 0.5s;
    -webkit-transition: transform 0.5s;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
    }
  `;

  const TaskImage = styled.div`
    height: 200px;
    overflow: hidden;
    background-image: url(${props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 6px 6px 0px 0px;
    opacity: 0.91;
    &:hover {
      opacity: 1;
    }
  `;

  const TaskInfo = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 1rem;
    line-height: 1.5em;
  `;

  const TaskTitle = styled.h2`
    font-size: 25px;
    line-height: 1.1em;
    color: #32325d;
    margin-bottom: 0.2em;
  `;

  const TaskDescription = styled.span`
    font-size: 15px;
    color: #32325d;
    margin-bottom: 0.2em;
  `;

  return (
    <Task>
      <TaskItem>
        <TaskImage />
        <TaskInfo>
          <TaskTitle>{props.title}</TaskTitle>
          <TaskDescription>{props.text}</TaskDescription>
        </TaskInfo>
      </TaskItem>
    </Task>
  );
};

export default Task;

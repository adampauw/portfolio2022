/** @jsx jsx */
import React, { FC } from "react";
import styled from "@emotion/styled";
import Task from "./Task";
import Footer from "../footer/Footer";
import Browser from "../../assets/images/browser.png"
import Books from "../../assets/images/books.png"
import { PURPLE } from "../../Constants/Colours.constants";
import { css, jsx } from "@emotion/react";

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
          <Task title="Import Feature" text=""><Image src={Browser}/></Task>
          <Task title="UI Re-brush" text=""><Image src={Browser}/></Task>
          <Task title="Adamin Interface" text=""><Image src={Browser}/></Task>
          <Task title="Event Service Migration" text=""><Image src={Browser}/></Task>
          <Task title="Neo Pro" text=""><Image src={Browser}/></Task>
          <Task title="Neo Event Creation" text=""><Image src={Browser}/></Task>
          <Task title="This Portfolio" text=""><Image src={Browser}/></Task>
          <Divider/>
          <Task title="Harvard" text=""><Image src={Books} css={css`width: 65%;`}/></Task>
          <Task title="Code Academy" text=""><Image src={Books} css={css`width: 65%;`}/></Task>
          <Task title="Udemy" text=""><Image src={Books} css={css`width: 65%;`}/></Task>
          <Task title="Career Foundry" text=""><Image src={Books} css={css`width: 65%;`}/></Task>
          <Task title="CodeCore" text=""><Image src={Books} css={css`width: 65%;`}/></Task>
        </TaskContainer>
        <Footer/>
      </TaskWrapper>
  );
};

export default TaskContainer;

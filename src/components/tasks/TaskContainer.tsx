import React, { FC } from "react";
import styled from "@emotion/styled";
import Header from "../header/Header";
import Task from "./Task";
import Footer from "../footer/Footer";

export const TaskContainer: FC = (props: any) => {
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

  const TaskTitle = styled.h1`
  color: #005351;
  margin: 0 auto 40px;
  padding-top: 50px;
  font-size: 48px;
  line-height: 52px;
  font-weight: 600;
  text-align: center;
  width: 90%;
  `;

  return (
    <div className="App">
      <Header
        text="Choose from our professionaly procured task list"
        img="/img/museum.svg"
      />
      <div className="Content">
        <TaskTitle>Tasks</TaskTitle>
        <TaskContainer>
          <Task image={"/img/task1.webp"} title="3-column preview card component" text="This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects."/>
          <Task image={"/img/task2.webp"} title="Testimonials grid section" text="This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it!"/>
          <Task image={"/img/task3.webp"} title="PayAPI multi-page website" text="This 4-page website will be a great test for your HTML & CSS skills. You'll be building out a marketing site, complete with custom form validation throughout."/>
          <Task image={"/img/task4.webp"} title="Chat app CSS illustration" text="In this challenge, you'll be building out the entire app illustration from scratch. This will seriously test your CSS skills. So give it a go if you feel confident!"/>
          <Task image={"/img/task5.webp"} title="Myteam multi-page website" text="This challenge will give you a real glimpse into a professional front-end developer's workflow. It includes designs for a 3-page fully-functional website."/>
          <Task image={"/img/task6.webp"} title="Base Apparel coming soon page" text="This layout looks simple enough, but there are some interesting details to it that will test your CSS skills. You'll also get to practice basic form validation."/>
          <Task image={"/img/task7.webp"} title="Project tracking intro component" text="Some interesting layout and code challenges are baked into this design. Perfect if you're a beginner who is starting to get a bit more confident with your layouts."/>
          <Task image={"/img/task8.webp"} title="Calculator app" text="This calculator app will be a great test of your CSS and JS skills especially. If you're wanting to practice using Grid, this challenge will be perfect for you!"/>
          <Task image={"/img/task9.webp"} title="Planets fact site" text="In this challenge, you'll be building out an 8-page fact site for all planets in our solar system. This project will make an incredible portfolio piece when completed!"/>
        </TaskContainer>
      </div>
      <Footer/>
    </div>
  );
};

export default TaskContainer;

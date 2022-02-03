import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { useModal } from "../modal/useModal";
import { Modal } from "../modal/Modal";
import { PURPLE } from "../../Constants/Colours.constants";

interface TaskProps {
  title: string;
  text: string;
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
              Your challenge is to build out this 8-page planets fact site and
              get it looking as close to the design as possible. You can use any
              tools you like to help you complete the challenge. So if you've
              got something you'd like to practice, feel free to give it a go.
              If you choose to use a JS-heavy approach, we provide a local
              data.json file for the planets. This means you'll be able to pull
              the data from there instead of using the separate .html files.
              Your users should be able to: View the optimal layout for the app
              depending on their device's screen size See hover states for all
              interactive elements on the page View each planet page and toggle
              between the "Overview", "Internal Structure", and "Surface
              Geology" tabs Download the project and go through the README.md
              file. This will provide further details about the project and help
              you get set up.
            </span>
          </ModalText>
          <ModalText>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <h3>Getting Started</h3>
                <span>
                  Download the starter code Set up the project with version
                  control (e.g. Git) Read the README.md file and have a look
                  around the project Download the design file, we provide both
                  Sketch and Figma versions of the design Get colors, fonts, etc
                  from the design system in the design file Set up your
                  project/file architecture however you want Start coding!
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3>Resources</h3>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    padding: "5px 0",
                    color: "#5f5ff7",
                  }}
                >
                  Figma Designs
                </a>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    padding: "5px 0",
                    color: "#5f5ff7",
                  }}
                >
                  Invision Designs
                </a>
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
            <TaskDescription>{props.text}</TaskDescription>
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

import React from "react";
import styled from "@emotion/styled";
import DetailsContainer from "./Details";

interface PostProps {
  title: string;
  date: string;
  image: string;
}

export const PostContainer = (props: PostProps) => {

  const Post = styled.div`
    width: 98%;
    height: 0;
    padding-top: 97%;
    margin: 1%;
    background-image: url(${props.image});
    background-size: cover;
    position: relative;
    transition: opacity .4s ease;
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
    @media(max-width: 425px) {
      width: 100%;
      margin: 0;
      margin-bottom: 10px;
    }
  `;

  return (
    <Post>
        <DetailsContainer title={props.title} date={props.date} />
    </Post>
  );
}

export default PostContainer

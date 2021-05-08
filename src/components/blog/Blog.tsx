import React from 'react'
import PostContainer from './Post';
import styled from '@emotion/styled';

export const Blog = () => {

  const BlogContainer = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat( auto-fit, minmax(450px, 1fr) );
    @media(max-width: 768px) {
      grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
    }
    @media(max-width: 1024px) {
      grid-template-columns: repeat( auto-fit, minmax(340px, 1fr) );
    }
  `

  return (
    <>
    <BlogContainer>
      <PostContainer
        image={"/img/pic1.jpg"}
        title={"first title"}
        date={"21/04/20"} />
      <PostContainer
        image={"/img/pic2.jpg"}
        title={"second title"}
        date={"21/04/20"} />
      <PostContainer
        image={"/img/pic3.jpg"}
        title={"third title"}
        date={"21/04/20"} />
      <PostContainer
        image={"/img/pic4.jpg"}
        title={"first title"}
        date={"21/04/20"} />
      <PostContainer
        image={"/img/pic5.jpg"}
        title={"second title"}
        date={"21/04/20"} />
      <PostContainer
        image={"/img/pic1.jpg"}
        title={"third title"}
        date={"21/04/20"} />
    </BlogContainer>
    </>
  );
}

import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import HeaderBack from '../components/HeaderBack';

import HeadingPrimary from '../elements/HeadingPrimary';
import TextBody from '../elements/TextBody';
import Button from '../elements/Button';

const ImgDiv = styled.div`
  margin: 0 5% 5vh 5%;

  @media (max-width: 849px) {
    margin: 0 0 5vh 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10vh;

  @media (max-width: 849px) {
    flex-direction: column;
  }
`;

function Info({ data }) {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingPrimary>About</HeadingPrimary>
        <ImgDiv>
          <Img fluid={data.RandomPhoto.childImageSharp.fluid} />
        </ImgDiv>
        <TextBody>
          Hi! My name is Utkarsh, I am a 15 year old tech-enthusiast who loves to write poems and papers on random things like <b>Why is coffee weird but tasty?</b> and other stuff.
          <br />
          <br />
          Below is the stuff which I do:-
          <ul>
            <li>Swimming</li>
            <li>Reading</li>
            <li>Writing</li>
            <li>Programming</li>
            <li>Sending random 2mb gifs</li>
            <li>Using discord every second (iQ200)</li>
            <li>Listening to songs</li>
            <li>Peeking out where **************</li>
          </ul>
          If you were able to make it to the very end here and read all of this, congratulations you just wasted 0.78 minutes of your time on reading random stuff. Go read my poems instead of this -_- 
          </TextBody>
        <ButtonWrapper>
          <a href="mailto:utkarsh.dubey3jan@gmail.com">
            <Button>Contact me</Button>
          </a>
        </ButtonWrapper>
        <span style={{fontSize: 14, backgroundColor: 'blue', color: 'white'}}>PSST! By the way, you can always send me some nice 2mb gifs on my email.</span>
      </Layout>
    </>
  );
}

export default Info;

export const query = graphql`
  query {
    RandomPhoto: file(relativePath: { eq: "RandomPhoto.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

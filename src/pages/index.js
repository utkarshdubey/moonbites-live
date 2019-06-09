import React, {useState, useEffect} from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
// import SEO from '../components/Seo';
import HeaderLogo from '../components/HeaderLogo';
import HeadingPrimary from '../elements/HeadingPrimary';
import HeadingSecondary from '../elements/HeadingSecondary';
import TextBody from '../elements/TextBody';
import TextDate from '../elements/TextDate';
const axios = require('axios');

const Hero = styled.div`
  margin-bottom: 20vh;

  @media (max-width: 849px) {
    margin-bottom: 15vh;
  }
`;

const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 50px;
  @media (max-width: 849px) {
    padding-left: 0;
  }
`;

function Blog({ data }) {
  const [randomQuote, setRandomQuote] = useState();
  const [randomQuoteAuthor, setRandomQuoteAuthor] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://quota.glitch.me/random'
      );
      setRandomQuote(result.data.quoteText);
      setRandomQuoteAuthor(result.data.quoteAuthor);
    }
    fetchData();
  }, []);
  return (
    <>
      {/* <SEO title="Moonbites" /> */}
      <HeaderLogo />
      <Layout>
        <Hero>
          <HeadingPrimary>Moonbites</HeadingPrimary>
          <TextBody>
            A personal collection of {' '}
            <span role="img" aria-label="pen">
              ✒
            </span>{' '}
            poems and random {' '}
            <span role="img" aria-label="research paper">
              📄
            </span>{' '}
            research papers by Utkarsh Dubey.
            <br/><br/>            
            <b>{randomQuote} - {randomQuoteAuthor}</b>
          </TextBody>
        </Hero>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.fields.slug}>
            <Post key={node.id}>
              <HeadingSecondary>{node.frontmatter.title}</HeadingSecondary>
              <TextBody>{node.excerpt}</TextBody>
              <TextDate>{node.frontmatter.date}</TextDate>
            </Post>
          </Link>
        ))}
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default Blog;

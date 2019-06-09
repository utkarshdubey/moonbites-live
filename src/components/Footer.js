import React from 'react';
import styled from 'styled-components';

import LinkStd from '../elements/LinkStd';

const FooterContainer = styled.footer`
  padding-top: 5vh;
  padding-bottom: 3vh;
  margin-top: 10vh;
  text-align: center;

  font-size: 17px;

  @media (max-width: 849px) {
    font-size: 16px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <span>
        Created with{' '}
        <span role="img" aria-label="love">
          ❤
        </span>{' '}
        and{' '}
        <span role="img" aria-label="coffee">
          ☕
        </span>{' '}
        by Utkarsh Dubey.
      </span>
      <br />
      <br />
      <LinkStd
        href="https://www.instagram.com/ecstatic.illusion/"
        target="_blank"
      >
        IG
      </LinkStd>
      <LinkStd href="https://github.com/utkarshdubey" target="_blank">
        Github
      </LinkStd>
    </FooterContainer>
  );
}

export default Footer;

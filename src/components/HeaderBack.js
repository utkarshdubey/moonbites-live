import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import FixedBar from '../elements/FixedBar';

import ArrowBack from '../images/arrow-back.svg';

const Icon = styled.div`
  height: 34px;
  width: 34px;

  @media (max-width: 849px) {
    height: 28px;
    width: 28px;
  }
`;

function Header() {
  return (
    <FixedBar>
      <Link to="/">
        <Icon>
          <img src={ArrowBack} alt="Back" />
        </Icon>
      </Link>
    </FixedBar>
  );
}

export default Header;

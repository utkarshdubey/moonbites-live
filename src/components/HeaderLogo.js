import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import FixedBar from '../elements/FixedBar';

const HeaderLogo = styled(FixedBar)`
  justify-content: space-between;
  margin-top: 15px;
`;

const Logo = styled.p`
  font-size: 32px;
  font-weight: 700;

  @media (max-width: 849px) {
    font-size: 28px;
  }
`;

function Header() {
  return (
    <HeaderLogo>
      <Logo>Utkarsh Dubey</Logo>
      <Link to="/about">
        <p>Want to know more about me? <span role="img" aria-label="person">👦</span></p>
      </Link>
    </HeaderLogo>
  );
}

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HeaderButton from './headerButton';
import HeaderIcon from './headerIcon';

const StyledHeader = styled.div`
  /* For anything larger than a phone: */
  @media only screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const Header = ({ scrollIndex, setIndex }) => (
  <StyledHeader>
    <HeaderButton index={0} scrollIndex={scrollIndex} onClick={() => setIndex(0)} text={'Projects'}/>
    <HeaderButton index={2} scrollIndex={scrollIndex} onClick={() => setIndex(2)} text={'Blog'}/>
    <HeaderButton index={3} scrollIndex={scrollIndex} onClick={() => setIndex(3)} text={'About'}/>
    <HeaderIcon/>
  </StyledHeader>
);

Header.props = {
  scrollIndex: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired
};

export default Header;


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ScrollBarIndicator from './scrollBarIndicator';
import ScrollBarSection from './scrollBarSection';

const StyledScrollBar = styled.div`
  position: absolute;
  margin-left: 40px;
  width: 5px;
  top: 20%;
  bottom: 20%;
  background : rgba(196, 196, 196, .5);
`;

const ScrollBar = ({setIndex, scrollIndex}) => (
  <StyledScrollBar>
    <ScrollBarIndicator index={scrollIndex}/>
    {[0, 1, 2, 3].map(index => (
      <ScrollBarSection key={index} index={index} onClick={() => setIndex(index)}/>
    ))}
  </StyledScrollBar>
);

ScrollBar.props = {
    setIndex: PropTypes.func.isRequired,
    scrollIndex: PropTypes.number.isRequired
};

export default ScrollBar;
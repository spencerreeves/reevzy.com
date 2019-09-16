import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBarSection = styled.div`
  width: 5px;
  height: 25%;
  
  &:hover {
    rgba(229, 229, 229, .5);
  }
`;

//TODO: Need to make the scroll sections rounded
const ScrollBarSection = ({ index, onClick }) => {
  const borderRadius = {borderRadius: (index === 0 ? '1px 1px ' : '0 0 ') + (index === 3 ? '1px 1px' : '0 0')};

  return (
    <StyledBarSection onClick={onClick} style={borderRadius}/>
  );
};

ScrollBarSection.props = {
  index:PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ScrollBarSection;
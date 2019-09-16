import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledScrollBarIndicator = styled.div`
  width: 5px;
  height: 25%;
  border-radius: 1px;
  background: white;
  position: absolute;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
`;

const ScrollBarIndicator = ({index = 1}) => {
  const height = {top: (index * 25).toString() + '%'};

  return (<StyledScrollBarIndicator style={height}/>);
};

ScrollBarIndicator.props = {
  index: PropTypes.number.isRequired
};

export default ScrollBarIndicator;
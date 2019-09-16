import React from 'react';
import styled from 'styled-components';

const StyledHeaderIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  padding-right: 20px;
  color: rgba(255, 255, 255, .75);
  cursor: pointer;
  
  &:hover {
    color: rgba(255, 255, 255, .90);
  }

  &:active {
    color: rgba(255, 255, 255, .6);
  }
  
  /* For tablets: */
  @media only screen and (min-width: 600px) {
    display: none;
  }
  
  /* For desktop: */
  @media only screen and (min-width: 768px) {
    display: none;
  } 
`;

const HeaderIcon = () => (
  <StyledHeaderIcon>
    <i className="fas fa-stream fa-2x"/>
  </StyledHeaderIcon>
);

export default HeaderIcon;
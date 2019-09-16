import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeaderButton = styled.button`
  display: none; 
  
  /* For anything larger than a tablet: */
  @media only screen and (min-width: 600px) {
    width: 110px;
    height: 33px;
    background: rgba(255, 255, 255, 0.25);;
    margin-top: 30px;
    margin-right: 30px;
    border-radius: 6px;
    text-decoration: none;
    border: none;
    -webkit-transition-duration: 0.2s; /* Safari */
    transition-duration: 0.2s;
    cursor: pointer;
    display: block;

    font-weight: 700;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    color: #1E1F27;
    letter-spacing: .025em;
    
    &:hover {
      color: white;
      background: rgba(229, 229, 229, .35);
    }

    &:active {
      background: rgba(150, 150, 150, .35);
    }
    
    .active {
      background: rgba(150, 150, 150, .35); 
    }
  }
`;


//TODO: Need to make the active state correct
const HeaderButton = ({index, scrollIndex, onClick, text}) => {
  const isActive = {background: (index === scrollIndex ? 'rgba(150, 150, 150, .35)' : 'rgba(255, 255, 255, 0.25)')};

  return (
    <StyledHeaderButton style={isActive} onClick={onClick}> {text} </StyledHeaderButton>
  )
};

HeaderButton.propTypes = {
  index: PropTypes.number.isRequired,
  scrollIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default HeaderButton;
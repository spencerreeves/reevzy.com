import React, { useReducer}from 'react';
import './ScrollBar.css';

const heightReducer= (state, action) => {
  if (action && action < 4) {
    return {top: (action * 25).toString() + '%'};
  } else {
    return {top: '0%'};
  }
};

export const ScrollBar = () => {
  const [height, heightDispatch] = useReducer(heightReducer, {top: '0%'});
  console.log(height);

  return (
    <div className='ScrollBar'>
      <div className='ScrollBarIndicator' style={height}/>
      <div className='ScrollSection' onClick={() => heightDispatch(0)}/>
      <div className='ScrollSection' onClick={() => heightDispatch(1)}/>
      <div className='ScrollSection' onClick={() => heightDispatch(2)}/>
      <div className='ScrollSection' onClick={() => heightDispatch(3)}/>
    </div>
  );
};


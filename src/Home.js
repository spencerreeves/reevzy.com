import React, { useState, useEffect}from 'react';
import './Home.css';

export const Title = () => {
  return (
    <div className='top-25'>
      <h1 className=" HomeTitle homeText">REEVES</h1>
    </div>
  );
};

export const SubTitle = () => {
  const titles = ['Software Consultant', 'UI/UX Designer', 'Product Owner', 'Product Manager', 'Software Engineer'];
  const [index, setIndex] = useState(0);

  // Iterate through the titles every 1.5s
  useEffect( () => {
    const interval = setInterval( () => {
      if (index < titles.length - 1) {
        setIndex(index => index + 1);
      } else {
        clearInterval(interval);
      }
    }, 1500);
    // Clear the interval if user navigates away from page
    return () => clearInterval(interval);

    // Add dependencies used in Effect
  }, [titles, index, setIndex]);

  return (
    <div>
      <h4 className='HomeSubTitle homeText'>-&nbsp;{titles[index]}&nbsp;-</h4>
    </div>
  );
};

export const Menu = () => {
  return (
    <div className="menu">
      <button className="menuButton">
        Projects
      </button>
      <button className="menuButton">
        Blog
      </button>
      <button className="menuButton">
        About
      </button>
      <div className="menuIcon">
        <i className="fas fa-stream fa-2x"/>
      </div>
    </div>
  );
};



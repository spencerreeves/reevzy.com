import React from 'react';
import './App.css';
import {Title, SubTitle, Menu} from './Home.js';

function App() {
  return (
    <div id="app" className="background-twilight full-screen">
      <div id="body">
        <Menu/>
        <Title/>
        <SubTitle />
      </div>
    </div>
  );
}

export default App;

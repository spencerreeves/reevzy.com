import React from 'react';
import './App.css';
import Header from '../containers/header';
import {Title, SubTitle} from '../Home.js';
import ScrollBar from '../containers/scroll';

function App() {
  return (
    <div id="app" className="background-twilight full-screen" onWheel={console.log}>
      <div className="underConstruction">Under Renovation</div>
      <div id="body">
        <Header/>
        <ScrollBar/>
        <Title/>
        <SubTitle />
      </div>
    </div>
  );
}

export default App;

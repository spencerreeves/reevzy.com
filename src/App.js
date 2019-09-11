import React from 'react';
import './App.css';
import {Title, SubTitle, Menu} from './Home.js';
import {ScrollBar} from "./ScrollBar";

function App() {
  return (
    <div id="app" className="background-twilight full-screen">
      <div id="body">
        <Menu/>
        <ScrollBar/>
        <Title/>
        <SubTitle />
      </div>
    </div>
  );
}

export default App;

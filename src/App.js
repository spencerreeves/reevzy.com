import React from 'react';
import './App.css';
import {Title, SubTitle, Header} from './Home.js';

function App() {
  return (
    <div id="app" className="background-twilight full-screen">
      <div id="body" className="padding-40">
        <Header/>
        <Title/>
        <SubTitle />
      </div>
    </div>
  );
}

export default App;

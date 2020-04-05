import React from 'react';
import './index.css';
import AboutMe from './components/AboutMeWrapper/AboutMe';
import ListWrapper from './components/ListWrapper/ListWrapper';

const App = () => {
  return (
    <div className="wrapper">
      <AboutMe />
      <ListWrapper />
    </div>
  );
}

export default App;

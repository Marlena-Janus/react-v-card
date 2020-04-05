import React from 'react';
import './index.css';
import AboutMe from './components/AboutMeWrapper/AboutMe';
import ListWrapper from './components/ListWrapper/ListWrapper';
import QuestionList from './components/QuestionList/QuestionList';

class App extends React.Component {
  state = {
    items: [],
  }

  render() {
    return (
      <div className="wrapper">
        <AboutMe />
        <ListWrapper />
        <QuestionList />
      </div>
    )
  }
}

export default App;

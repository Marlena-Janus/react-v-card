import React from 'react';
import './index.css';
import AboutMe from './components/AboutMeWrapper/AboutMe';
import ListWrapper from './components/ListWrapper/ListWrapper';
import QuestionSection from './components/QuestionSection/QuestionSection';

class App extends React.Component {
  state = {
    items: [],
  }

  render() {
    return (
      <div className="wrapper">
        <AboutMe />
        <ListWrapper />
        <QuestionSection
          items={this.state.items}
        />
      </div>
    )
  }
}

export default App;

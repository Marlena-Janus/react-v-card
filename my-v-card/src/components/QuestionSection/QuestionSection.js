import React from 'react';
import './questionSection.css'
import QuestionList from './QuestionList/QuestionList';
import QuestionForm from './QuestionForm/QuestionForm';

class QuestionSection extends React.Component {
  state = {
    test: [],
  }
  addQuestion = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <div className="questionSection__wrapper">
        <QuestionList />
        <QuestionForm addQuestion={this.addQuestion} />
      </div>
    )
  }
}

export default QuestionSection;
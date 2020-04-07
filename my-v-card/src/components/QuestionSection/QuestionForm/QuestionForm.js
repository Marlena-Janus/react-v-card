import React from 'react';

const QuestionForm = (addQuestion) => (
  <form onSubmit={addQuestion}>
    <input placeholder="image"></input>
    <input placeholder="name"></input>
    <textarea placeholder="description"></textarea>
    <button type="submit">Add question</button>
  </form>
);

export default QuestionForm;
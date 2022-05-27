import React, { Component } from 'react';
import { useEffect } from 'react';
import './App.css';
import QuestionList from "./components/QuestionList";

const Toggle = ({ question }) => {

  return (
    <>
      <h1 className='question-text'>{question.question}</h1>
      <div className='container'>
        <span className='toggle'></span>
        {
          question[0].answers.map((obj) =>
            (<span>{obj.answer}</span>)
          )
        }
      </div>
    </>
  )
}

function App() {




  const list = QuestionList.map((obj, i) => {

    return (<>
      <h1 className='question-header'>{obj.question}</h1>

      {
        obj.answers.map((x) =>
          <>
            <div className='toggleContainer'>
              <span className='selector'></span>
              <span className={x[0].isCorrect ? 'correct option left' : 'incorrect option left'}>
                {x[0].answer}
              </span>
              <span className={x[1].isCorrect ? 'correct option right' : 'incorrect option right'}>
                {x[1].answer}
              </span>
            </div>
          </>)
      }
    </>
    )

  })
  return (
    <div className="App">
      {list}
      <h2 className='status'></h2>
    </div>
  );
}

export default App;
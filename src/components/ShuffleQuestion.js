import React, { Component } from 'react'
import "./style.css";

export default class ShuffleQuestion extends Component {
     Shuffle = ({ question }) => {
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
  
}

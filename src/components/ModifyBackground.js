import React, { Component } from 'react'


function validate() {
    if (numCorrect != toggler.length)
      status.innerHTML = 'Incorrect'

    if (numCorrect == toggler.length) {
      status.innerHTML = 'Correct'
      body.classList.remove('one')
      body.classList.remove('two')
      body.classList.remove('three')
      body.classList.remove('allincorrect')
      body.classList.add('allcorrect')
    }
    else if (numCorrect == 0) {
      body.classList.add('allincorrect')
      body.classList.remove('one')
    }
    else if (numCorrect == 1) {
      body.classList.remove('allincorrect')
      body.classList.add('one')
      body.classList.remove('two')
    }
    else if (numCorrect == 2) {
      body.classList.remove('three')
      body.classList.remove('one')
      body.classList.add('two')
    }
    else if (numCorrect == 3) {
      body.classList.remove('two')
      body.classList.add('three')
    }
  }

export default class ModifyBackground extends Component {

    

  render() {
    return (
      <div>ModifyBackground</div>
    )
  }
}


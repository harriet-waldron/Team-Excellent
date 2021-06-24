import React, { useState, useEffect } from 'react'

const Form = () => {
  return (
    <div className='form'>
      <form >
        <h3>This is the first question?</h3>
        <label htmlFor='q1-1'>1</label>
        <input type='radio' name='question1' id='q1-1' value='1' />
        <label htmlFor='q1-2'>1</label>
        <input type='radio' name='question1' id='q1-2' value='2' />
        <label htmlFor='q1-3'>1</label>
        <input type='radio' name='question1' id='q1-3' value='3' />
        <label htmlFor='q1-4'>1</label>
        <input type='radio' name='question1' id='q1-4' value='4' />
      </form>
    </div>
  )
}

export default Form

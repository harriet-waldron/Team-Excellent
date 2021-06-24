import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    question1: 0,
    question2: 0,
    question3: 0,
    question4: 0
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className='form'>
      <form onSubmit={(e => handleSubmit(e))}>
        <label htmlFor='name'>Name:</label>
        <input name='name' type='text' value={formData.name} placeholder='Name' required onChange={(e) => handleChange(e)} />
        <input name='birthdate' type='date' value={formData.birthdate} placeholder='Birthdate' required onChange={(e) => handleChange(e)} />
        <h3>This is the first question?</h3>
        <label htmlFor='q1-1'>1</label>
        <input type='radio' name='question1' id='q1-1' value='1' onChange={(e) => handleChange(e)} />
        <label htmlFor='q1-2'>2</label>
        <input type='radio' name='question1' id='q1-2' value='2' onChange={(e) => handleChange(e)} />
        <label htmlFor='q1-3'>3</label>
        <input type='radio' name='question1' id='q1-3' value='3' onChange={(e) => handleChange(e)} />
        <label htmlFor='q1-4'>4</label>
        <input type='radio' name='question1' id='q1-4' value='4' onChange={(e) => handleChange(e)} />
        <h3>This is the second question</h3>
        <label htmlFor='q2-1'>1</label>
        <input type='radio' name='question2' id='q2-1' value='1' onChange={(e) => handleChange(e)} />
        <label htmlFor='q2-2'>2</label>
        <input type='radio' name='question2' id='q2-2' value='2' onChange={(e) => handleChange(e)} />
        <label htmlFor='q2-3'>3</label>
        <input type='radio' name='question2' id='q2-3' value='3' onChange={(e) => handleChange(e)} />
        <label htmlFor='q2-4'>4</label>
        <input type='radio' name='question2' id='q2-4' value='4' onChange={(e) => handleChange(e)} />
        <h3>This is the third question</h3>
        <label htmlFor='q3-1'>1</label>
        <input type='radio' name='question3' id='q3-1' value='1' onChange={(e) => handleChange(e)} />
        <label htmlFor='q3-2'>2</label>
        <input type='radio' name='question3' id='q3-2' value='2' onChange={(e) => handleChange(e)} />
        <label htmlFor='q3-3'>3</label>
        <input type='radio' name='question3' id='q3-3' value='3' onChange={(e) => handleChange(e)} />
        <label htmlFor='q3-4'>4</label>
        <input type='radio' name='question3' id='q3-4' value='4' onChange={(e) => handleChange(e)} />
        <h3>This is the fourth question</h3>
        <label htmlFor='q4-1'>1</label>
        <input type='radio' name='question4' id='q4-1' value='1' onChange={(e) => handleChange(e)} />
        <label htmlFor='q4-2'>2</label>
        <input type='radio' name='question4' id='q4-2' value='2' onChange={(e) => handleChange(e)} />
        <label htmlFor='q4-3'>3</label>
        <input type='radio' name='question4' id='q4-3' value='3' onChange={(e) => handleChange(e)} />
        <label htmlFor='q4-4'>4</label>
        <input type='radio' name='question4' id='q4-4' value='4' onChange={(e) => handleChange(e)} />
        <div><button onClick={(e) => handleSubmit(e)}>Submit</button></div>
      </form>
    </div>
  )
}

export default Form

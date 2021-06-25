import React, { useEffect, useState } from 'react'

// import { } from '../api'

const Form = (props) => {
  const [formData, setFormData] = useState({
    score: 0,
    name: '',
    starSign: '',
    question1: 0,
    question2: 0,
    question3: 0,
    question4: 0
  })

  const [helper, setHelper] = useState(0)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setHelper(helper + 1)
  }

  useEffect(() => {
    const newResponseID = Number(formData.question1) + Number(formData.question2) + Number(formData.question3) + Number(formData.question4)
    setFormData({ ...formData, score: newResponseID })
  }, [helper])

  const handleSubmit = (e) => {
    props.update(formData)
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className='form'>
      <form onSubmit={(e => handleSubmit(e))}>
        <div className='formHeaderStyle'>
        <label className='labelStyle' htmlFor='name'>Name:</label>
        <input className='inputStyle' name='name' type='text' value={formData.name} placeholder='Name' onChange={(e) => handleChange(e)} />
        <input className='inputStyle' name='birthdate' type='text' value={formData.starsign} placeholder='starsign' onChange={(e) => handleChange(e)} />
        <h2>Rate these questions from 1 to 4, 4 meaning you completely agree, 1 meaning you completely disagree</h2>
        </div>
        <div className='allQContainer'>
        <h3>Is noodles the staple of life?</h3>
        <label className='labelStyle' htmlFor='q1-1'>1</label>
        <input className='inputStyle' type='radio' name='question1' id='q1-1' value='1' onChange={(e) => handleChange(e)} />
        <label className='labelStyle' htmlFor='q1-2'>2</label>
        <input className='inputStyle' type='radio' name='question1' id='q1-2' value='2' onChange={(e) => handleChange(e)} />
        <label className='labelStyle' htmlFor='q1-3'>3</label>
        <input className='inputStyle' type='radio' name='question1' id='q1-3' value='3' onChange={(e) => handleChange(e)} />
        <label className='labelStyle' htmlFor='q1-4'>4</label>
        <input className='inputStyle' type='radio' name='question1' id='q1-4' value='4' onChange={(e) => handleChange(e)} />
        <h3>When life throws you chillies, do you make chilli oil?</h3>
        <label className='labelStyle' htmlFor='q2-1'>1</label>
        <input className='inputStyle' type='radio' name='question2' id='q2-1' value='1' onChange={(e) => handleChange(e)} />
        <label className='labelStyle' htmlFor='q2-2'>2</label>
        <input className='inputStyle' type='radio' name='question2' id='q2-2' value='2' onChange={(e) => handleChange(e)} />
        <label className='labelStyle' htmlFor='q2-3'>3</label>
        <input className='inputStyle' type='radio' name='question2' id='q2-3' value='3' onChange={(e) => handleChange(e)} />
        <label className='labelStyle' htmlFor='q2-4'>4</label>
        <input className='inputStyle' type='radio' name='question2' id='q2-4' value='4' onChange={(e) => handleChange(e)} />
        <h3>Are you about that panda life?</h3>
        <label className='labelStyle' htmlFor='q3-1'>1</label>
        <input className='inputStyle' type='radio' name='question3' id='q3-1' value='1' onChange={(e) => handleChange(e)} />
        <label className='labelStyle' htmlFor='q3-2'>2</label>
        <input className='inputStyle' type='radio' name='question3' id='q3-2' value='2' onChange={(e) => handleChange(e)} />
        <label className='labelStyle' htmlFor='q3-3'>3</label>
        <input className='inputStyle' type='radio' name='question3' id='q3-3' value='3' onChange={(e) => handleChange(e)} />
        <label className='labelStyle' htmlFor='q3-4'>4</label>
        <input className='inputStyle' type='radio' name='question3' id='q3-4' value='4' onChange={(e) => handleChange(e)} />
        <h3>is Kung Fu fighting is the essence of life?</h3>
        <label className='labelStyle' htmlFor='q4-1'>1</label>
        <input className='inputStyle' type='radio' name='question4' id='q4-1' value='1' onChange={(e) => handleChange(e)} />
        <label className='labelStyle' htmlFor='q4-2'>2</label>
        <input className='inputStyle' type='radio' name='question4' id='q4-2' value='2' onChange={(e) => handleChange(e)} />
        <label className='labelStyle' htmlFor='q4-3'>3</label>
        <input className='inputStyle' type='radio' name='question4' id='q4-3' value='3' onChange={(e) => handleChange(e)} />
        <label className='labelStyle' htmlFor='q4-4'>4</label>
        <input className='inputStyle' type='radio' name='question4' id='q4-4' value='4' onChange={(e) => handleChange(e)} />
        </div>
        <div className='buttonContainer'><button className='buttonSubmit' onClick={(e) => handleSubmit(e)}>Submit</button></div>
      </form>
    </div>
  )
}

export default Form

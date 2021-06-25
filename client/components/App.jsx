import React, { useState, useEffect } from 'react'

import Header from './Header.jsx'
import Form from './Form.jsx'
import ExternalResponse from './ExternalResponse.jsx'
import InternalResponse from './InternalResponse.jsx'
import Footer from './Footer.jsx'
import { externalApi } from '../api'

const App = () => {
  const [submitted, setSubmitted] = useState(false)

//this is where i do usestate
  const [horoscope, setHoroscope] = useState({})

  useEffect(() => {
    externalApi('pisces')
    .then((result) => {
      setHoroscope(result)
    })
  }, [submitted])

  return (
    <div className='app'>

      <Header />
      {!submitted ? <Form update={setSubmitted(true)} />
        : <>
          <ExternalResponse obj={horoscope}/>
          <InternalResponse text={'are you there'}/>
        </>}
      <Footer />
    </div>
  )
}

export default App

import React, { useState } from 'react'

import Header from './Header.jsx'
import Form from './Form.jsx'
import ExternalResponse from './ExternalResponse.jsx'
import InternalResponse from './InternalResponse.jsx'
import Footer from './Footer.jsx'

const App = () => {
  const [submitted, setSubmitted] = useState(false)

//this is where i do usestate
  const [horoscope, setHoroscope] = useState([])


  return (
    <div className='app'>

      <Header />
      {!submitted ? <Form update={setSubmitted(true)} />
        : <>
          <ExternalResponse text={externalAPI}/>
          <InternalResponse text={externalAPI}/>
        </>}
      <Footer />
    </div>
  )
}

export default App

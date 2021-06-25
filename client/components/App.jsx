import React, { useState, useEffect } from 'react'

import Header from './Header.jsx'
import Form from './Form.jsx'
import ExternalResponse from './ExternalResponse.jsx'
import InternalResponse from './InternalResponse.jsx'
import Footer from './Footer.jsx'
import { externalApi, internalApi } from '../api'

const App = () => {
  const [submitted, setSubmitted] = useState(false)
  const [info, setInfo] = useState({})

  // this is where i do usestate
  const [horoscope, setHoroscope] = useState({})

  useEffect(() => {
    externalApi('pisces')
      .then((result) => {
        setHoroscope(result)
      })
  }, [submitted])

  const formResponse = (data) => {
    setInfo({
      starSign: data.starSign,
      name: data.name,
      score: data.score
    })
    setSubmitted(true)
    console.log(info)
  }

  return (
    <div className='app'>

      <Header />
      {!submitted ? <Form update={(resp) => formResponse(resp)} />
        : <>

          <ExternalResponse obj={horoscope}/>
          <InternalResponse text={'are you there'}/>

        </>}
      <Footer />
    </div>
  )
}

export default App

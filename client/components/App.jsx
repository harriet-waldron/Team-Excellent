import React, { useState, useEffect } from 'react'

import Header from './Header.jsx'
import Form from './Form.jsx'
import ExternalResponse from './ExternalResponse.jsx'
import InternalResponse from './InternalResponse.jsx'
import Footer from './Footer.jsx'
import Landing from './Landing.jsx'
import { externalApi, internalApi } from '../api'

const App = () => {
  const [submitted, setSubmitted] = useState(false)
  const [info, setInfo] = useState({})
  const [landing, setLanding] = useState(true)

  // this is where i do usestate
  const [horoscope, setHoroscope] = useState({})
  const [answer, setAnswer] = useState({})

useEffect(() => {
    if (info.score) {
      internalApi(info.score)
        .then((result) => {

          // console.log('result :' ,result[0])
          setAnswer(result[0])
        })
    }
  }, [info])

  useEffect(() => {
    if (info.starSign) {
      externalApi(info.starSign)
        .then((result) => setHoroscope(result))
        .catch(err => console.log(err))
    }
  }, [info])

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
      {landing
        ? <>
          <Header />
          <Landing ready={() => setLanding(false)}/>
          <Footer />
        </>
        : <>
          <Header />
          {!submitted ? <Form update={(resp) => formResponse(resp)} />
            : <>


          <ExternalResponse obj={horoscope}/>
          <InternalResponse text={answer}/>
            
            </>}
          <Footer />
        </> }
    </div>
  )
}

export default App

import React, { useState } from 'react'

import Header from './Header.jsx'
import Form from './Form.jsx'
import ExternalResponse from './ExternalResponse.jsx'
import InternalResponse from './InternalResponse.jsx'
import Footer from './Footer.jsx'

const App = () => {
  const [submitted, setSubmitted] = useState(false)
  const [info, setInfo] = useState({})

  const formResponse = (data) => {
    setInfo({
      starSign: data.starSign,
      name: data.name,
      score: data.score
    })
    setSubmitted(true)
    console.log(info)
  }

  // this is where i do usestate
  const [horoscope, setHoroscope] = useState([])

  return (
    <div className='app'>

      <Header />
      {!submitted ? <Form update={(resp) => formResponse(resp)} />
        : <>
          <ExternalResponse data={info} />
          <InternalResponse data={info} />
        </>}
      <Footer />
    </div>
  )
}

export default App

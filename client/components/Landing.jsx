import React, { useState, useEffect } from 'react'

const Landing = (props) => {
  return (
    <>
      <div className='landingPage'>
        <h1>Ready to learn your future?</h1>
        {/* <button className='landingButton' onClick={props.ready}>Go!</button> */}
        <img src='/images/333-3336192_red-button-circle-symbol-icon-png-image-ia.png' className='landingButton' onClick={props.ready} />
      </div>
    </>
  )
}

export default Landing

import React, { useState, useEffect } from 'react'

import { externalApi } from '../api'

const ExternalResponse = (props) => {
  console.log(props.obj)
  return (
    <div className='externalResponse'>
      <h2>{props.obj.description}</h2>
    </div>
  )
}

export default ExternalResponse

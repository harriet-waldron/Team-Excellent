import React, { useState, useEffect } from 'react'

import { externalApi } from '../api'

const ExternalResponse = (props) => {
  
  return (
    <div className='externalResponse'>
      <h2>Daily Horoscope:</h2>
      <ul>
      <li>Star sign dates: <br/><strong>{props.obj.date_range}</strong></li>
      <li></li>
      <li>Today:<br/><strong> {props.obj.description}</strong></li>
      <li></li>
      <li>Perfect match:<br/><strong> {props.obj.compatibility}</strong></li>
      <li></li>
      <li>Today's mood:<br/><strong> {props.obj.mood}</strong></li>
      <li></li>
      <li>Lucky color:<br/><strong> {props.obj.color}</strong></li>
      <li></li>
      <li>Lucky number:<br/><strong> {props.obj.lucky_number}</strong></li>
      <li></li>
      <li>Lucky time:<br/><strong>{props.obj.lucky_time}</strong></li>
      </ul>
    </div>
  )
}

export default ExternalResponse

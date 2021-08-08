import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(() => {
    // Get all airlines from API
    // Update airlines in out state

    axios.get('/api/v1/airlines')
    .then(res => {
      setAirlines(res.data.data)
    })
    .catch(res => console.log(res ))
  }, [airlines.length])

  const list = airlines.map(item => {
    return (<li key={item.id}>{item.attributes.name}</li>)
  })

  return (
    <div className="home">
      <div className="header">
        <h1>OpenFlights</h1>
        <div className="subheader">Honest, unbiased, airline reviews</div>
      </div>
      <div className="grid">
        <ul>{list}</ul>
      </div>
    </div>
  )
}

export default Airlines

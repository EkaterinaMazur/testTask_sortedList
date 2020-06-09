import React, { useState } from 'react'
import Row from './row'

const payload = {
  stocks: ['IBM', 'AAPL', 'AMZN'],
  start: [141.78, 237.15, 1727.41],
  current: [131.67, 287.48, 1727.4111111]
}

const payloadObject = new Array(payload.stocks.length).fill(null).map((it, index) => {
  return {
    stock: payload.stocks[index],
    start: payload.start[index],
    current: payload.current[index],
    diff: payload.current[index] - payload.start[index]
  }
})
payloadObject.sort((a, b) => {
  return a.stock.localeCompare(b.stock)
})

const Home = () => {
  const [ field, setField ] = useState('current')
  const nextState = () => (field === 'current' ? 'diff' : 'current')
  const toggle = () => {
    setField(nextState())
  }
  return (
    <div>
      <button type="button" onClick={toggle}>
        [x] show {nextState()}
      </button>
      {payloadObject.map((it) => {
        return <Row key={it.stock} {...it} field={field} />
      })}
    </div>
  )
}

export default Home

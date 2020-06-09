import React from 'react'

const Row =(props)=>{
  return (
          <div className={`flex ${props.diff < 0 ? 'text-red-700' : ''}`} key={props.stock}>
            <div className="w-1/3">{props.stock}</div>
            <div className="w-1/3">{Math.abs(props.start).toFixed(2)}</div>
            <div className="w-1/3">{Math.abs(props[props.field]).toFixed(2)}</div>
          </div>
  )
}
export default Row

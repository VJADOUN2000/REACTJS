import React from 'react'

const user = (props) => {

  console.log(props)
  return (
    <div>
      <h1 style={{color: 'white'}}>Vikrant, {props.name}</h1>
    </div>
  )
}

export default user
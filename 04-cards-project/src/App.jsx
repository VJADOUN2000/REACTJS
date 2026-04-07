import React from 'react'
import Card from './components/card'
import User from './components/user'


const App = () => {

  const arr =[45,7,56,48];
  return (
    <div className='parent'>
      <User name='Vikrant Singh'/>
      <User name ={arr[3]}/>
      <Card/> 
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default App
App
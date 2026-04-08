import React from 'react'
import Card from './components/card'
import User from './components/user'


const App = () => {

  const arr = [{ user: "Vikrant" }
    , { user: "Aman" }
    , { user: "Ajay" }
  ];


  arr.map(function (elem) {
    console.log(elem.user)
  })
  return (
    <div className='parent'>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default App
App
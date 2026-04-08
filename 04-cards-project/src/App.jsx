import React from 'react'
import Card from './components/card'
import User from './components/user'


const App = () => {

  const arr = [{ user: "Vikrant", age: 24 }
    , { user: "Aman", age: 25}
    , { user: "Ajay", age: 25 }
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
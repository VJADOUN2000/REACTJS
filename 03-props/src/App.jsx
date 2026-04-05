import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='VJ' age={24} img= 'https://nanoreview.net/common/images/soc/qualcomm-mini.jpeg'/>
      <Card user='Aman' age={26} img= 'https://images.unsplash.com/photo-1573496528681-9b0f4fb0c660?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFjaGluZSUyMExlYXJuaW5nJTIwRW5naW5lZXJ8ZW58MHx8MHx8fDA%3D'/>
      <Card user='Aditya' age={25} img='https://images.unsplash.com/photo-1581092163144-b7ae3c00adbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEVuZ2luZWVyfGVufDB8fDB8fHww'/>
    </div>
    
  )
}

export default App

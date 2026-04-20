import React from 'react'
import Card from './components/card'
import User from './components/user'


const App = () => {

  const arr =[10,20,45]  


  return (
    <div className='parent'>
       {arr.map(function(elem){
          return <User name={elem}/>;
       })}
       
    </div>
  )
}

export default App
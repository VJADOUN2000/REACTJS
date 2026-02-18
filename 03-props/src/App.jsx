import React from 'react'
import card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1770064319432-9c5f134afca7?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>Vikrant Singh</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
      <card/>
    </div>
  )
}

export default App
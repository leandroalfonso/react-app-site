import { useState } from 'react'

import './App.css'
import Card from './components/bd';
import Navbar from './components/Navbar';
function App() {
  const [count, setCount] = useState(0)

  return (  
    <div className="App">
      <Navbar />
      <div className='container-content'>
      


       
          <Card />
      
      </div>


    </div>
  )
}

export default App

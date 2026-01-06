import { useState } from 'react'

import Greetings from './components/Greetings.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Greetings />
      </div>
    </>
  )
}

export default App

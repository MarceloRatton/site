import React from 'react'

import Topbar from './components/Topbar'
import Title from './components/Title'

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Title />
      <Topbar />
    </div>
  )
} 

export default App

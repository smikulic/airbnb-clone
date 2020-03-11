import React, { useState } from 'react'
import Header from './components/header/header'
import Filters from './components/filters/filters'
import Stays from './components/stays/stays'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="App">

      <Header setSearchTerm={setSearchTerm} />
      <Filters />
      <Stays searchTerm={searchTerm} />

      {/* pagination */}
    </div>
  )
}

export default App

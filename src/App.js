import React, { useState } from 'react'
import Header from './components/header/header'
import Filters from './components/filters/filters'
import StaysContainer from './containers/staysContainer'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="App">

      <Header setSearchTerm={setSearchTerm} />
      <Filters />
      <StaysContainer searchTerm={searchTerm} />

      {/* pagination */}
    </div>
  )
}

export default App

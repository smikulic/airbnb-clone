import React, { useState } from 'react'
import Header from './components/header/header'
import Filters from './components/filters/filters'
import StaysContainer from './containers/staysContainer'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  console.log(searchTerm)

  return (
    <div className="App">

      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Filters />
      <StaysContainer
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* pagination */}
    </div>
  )
}

export default App

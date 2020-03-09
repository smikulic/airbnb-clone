import React from 'react'
import Header from './components/header/header'
import Filters from './components/filters/filters'
import Stays from './components/stays/stays'
import { mockStays } from './mocks'
import './App.css'


function App() {
  return (
    <div className="App">

      <Header />
      <Filters />
      <Stays
        // places={[]}
        places={mockStays}
      />

      pagination
    </div>
  )
}

export default App

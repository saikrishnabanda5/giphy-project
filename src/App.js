import './App.css'

import React from 'react'
import GiphyPage from './components/GiphyPage/GiphyPage'
import Search from './components/Search/Search'

function App() {
  return (
    <div className="giphy-app">
      <Search />
      <GiphyPage />
    </div>
  )
}

export default App

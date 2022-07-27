import React from 'react'
import { Main } from './Main'
import { Navbar } from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </Router>
    </>
  )
}

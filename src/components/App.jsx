import React from 'react'
import { Main } from '../pages/Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Welcome } from '../pages/Welcome'
import { Layout } from '../layout/Layout'
import { AppProvider } from '../context/AppContext'

export const App = () => {
  return (
    <>
      <Router>
        <AppProvider>
          <Layout>
            <Routes>
              <Route path='/main' element={<Main />} />
              <Route path='/' element={<Welcome />} />
            </Routes>
          </Layout>
        </AppProvider>
      </Router>
    </>
  )
}

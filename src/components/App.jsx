import { Main } from '../pages/Main'
import { Layout } from '../layout/Layout'
import { Welcome } from '../pages/Welcome'
import { AppProvider } from '../context/AppContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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

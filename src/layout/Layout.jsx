import { Navbar } from '../components/Navbar'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Layout = ({ children }) => {
  const { theme } = useContext(AppContext)
  return (
    <>
      <div className={theme}>
        <Navbar />
        {children}
      </div>
    </>
  )
}

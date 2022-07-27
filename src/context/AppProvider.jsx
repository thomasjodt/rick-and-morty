import { createContext } from 'react'

const initialValue = {
  theme: 'light'
}
export const AppContext = createContext(initialValue)

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  )
}

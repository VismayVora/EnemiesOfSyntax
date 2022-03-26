import { useState, createContext } from "react";

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('user') ? localStorage.getItem('user') : null)
  const [login, setLogin] = useState(false)
  const values = {login, user, setUser, setLogin}
  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  )
}
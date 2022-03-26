import { useState, createContext } from "react";

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)
  const [login, setLogin] = useState(localStorage.getItem('user') ? true : false)
  const api = 'http://5e22-27-63-14-183.ngrok.io/'
  const values = {login, user, api, setUser, setLogin}
  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  )
}
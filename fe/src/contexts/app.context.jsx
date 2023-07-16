import { createContext, useState } from 'react'

const initialAppContext = {
  isAuthenticated: true,
  setIsAuthenticated: () => null,
  profile: '',
  setProfile: () => null,
  setting: {},
  setSeting: () => null
}

export const AppContext = createContext(initialAppContext)

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [setting, setSetting] = useState(initialAppContext.setting)

  return (
    <AppContext.Provider
      value={{
        setting,
        setSetting
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

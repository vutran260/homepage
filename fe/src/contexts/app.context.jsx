import { createContext, useState } from 'react'

const initialAppContext = {
  setting: {},
  setSeting: () => null,
  menuActive: 'Home',
  setMenuActive: () => null
}

export const AppContext = createContext(initialAppContext)

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [setting, setSetting] = useState(initialAppContext.setting)
  const [menuActive, setMenuActive] = useState(initialAppContext.menuActive)

  return (
    <AppContext.Provider
      value={{
        setting,
        setSetting,
        menuActive,
        setMenuActive
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

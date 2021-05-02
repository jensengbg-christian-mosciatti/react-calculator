import React, { createContext } from 'react'
import useDataManager from './useDataManager'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const { operation, keyboard, addButtonRef, keyPress } = useDataManager()

  const provider = {
    operation,
    keyboard,
    addButtonRef,
    keyPress,
  }

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  )
}

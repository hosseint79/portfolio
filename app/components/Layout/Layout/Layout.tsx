import React, { FC, useState, createContext, useContext } from 'react'
import { Navigation } from './Navigation/Navigation'

interface IContext {
  activeNavigation: Array<boolean>
  setActiveNavigation: React.Dispatch<React.SetStateAction<Array<boolean>>>
}

const LayoutProvider = createContext<IContext | null>(null)

export const useNavigationContext = () => {
  const pc = useContext(LayoutProvider)
  if (pc === null) {
    throw new Error('useNavigationContext Must be inside of Provider')
  }
  return pc
}

const Layout: FC = ({ children }) => {
  const [activeNavigation, setActiveNavigation] = useState<Array<boolean>>([
    true, // about activator
    false, // skill activator
    false, // contact-me activator
    false, // project activator
    false, // postList activator
  ])

  return (
    <LayoutProvider.Provider
      value={{
        activeNavigation,
        setActiveNavigation,
      }}
    >
      <div>
        {children}
        <Navigation />
      </div>
    </LayoutProvider.Provider>
  )
}

export { Layout }

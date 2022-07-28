import {FC} from 'react'
import {Navigation} from '../Navigation/Navigation'

const Layout: FC = ({children}) => {
  return (
    <>
      {children}
      <Navigation />
    </>
  )
}

export {Layout}

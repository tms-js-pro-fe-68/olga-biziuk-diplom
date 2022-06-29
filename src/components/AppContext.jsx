import { createContext, useContext } from 'react'

const Context = createContext()
export const useAppContext = () => useContext(Context)

export default function AppContextProvider({ children, context }) {

return <Context.Provider value={context}>{children}
</Context.Provider>
} 
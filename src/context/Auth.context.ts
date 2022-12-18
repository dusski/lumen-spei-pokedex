import React, { Dispatch, SetStateAction } from 'react'

export const AuthContext = React.createContext<{
  user: Record<string, string>
  setUser: Dispatch<SetStateAction<Record<string, string>>>
}>({
  user: {},
  setUser: () => {}
})

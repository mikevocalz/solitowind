import { SafeArea } from 'app/provider/safe-area'
import { ReactElement } from 'react'

export function Provider({ children }: { children: ReactElement }) {
  return (
    <SafeArea>
      {children}
    </SafeArea>
  )
}

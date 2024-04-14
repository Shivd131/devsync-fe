'use client'
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { NextUIProvider } from '@nextui-org/react'
import { PersistGate } from 'redux-persist/integration/react';
import { TerminalContextProvider } from "react-terminal";


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <TerminalContextProvider>
            {children}
          </TerminalContextProvider>

        </PersistGate>
      </Provider>
    </NextUIProvider>
  )
}
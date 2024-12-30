import { configureStore } from '@reduxjs/toolkit'
import { UserSlice } from './features/users/userSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        user: UserSlice.reducer
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

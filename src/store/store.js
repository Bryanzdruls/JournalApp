import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { journalSlice } from './journal/journalSlice'
import { drawerSlice } from './drawer'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer,
    drawer: drawerSlice.reducer,
  },
  
})
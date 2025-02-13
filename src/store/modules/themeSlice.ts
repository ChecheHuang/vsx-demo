import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Theme {
  primary: string
  secondary: string
  background: string
  text: string
  disabled: string
  borderRadius: string
}

const lightTheme: Theme = {
  primary: '#007bff',
  secondary: '#6c757d',
  background: '#f8f9fa',
  text: '#212529',
  disabled: '#c2c7ca',
  borderRadius: '5px',
}

const darkTheme: Theme = {
  primary: '#64b5f6',
  secondary: '#90caf9',
  background: '#282c34',
  text: '#fff',
  disabled: '#c2c7ca',
  borderRadius: '5px',
}

interface ThemeState {
  currentTheme: Theme
  themeName: 'light' | 'dark'
}

const initialState: ThemeState = {
  currentTheme: lightTheme,
  themeName: 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newThemeName = state.themeName === 'light' ? 'dark' : 'light'
      state.themeName = newThemeName
      state.currentTheme = newThemeName === 'light' ? lightTheme : darkTheme
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.currentTheme = action.payload
    },
  },
})

export const { toggleTheme, setTheme } = themeSlice.actions

export default themeSlice.reducer

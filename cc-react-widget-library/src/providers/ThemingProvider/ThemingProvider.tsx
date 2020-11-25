import React from 'react'
import { ThemingProviderProps } from './ThemingProvider.props'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { useSettingContext } from '../SettingsProvider'

const getThemeObject = (theme: string) => {
  return createMuiTheme(JSON.parse(theme))
}

export const ThemingProvider: React.FC<ThemingProviderProps> = (
  props: ThemingProviderProps
) => {
  const { defaultTheme, children } = props
  const defaultThemes = getThemeObject(defaultTheme || '')
  const loadedTheme = getThemeObject(useSettingContext().theme)

  return (
    <ThemeProvider theme={loadedTheme || defaultThemes}>
      {children}
    </ThemeProvider>
  )
}

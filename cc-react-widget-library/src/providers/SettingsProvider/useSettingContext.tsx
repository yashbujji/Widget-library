import { useContext } from 'react'
import SettingsContext from './settingsContext'

export const useSettingContext = (): Project.Setting => {
  return useContext<Project.Setting>(SettingsContext)
}

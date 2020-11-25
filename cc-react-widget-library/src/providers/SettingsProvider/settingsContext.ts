import { createContext } from 'react';

const initSettings: Project.Setting = {
  theme: '',
  pagesize: '',
  timeout: 0,
};

const SettingsContext = createContext<Project.Setting>(initSettings);

export default SettingsContext;

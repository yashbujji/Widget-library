export interface SettingsProviderProps {
  children: any;
  defaultSettings?: Project.Setting;
  loadSettings: (settings?: Project.Setting) => any;
  loading?: React.ReactElement;
}

import React from 'react';
import { SettingsProviderProps } from './SettingsProvider.props';
import SettingsContext from './settingsContext';

export const SettingsProvider: React.FC<SettingsProviderProps> = (
  props: SettingsProviderProps
) => {
  const { defaultSettings, loading, children, loadSettings } = props;
  const { settingsData, isLoading } = loadSettings(defaultSettings);

  return (
    <SettingsContext.Provider value={settingsData || defaultSettings}>
      {isLoading ? children : loading}
    </SettingsContext.Provider>
  );
};

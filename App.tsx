import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigation from './src/app/navigation';
import { starVestTheme } from './src/constants/theme';

export default function App() {
  return (
    <PaperProvider theme={starVestTheme}>
      <AppNavigation theme={starVestTheme} />
    </PaperProvider>
  );
}
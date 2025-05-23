import { MD3LightTheme as DefaultTheme, configureFonts } from 'react-native-paper';
import { Theme } from 'react-native-paper';

const NAVY = '#14233c';
const GREEN = '#4caf50';
const WHITE = '#fff';

const fontConfig = {
  fontFamily: 'System',
  fontWeight: '400',
};

export const starVestTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: GREEN,
    background: NAVY,
    surface: WHITE,
    text: NAVY,
    onPrimary: WHITE,
    onSurface: NAVY,
    secondary: NAVY,
    outline: GREEN,
  },
  fonts: configureFonts({ config: fontConfig }),
};

export { NAVY, GREEN, WHITE }; 
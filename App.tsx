import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { Navigation } from './src/app/navigation';

export default function App() {
  return (
    <PaperProvider>
      <Navigation />
      <StatusBar style="auto" />
    </PaperProvider>
  );
} 
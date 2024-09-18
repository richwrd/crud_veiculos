import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { View } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function VeiculoLayout() {
  return (
    <Stack>
      <Stack.Screen name="create/index" options={{ headerTitle: 'Criar Acessório'}} />
    </Stack>
  );
}

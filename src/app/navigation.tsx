import { NavigationContainer, Theme as NavigationTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './home/HomeScreen';
import WeatherScreen from './weather/WeatherScreen';
import CropsScreen from './crops/CropsScreen';
import TipsScreen from './tips/TipsScreen';

const Tab = createBottomTabNavigator();

interface AppNavigationProps {
  theme?: NavigationTheme;
}

const INACTIVE_COLOR = '#7a8ca6'; // lighter navy for better visibility

export default function AppNavigation({ theme }: AppNavigationProps) {
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Weather') {
              iconName = focused ? 'weather-partly-cloudy' : 'weather-partly-cloudy';
            } else if (route.name === 'Crops') {
              iconName = focused ? 'sprout' : 'sprout-outline';
            } else if (route.name === 'Tips') {
              iconName = focused ? 'lightbulb' : 'lightbulb-outline';
            }
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarInactiveTintColor: INACTIVE_COLOR,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Weather" component={WeatherScreen} />
        <Tab.Screen name="Crops" component={CropsScreen} />
        <Tab.Screen name="Tips" component={TipsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
} 
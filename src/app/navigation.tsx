import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../types/navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Import screens (we'll create these next)
import HomeScreen from './home/HomeScreen';
import WeatherScreen from './weather/WeatherScreen';
import CropsScreen from './crops/CropsScreen';
import TipsScreen from './tips/TipsScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

export function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: 'gray',
          headerShown: true,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Weather"
          component={WeatherScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="weather-partly-cloudy" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Crops"
          component={CropsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="sprout" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Tips"
          component={TipsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="lightbulb" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
} 
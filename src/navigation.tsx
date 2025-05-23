import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home/HomeScreen';
import WeatherScreen from './weather/WeatherScreen';
import CropsScreen from './crops/CropsScreen';
import TipsScreen from './tips/TipsScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Weather" component={WeatherScreen} />
        <Tab.Screen name="Crops" component={CropsScreen} />
        <Tab.Screen name="Tips" component={TipsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
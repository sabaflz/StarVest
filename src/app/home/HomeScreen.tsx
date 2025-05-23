import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

// Mock data (we'll replace this with real API calls later)
const mockWeatherData = {
  temperature: 25,
  condition: 'Sunny',
  humidity: 65,
  windSpeed: 12,
};

const mockCropRecommendations = [
  {
    name: 'Wheat',
    season: 'Winter',
    description: 'Best suited for current soil conditions',
  },
  {
    name: 'Corn',
    season: 'Summer',
    description: 'Optimal planting window approaching',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Weather Card */}
        <Card style={styles.card}>
          <Card.Content>
            <Title>Current Weather</Title>
            <View style={styles.weatherInfo}>
              <Text style={styles.temperature}>{mockWeatherData.temperature}°C</Text>
              <Text style={styles.condition}>{mockWeatherData.condition}</Text>
              <View style={styles.weatherDetails}>
                <Text>Humidity: {mockWeatherData.humidity}%</Text>
                <Text>Wind: {mockWeatherData.windSpeed} km/h</Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Crop Recommendations */}
        <Card style={styles.card}>
          <Card.Content>
            <Title>Crop Recommendations</Title>
            {mockCropRecommendations.map((crop, index) => (
              <View key={index} style={styles.cropItem}>
                <Text style={styles.cropName}>{crop.name}</Text>
                <Text style={styles.cropSeason}>{crop.season}</Text>
                <Paragraph>{crop.description}</Paragraph>
              </View>
            ))}
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    margin: 16,
    elevation: 4,
  },
  weatherInfo: {
    alignItems: 'center',
    marginTop: 16,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  condition: {
    fontSize: 24,
    marginTop: 8,
  },
  weatherDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 16,
  },
  cropItem: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  cropName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cropSeason: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
}); 
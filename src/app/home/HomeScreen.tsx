import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Card, Title, Paragraph, Text } from 'react-native-paper';

const mockWeather = {
  temperature: 24,
  condition: 'Sunny',
  humidity: 60,
  wind: 10,
};

const mockCrops = [
  { name: 'Wheat', reason: 'Best for current season' },
  { name: 'Corn', reason: 'Soil moisture optimal' },
];

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/images/StarVest_logo.png')}
        style={styles.logo}
        resizeMode="contain"
        accessibilityLabel="StarVest Logo"
      />
      <Card style={styles.card}>
        <Card.Content>
          <Title>Weather</Title>
          <Text>{mockWeather.temperature}°C, {mockWeather.condition}</Text>
          <Paragraph>Humidity: {mockWeather.humidity}% | Wind: {mockWeather.wind} km/h</Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Recommended Crops</Title>
          {mockCrops.map((crop, idx) => (
            <View key={idx} style={styles.cropItem}>
              <Text style={styles.cropName}>{crop.name}</Text>
              <Paragraph>{crop.reason}</Paragraph>
            </View>
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const NAVY = '#14233c';
const GREEN = '#4caf50';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: NAVY,
    minHeight: '100%',
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 24,
  },
  card: {
    marginBottom: 16,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: NAVY,
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cropItem: { marginTop: 8 },
  cropName: { fontWeight: 'bold', color: GREEN },
});
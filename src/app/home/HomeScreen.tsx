import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
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

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: { marginBottom: 16 },
  cropItem: { marginTop: 8 },
  cropName: { fontWeight: 'bold' },
});
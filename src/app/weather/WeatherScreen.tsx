import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Title, Paragraph } from 'react-native-paper';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your actual API key
const CITY = 'San Francisco'; // Replace with your desired city

export default function WeatherScreen() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) {
          throw new Error('Weather data not found');
        }
        const data = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading weather data...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Weather in {CITY}</Title>
          <Paragraph>Temperature: {weather?.main?.temp}°C</Paragraph>
          <Paragraph>Condition: {weather?.weather?.[0]?.description}</Paragraph>
          <Paragraph>Humidity: {weather?.main?.humidity}%</Paragraph>
          <Paragraph>Wind: {weather?.wind?.speed} m/s</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    width: '100%',
  },
}); 
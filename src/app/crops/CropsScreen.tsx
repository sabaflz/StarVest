import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Card, Title, Paragraph } from 'react-native-paper';

// Mock API endpoint for crop recommendations
const MOCK_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function CropsScreen() {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await fetch(MOCK_API_URL);
        if (!response.ok) {
          throw new Error('Crop data not found');
        }
        const data = await response.json();
        // Simulate crop recommendations
        const cropRecommendations = data.slice(0, 5).map((item) => ({
          name: `Crop ${item.id}`,
          reason: item.title,
        }));
        setCrops(cropRecommendations);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCrops();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading crop recommendations...</Text>
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
      <FlatList
        data={crops}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.name}</Title>
              <Paragraph>{item.reason}</Paragraph>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
}); 
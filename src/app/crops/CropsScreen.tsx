import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Card, Title, Paragraph, useTheme } from 'react-native-paper';

// Mock API endpoint for crop recommendations
const MOCK_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function CropsScreen() {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { colors } = useTheme();

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

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}> 
      <FlatList
        data={crops}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Card style={[styles.card, { backgroundColor: colors.surface }]}> 
            <Card.Content>
              <Title style={{ color: colors.primary }}>{item.name}</Title>
              <Paragraph>{item.reason}</Paragraph>
            </Card.Content>
          </Card>
        )}
        ListEmptyComponent={
          loading ? <Text>Loading crop recommendations...</Text> : error ? <Text>Error: {error}</Text> : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  card: {
    marginBottom: 16,
    width: '100%',
    borderRadius: 16,
    elevation: 3,
  },
}); 
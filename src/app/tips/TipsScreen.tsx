import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Card, Title, Paragraph } from 'react-native-paper';

// Mock API endpoint for farming tips
const MOCK_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function TipsScreen() {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const response = await fetch(MOCK_API_URL);
        if (!response.ok) {
          throw new Error('Tips data not found');
        }
        const data = await response.json();
        // Simulate farming tips
        const farmingTips = data.slice(0, 5).map((item) => ({
          title: `Tip ${item.id}`,
          content: item.body,
        }));
        setTips(farmingTips);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTips();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading farming tips...</Text>
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
        data={tips}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.content}</Paragraph>
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
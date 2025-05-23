import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Card, Title, Paragraph, useTheme } from 'react-native-paper';

// Mock API endpoint for farming tips
const MOCK_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function TipsScreen() {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { colors } = useTheme();

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

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}> 
      <FlatList
        data={tips}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Card style={[styles.card, { backgroundColor: colors.surface }]}> 
            <Card.Content>
              <Title style={{ color: colors.primary }}>{item.title}</Title>
              <Paragraph>{item.content}</Paragraph>
            </Card.Content>
          </Card>
        )}
        ListEmptyComponent={
          loading ? <Text>Loading farming tips...</Text> : error ? <Text>Error: {error}</Text> : null
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
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const historyData = [
  { id: '1', activity: 'Completed Flashcard Review', date: '2025-09-26' },
  { id: '2', activity: 'Finished Practice Test', date: '2025-09-25' },
  // Add more history entries here
];

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={historyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.activity}>{item.activity}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderColor: '#ccc' },
  activity: { fontSize: 18 },
  date: { fontSize: 14, color: '#555' },
});
s
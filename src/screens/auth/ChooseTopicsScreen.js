import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const topicsData = [
  { id: '1', title: 'Cơ bản' },
  { id: '2', title: 'Trung cấp' },
  { id: '3', title: 'Nâng cao' },
  { id: '4', title: 'Giao tiếp hàng ngày' },
  { id: '5', title: 'Từ vựng chuyên ngành' },
];

const ChooseTopicsScreen = ({ navigation }) => {
  const [selectedTopics, setSelectedTopics] = useState([]);

  const toggleTopic = (id) => {
    setSelectedTopics(prev => 
      prev.includes(id)
        ? prev.filter(tid => tid !== id)
        : [...prev, id]
    );
  };

  const onSubmit = () => {
    if (selectedTopics.length === 0) {
      alert('Vui lòng chọn ít nhất một chủ đề');
      return;
    }
    // Lưu lựa chọn chủ đề
    // Chuyển sang LevelTestScreen
    navigation.navigate('LevelTest');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn chủ đề ưa thích</Text>
      <FlatList
        data={topicsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const selected = selectedTopics.includes(item.id);
          return (
            <TouchableOpacity
              style={[styles.topicItem, selected && styles.selected]}
              onPress={() => toggleTopic(item.id)}
            >
              <Text style={{color: selected ? 'white' : 'black'}}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
        extraData={selectedTopics}
      />
      <Button title="Tiếp tục" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20, textAlign: 'center' },
  topicItem: { padding: 15, borderRadius: 5, backgroundColor: '#eee', marginBottom: 10 },
  selected: { backgroundColor: '#007bff' },
});

export default ChooseTopicsScreen;
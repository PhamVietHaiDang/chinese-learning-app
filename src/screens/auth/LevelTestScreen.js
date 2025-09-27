import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const questions = [
  { id: 1, question: 'Bạn biết bao nhiêu chữ Hán cơ bản?', options: ['10', '50', '100', '200'], answer: '100' },
  { id: 2, question: 'Bạn đã học tiếng Trung được bao lâu?', options: ['Dưới 1 tháng', '1-3 tháng', '3-6 tháng', 'Trên 6 tháng'], answer: '1-3 tháng' },
  { id: 3, question: 'Mục tiêu của bạn khi học tiếng Trung?', options: ['Giao tiếp', 'Học tập', 'Công việc', 'Du lịch'], answer: 'Giao tiếp' },
];

const LevelTestScreen = ({ navigation }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);

  const onNext = () => {
    if (selected === null) {
      alert('Vui lòng chọn câu trả lời');
      return;
    }
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      // Kết thúc bài test, chuyển sang màn hình chính (Home)
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[current].question}</Text>
      {questions[current].options.map((opt) => (
        <TouchableOpacity
          key={opt}
          style={[styles.option, selected === opt && styles.selected]}
          onPress={() => setSelected(opt)}
        >
          <Text style={{color: selected === opt ? 'white' : 'black'}}>{opt}</Text>
        </TouchableOpacity>
      ))}
      <Button title={current === questions.length -1 ? 'Hoàn thành' : 'Tiếp theo'} onPress={onNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  question: { fontSize: 20, marginBottom: 20 },
  option: { padding: 15, backgroundColor: '#eee', marginBottom: 10, borderRadius: 5 },
  selected: { backgroundColor: '#28a745' }
});

export default LevelTestScreen;
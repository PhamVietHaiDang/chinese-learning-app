
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import AsyncStorage from '@react-native-async-storage/async-storage';

const audioRecorderPlayer = new AudioRecorderPlayer();

const requestPermission = async () => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true;
};

export default function PracticeScreen({ route }) {
  const { sentence } = route.params;
  const [recording, setRecording] = useState(false);
  const [filePath, setFilePath] = useState('');
  const [result, setResult] = useState('');

  const startRecording = async () => {
    const granted = await requestPermission();
    if (!granted) return;
    const uri = await audioRecorderPlayer.startRecorder();
    setRecording(true);
    setFilePath(uri);
  };

  const stopRecording = async () => {
    const uri = await audioRecorderPlayer.stopRecorder();
    setRecording(false);
    setFilePath(uri);
  };

  const uploadAndEvaluate = async () => {
    const formData = new FormData();
    formData.append('audio', {
      uri: filePath,
      type: 'audio/mp4',
      name: 'recording.mp4',
    });
    formData.append('sentence', sentence);

    try {
      const response = await fetch('https://your-backend.com/evaluate', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const data = await response.json();
      setResult(`Kết quả: ${data.score}/100\nBạn nói: ${data.recognizedText}`);
      await saveHistory(sentence, data.score);
    } catch (error) {
      console.error('Lỗi:', error);
      setResult('Lỗi khi gửi dữ liệu');
    }
  };

  const saveHistory = async (sentence, score) => {
    const history = JSON.parse(await AsyncStorage.getItem('history')) || [];
    const newItem = {
      sentence,
      score,
      date: new Date().toLocaleString(),
    };
    await AsyncStorage.setItem('history', JSON.stringify([newItem, ...history]));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sample}>Câu mẫu: {sentence}</Text>
      <Button title={recording ? 'Dừng ghi âm' : 'Bắt đầu ghi âm'} onPress={recording ? stopRecording : startRecording} />
      <View style={{ marginVertical: 10 }}>
        <Button title="Gửi và đánh giá" onPress={uploadAndEvaluate} disabled={!filePath} />
      </View>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  sample: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
});

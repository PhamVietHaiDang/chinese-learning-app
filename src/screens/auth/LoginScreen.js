import React, { useState } from 'react';
import { 
  View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    if(!email || !password) {
      Alert.alert('Lỗi', 'Vui lòng nhập email và mật khẩu');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://your-api.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const json = await response.json();
      setLoading(false);

      if (response.ok) {
        // Lưu token vào AsyncStorage
        await AsyncStorage.setItem('userToken', json.token);
        // Điều hướng sang màn hình chọn chủ đề hoặc màn hình chính
        navigation.navigate('ChooseTopics');
      } else {
        Alert.alert('Lỗi đăng nhập', json.message || 'Đăng nhập không thành công');
      }
    } catch (error) {
      setLoading(false);
      Alert.alert('Lỗi mạng', 'Không thể kết nối tới server');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title={loading ? 'Đang đăng nhập...' : 'Đăng nhập'} onPress={onLogin} disabled={loading} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Chưa có tài khoản? Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', paddingHorizontal:20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    height:40,
    borderColor:'#ccc',
    borderWidth:1,
    marginBottom:12,
    paddingHorizontal:10,
    borderRadius: 5,
  },
  link: { marginTop: 15, color: 'blue', textAlign: 'center' },
});

export default LoginScreen;

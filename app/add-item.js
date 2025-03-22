import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { addItem } from '../services/api';

export default function AddItemScreen() {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleAdd = async () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Item name cannot be empty');
      return;
    }
    await addItem(name);
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20, width: '80%', borderRadius: 5 },
});

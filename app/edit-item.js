import { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { editItem } from '../services/api';

export default function EditItemScreen({ route }) {
  const router = useRouter();
  const { id, initialName } = route.params;
  const [name, setName] = useState(initialName);

  const handleEdit = async () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Item name cannot be empty');
      return;
    }
    await editItem(id, name);
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Item</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Button title="Save Changes" onPress={handleEdit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20, width: '80%', borderRadius: 5 },
});

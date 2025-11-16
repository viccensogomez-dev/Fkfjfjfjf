
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');
  const [need, setNeed] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!name || !stock || !need) return;
    setItems([...items, { name, stock, need }]);
    setName('');
    setStock('');
    setNeed('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Stock Manager</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre del producto"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Stock actual"
        keyboardType="numeric"
        value={stock}
        onChangeText={setStock}
      />

      <TextInput
        style={styles.input}
        placeholder="Necesidad de producción"
        keyboardType="numeric"
        value={need}
        onChangeText={setNeed}
      />

      <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>

      <FlatList
        data={items}
        style={{ width: "100%" }}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text>Stock: {item.stock}</Text>
            <Text>Producción necesaria: {item.need}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  input: {
    width: "100%", padding: 12, borderWidth: 1, borderRadius: 8, marginBottom: 10
  },
  button: {
    backgroundColor: "#007bff", padding: 12, borderRadius: 8, marginBottom: 20
  },
  buttonText: { color: "#fff", textAlign: "center", fontSize: 18 },
  card: {
    padding: 15, borderWidth: 1, borderRadius: 10, marginBottom: 10
  },
  itemName: { fontSize: 18, fontWeight: "bold" }
});

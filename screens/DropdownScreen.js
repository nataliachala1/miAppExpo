import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function DropdownScreen() {
  const [seleccionado, setSeleccionado] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Parte 3 - Dropdown</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={seleccionado}
          onValueChange={(valor) => setSeleccionado(valor)}
          style={styles.picker}
        >
          <Picker.Item label="Selecciona una opción..." value="" />
          <Picker.Item label="🍎 Manzana" value="Manzana" />
          <Picker.Item label="🍌 Banano" value="Banano" />
          <Picker.Item label="🍇 Uvas" value="Uvas" />
          <Picker.Item label="🍓 Fresa" value="Fresa" />
        </Picker>
      </View>

      {seleccionado !== '' && (
        <Text style={styles.resultado}>
          Seleccionaste: <Text style={styles.resaltado}>{seleccionado}</Text>
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
    height: 54,
  },
  resultado: {
    marginTop: 24,
    fontSize: 16,
    color: '#555',
  },
  resaltado: {
    fontWeight: 'bold',
    color: '#e67e22',
  },
});
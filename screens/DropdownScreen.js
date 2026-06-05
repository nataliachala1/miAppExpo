import { useState } from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/DropdownStyles';

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
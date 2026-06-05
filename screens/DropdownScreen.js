import { useState } from 'react';
import { Text, View } from 'react-native';
import Dropdown from '../components/Dropdown';
import styles from '../styles/DropdownStyles';

export default function DropdownScreen() {
  const [seleccionado, setSeleccionado] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Parte 3 - Dropdown</Text>

      <Dropdown
        selectedValue={seleccionado}
        onValueChange={(valor) => setSeleccionado(valor)}
        options={[
          { label: 'Selecciona una opción...', value: '' },
          { label: '🍎 Manzana', value: 'Manzana' },
          { label: '🍌 Banano', value: 'Banano' },
          { label: '🍇 Uvas', value: 'Uvas' },
          { label: '🍓 Fresa', value: 'Fresa' },
        ]}
      />

      {seleccionado !== '' && (
        <Text style={styles.resultado}>
          Seleccionaste: <Text style={styles.resaltado}>{seleccionado}</Text>
        </Text>
      )}
    </View>
  );
}
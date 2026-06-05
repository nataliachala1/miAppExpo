import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/CalculatorStyles';

export default function CalcButton({ texto, text, onPress, tipo }) {
  const label = text ?? texto ?? '';
  return (
    <TouchableOpacity
      style={[
        styles.boton,
        tipo === 'operacion' && styles.botonOperacion,
        tipo === 'igual' && styles.botonIgual,
        tipo === 'limpiar' && styles.botonLimpiar,
      ]}
      onPress={onPress}
    >
      <Text style={styles.botonTexto}>{label}</Text>
    </TouchableOpacity>
  );
}

import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function BotonesScreen() {
  const [mensaje, setMensaje] = useState('Presiona un botón');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Parte 1 - Botones</Text>
      <Text style={styles.mensaje}>{mensaje}</Text>

      <TouchableOpacity
        style={[styles.boton, { backgroundColor: '#3498db' }]}
        onPress={() => setMensaje('¡Presionaste el botón Azul!')}
      >
        <Text style={styles.botonTexto}>Botón Azul</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.boton, { backgroundColor: '#2ecc71' }]}
        onPress={() => setMensaje('¡Presionaste el botón Verde!')}
      >
        <Text style={styles.botonTexto}>Botón Verde</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.boton, { backgroundColor: '#e74c3c' }]}
        onPress={() => Alert.alert('Alerta', '¡Botón Rojo presionado!')}
      >
        <Text style={styles.botonTexto}>Botón Rojo (Alerta)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mensaje: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  boton: {
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: 220,
    alignItems: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
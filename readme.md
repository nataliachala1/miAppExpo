import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
export default function App() {

const [mensaje, setMensaje] = useState('Presiona un botón');

return  (
<View style={styles.container}>
  <Text style={styles.titulo}>Taller - Botones</Text>
  <Text style={styles.mensaje}>{mensaje}</Text>

  <TouchableOpacity
    style={[styles.boton, { backgroundColor: 'blue' }]}
    onPress={() => setMensaje('¡Botón Azul Presionado!')}>
    <Text style={styles.textoBoton}>Botón Azul</Text>
    </TouchableOpacity>

  <TouchableOpacity
    style={[styles.boton, { backgroundColor: 'green' }]}
    onPress={() => setMensaje('¡Botón Verde Presionado!')}>
    <Text style={styles.textoBoton}>Botón Verde</Text>
    </TouchableOpacity>
  
  <TouchableOpacity
    style={[styles.boton, { backgroundColor: 'red' }]}
    onPress={() => Alert.alert('¡Botón Rojo Presionado!')}>
    <Text style={styles.textoBoton}>Botón Rojo</Text>
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
  marginVertical: 8,
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






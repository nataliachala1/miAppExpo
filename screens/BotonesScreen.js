import { useState } from 'react'; //Importamos el hook useState para manejar el estado del mensaje que se muestra al presionar los botones.
import { Text, View, Alert } from 'react-native'; //Importamos los componentes necesarios de React Native.
import Button from '../components/Button'; //Importamos el componente Button personalizado que se encuentra en la carpeta components.
import styles from '../styles/ButtonStyles'; //Importamos los estilos desde el archivo ButtonStyles.js

export default function BotonesScreen() {
  const [mensaje, setMensaje] = useState('Presiona un botón');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Parte 1 - Botones</Text>
      <Text style={styles.mensaje}>{mensaje}</Text>

      <Button
        text="Botón Azul"
        color="#3498db"
        onPress={() => setMensaje('¡Presionaste el botón Azul!')}
      />

      <Button
        text="Botón Verde"
        color="#2ecc71"
        onPress={() => setMensaje('¡Presionaste el botón Verde!')}
      />

      <Button
        text="Botón Rojo (Alerta)"
        color="#e74c3c"
        onPress={() => Alert.alert('Alerta', '¡Botón Rojo presionado!')}
      />
    </View>
  );
}

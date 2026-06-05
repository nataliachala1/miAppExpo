import { useState } from 'react';
import { Text, View } from 'react-native';
import Button from '../components/Button';
import InfoModal from '../components/InfoModal';
import styles from '../styles/ModalStyles';

//Aca se crea una variable de estado llamada modalVisible con el valor inicial de false, que se utiliza para controlar la visibilidad del modal. Al presionar el botón "Abrir Modal", se cambia el estado a true, lo que hace que el modal se muestre en pantalla. Dentro del modal, hay un botón "Cerrar" que al presionarlo cambia el estado de modalVisible a false, ocultando el modal nuevamente.
export default function ModalScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Parte 2 - Modal</Text>

      <Button
        text="Abrir Modal"
        color="#9b59b6"
        onPress={() => setModalVisible(true)}
      />

      <InfoModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
}
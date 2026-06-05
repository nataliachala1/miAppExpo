import { useState } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import Button from '../components/Button';
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

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.fondo}>
          <View style={styles.modal}>
            <Text style={styles.modalTitulo}>¡Hola!</Text>
            <Text style={styles.modalMensaje}>
              Este es un mensaje informativo dentro del modal.
            </Text>
            <Button
              text="Cerrar"
              color="#e74c3c"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
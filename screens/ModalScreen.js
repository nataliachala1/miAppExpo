import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';

export default function ModalScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Parte 2 - Modal</Text>

      <TouchableOpacity
        style={styles.boton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.botonTexto}>Abrir Modal</Text>
      </TouchableOpacity>

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
            <TouchableOpacity
              style={styles.botonCerrar}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.botonTexto}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  boton: {
    backgroundColor: '#9b59b6',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fondo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 30,
    width: '80%',
    alignItems: 'center',
    gap: 16,
  },
  modalTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  modalMensaje: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
  },
  botonCerrar: {
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
});
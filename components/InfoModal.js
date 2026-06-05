import React from 'react';
import { Modal, View, Text } from 'react-native';
import Button from './Button';
import styles from '../styles/ModalStyles';

export default function InfoModal({ visible, onClose, titulo = '¡Hola!', mensaje = 'Este es un mensaje informativo dentro del modal.' }) {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.fondo}>
        <View style={styles.modal}>
          <Text style={styles.modalTitulo}>{titulo}</Text>
          <Text style={styles.modalMensaje}>{mensaje}</Text>
          <Button text="Cerrar" color="#e74c3c" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

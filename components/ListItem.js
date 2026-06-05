import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/ScrollStyles';

export default function ListItem({ titulo, descripcion }) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemTitulo}>{titulo}</Text>
      <Text style={styles.itemDescripcion}>{descripcion}</Text>
    </View>
  );
}

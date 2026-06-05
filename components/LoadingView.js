import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import styles from '../styles/ScrollStyles';

export default function LoadingView({ message = 'Cargando datos...' }) {
  return (
    <View style={styles.cargando}>
      <ActivityIndicator size="large" color="#e74c3c" />
      <Text style={styles.cargandoTexto}>{message}</Text>
    </View>
  );
}

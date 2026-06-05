import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SimpleScreen({ emoji, titulo, subtitulo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.subtitulo}>{subtitulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 },
  emoji: { fontSize: 60 },
  titulo: { fontSize: 26, fontWeight: 'bold' },
  subtitulo: { fontSize: 15, color: '#777' },
});

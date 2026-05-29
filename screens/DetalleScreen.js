import { StyleSheet, Text, View } from 'react-native';

export default function DetalleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🔍</Text>
      <Text style={styles.titulo}>Detalle</Text>
      <Text style={styles.subtitulo}>Vista de detalle del elemento</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 },
  emoji: { fontSize: 60 },
  titulo: { fontSize: 26, fontWeight: 'bold' },
  subtitulo: { fontSize: 15, color: '#777' },
});
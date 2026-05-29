import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const secciones = [
    { nombre: 'Parte 1 - Botones', ruta: 'Botones', color: '#3498db' },
    { nombre: 'Parte 2 - Modal', ruta: 'Modal', color: '#9b59b6' },
    { nombre: 'Parte 3 - Dropdown', ruta: 'Dropdown', color: '#e67e22' },
    { nombre: 'Parte 4 - Calculadora', ruta: 'Calculadora', color: '#2ecc71' },
    { nombre: 'Parte 5 - Scroll', ruta: 'Scroll', color: '#e74c3c' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Taller Móvil</Text>
      <Text style={styles.subtitulo}>Selecciona una sección</Text>
      {secciones.map((s) => (
        <TouchableOpacity
          key={s.ruta}
          style={[styles.boton, { backgroundColor: s.color }]}
          onPress={() => navigation.navigate(s.ruta)}
        >
          <Text style={styles.botonTexto}>{s.nombre}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 15,
    color: '#777',
    marginBottom: 16,
  },
  boton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 260,
    alignItems: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});